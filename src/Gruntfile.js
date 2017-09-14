/* jshint node:true */
module.exports = function( grunt ) {
	'use strict';

	require( 'load-grunt-tasks' )( grunt );

	var alphaConfig = {

		// gets the package vars
		pkg: grunt.file.readJSON( 'package.json' ),

		// setting folder templates
		dirs: {
			css: '../assets/css',
			js: '../assets/js',
			sass: '../assets/sass',
			images: '../assets/images',
			fonts: '../assets/fonts'
		},

		// javascript linting with jshint
		jshint: {
			options: {
				jshintrc: '<%= dirs.js %>/.jshintrc'
			},
			all: [
				'Gruntfile.js',
				'<%= dirs.js %>/main.js'
			]
		},

		// uglify to concat and minify
		uglify: {
			dist: {
				files: {
					'<%= dirs.js %>/main.min.js': [
						'<%= dirs.js %>/libs/*.js', // External libs/plugins
						'<%= dirs.js %>/main.js'    // Custom JavaScript
					]
				}
			}
		},

		// compile scss/sass files to CSS
		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'<%= dirs.css %>/style.css': '<%= dirs.sass %>/style.scss'
				}
			}
		},

		// watch for changes and trigger sass, jshint, uglify and livereload browser
		watch: {
			sass: {
				files: [
					'<%= dirs.sass %>/**'
				],
				tasks: ['sass']
			},
			js: {
				files: [
					'<%= jshint.all %>'
				],
				tasks: ['jshint', 'uglify']
			},
			livereload: {
				options: {
					livereload: true
				},
				files: [
					'<%= dirs.css %>/*.css',
					'<%= dirs.js %>/*.js',
					'../**/*.php'
				]
			},
			options: {
				spawn: false
			}
		},

		// image optimization
		imagemin: {
			dist: {
				options: {
					optimizationLevel: 7,
					progressive: true
				},
				files: [{
					expand: true,
					filter: 'isFile',
					cwd: '<%= dirs.images %>/',
					src: '**/*.{png,jpg,gif}',
					dest: '<%= dirs.images %>/'
				}]
			}
		},

		// ftp deploy
		// ref: https://npmjs.org/package/grunt-ftp-deploy
		'ftp-deploy': {
			build: {
				auth: {
					host: 'dev-eve14-com-br.umbler.net',
					port: 21,
					authPath: '../src/.ftppass',
					authKey: 'key_for_deploy'
				},
				src: '../',
				dest: '/public/wp-content/themes/psico-theme',
				exclusions: [
					'../**.DS_Store',
					'../**Thumbs.db',
					'../.git/*',
					'../*.md',
					'../.gitignore',
					'../assets/js/**bootstrap',
					'../assets/js/**libs',
					'../assets/js/plugins.js',
					//'../assets/js/main.js',
					'../*.zip',
					'../*.sublime-project',
					'../*.sublime-workspace',
					'../src/**',
					'../.ftppass'
				]
			}
		}

	};

	// Initialize Grunt Config
	// --------------------------
	grunt.initConfig( alphaConfig );

	// Register Tasks
	// --------------------------

	// Default Task
	grunt.registerTask( 'default', [
		'jshint',
		'sass',
		'uglify'
	] );

	// Optimize Images Task
	grunt.registerTask( 'optimize', ['imagemin'] );

	// Deploy Tasks
	grunt.registerTask( 'ftp', ['ftp-deploy'] );

	// Short aliases
	grunt.registerTask( 'w', ['watch'] );
	grunt.registerTask( 'o', ['optimize'] );
	grunt.registerTask( 'f', ['ftp'] );
	grunt.registerTask( 'c', ['compress'] );
};
