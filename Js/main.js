const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function (){
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    //배지 숨기기
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    //버튼 보이기
    gsap.to('toTopEl', .2, {
      x: 0
    });
   

  }else {
    //배지 보이기 
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    }); // 쉼표 마침표 확인하기
    
    //버튼 숨기기
    gsap.to('toTopEl', .2, {
      x: 100
    });
   
  }
}, 300)); // window부분에 스크롤하면 0.3초 단위로 부화를 줘서 함수가무작정 호출을 막음
// _.throttle(함수, 시간)

/// 위로 보내기 

toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index){ //index는 0베이스라 0부터 시작 
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,   // 0.7, 1.4, 2.1, 2.7
    opacity: 1
  });
});

//  new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper-container', {
  slidesPerView : 3, //한번에 3개의 슬라이드를 표시
  spaceBetween: 10, //사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  autoplay: {
    delay: 5000
  },
  loop: true,
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소
    clickable: true  // 사용자의 페이지 번호 요소 제어가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});
new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
      prevEl:'.awards .swiper-prev',
      nextEl:'.awards .swiper-next'
    }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion // !가 붙어있는 뒤의 값이 반대가 되게 만들어라 false의 반대인 ture가 됨
  if (isHidePromotion) {
  //숨김처리
    promotionEl.classList.add('hide');
  } else { 
   // 보임처리
   promotionEl.classList.remove('hide');
  } //만약  promotionToggleBtn을 클릭하면 함수가 실행된다 ()isHidePromotion라는 변수에 반대되는 값을 집어넣어라)
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

// 둥둥 떠져있는 애니메이션
function floatingObject(selector, delay, size) {
  gsap.to
  (selector, 
    random(1.5, 2.5),
    {
      y: size, 
      repeat: -1,
      yoyo: true,
      ease: Power1.easeInOut,
      delay: random(0, delay)
    }
  );
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
      triggerHook: .8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
}); 



