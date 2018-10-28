/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
try {
	(function($) {
		'use strict';

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

		//제이쿼리가 함수일 때
		if(typeof $ === 'function') {
			var property = ['width', 'marginRight', 'marginLeft', 'paddingRight', 'paddingLeft'];

			$.each({
				slideIn : genFx('show'),
				slideOut : genFx('hide'),
				slideInOut : genFx('toggle')
			}, function(name, value) {
				$.fn[name] = function(speed, easing, callback) {
					var originalCallback = callback;

					this.children().each(function(index, element) {
						var $element = $(element);

						$element.width($element.width() || 0);
					});

					callback = function() {
						//초기화
						$(this).children().width('');

						//함수일 때
						if(typeof originalCallback === 'function') {
							originalCallback.call(this);
						}
					};

					return this.animate(value, speed, easing, callback);
				};
			});
		}
	})(window.jQuery);
}catch(error) {
	console.error(error);
}