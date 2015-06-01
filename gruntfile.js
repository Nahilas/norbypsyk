module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			files: ['public/style/*.less', 'public/scripts/**/*.ts', 'public/partials/*.html'],
			tasks: ['build'],
			options: { livereload: true }
		},
		less: {
			development: {
				files: {
					'public/style/styles.css': 'public/style/styles.less'
				}	
			}
		},
				
		typescript: {
			base: {
				src: ['public/scripts/index.ts'],
				dest: 'public/scripts/_index.js',
				options: {
					sourceMap: true,
					declaration: false
				}
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-typescript');
	
	grunt.registerTask('build', ['less', 'typescript']);
	
	grunt.registerTask('default', ['watch']);
};