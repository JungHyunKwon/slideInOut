/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
try {
	'use strict';

	(function($) {
		//제이쿼리가 함수일 때
		if(typeof $ === 'function') {
			var _property = ['width', 'marginRight', 'marginLeft', 'paddingRight', 'paddingLeft'];

			/**
			 * @name 함수 생성
			 * @since 2018-09-18
			 * @param {string} type
			 * @return {object}
			 */
			function _genFx(type) {
				var result = {};

				for(var i = 0, propertyLength = _property.length; i < propertyLength; i++) {
					result[_property[i]] = type;
				}

				return result;
			}

			$.each({
				slideLeft : _genFx('hide'),
				slideRight : _genFx('show'),
				slideX : _genFx('toggle')
			}, function(name, value) {
				$.fn[name] = function(speed, easing, callback) {
					return this.animate(value, speed, easing, callback);
				};
			});
		}else{
			throw '제이쿼리가 없습니다.';
		}
	})(window.jQuery);
}catch(e) {
	console.error(e);
}