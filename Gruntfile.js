//Gruntfile
module.exports = function(grunt) {

	//Initialize the configuration object
	grunt.initConfig({
		//Task configuration
		concat: {
			options: {
				seperator: ';',
			},
			js_frontend: {
				src: [
					'./bower_components/jquery/jquery.js',
					'./bower_components/bootstrap/dist/js/bootstrap.js',
					'./app/assets/javascript/*.js',
				],
				dest: './public/assets/javascript/frontend.js',
			},
			js_backend: {
				src: [
					'./bower_components/jquery/jquery.js',
					'./bower_components/bootstrap/dist/js/bootstrap.js',
					'./app/assets/javascript/*.js'
				],
				dest: './public/assets/javascript/backend.js',
			},
		},
		less: {
			development: {
				options: {
					compress: true,
				},
				files: {
					// Compiling frontend.less into frontend.css
					"./public/assets/stylesheets/frontend.css":"./app/assets/stylesheets/frontend.less",
					// Compiling backend.less into backend.css
					"./public/assets/stylesheets/backend.css":"./app/assets/stylesheets/backend.less"
				}
			}
		},
		uglify: {
			options: {
				mangle: false // Use if you want the names of your functions and variables unchanged
			},
			frontend: {
				files: {
					'./public/assets/javascript/frontend.js': './public/assets/javascript/frontend.js',
				}
			},
			backend: {
				files: {
					'./public/assets/javascript/backend.js': './public/assets/javascript/backend.js',
				}
			},
		},
		phpunit: {
			classes: {
			},
			options: {
			}
		},
		autoprefixer: {
			css_frontend: {
				options: {
					browsers: ['last 8 versions']
				},
				files: {
					'./tmp/css/frontend.css': './tmp/css/frontend.less.css',
				}
			},
			css_backend: {
				options: {
					browsers: ['last 8 versions']
				},
				files: {
					'./tmp/css/backend.css': './tmp/css/backend.less.css',
				}
			}
		},
		cssmin: {
			styles: {
				files: [{
					expand: true,
					cwd: './tmp/css',
					src: ['*.css', '!*.less.css'],
					dest: './public/assets/stylesheets/',
					ext: '.css'
				}]
			}
		},
		watch: {
			js_frontend: {
				files: [
					//watched files
					'./bower_components/jquery/jquery.js',
					'./bower_components/bootstrap/dist/js/bootstrap.js',
					'./app/assets/javascript/*.js'
				],   
				tasks: ['concat:js_frontend','uglify:frontend'],     //tasks to run
				options: {
					livereload: true                        //reloads the browser
				}
			},
			js_backend: {
				files: [
					//watched files
					'./bower_components/jquery/jquery.js',
					'./bower_components/bootstrap/dist/js/bootstrap.js',
					'./app/assets/javascript/*.js'
				],   
				tasks: ['concat:js_backend','uglify:backend'],     //tasks to run
				options: {
					livereload: true                        //reloads the browser
				}
			},
			less: {
				files: ['./app/assets/stylesheets/*.less'],  //watched files
				tasks: ['less'],                          //tasks to run
				options: {
					livereload: true                        //reloads the browser
				}
			},
			autoprefixer: {
				files: ['./tmp/css/*.less.css'],
				tasks: ['autoprefixer'],
				options: {
					livereload: true // Reloads the browser
				}
			},
			minify: {
				files: ['./tmp/css/*.css', '!./tmp/css/*.less.css'],
				tasks: ['cssmin'],
				options: {
					livereload: true
				}
			},
			tests: {
				files: ['app/controllers/*.php','app/models/*.php'],  //the task will run only when you save files in this location
				tasks: ['phpunit']
			},
			views: {
				files: ['./**/*.blade.php'],
				options: {
					livereload: true
				}
			}
		}
	});

	// Plugin loading
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-phpunit');

	// Task definition
	grunt.registerTask('default', ['watch']);
}