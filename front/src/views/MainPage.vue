<template>
  <div>
    <!-- <div class="slide-wrap">
      <div class="main-slide"></div>
    </div> -->

    <swiper
      class="mySwiper"
      :modules="modules"
      :direction="'vertical'"
      :allowTouchMove= "false"
      :slides-per-view="1"
      :space-between="0"
      :a11y="true"
      :loop="true"
      :speed=speed
      :parallax="true"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
        bulletElement: 'a'
      }"
      @swiper="onSwiper"
      @resize="onResize"
      @transitionEnd="transitionEnd"
      @transitionStart="onTransitionStart"
    >
      <swiper-slide v-for="(visual, i) in visuals" :key="visual" :virtualIndex="i">
        <div class="slogan-area" data-swiper-parallax="-130%">
          <div class="slogan" v-html="visual.slogan"></div>
          <div class="linkto">
            <router-link to="/#">View Project</router-link>
          </div>
        </div>
        <div class="img-area">
          <div class="img" :style="`background-image: url(${visual.img})`">
          </div>
        </div>
      </swiper-slide>
    </swiper>



    <div class="slide-controller">
      <button type="button" class="btn_prev" @click="mySwiper.slidePrev()"><i class="fa fa-angle-left"></i><span class="blind">prev</span></button>
      <button type="button" class="btn_next" @click="mySwiper.slideNext()"><i class="fa fa-angle-right"></i><span class="blind">next</span></button>
    </div>
    

  </div>
</template>

<script>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, A11y, Virtual, Parallax } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/A11y';
// import 'swiper/css/pagination';
// import 'swiper/css/effect-coverflow';


import image1 from '@/assets/images/main-visual-2024-happy-new-goods.jpg';
import image2 from '@/assets/images/main-visual-golden-time-year-end-party.jpg';
import image3 from '@/assets/images/main-visual-hyundaicard-my-company.png';
import image4 from '@/assets/images/main-visual-tvn-drama-voice-season4.png';
import image5 from '@/assets/images/main-visual-amorepacific.png';
import image6 from '@/assets/images/main-visual-hyundai-n-brand.jpg';
import image7 from '@/assets/images/main-visual-culture.jpg';
import image8 from '@/assets/images/main-visual-company-relocation.jpg';

// https://codepen.io/PeterBrain/pen/eYeEoGW

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    let mySwiper = ref();

    // /
    let activeTransitionEnd = ref(false);
    let activeTransitionStart = ref(false);
    let animationFrame = ref();

    // 
    const speed = ref(850);
    const slideScale = ref(0.6);
    const imgScale = ref(1.2);
    const slideScaleDuration = ref(800);
    const imageScaleDuration = ref(750);
    // const titleOpacityFadeOutDuration = ref(850);
    // const titleOpacityFadeInDuration = ref(850);





    

    const onSwiper = (elem) => {
      // console.log('onSwiper', swiper);
      // console.log('onSwiper', elem);
      mySwiper.value = elem;

      const {
          // slides: slides,
          // activeIndex: activeIndex,
          // $el: element
          el: element,
        } = elem;
        
        // console.log('onSwiper2', element);
        
        slideTransition(element);
        
        // element.css("background-color", activeSlideBgColor),
          // elem.emit("transitionEnd");
          elem.emit("transitionEnd");
          // navButtonFn(elem);

          
      
      // resize(elem) {
      //   slideTransition(elem.$el);
      // },
      // destroy(elem) {
      //   disableButton(elem);
      // },
    };

    const slideTransition = (elem) => {


      // console.log('slideTransition',elem);
      
          elem.classList.add("fancy-slider-no-transition");

          console.log('slideTransition', elem);

          activeTransitionStart.value = true;

          cancelAnimationFrame(animationFrame),
          (animationFrame = requestAnimationFrame(() => {
            elem.classList.remove("fancy-slider-no-transition"), (activeTransitionStart.value = false), (activeTransitionEnd.value = false);
          }));

    };


        // navButtonFn = (elem) => {
          // elem.el.querySelector(".fancy-slider-button-next").on("click", () => {
          //   activeTransitionEnd.value || elem.slideNext();
          // }),
          // elem.el.querySelector(".fancy-slider-button-prev").on("click", () => {
          //   activeTransitionEnd.value || elem.slidePrev();
          // });
        // };
        // disableButton = (elem) => {
        //   elem.$el
        //     .find(".fancy-slider-button-next, .fancy-slider-button-prev")
        //     .off("click");
        // };

    const onResize = (elem) => {
      slideTransition(elem.el);
    }

    // const onSlideChange = (swiper) => {
    //   console.log('slide change', swiper);
    //   // setTimeout(()=>{
    //   //   swiper.slides.forEach( a => {
    //   //     a.style.transitionDuration = "5000ms";
    //   //     console.log(a);
    //   //   });
    //   //   swiper.update();
    //   // }, 1000);
    // };

    const onTransitionStart = (elem) => {
      // console.log('transitionStart', swiper);
      // // console.log(swiper.slides);
      // scale.value = true;
      // state.value = false;
      // start.value = true;
      // end.value = false;
      
      const {
          slides: slides,
          previousIndex: prevIndex,
          activeIndex: activeIndex,
          // el: element
        } = elem;

        // console.log('start', slides, prevIndex);
      
      activeTransitionStart.value || (activeTransitionEnd.value = true);
      
      // const activeSlide = slides.eq(activeIndex);
      const activeSlide = slides[activeIndex];
      const prevSlide = slides[prevIndex];
      const prevSlideScale = prevSlide.querySelector(".img-area");
      const prevSlideImage = prevSlide.querySelector(".img");
      const activeSlideImage = activeSlide.querySelector(".img");
        //p = activeIndex - prevIndex,
      // const activeSlideBgColor = activeSlide.attr("data-slide-bg-color");
      
      // element.css("background-color", activeSlideBgColor),

      // prevSlideScale.style.cssText  = `transition: ${slideScaleDuration.value}; transform: scale(${slideScale.value})`;
      prevSlideScale.style.transitionDuration = `${slideScaleDuration.value}ms`;
      prevSlideScale.style.transform = `scale(${slideScale.value})`;

        // prevSlideScale
        //   // .transition(slideScaleDuration)
        //   .style.transition = slideScaleDuration
        //   .style.transform("scale(" + slideScale.value + ")"),
        // prevSlideImage.style.cssText = `transition: ${imageScaleDuration.value}; transform: scale(${imgScale.value})`;
        prevSlideImage.style.transitionDuration = `${imageScaleDuration.value}ms`;
        prevSlideImage.style.transform = `scale(${imgScale.value})`;
          // .transition(imageScaleDuration)
          // .transform("scale(" + imgScale.value + ")"),
        // prevSlideImage
        //   .transition(imageScaleDuration)
        //   .transform("scale(" + imgScale.value + ")"),
        // prevSlide.querySelector(".fancy-slider-title-text").style.cssText = `transition: ${titleOpacityFadeOutDuration.value}; color: rgba(255,255,255, 0)`;
        // prevSlide.querySelector(".fancy-slider-title-text").style.transition = titleOpacityFadeOutDuration.value;
        // prevSlide.querySelector(".fancy-slider-title-text").style.color = "rgba(255,255,255, 0)";
        // prevSlide
        //   .querySelector(".fancy-slider-title-text")
        //   .transition(titleOpacityFadeOutDuration)
        //   .css("color", "rgba(255,255,255,0)"),


        // prevSlideImage.transitionEnd(() => {
        //   activeSlideImage.style.transition = speed;
        //   activeSlideImage.style.transform = `translate3d(0, 0, 0) scale(${imgScale.value})`;
        //     // .transition(speed)
        //     // .transform("translate3d(0, 0, 0) scale(" + imgScale.value + ")")
        //     /*,
        //   prevSlideImage
        //     .transition(speed)
        //     .transform("translate3d(${60 * p}%, 0, 0)  scale(" + imgScale + ")")*/
        // });


        setTimeout(() => {
          activeSlideImage.style.transition = speed;
          activeSlideImage.style.transform = `translate3d(0, 0, 0) scale(${imgScale.value})`;
        }, imageScaleDuration.value);

    }

    const transitionEnd = (elem) => {
      // // console.log('onTransitionEnd', swiper);
      // // swiper.setTranslate(2000);
      // state.value = true;
      // start.value = false;
      // end.value = true;
      // scale.value = false;

      
      const {
            slides: slides,
            activeIndex: activeIndex,
            // $el: element
          } = elem,
        activeSlide = slides[activeIndex],
        activeSlideImage = activeSlide.querySelector(".img");

        // console.log('check', activeSlide);

        // activeSlide.querySelector(".fancy-slider-scale").style.cssText = `transition: ${slideScaleDuration.value}; transform: scale(1)`;
        activeSlide.querySelector(".img-area").style.transitionDuration = `${slideScaleDuration.value}ms`;
        activeSlide.querySelector(".img-area").style.transform = "scale(1)";
          // .transition(slideScaleDuration)
          // .transform("scale(1)"),
      // activeSlide.querySelector(".fancy-slider-scale")
      //     .transition(slideScaleDuration)
      //     .transform("scale(1)"),
        // activeSlideImage.style.cssText = `transition: ${imageScaleDuration.value}; transform: scale(1)`;
        activeSlideImage.style.transitionDuration = `${imageScaleDuration.value}ms`;
        activeSlideImage.style.transform = "scale(1)";
          // .transition(imageScaleDuration)
          // .transform("scale(1)"),
        // activeSlideImage
        //   .transition(imageScaleDuration)
        //   .transform("scale(1)"),
        // activeSlide.querySelector(".fancy-slider-title-text").style.cssText = `transition: ${titleOpacityFadeInDuration.value}; color: #fff`;
        // activeSlide.querySelector(".fancy-slider-title-text").style.transition = titleOpacityFadeInDuration.value;
        // activeSlide.querySelector(".fancy-slider-title-text").style.color = "#fff"
          // .transition(titleOpacityFadeInDuration)
          // .css("color", "rgba(255,255,255,1)"),
        // activeSlide
        //   .querySelector(".fancy-slider-title-text")
        //   .transition(titleOpacityFadeInDuration)
        //   .css("color", "rgba(255,255,255,1)"),

          // activeSlideImage.transitionEnd(() => {
          //   activeTransitionEnd.value = false;
          // });

          setTimeout(() => {
            activeTransitionEnd.value = false;
          }, imageScaleDuration.value);



        // activeIndex === 0
        //   ? element
        //       .querySelector(".fancy-slider-button-prev")
        //       .classList.add("fancy-slider-button-disabled")
        //   : element
        //       .querySelector(".fancy-slider-button-prev")
        //       .classList.remove("fancy-slider-button-disabled"),
        // activeIndex === slides.length - 1
        //   ? element
        //       .querySelector(".fancy-slider-button-next")
        //       .classList.add("fancy-slider-button-disabled")
        //   : element
        //       .querySelector(".fancy-slider-button-next")
        //       .classList.remove("fancy-slider-button-disabled");

    }








    return {
      mySwiper,
      // swiper,
      // swiperSlide,
      onSwiper,
      onResize,
      // onSlideChange,
      transitionEnd,
      onTransitionStart,
      modules: [ Autoplay, Pagination, A11y, Virtual, Parallax ],
      activeTransitionEnd,
      activeTransitionStart,
      animationFrame,

      speed,
      slideScale,
      imgScale,
      slideScaleDuration,
      imageScaleDuration
    };
  },
  data() {
    return {
      visuals: [
        { url: '', img: image1, slogan: '<p><span>2024 Happy</span></p><p><span>New Goods</span></p>' },
        { url: '', img: image2, slogan: '<p><span>Golden Time</span></p><p><span>Year-end</span></p><p><span>Party</span></p>' },
        { url: '', img: image3, slogan: '<p><span>HYUNDAICARD</span></p><p><span>My Company</span></p>' },
        { url: '', img: image4, slogan: '<p><span>TVN Drama</span></p><p><span>Voice</span></p><p><span>Season4</span></p>' },
        { url: '', img: image5, slogan: '<p><span>AMOREPACIFIC</span></p>' },
        { url: '', img: image6, slogan: '<p><span>Hyundai N</span></p><p><span>Brand</span></p>' },
        { url: '', img: image7, slogan: '<p><span>Culture</span></p>' },
        { url: '', img: image8, slogan: '<p><span>Company</span></p><p><span>Relocation</span></p>' },
      ],
    }
  },
  // created() {
  //   console.log(this.swiper);
  // },
  // methods: {
  //   test() {
  //     console.log(this.swiper);
  //   }
  // }
}
</script>

<style>
.swiper { position: fixed; left: 0; top: 0; width: 100%; height: var(--vh); background: #000; overflow: hidden; z-index: 4; }
/* .swiper-wrapper { transition-timing-function: linear; } */
.swiper-slide { position: relative; width: 100%; height: var(--vh); transition-timing-function: ease-in; }
.swiper-slide .img-area { position: absolute; left: 0; top: 0; width: 100%; height: var(--vh); z-index: 1; transition: all .2s; }
.swiper-slide .img-area .img { position: relative; width: 100%; height: 100%; background-position: center; background-size: cover; background-repeat: no-repeat; transform: scale(1.01); transition: all .2s; }
.swiper-slide .img-area .img::before { position: absolute; left: 0; top: 0; display: block; content:''; width: 100%; height: 100%; background: rgba(0,0,0, 0.4); opacity: 0; transition: opacity .3s; }

/* .moving .img-area .img { transform: scale(1.01); }
.moving .img-area .img::before { opacity: 1; } */
.scale .img-area .img { transform: scale(0.5); }
.scale .img-area .img::before { opacity: 1; }

/* @keyframes testslide {
  0% { transform:scale(1.01); }
  5% { transform: scale(0.5); }
  90% { transform: scale(0.5); }
  100% { transform: scale(1.01); }
} */


.swiper-slide-prev {  }
.swiper-slide-active { z-index: 99;  }
.swiper-slide-next {}




.slogan-area { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); width: 100%; max-width: var(--max-width); padding: var(--inner-pad); max-height: var(--vh); /* display: none; */ z-index: 2; }
.slogan-area .slogan { font-size: 6.3rem; line-height: 1.2; font-weight: 700; color: #fff; }
.slogan-area .slogan p { overflow: hidden; }
.slogan-area .slogan p span { display: block; width: fit-content; }



.slogan-area .linkto { font-size: 1.6rem; color: #fff; line-height: 1.9; letter-spacing: 0.065em; margin: 2.5rem 0 0; overflow: hidden; }
.slogan-area .linkto a { position: relative; display: block; width: fit-content; }
.slogan-area .linkto a::after { position: absolute; left: 0; bottom: 0; content: ''; display: block; width: 0; height: 2px; background: #fff; transition: width .3s; }
.slogan-area .linkto a:hover::after { width: 100%; }


/* bullet */
.swiper-pagination { position: fixed; right: 9rem; top: 50%; transform: translateY(-50%); display: flex; flex-direction: column; align-items: flex-end; z-index: 9; }
.swiper-pagination-bullet { padding: 0.8rem 0; }
.swiper-pagination-bullet::before { content:''; display: block; width: 1.5rem; height: 2px; background: #fff; opacity: 0.5; transition: all .3s; }
.swiper-pagination-bullet-active::before { width: 3rem; opacity: 1; }



/* prev */
/* .swiper-slide-prev.swiper-slide .img-area { transform: translateY(-50%); } */
/* .swiper-slide-prev.swiper-slide .img-area .img { transform: scale(0.5); } */

/* active */
/* .swiper-slide-active.swiper-slide .img-area { transform: translateY(0); } */
/* .swiper-slide-active.swiper-slide .img-area .img { transform: scale(1); transition-delay: .5s; } */

/* next */
/* .swiper-slide-next.swiper-slide .img-area { transform: translateY(50%); } */
/* .swiper-slide-next.swiper-slide .img-area .img { transform: scale(0.5); } */


/* @keyframes swiper-prev {
  0% { transform: scale(0.5) translateY(-50%); }
  50% { transform: scale(0.5) translateY(-50%); }
  100% { transform: scale(0.5) translateY(-50%); }
} */


/* 
.swiper-slide-prev .slogan-area .slogan p span { animation: fade-out-slide-up-50 .3s; }

.swiper-slide-active .slogan-area { display: block; }
.swiper-slide-active .slogan-area .slogan p span { animation: fade-in-slide-up-50 .3s; animation-delay: .2s; animation-fill-mode: backwards; }
.swiper-slide-active .slogan-area .linkto a { animation: fade-in-slide-up-50 .3s; }


.swiper-slide-prev .img-area .img,
.swiper-slide-next .img-area .img { }
.swiper-slide-active .img-area .img { transform: scale(1);  } */


/* .main-slide { position: absolute; left: 0; top: 0; right: 0; bottom: 0; background:url(@/assets/images/main-visual-2024-happy-new-goods.jpg); background-size: cover; } */






.slide-controller { position: fixed; left: 9rem; bottom: 5rem; display: flex; align-items: center; z-index: 5; }
.slide-controller button { position: relative; width: 4.4rem; height: 4.4rem; font-size: 1rem; line-height: 1.2rem; color: #fff; border-radius: 100%; border: 1px solid rgba(255,255,255, 0.5); }
.slide-controller button + button { margin-left: 1.4rem; }
.slide-controller button i { transition: all .25s var(--ease-InOutExpo); }
.slide-controller button::after { position: absolute; left: calc(50% - 0.7rem); top: calc(50% - 0.8px); content:''; display: block; width: 1.4rem; height: 1px; background: #fff; transform: scaleX(0); transition: transform 0.25s var(--ease-InOutExpo); }

.slide-controller button:hover::after { transform: scaleX(1); }

.slide-controller button.btn_prev:hover i { transform: translateX(-0.6rem); }
.slide-controller button.btn_next:hover i { transform: translateX(0.6rem); }








:root {
  --swiper-theme-color: #fff;
  /* --fancy-slider-font-family: sans-serif; */
  --fancy-slider-button-side-offset: 32px;
  --fancy-slider-button-mobile-side-offset: 24px;
  --fancy-slider-button-mobile-bottom-offset: 16px;
  --fancy-slider-title-font-size: 80px;
  --fancy-slider-title-line-height: 1.2;
  
  /* background */
  --fancy-slider-transition-background-duration: 1000ms; /* duration background color */
  --fancy-slider-transition-background-delay: 1000ms;    /* delay background color */
  
  /* other */
  --fancy-slider-transition-slide-delay: 850ms; /* delay slide translation */
  --fancy-slider-transition-title-delay: 800ms; /* delay title translation */
  --fancy-slider-transition-timing-function: cubic-bezier(0.5, 0, 0, 1); /* global timing function */
  
  /* scaling */
  /*--fancy-slider-transition-scale-slide-delay: 0ms;      /* delay slide scale */
  /*--fancy-slider-transition-scale-slide-duration: 750ms; /* duration slide scale */
  --fancy-slider-transform-scale-slide: 0.6;               /* before scale in slide - same as in js */
  /*--fancy-slider-transition-scale-img-delay: 0ms;      /* delay img scale */
  /*--fancy-slider-transition-scale-img-duration: 750ms; /* duration img scale */
  --fancy-slider-transform-scale-img: 1.2;               /* before scale in img - same as in js */
  
  /* nav */
  --fancy-slider-transition-button: 400ms;        /*  */
  --fancy-slider-transition-button-arrow: 400ms;  /*  */
  --fancy-slider-transition-button-circle: 400ms; /*  */
}
/* html,
body {
  position: relative;
  height: 100%;
  margin: 0;
  padding: 0;
}
body {
  color: #fff;
  line-height: 1.5;
  font-family: -apple-system, system-ui, Helvetica Neue, Helvetica, Arial,
    Segoe UI, Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
} */
.fancy-slider {
  /* --fancy-slider-title-font-size: 88px; */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  /* font-family: var(--fancy-slider-font-family); */
}
/* @media (max-width: 480px) {
  .fancy-slider {
    --fancy-slider-title-font-size: 60px;
  }
} */
.fancy-slider-no-transition {
  transition-duration: 0ms !important;
  transition-delay: 0ms !important;
  transition-property: none !important;
}
.fancy-slider-no-transition *:not(.swiper-wrapper) {
  transition-duration: 0ms !important;
  transition-delay: 0ms !important;
  transition-property: none !important;
}
.fancy-slider-no-transition .swiper-wrapper {
  transition-delay: 0ms !important;
}



.mySwiper {
  width: 100%;
  height: 100%;
  transition-duration: var(--fancy-slider-transition-background-duration);
  transition-property: background-color;
  transition-delay: var(--fancy-slider-transition-background-delay);
}
.mySwiper .swiper-wrapper {
  transition-delay: var(--fancy-slider-transition-slide-delay);
  transition-timing-function: var(--fancy-slider-transition-timing-function);
}
.mySwiper .swiper-slide {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}


/* .fancy-slider-title {
  transition-delay: var(--fancy-slider-transition-title-delay);
  z-index: 10;
} */



.img-area {
  width: 100%;
  height: 100%;
  position: absolute;
  transform: scale(var(--fancy-slider-transform-scale-slide));
  /*transition-duration: var(--fancy-slider-transition-scale-slide-duration);
  transition-delay: var(--fancy-slider-transition-scale-slide-delay);*/
  transition-property: transform;
  transition-timing-function: var(--fancy-slider-transition-timing-function);
  opacity: 0.9;
  overflow: hidden;
}
.img-area .img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(var(--fancy-slider-transform-scale-img)) /*translate(50%)*/;
  /*transition-duration: var(--fancy-slider-transition-scale-img-duration);
  transition-delay: var(--fancy-slider-transition-scale-img-delay);*/
  transition-timing-function: var(--fancy-slider-transition-timing-function);
  transition-property: transform;
}

/* nav */
.fancy-slider-button {
  transition: var(--fancy-slider-transition-button);
  outline: none;
  position: absolute;
  width: 140px;
  z-index: 10;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}
.fancy-slider-button svg {
  display: block;
  transition: var(--fancy-slider-transition-button);
}
.fancy-slider-button .fancy-slider-svg-circle-wrap {
  transition: var(--fancy-slider-transition-button-circle);
  transform-origin: -20px 40px;
  opacity: 1;
}
.fancy-slider-button circle {
  transition: var(--fancy-slider-transition-button-circle);
  stroke-width: 2px;
  stroke: #fff;
  fill: none;
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
  opacity: 1;
  transform-origin: 0px 0px 0px;
}
.fancy-slider-button .fancy-slider-svg-arrow {
  transition: var(--fancy-slider-transition-button-arrow);
  fill: #fff;
  transform: rotateY(180deg) translate(-55px, 36.1px) scale(1.75);
}
.fancy-slider-button-prev {
  left: var(--fancy-slider-button-side-offset);
}
.fancy-slider-button-next {
  right: var(--fancy-slider-button-side-offset);
}
/* @media (max-width: 640px) {
  .fancy-slider-button {
    top: auto;
    bottom: var(--fancy-slider-button-mobile-bottom-offset);
    transform: none;
  }
  .fancy-slider-button-prev {
    left: var(--fancy-slider-button-mobile-side-offset);
  }
  .fancy-slider-button-next {
    right: var(--fancy-slider-button-mobile-side-offset);
  }
} */
.fancy-slider-button-disabled {
  opacity: 0.2;
  cursor: default;
}
.fancy-slider-button .fancy-slider-svg-wrap {
  transform: translateY(353px);
}
.fancy-slider-button-next .fancy-slider-svg-wrap {
  transform: translateY(353px) rotateY(180deg);
  transform-origin: 80px 0px 0px;
}
.fancy-slider-button .fancy-slider-svg-line {
  transition: var(--fancy-slider-transition-button);
  stroke: #fff;
  stroke-width: 2;
  transform: translate(50px, 42px);
}
.fancy-slider-button-prev:not(.fancy-slider-button-disabled):hover svg {
  transform: translate(-16px);
}
.fancy-slider-button-next:not(.fancy-slider-button-disabled):hover svg {
  transform: translate(16px);
}
.fancy-slider-button:not(.fancy-slider-button-disabled):hover
  .fancy-slider-svg-circle-wrap {
  transform: scale(1.1);
}
.fancy-slider-button:not(.fancy-slider-button-disabled):hover circle {
  stroke-dasharray: 4px;
  stroke-dashoffset: 4px;
  opacity: 1;
}
.fancy-slider-button:not(.fancy-slider-button-disabled):hover
  .fancy-slider-svg-arrow {
  transform: rotateY(180deg) translate(-40px, 36.1px) scale(1.75);
}
.fancy-slider-button:not(.fancy-slider-button-disabled):hover
  .fancy-slider-svg-line {
  transform: translate(35px, 42px) scaleX(0.5);
}

/* swiper */
/* .swiper {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
} */
/* .swiper-vertical > .swiper-wrapper {
  flex-direction: column;
} */
.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  box-sizing: content-box;
}
.swiper-android .swiper-slide,
.swiper-wrapper {
  transform: translate(0);
}
.swiper-pointer-events {
  touch-action: pan-y;
}
.swiper-pointer-events.swiper-vertical {
  touch-action: pan-x;
}
.swiper-slide {
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative;
  transition-property: transform;
}
.swiper-slide-invisible-blank {
  visibility: hidden;
}
.swiper-autoheight,
.swiper-autoheight .swiper-slide {
  height: auto;
}
.swiper-autoheight .swiper-wrapper {
  align-items: flex-start;
  transition-property: transform, height;
}
.swiper-backface-hidden .swiper-slide {
  transform: translateZ(0);
  backface-visibility: hidden;
}
.swiper-3d,
.swiper-3d.swiper-css-mode .swiper-wrapper {
  perspective: 1200px;
}
.swiper-3d .swiper-wrapper,
.swiper-3d .swiper-slide,
.swiper-3d .swiper-slide-shadow,
.swiper-3d .swiper-slide-shadow-left,
.swiper-3d .swiper-slide-shadow-right,
.swiper-3d .swiper-slide-shadow-top,
.swiper-3d .swiper-slide-shadow-bottom,
.swiper-3d .swiper-cube-shadow {
  transform-style: preserve-3d;
}
.swiper-3d .swiper-slide-shadow,
.swiper-3d .swiper-slide-shadow-left,
.swiper-3d .swiper-slide-shadow-right,
.swiper-3d .swiper-slide-shadow-top,
.swiper-3d .swiper-slide-shadow-bottom {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 10;
}
.swiper-3d .swiper-slide-shadow {
  background: rgba(0, 0, 0, 0.15);
}
.swiper-3d .swiper-slide-shadow-left {
  background-image: linear-gradient(
    to left,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0)
  );
}
.swiper-3d .swiper-slide-shadow-right {
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0)
  );
}
.swiper-3d .swiper-slide-shadow-top {
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0)
  );
}
.swiper-3d .swiper-slide-shadow-bottom {
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0)
  );
}
.swiper-css-mode > .swiper-wrapper {
  overflow: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.swiper-css-mode > .swiper-wrapper::-webkit-scrollbar {
  display: none;
}
.swiper-css-mode > .swiper-wrapper > .swiper-slide {
  scroll-snap-align: start start;
}
.swiper-horizontal.swiper-css-mode > .swiper-wrapper {
  scroll-snap-type: x mandatory;
}
.swiper-vertical.swiper-css-mode > .swiper-wrapper {
  scroll-snap-type: y mandatory;
}
.swiper-centered > .swiper-wrapper:before {
  content: "";
  flex-shrink: 0;
  order: 9999;
}
.swiper-centered.swiper-horizontal
  > .swiper-wrapper
  > .swiper-slide:first-child {
  margin-inline-start: var(--swiper-centered-offset-before);
}
.swiper-centered.swiper-horizontal > .swiper-wrapper:before {
  height: 100%;
  width: var(--swiper-centered-offset-after);
}
.swiper-centered.swiper-vertical > .swiper-wrapper > .swiper-slide:first-child {
  margin-block-start: var(--swiper-centered-offset-before);
}
.swiper-centered.swiper-vertical > .swiper-wrapper:before {
  width: 100%;
  height: var(--swiper-centered-offset-after);
}
.swiper-centered > .swiper-wrapper > .swiper-slide {
  scroll-snap-align: center center;
}




</style>