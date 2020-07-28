$(function () {

   $('.sw-product').each(function () {
      var swiper = new Swiper(this, {
         lazyLoading: true,

         pagination: {
            el: '.slidernav',
            clickable: true,
            bulletClass: 'roundbtn',
            bulletActiveClass: 'active',
            renderBullet: function (index, className) {
               return '<button class=" ' + className + '"></button>';
            },
         },

      });
   });


});