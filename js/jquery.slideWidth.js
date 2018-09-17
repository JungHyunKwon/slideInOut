/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
try {
	(function($) {
		'use strict';

		/**
		 * @name 함수생성
		 * @since 2018-09-18
		 * @param {string} type
		 * @return {object}
		 */
		function genFx(type) {
			var result = {};

			for(var i = 0, propertyLength = property.length; i < propertyLength; i++) {
				result[property[i]] = type;
			}

			return result;
		}

		//제이쿼리가 함수일때
		if(typeof $ === 'function') {
			var property = ['width', 'marginRight', 'marginLeft', 'paddingRight', 'paddingLeft', 'borderRightWidth', 'borderLeftWidth'];

			$.each({
				slideIn : genFx('show'),
				slideOut : genFx('hide'),
				slideWidthToggle : genFx('toggle')
			}, function(name, value) {
				$.fn[name] = function(speed, easing, callback) {
					return this.animate(value, speed, easing, callback);
				};
			});
		}
	})(window.jQuery);
}catch(error) {
	console.error(error);
}