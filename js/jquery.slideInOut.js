/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
try {
	'use strict';

	(function($) {
		//제이쿼리가 함수일 때
		if(typeof $ === 'function') {
			var property = ['width', 'marginRight', 'marginLeft', 'paddingRight', 'paddingLeft'];

			/**
			 * @name 함수 생성
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

			$.each({
				slideIn : genFx('show'),
				slideOut : genFx('hide'),
				slideInOut : genFx('toggle')
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