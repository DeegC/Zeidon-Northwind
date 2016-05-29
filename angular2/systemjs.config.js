/**
 * System configuration for Angular 2 Northwind
 * Override at the last minute with global.filterSystemConfig (as plunkers do)
 */
(function(global) {

  // map tells the System loader where to look for things
  var map = {
    'app':                        'app', // 'dist',
    'rxjs':                       'node_modules/rxjs',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    '@angular':                   'node_modules/@angular'
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { defaultExtension: 'js' },
  };

  var ngPackageNames = [
                        'common',
                        'compiler',
                        'core',
                        'http',
                        'platform-browser',
                        'platform-browser-dynamic',
                        'router',
                        'router-deprecated',
                        'upgrade',
                        ];

  // Add package entries for angular packages                                                       
  ngPackageNames.forEach(function(pkgName) {

	  // Bundled (~40 requests):                                                                      
	  packages['@angular/'+pkgName] = { main: pkgName + '.umd.js', defaultExtension: 'js' };
  });

  var config = {
		  map: map,
		  packages: packages
  }
                      
  System.config(config);

})(this);
