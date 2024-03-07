<template>
  <Carousel ref="bfCarousel" class="bfCarousel"
    :items-to-show="itemsToShow"
    :wrap-around="wrapAround"
    :snap-align="snapAlign"
    :transition="transition"
    :i18n="i18n"
    :breakpoints="breakpoints"
  >
    <slide v-for="slide in slides" :key="slide">
      <div class="bubble">
        <p>{{ slide.desc }}</p>
      </div>
      <strong>{{ slide.title }}</strong>
    </slide>

    <template #addons>
      <Pagination />
    </template>
    
  </Carousel>
</template>

<script>
import { Carousel, Slide, Pagination } from 'vue3-carousel'

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  props: {
    slides: Object,
  },
  data() {
    return {
      itemsToShow: 3,
      wrapAround: true,
      snapAlign: 'center',
      transition: 500,
      breakpoints: {
        1440: {   // and up
          itemsToShow: 3,
        },
        1024: {
          itemsToShow: 2,
        },
        768: {
          itemsToShow: 1.5,
        },
        425: {
          itemsToShow: 1,
        },
        0: {
          itemsToShow: 1,
        },
      },
      i18n: {
        'ariaGallery': 'slide',
        'ariaNavigateToSlide': 'Navigate to slide {slideNumber}',
        'itemXofY': 'slide {currentSlide} of {slidesCount}',
      }
    }
  },
}
</script>

<style>
/* vue3-carousel */
.bfCarousel { position: relative; text-align: center; box-sizing: border-box; touch-action: pan-y; overscroll-behavior: none; margin-top: 8rem; }
.bfCarousel .carousel__sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); border: 0; }
.bfCarousel.is-dragging { touch-action: none; }
.bfCarousel .carousel__viewport { overflow: hidden; }
.bfCarousel .carousel__track { display: flex; position: relative; }
/* slide */
.bfCarousel .carousel__slide { position: relative; flex-shrink: 0; margin: 0; scroll-snap-stop: auto; transform: translateZ(0); }
.bfCarousel .carousel__slide > strong { display: block; text-align: center; color: rgba(0,0,0, 0.3); margin-top: 4rem; }
.bfCarousel .bubble { position: relative; color: #000; font-size: 1.4rem; line-height: 1.6; color: rgba(0,0,0, 0.4); text-align: left; word-break: keep-app; padding: 5rem; padding-left: 10rem; margin: 0 1.5rem; border-radius: 1rem; }
.bfCarousel .bubble::before { position: absolute; left: 3.4rem; top: 4rem; content: ''; display: block; width: 3.4rem; height: 3.4rem; background: url('@/assets/images/ico/double-quote.svg') center center no-repeat; background-size: contain; opacity: 0.1; }
.bfCarousel .bubble::after { position: absolute; left: calc(50% - 1.5rem); bottom: -1rem; content: ''; display: block; width: 3rem; height: 3rem; border-radius: 0.6rem; background: #fff; transform: rotate(45deg);  }
.bfCarousel .bubble,
.bfCarousel .bubble::before,
.bfCarousel .bubble::after { transition: all .3s;}
/* active */
.bfCarousel .carousel__slide--active { opacity: 1; }
.bfCarousel .carousel__slide--active .bubble { color: #fff; background: #6d6d6d; }
.bfCarousel .carousel__slide--active .bubble::before { opacity: 0.2; }
.bfCarousel .carousel__slide--active .bubble::after { background: #6d6d6d;  }
.bfCarousel .carousel__slide--active > strong { color: #000; }
/* pagination */
.bfCarousel .carousel__pagination { display: flex; align-items: center; justify-content: center; margin-top: 8rem; }
.bfCarousel .carousel__pagination-item + .carousel__pagination-item { margin-left: 8px; }
.bfCarousel .carousel__pagination-button { width: 3rem; height: 3rem; opacity: 0.25; transition: opacity .3s; }
.bfCarousel .carousel__pagination-button::before { content: ''; display: block; width: 100%; height: 4px; background: #666; }
.bfCarousel .carousel__pagination-button--active { opacity: 1; }

@media only screen and (max-width: 1024px) {

}
@media only screen and (max-width: 768px) {

}
@media only screen and (max-width: 425px) {
  .bfCarousel .bubble { padding: 3.6rem; margin: 0 4rem; }
  .bfCarousel .carousel__slide--active .bubble::before { display: none; }
  .bfCarousel .carousel__pagination { margin-top: 6rem; }
}
</style>