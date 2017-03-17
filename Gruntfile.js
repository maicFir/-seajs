module.exports = function(grunt){
	
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		concat: {
			foo: {
			  options: {
				noncmd: true
			  },
			  files: {
				'dist/main.min.js': ['.build/draw.js', '.build/scale.js',".build/main.js"],
			  }
			}
	   },
	   transport: {
		target_name: {
            files: [{
                cwd: 'js',
                src: '**/*',
                dest: 'dist'
            }]
          }
	   }
	});
	grunt.loadNpmTasks('grunt-cmd-concat');
	grunt.loadNpmTasks('grunt-cmd-transport');
	grunt.registerTask('default', ['concat','transport']);

}