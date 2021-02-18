# Salesforce DX Project: Next Steps

Test Repo for Canonical Interview question. Build using SFDX. 

## Project Setup for Scratch Org
- Setup SFDX on your machine
- Authorize a Dev Hub using the command `sfdx auth:web:login -a DevHub`
- Build Scrach org using `sfdx force:org:create -u <your-org-name> -f config/project-scratch-def.json`
- Open Scratch org using `sfdx force:org:open -u <your-org-name>`
- Run Tests `sfdx force:apex:test:run -u <your-org-name> -w 10`
- Run Tests with code coverage `sfdx force:apex:test:run -u <your-org-name> -w 10 -c -r human`


## Install into an Org 
- view `sfdx-project.json` to see versions
- run from alias `sfdx force:package:install -p <alias-for-desired-version> -u DevHub -k test1234 -w 10`
- run from package id `sfdx force:package:install -p <04t...> -u DevHub -k test1234 -w 10

## Run unit tests
The utility functions of the LWC are unit tested. You can run these using `npm run test:unit`


## Project Steps

- [x] clean sentence 
- [x] determine if sentence is palindrome
- [x] count palindrome letters
- [x] file input
- [x] read file
- [x] have child component for displaying letter freq
- [x] have child component for displaying sentences
- [x] design UI to display sentences and counts of letter frequency


## Read All About It

- [Salesforce Extensions Documentation](https://developer.salesforce.com/tools/vscode/)
- [Salesforce CLI Setup Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_intro.htm)
- [Salesforce DX Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro.htm)
- [Salesforce CLI Command Reference](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference.htm)

