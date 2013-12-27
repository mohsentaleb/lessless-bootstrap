module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			css: {
				// The reason we're listing all files here is that we want them in this order
				// otherwise "css/*.css" would suffice.
				src: [
					'css/reset.css',
					'css/scaffolding.css',
					'css/grid.css',
					'css/layouts.css',
					'css/type.css',
					'css/code.css',
					'css/forms.css',
					'css/tables.css',
					'css/sprites.css',
					'css/dropdowns.css',
					'css/wells.css',
					'css/component-animations.css',
					'css/close.css',
					'css/buttons.css',
					'css/button-groups.css',
					'css/alerts.css',
					'css/navs.css',
					'css/navbar.css',
					'css/breadcrumbs.css',
					'css/pagination.css',
					'css/pager.css',
					'css/modals.css',
					'css/tooltip.css',
					'css/popovers.css',
					'css/thumbnails.css',
					'css/media.css',
					'css/labels-badges.css',
					'css/progress-bars.css',
					'css/accordion.css',
					'css/carousel.css',
					'css/hero-unit.css',
					'css/utilities.css',
					'css/website.css'
				],
				dest: 'dist/website.css'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('default', ['concat:css']);
};