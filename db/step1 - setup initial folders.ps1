#set location to script path, get current so we can reset at end
$originalLocation = Get-Location
Set-Location (Split-Path -Parent $MyInvocation.MyCommand.Path)
#switch to class folder
cd class
#show location where we'll be working
get-location
#get data from csv
$c = ipcsv classes.csv
#show it
$c | ft *
#for each class
$c | %{
    #make a folder for each one if it's not there
    if(!(Test-Path $_.name)){md $_.name}
    $_ | epcsv ".\$($_.name)\class.csv" -NoTypeInformation
}

#set location back to original one
set-location $originalLocation