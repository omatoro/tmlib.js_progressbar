/**
 * Timer : ProgressBar
 */
(function(ns) {

    ns.Timer = tm.createClass({
    	superClass: ns.ProgressBar,

    	init: function (time, width, height, barColor, backgroundColor) {
    		this.superInit(width, height, barColor, backgroundColor);
    		this.time = time;
    		this.timeUnit = 100 / time;
    	},

        update : function () {
        	this.setBarLength(this.time * this.timeUnit);
        },

        countDown : function () {
        	--this.time;
        },

        isLimit: function () {
            if (this.time * this.timeUnit < 0) {
                return true;
            }
            return false;
        },

        reset : function (time) {
        	this.time = time;
        }
    });

})(game);