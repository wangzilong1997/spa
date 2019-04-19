module.exports = function(grunt){
	grunt.initconfig({
		babel:{
		options:{
			sourceMap:false,
			presets:[babel-preset-es2015]
		},
		dist:{
			files:[{
				expand:true,
				cwd:'11-password-visual/',
				src:['11-password-visual/main.js'],
				dest:'11-bal/main.js',
			}]
		}
	},
	});
	grunt.loadNpmTasks('grunt-babel');
	grunt.registerTask('babel', ['babel']);
};