/*
* workLoad.js v1.0
* A jQuery plugin to create a grid displaying works (+ images and description) in an elegant way.
* License : MIT
* author Pierre Prezelin <pierre.prez2@gmail.com>
* http://pierre-prezelin.com
*/

(function($) {
	'use strict';

	$(document).ready(function() {

		var workLoad;

		workLoad = function(element, args) {
			var elements = {
				//body: $('body'),
				container: $('.container')
			};

			var parameters = {
				classes: ({
					wrapper: 'wl-sky',
					work: 'wl-cloud',
					visual: 'wl-visual',
					title: 'wl-title',
					description: 'wl-about',
					tools: 'wl-tools',
					highlightSlide: 'wl-highlight'
				}),
				target: '_blank',
				externalTab: false
			};
			var titleStyle = $('<h2/>').addClass(parameters.classes.title),
				highlightBlock = $('<div/>').addClass(parameters.classes.highlightSlide),
				highlightClose = $('</a>')
					.attr({
						'href': '#',
						'title': 'Close this panel'
					})
					.text('Close')
					.addClass('close')
					.appendTo(highlightBlock);

			// find the works container
			if (parameters.classes.wrapper !== undefined) {
				var sky = $('ul.' + parameters.classes.wrapper),
					cloud = $('ul.' + parameters.classes.wrapper + ' li'),
					clear = $('<div/>').addClass('clear');

				sky.prepend(highlightBlock).append(clear);
			}

			// give the works a specific class
			$.each(cloud, function() {
				$(this)
					.addClass(parameters.classes.work)
					.find('img').each(function() {
						var orientation = (this.width/this.height >= 1) ? $(this).addClass('landscape') : $(this).addClass('portrait');
						$(this).addClass(parameters.classes.visual);
					});
			});

			// open the description panel on click
			cloud.on('click', function() {
				if (parameters.externalTab == true) {
					cloud.find($('a')).attr('target', '_blank');
				}

				highlightBlock.slideDown('fast');

				/*if (sky.find(highlightBlock).length > 0) {
					highlightBlock.slideToggle('fast');
				}*/

				// open link in a new tab

				/*$(this)
					.find(
						$(parameters.titleStyle),
						$(parameters.classes.description),
						$(parameters.classes.tools)
					).html();*/

			});

		};

		workLoad();
	});

})(jQuery);