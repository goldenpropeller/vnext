#set location to script path, get current so we can reset at end
$originalLocation = Get-Location
Set-Location (Split-Path -Parent $MyInvocation.MyCommand.Path)
#switch to class folder
cd class
#show location where we'll be working
get-location
#get all the json files we want to merge
$x = (dir *-reduced.json -Recurse).FullName | %{
    #read the file as json
    (gc -raw $_ | ConvertFrom-Json).SyncRoot

}
# output all the results to data.json
"export const db = {0}" -f ($x | ConvertTo-Json -Depth 99) | out-file "db.js" -Encoding ascii

#set location back to original one
set-location $originalLocation