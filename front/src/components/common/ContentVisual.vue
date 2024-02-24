<template>
  <!-- 
비주얼 타입 ABCD
A: work : 전체화면 | 전체센터 | 2단 텍스트 | 이미지 or 비디오 | 마우스 아이콘 (insight 서브)
B: who we are, contact us : 높이 80%화면 반응형 | 좌측정렬 3단 텍스트 | 이미지배경
C: aboutus : 우측이미지 반응형 | 좌측정렬 3단텍스트 + sns | 이미지배경
D: recruit : 완전다름

  -->
  <div class="visual-area">
    <div class="slogan">
      <div class="slogan-inner">
        <slot name="title"></slot>
        
        <div class="scroll-down-wrap no-border">
          <a href="#" class="section-down-arrow ">
            <svg class="nectar-scroll-icon" viewBox="0 0 30 45" enable-background="new 0 0 30 45">
              <path class="nectar-scroll-icon-path" fill="none" stroke="#ffffff" stroke-width="2" stroke-miterlimit="10" d="M15,1.118c12.352,0,13.967,12.88,13.967,12.88v18.76  c0,0-1.514,11.204-13.967,11.204S0.931,32.966,0.931,32.966V14.05C0.931,14.05,2.648,1.118,15,1.118z"></path>
            </svg>
          </a>
        </div>

      </div>
    </div>
    <div class="bg">
      <slot name="visual"></slot>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.visual-area { position: relative; height: var(--vh); overflow: hidden; }
.visual-area .slogan { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; z-index: 2; }
.visual-area .slogan-inner { width: 100%; max-width: var(--max-width); padding: var(--inner-pad); }
.visual-area .bg { position: absolute; inset: 0; z-index: 1; }
.visual-area .bg::before { content: ''; position: absolute; inset: 0; background: rgba(0,0,0, 0.4); z-index: 2; }
</style>