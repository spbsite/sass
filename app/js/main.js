(function(){

	var device = {
			isIPad : function() {
				return (/ipad/i).test(navigator.userAgent);
			},
			isIPhone : function() {
				return (/iphone/i).test(navigator.userAgent);
			},
			isIPod : function() {
				return (/ipod/i).test(navigator.userAgent);
			}
		};


	var eventName = (device.isIPod() || device.isIPad() || device.isIPhone()) ? "touchstart" : "click";

	$(document).ready(function() {

		//Check placejolder support. Hello IE8!
		var test = document.createElement('input'),
			placeholderIsOk = ('placeholder' in test) ? true : false;

		//Placeholders
		if(!placeholderIsOk){

			$('[placeholder]').focus(function() {
				var input = $(this);
				if (input.val() == input.attr('placeholder')) {
					input.val('');
					input.removeClass('placeholder');
				}
			}).blur(function() {
				var input = $(this);
				if (input.val() == '' || input.val() == input.attr('placeholder')) {
					input.addClass('placeholder');
					input.val(input.attr('placeholder'));
				}
			}).blur();
			$('[placeholder]').parents('form').submit(function() {
				$(this).find('[placeholder]').each(function() {
					var input = $(this);
					if (input.val() == input.attr('placeholder')) {
						input.val('');
					}
				})
			});

		}

	});
	
}());