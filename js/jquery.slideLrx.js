/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
(function($) {
	'use strict';

	var properties = ['width', 'marginRight', 'marginLeft', 'paddingRight', 'paddingLeft'];

	/**
	 * @name 함수 생성
	 * @since 2018-09-18
	 * @param {string} type
	 * @return {object}
	 */
	function genFx(type) {
		var result = {};

		for(var i = 0, propertiesLength = properties.length; i < propertiesLength; i++) {
			result[properties[i]] = type;
		}

		return result;
	}

	$.each({
		slideLeft : genFx('hide'),
		slideRight : genFx('show'),
		slideX : genFx('toggle')
	}, function(key, value) {
		$.fn[key] = function(speed, easing, callback) {
			return this.animate(value, speed, easing, callback);
		};
	});
})(jQuery);