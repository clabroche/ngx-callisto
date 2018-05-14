// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html
const path = require('path');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-mocha-reporter'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    mochaReporter: {
      ignoreSkipped: true
    },
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      reports: ['html', 'lcovonly'],
      fixWebpackSourcePaths: true,
      dir: path.resolve(__dirname, '..', 'documentation', 'coverage')
      // thresholds: {
      //   statements: 80,
      //   lines: 80,
      //   branches: 80,
      //   functions: 80
      // }
    },
    angularCli: {
      environment: 'prod'
    },
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadless'],
    singleRun: false,
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      }
    },
    webpack: { node: { fs: 'empty', net: 'empty', tls: 'empty' } }
  });
  if (process.env.KARMAWATCH) {
    config.autoWatch = true;
    config.singleRun = false;
  }
};
