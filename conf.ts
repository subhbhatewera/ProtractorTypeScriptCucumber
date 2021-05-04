import {Config} from 'protractor'

export let config: Config = {

  //  seleniumAddress: '',
    directConnect:true,
    capabilities:{
        browserName: 'chrome'
    },
    jasmineNodeOpts: {
      defaultTimeoutInterval: 2500000
      },
    specs: ['gilispecs.js']
}