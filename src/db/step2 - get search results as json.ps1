#set location to script path, get current so we can reset at end
$originalLocation = Get-Location
Set-Location (Split-Path -Parent $MyInvocation.MyCommand.Path)
#switch to class folder
cd class
#show location where we'll be working
get-location

#for each dir
dir -Directory | %{
    #enter dir
    cd $_
    #show where we are
    Get-Location

    #refresh data if true(refreshall override) or the file isn't there
    if($true -or !(Test-Path "$($_).json")){

        #get the name and url for this class from the file
        $class = ipcsv class.csv
        #show it
        $class
        #get data from site using powershell, requires you to use NON POWERSHELL CORE see https://docs.microsoft.com/en-us/powershell/scripting/whats-new/breaking-changes-ps6?view=powershell-7
        $ProgressPreference = 'SilentlyContinue'
        $x = (((iwr $class.url).parsedhtml.getelementsbytagname('script')|where text -like '*REDUX_STATE*'|select -first 1 text).text -replace 'var __REDUX_STATE__=','' |convertfrom-json).app.data
        $ProgressPreference = 'Continue'
        $x |convertto-json -Depth 100 > "$($_).json"
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