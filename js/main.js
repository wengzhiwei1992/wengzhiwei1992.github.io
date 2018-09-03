(function() {
  var ww = window.innerWidth
  if (ww < 768) {
    // 移动端
    var mySwiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      initialSlide: 1,
      coverflow: {
        rotate: 0,          // Y轴角度，默认100
        stretch: -40,       // 每个slide之间的拉伸值，越大slide靠得越紧。 默认0。
        depth: 200,         // slide的位置深度。值越大z轴距离越远，看起来越小。默认是100
        modifier: 1,        // depth和rotate和stretch的倍率，相当于depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。默认1。
        slideShadows: false // 开启/关闭 slide 阴影，默认 true。
      },
      slidesPerView: 1
    })
  } else {
    // PC 端
    var mySwiper = new Swiper('.swiper-container', {
      slidesPerView: 4,
      spaceBetween: 25,
      prevButton:'.swiper-button-prev',
      nextButton:'.swiper-button-next'
    })
  }
})()