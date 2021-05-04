import {Config} from 'protractor';
import * as reporter from 'cucumber-html-reporter';

export let config: Config = {

  //  seleniumAddress: '',
    directConnect:true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),    
    capabilities:{
        browserName: 'chrome'
    },
    specs: ['../features/demo.feature'] , //One dot means it refers to parent to two dot means it will refer to grand parent.
    cucumberOpts: {
      //  tags:'@Calculator',
        format: 'json:../cucumberreport.json',       
        // require step definitions
        require: [
          './stepDefinitions/*.js' // accepts a glob
        ]
      },
      onComplete:()=>{
        var reporter = require('cucumber-html-reporter');
        var options = {
         theme: "bootstrap",
         jsonFile: "./cucumberreport.json", //Path of the Json report
         output: "./cucumber_report.html",  //Path of the report that will be generated
         reportSuiteAsScenarios: true,
         scenarioTimestamp: true,
         launchReport: true,
         metadata: {
             "App Version":"1.0.0",
             "Test Environment": "PRODUCTION",
             "Browser": "Chrome  90.0.4430.93",
             "Platform": "Windows 10",
             "Parallel": "Scenarios",
             "Executed": "Local"
         }
     };
 
     reporter.generate(options);
     },
}