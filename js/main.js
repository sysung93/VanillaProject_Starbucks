//뱃지 사라지게하기
const toTopEl = document.querySelector("#to-top");
const badgeEl = document.querySelector("header .badges");
//_.throttle(함수, 시간) 내가 실행하고자 하는 함수가 몇초 단위로 실행될건지 정하는 것
window.addEventListener(
  "scroll",
  _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
      //배지 숨기기
      // 애니메이션 처리 gsap.to(요소, 지속시간, 옵션)
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
      //버튼보이기
      gsap.to(toTopEl, 0.2, {
        x: 0,
      });
    } else {
      //배지 보이기
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
      //버튼 숨기기
      gsap.to(toTopEl, 0.2, {
        x: 100,
      });
    }
  }, 300)
);

toTopEl.addEventListener("click", function () {
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});

//visual section image 나타내기
const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7, //0.7  1.4  2.1  2.7
    opacity: 1,
  });
});

//공지사항
new Swiper(".notice-line .swiper-container", {
  //방향 수직
  direction: "vertical",
  //자동 넘기기
  autoplay: true,
  //반복재생
  loop: true,
});

//프로모션
new Swiper(".promotion .swiper-container", {
  // direction: 'horizental' 기본값으로 들어가있음
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보여짐
  loop: true, //반복
  autoplay: {
    //슬라이드 딜레이시간
    delay: 5000,
  },
  pagination: {
    el: ".promotion .swiper-pagination", //페이지 번호 요소 선택자
    clickable: true, //사용자의 페이지 번호 요소 제어가능 여부
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});

//awards

new Swiper(".awards .swiper-container", {
  autoplay: true,
  roof: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: ".awards .swiper-prev",
    prevEl: ".awards .swiper-next",
  },
});

//프로모션 숨기기
const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;
promotionToggleBtn.addEventListener("click", function () {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    //숨김처리
    promotionEl.classList.add("hide");
  } else {
    //보이기 처리
    promotionEl.classList.remove("hide");
  }
});

//floating

function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1, //무한 반복
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay),
  });
}
floatingObject(".floating", 1, 15);
floatingObject(".floating", 0.5, 15);
floatingObject(".floating", 1.5, 25);

const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.8,
  })
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});
