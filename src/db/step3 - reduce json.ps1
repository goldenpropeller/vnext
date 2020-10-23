#set location to script path, get current so we can reset at end
$originalLocation = Get-Location
Set-Location (Split-Path -Parent $MyInvocation.MyCommand.Path)
#switch to class folder
cd class
#show location where we'll be working
get-location

#for each dir
#(dir -Directory)[0] | %{ #for testing with only one, use this line instead
dir -Directory | %{
    #enter dir
    cd $_
    #show where we are
    Get-Location

    #refresh data if true(refreshall override) or the file isn't there
    if($true -or !(Test-Path "$($_)-reduced.json")){

        #make sure the non reduced file is there
        if($false -or (Test-Path "$($_).json")){
            $big = gc -Raw "$($_).json" | ConvertFrom-Json
            $small = $big.search.records | %{ $_|select id,class,make,model,year,@{n="length";e={$_.specifications.dimensions.lengths.nominal.ft}}, @{n="media";e={($_.media|where mediatype -eq "image")[0].url}}}
            $small | ConvertTo-Json -Depth 99 > "$($_)-reduced.json"

        }else{
            "{0} missing non reduced file" -f $_
        }

        #note status
        "{0} was refreshed" -f $_
    }else{
        #note status
        "{0} was not refreshed" -f $_
    }
    
    #exit this dir
    cd ..
}

#set location back to original one
set-location $originalLocation