(function ($) {
	'use strict';
	
	$(function () {

		var $navListLinks = $('.nav-list li a');

		// use js to tweak the color on load; if no js, they will stay white via default css
		// but, temporarily override css animation so we don't have a distracting effect at first
		// http://stackoverflow.com/questions/11131875/what-is-the-cleanest-way-to-disable-css-transition-effects-temporarily
		$navListLinks.addClass('no-transition');
		$navListLinks.css('color', '#46b408');
		forceCSSRefresh($navListLinks);
		$navListLinks.removeClass('no-transition');
		

		// link colors for each section, in order of page layout
		var sectionColors = ['#46b408', '#57a3ac', '#b5a40b', '#b386c6', '#ddd'];


		// attach color-changing scrollspy events to each section tag
		$('section').each(function() {

			var position = $(this).position();

			$(this).scrollspy({

				min: position.top,
				max: position.top + $(this).height(),

				onEnter: function(element, position) {

					$navListLinks.css('color', sectionColors[$(element).index()]);
				}
			});
		});

		// also change the section color when an anchor is clicked
		$navListLinks.on('click', function() {

			$navListLinks.css('color', sectionColors[$(this).parent().index() + 1]);
		});
		

	});


	// merely accessing offsetHeight triggers a reflow and flushes the css changes
	// but to pass the linter, it needs to be assigned to something
	// so it's factored out here to isolate the throwaway and to be more readable
	function forceCSSRefresh($elements) {

		var q = $elements[0].offsetHeight;
	}

}(window.jQuery));