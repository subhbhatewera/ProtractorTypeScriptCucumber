"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    //  seleniumAddress: '',
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        browserName: 'chrome'
    },
    specs: ['../features/demo.feature'],
    cucumberOpts: {
        //  tags:'@Calculator',
        format: 'json:../cucumberreport.json',
        // require step definitions
        require: [
            './stepDefinitions/*.js' // accepts a glob
        ]
    },
    onComplete: () => {
        var reporter = require('cucumber-html-reporter');
        var options = {
            theme: "bootstrap",
            jsonFile: "./cucumberreport.json",
            output: "./cucumber_report.html",
            reportSuiteAsScenarios: true,
            scenarioTimestamp: true,
            launchReport: true,
            metadata: {
                "App Version": "1.0.0",
                "Test Environment": "PRODUCTION",
                "Browser": "Chrome  90.0.4430.93",
                "Platform": "Windows 10",
                "Parallel": "Scenarios",
                "Executed": "Local"
            }
        };
        reporter.generate(options);
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJjb25mLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY3VjdW1iZXJjb25mLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdXLFFBQUEsTUFBTSxHQUFXO0lBRTFCLHdCQUF3QjtJQUN0QixhQUFhLEVBQUMsSUFBSTtJQUNsQixTQUFTLEVBQUUsUUFBUTtJQUNuQixhQUFhLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztJQUMvRCxZQUFZLEVBQUM7UUFDVCxXQUFXLEVBQUUsUUFBUTtLQUN4QjtJQUNELEtBQUssRUFBRSxDQUFDLDBCQUEwQixDQUFDO0lBQ25DLFlBQVksRUFBRTtRQUNaLHVCQUF1QjtRQUNyQixNQUFNLEVBQUUsNkJBQTZCO1FBQ3JDLDJCQUEyQjtRQUMzQixPQUFPLEVBQUU7WUFDUCx3QkFBd0IsQ0FBQyxpQkFBaUI7U0FDM0M7S0FDRjtJQUNELFVBQVUsRUFBQyxHQUFFLEVBQUU7UUFDYixJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUNqRCxJQUFJLE9BQU8sR0FBRztZQUNiLEtBQUssRUFBRSxXQUFXO1lBQ2xCLFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsTUFBTSxFQUFFLHdCQUF3QjtZQUNoQyxzQkFBc0IsRUFBRSxJQUFJO1lBQzVCLGlCQUFpQixFQUFFLElBQUk7WUFDdkIsWUFBWSxFQUFFLElBQUk7WUFDbEIsUUFBUSxFQUFFO2dCQUNOLGFBQWEsRUFBQyxPQUFPO2dCQUNyQixrQkFBa0IsRUFBRSxZQUFZO2dCQUNoQyxTQUFTLEVBQUUsc0JBQXNCO2dCQUNqQyxVQUFVLEVBQUUsWUFBWTtnQkFDeEIsVUFBVSxFQUFFLFdBQVc7Z0JBQ3ZCLFVBQVUsRUFBRSxPQUFPO2FBQ3RCO1NBQ0osQ0FBQztRQUVGLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0IsQ0FBQztDQUNMLENBQUEifQ==