/**
 * This plug-in is designed to fire off an event once the user has paused their timing for a certain amount of time.
 *
 * @author Michael Miller mikemill@gmail.com
 * @license BSD http://www.opensource.org/licenses/bsd-license.php
 * @copyright 2012 Michael Miller
 * @link https://github.com/mikemill/jQuery-Timer Main Repoistory
 * 
 */

(function($){
	$.fn.timer = function(options) {
		var settings = $.extend({
			interval: 1000,
			callback: function() { return false; },
			tickevents: 'keypress',
			passthru: {},
		}, options);

		this.on(settings.tickevents, this.timer.tickHandler);

		return this.each(function(){
			var timer = {
				$elem: $(this),
				id: $(this).attr('id'),
				lastKeypress: null,
				handle: null,
				interval: settings.interval,
				callback: settings.callback,
				passthru: settings.passthru,

				tick: function()
				{
					this.lastKeypress = new Date().getTime();

					if (this.handle != null)
						clearTimeout(this.handle);

					var that = this;

					var func = function()
					{
						var currentTime = new Date().getTime();
						if (currentTime - that.lastKeypress > that.interval)
						{
							that.callback(that, that.passthru);
						}
						else
							that.handle = setTimeout(func, 10);
					};

					this.handle = setTimeout(func, that.interval);
				}
			};

			$(this).data('timer', timer);

		});
	};

	$.fn.timer.tick = function(target)
	{
		d = $(target).data('timer');
		d.tick();
	}

	$.fn.timer.tickHandler = function(eo)
	{
		$(eo).timer.tick(eo.target);
	}

	$.fn.timer.stop = function(eo)
	{
		d = $(eo.target).data('timer');
		d.stop();
	}
})(jQuery);

