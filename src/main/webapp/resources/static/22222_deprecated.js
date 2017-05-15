/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': './node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: './build/app',

      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

      // other libraries
      'rxjs': 'npm:rxjs',
      'ng2-charts': 'npm:ng2-charts/bundles/ng2-charts.umd.min.js',
      'angular-dual-listbox': 'npm:angular-dual-listbox/angular-dual-listbox.bundle.js',
      'ngx-popover': 'npm:ngx-popover',
      'core-js':'npm:core-js/client/shim.min.js',
      'zone-js':'npm:zone.js/dist/zone.js',
      'bootstrap':'npm:bootstrap/dist/js/bootstrap.js',
      'jquery': 'npm:jquery/dist/jquery.js'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './build/main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'ng2-charts': {
        defaultExtension: 'js'
      },
      'ngx-popover': {
         main: 'index.js',
         defaultExtension : 'js'
      }
    }
  });
})(this);