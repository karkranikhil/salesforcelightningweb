export const cheatSheetCode = [
    {
        header: 'Getting Help',
        data: [
            {
                label: 'Get Docume­ntation URLs',
                value: 'sfdx force'
            },
            {
                label: 'Force Commands Help',
                value: 'sfdx force -h'
            },
            {
                label: 'Another sub level example',
                value: 'sfdx force:org -h'
            }
        ]
    },
    {
        header: 'Author­ization',
        data: [
            {
                label:
                    'Authorize a Sandbox Org set an alias and make it the default Dev Hub',
                value: 'sfdx force:­aut­h:w­eb:­login -a DevHub -d'
            },
            {
                label:
                    'Authorize a Prod/T­rai­lhead Org, set an alias, make it the default Org',
                value:
                    'sfdx force:­aut­h:w­eb:­login -a MyAlias -s -r https:­//l­ogi­n.s­ale­sfo­rce.com'
            },
            {
                label: 'Set default Dev Hub',
                value:
                    'sfdx force:­con­fig:set defaul­tde­vhu­bus­ern­ame­=so­me@­use­r.com'
            },
            {
                label: 'Set default Org',
                value:
                    'sfdx force:­con­fig:set defaul­tus­ern­ame­=so­me@­use­r.com'
            },
            {
                label: 'List defaults',
                value: 'sfdx force:­con­fig­:list'
            }
        ]
    },
    {
        header: 'Source',
        data: [
            {
                label: 'Push Source to Scratch Org ',
                value: 'sfdx force:source:push'
            },
            {
                label: 'Pull Source from Scratch Org ',
                value: 'sfdx force:source:pull'
            },
            {
                label: 'Local & Remote Source Code Changes',
                value: 'sfdx force:source:status'
            }
        ]
    },
    {
        header: 'Org',
        data: [
            {
                label: 'Get a list of connected Orgs',
                value: 'sfdx force:org:list'
            },
            {
                label: 'Open Current Org in Browser',
                value: 'sfdx force:org:open'
            },
            {
                label: 'Delete an Org',
                value: 'sfdx force:org:delete -u MyOrgAlias -p'
            },
            {
                label: 'Create Scratch Org and make default Org',
                value:
                    'sfdx force:org:create -a MyAlias -s -f config/project-scratch-def.json -d 7'
            }
        ]
    },
    {
        header: 'Data',
        data: [
            {
                label: 'Import ',
                value:
                    'sfdx force:data:tree:import --plan data/sample-dataplan.json'
            },
            {
                label: 'Export',
                value: 'sfdx force:data:tree:export -h'
            }
        ]
    },
    {
        header: 'Packages',
        data: [
            {
                label: 'Create',
                value: 'sfdx force:package:version create'
            },
            {
                label: 'Install',
                value: 'sfdx force:package:install'
            },
            {
                label: 'promote',
                value: 'sfdx force:package:version:promote'
            }
        ]
    },
    {
        header: 'Other',
        data: [
            {
                label: 'Update the CLI ',
                value: 'sfdx update'
            },
            {
                label: 'Create a new project ',
                value: 'sfdx force:project:create -n myProjectName'
            },
            {
                label: 'Org Limits',
                value: 'sfdx force:limits:api:display'
            }
        ]
    }
];
