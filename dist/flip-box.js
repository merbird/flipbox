'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Jquery document ready passing in JQuery so not to conflict with other
// libs that use $

(function ($) {
   var BodFlipBox = function () {
      function BodFlipBox(flipbox) {
         _classCallCheck(this, BodFlipBox);

         this.$window = $(window);
         this.$flipbox = $(flipbox);
         this.$inner = this.$flipbox.find('.flip-inner');
         this.$front = this.$flipbox.find('.flip-front');
         this.$frontImage = this.$flipbox.find('.flip-front-image');
         this.$frontContent = this.$flipbox.find('.flip-front-content');
         this.$backContent = this.$flipbox.find('.flip-back-content');
         this.backContentPadding = parseInt(this.$backContent.css('padding-top')) * 2;
         this.timer;

         // bind event callback menthods so they use class version of this 
         this.mousehoverstart = this.mousehoverstart.bind(this);
         this.mousehoverleave = this.mousehoverleave.bind(this);
         this.touchstart = this.touchstart.bind(this);
         this.resize = this.resize.bind(this);
         this.debounceresize = this.debounceresize.bind(this);

         // setup events
         this.$flipbox.on('mouseenter', this.mousehoverstart);
         this.$flipbox.on('mouseleave', this.mousehoverleave);
         this.$flipbox.on('touchstart', this.touchstart);
         this.$window.on('resize', this.debounceresize);

         this.resize();
      }

      _createClass(BodFlipBox, [{
         key: 'mousehoverstart',
         value: function mousehoverstart() {
            this.$inner.addClass('hover');
         }
      }, {
         key: 'mousehoverleave',
         value: function mousehoverleave() {
            this.$inner.removeClass('hover');
         }
      }, {
         key: 'touchstart',
         value: function touchstart() {
            this.$inner.toggleClass('hover');
         }
      }, {
         key: 'debounceresize',
         value: function debounceresize() {
            // debounce : don't keep calling resize box method, only call if not resized for 0.25s
            clearTimeout(this.timer);
            this.timer = setTimeout(this.resize, 250);
         }
      }, {
         key: 'resize',
         value: function resize() {
            // we need to set the height of the flip box based on the max 
            // front and back height
            // outerheight() returns height in pixels with padding and border or margin
            var height = Math.max(isNaN(this.$frontContent.height()) ? 0 : this.$frontContent.height(), isNaN(this.$backContent.height()) ? 0 : this.$backContent.height()) + this.backContentPadding;
            this.$inner.height(height);
            this.$frontImage.height(height);
         }
      }]);

      return BodFlipBox;
   }();

   $(function () {
      // loop round all the flip boxes on the page creating an instance
      // for each one adding to an array

      window.bodFlipBoxs = [];
      $('.bod-flip-box').each(function () {
         bodFlipBoxs.push(new BodFlipBox(this));
      });
   });
})(jQuery);
//# sourceMappingURL=flip-box.js.map