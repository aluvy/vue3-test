<template>
  <ul class="LinkWorkView" v-if="Links.length > 0">
    <li :class="`item ${link.class}`" v-for="link in Links" :key="link">
      
      <router-link :to="link.url">
        <div class="txt">
          <p class="stitle">{{ link.stitle }}</p>
          <div class="txt-inner">
            <p class="title">
              <span v-for="item in link.title" :key="item">{{ item }}</span>
            </p>
            <div class="ico">
              <svg class="next-arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 39 12">
                <line class="top" x1="23" y1="-0.5" x2="29.5" y2="6.5" stroke="#ffffff;"></line>
                <line class="bottom" x1="23" y1="12.5" x2="29.5" y2="5.5" stroke="#ffffff;"></line>
              </svg>
              <span class="line"></span>
            </div>
          </div>
        </div>
        <div class="bg"><img :src="link.img" alt=""></div>
      </router-link>

    </li>
  </ul>
</template>

<script>
export default {
  props: {
    Links: { type: Array, default(){ return [] } },
  }
}
</script>

<style scoped>
.LinkWorkView { display: flex; align-items: center; justify-content: space-between; }
.LinkWorkView li { flex: 1 1 50%; }
.LinkWorkView li.prev { text-align: right; }
.LinkWorkView li a { position: relative; display: block; overflow: hidden; }
.LinkWorkView li a::after { content: ''; display: block; padding-bottom: 21%; }
.LinkWorkView:has(li + li) li a::after { padding-bottom: 42%; }
.LinkWorkView li a .txt { position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: center; margin: 0 auto; width: fit-content; color: #fff; line-height: 1.3; transition: transform 0.4s cubic-bezier(0.05, 0.2, 0.1, 1); z-index: 2; }
.LinkWorkView li a .txt .stitle { font-size: 1.4rem; }
.LinkWorkView li a .txt-inner { position: relative; margin-top: 0.8rem; }
.LinkWorkView li a .txt-inner .title {font-size: 3rem; font-weight: 300; }
.LinkWorkView li a .txt-inner .title span { display: block; }
.LinkWorkView li a .bg { position: absolute; inset: 0; overflow: hidden; z-index: 1; }
.LinkWorkView li a .bg::before { position: absolute; inset: 0; content: ''; background: rgba(0,0,0, 0.35); transition: background-color 0.4s cubic-bezier(0.05, 0.2, 0.1, 1) 0s; z-index: 2; }
.LinkWorkView li a .bg img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s cubic-bezier(0.05, 0.2, 0.1, 1) 0s; }

/* hover */
.LinkWorkView li.prev a:hover .txt,
.LinkWorkView li.prev a:focus .txt { transform: translate3D(40px, 0, 0); }
.LinkWorkView li.next a:hover .txt,
.LinkWorkView li.next a:focus .txt { transform: translate3D(-40px, 0, 0); }
.LinkWorkView li a:hover .bg::before,
.LinkWorkView li a:focus .bg::before {background-color: rgba(13,13,13,0.9); }
.LinkWorkView li a:hover .bg img,
.LinkWorkView li a:focus .bg img { transform: scale(1.1); }


/* animation */
.LinkWorkView li a .txt-inner svg { position: absolute; top: 50%; display: block; width: 40px; height: 30px; margin-top: -15px; }
.LinkWorkView li.prev a .txt-inner svg { left: -43px; transform: translateX(38px) rotate(180deg); }
.LinkWorkView li.next a .txt-inner svg { right: -43px; transform: translateX(38px); }
/*  */
.LinkWorkView li a .txt-inner svg line { stroke: #fff; stroke-width: 2px; stroke-dasharray: 10px; stroke-dashoffset: 30px; }
/*  */
.LinkWorkView li a .txt-inner .line { position: absolute; top: 50%; display: block; height: 2px; width: 45px; background-color: #fff; }
.LinkWorkView li.prev a .txt-inner .line { left: -74px; transform: translate3D(-28px, -50%, 0) scaleX(0); transform-origin: left; }
.LinkWorkView li.next a .txt-inner .line { right: -74px; transform: translate3D(28px, -50%, 0) scaleX(0); transform-origin: right; }

/* hover animation */
.LinkWorkView li a:hover .txt-inner svg,
.LinkWorkView li a:focus .txt-inner svg { transform: translateX(42px); }
.LinkWorkView li.prev a:hover .txt-inner svg,
.LinkWorkView li.prev a:focus .txt-inner svg { animation: svgPrevStart 0.4s cubic-bezier(0.05, 0.2, 0.1, 1) forwards; }
.LinkWorkView li.next a:hover .txt-inner svg,
.LinkWorkView li.next a:focus .txt-inner svg {animation: svgNextStart 0.4s cubic-bezier(0.05, 0.2, 0.1, 1) forwards; }
/*  */
.LinkWorkView li a:hover .txt-inner svg line,
.LinkWorkView li a:focus .txt-inner svg line { stroke-dashoffset: 30px; animation: arrowStart 0.3s cubic-bezier(0.05, 0.2, 0.1, 1) 0.1s forwards; }
/*  */
.LinkWorkView li a:hover .txt-inner .line,
.LinkWorkView li a:focus .txt-inner .line { transform: translate3d(0, -50%, 0) scaleX(1); }
.LinkWorkView li.prev a:hover .txt-inner .line,
.LinkWorkView li.prev a:focus .txt-inner .line { transform-origin: left; animation: linePrevStart 0.4s cubic-bezier(0.05, 0.2, 0.1, 1) forwards; }
.LinkWorkView li.next a:hover .txt-inner .line,
.LinkWorkView li.next a:focus .txt-inner .line { transform-origin: right; animation: lineNextStart 0.4s cubic-bezier(0.05, 0.2, 0.1, 1) forwards; }

/* mouse leave animation */
.LinkWorkView li.prev a .txt-inner svg {  animation: svgPrevEnd 0.7s cubic-bezier(0, 0.2, 0.1, 1) forwards; }
.LinkWorkView li.next a .txt-inner svg { animation: svgNextEnd 0.7s cubic-bezier(0, 0.2, 0.1, 1) forwards; }
/*  */
.LinkWorkView li a .txt-inner svg line { stroke-dashoffset: 40px; animation: arrowEnd 0.4s cubic-bezier(0.3, 0.2, 0.1, 1) 0.25s forwards; }
/*  */
.LinkWorkView li.prev a .txt-inner .line { animation: linePrevEnd 0.4s cubic-bezier(0.05, 0.2, 0.1, 1) forwards; }
.LinkWorkView li.next a .txt-inner .line { animation: lineNextEnd 0.4s cubic-bezier(0.05, 0.2, 0.1, 1) forwards; }

@keyframes lineNextStart {
	0% { transform: translateY(-50%) translateX(-88px) scaleX(0); }
	100% { transform: translateY(-50%) translateX(0px) scaleX(1); }
}

@keyframes lineNextEnd {
	0% {  transform: translateY(-50%) translateX(0px) scaleX(1);  }
	100% { transform: translateY(-50%) translateX(28px) scaleX(0); }
}

@keyframes linePrevStart {
	0% { transform: translateY(-50%) translateX(88px) scaleX(0); }
	100% { transform: translateY(-50%) translateX(0px) scaleX(1); }
}

@keyframes linePrevEnd {
	0% {  transform: translateY(-50%) translateX(0px) scaleX(1);  }
	100% { transform: translateY(-50%) translateX(-28px) scaleX(0); }
}

@keyframes svgNextStart {
	0% { transform: translateX(-50px); }
	100% { transform: translateX(42px); }
}

@keyframes svgNextEnd {
	0% { transform: translateX(42px); }
	100% { transform: translateX(75px); }
}

@keyframes svgPrevStart {
	0% { transform: translateX(50px) rotate(180deg); }
	100% { transform: translateX(-42px) rotate(180deg); }
}

@keyframes svgPrevEnd {
	0% { transform: translateX(-42px) rotate(180deg); }
	100% { transform: translateX(-75px) rotate(180deg); }
}

@keyframes arrowStart {
	0% { stroke-dashoffset: 30px; }
	100% { stroke-dashoffset: 40px; }
}

@keyframes arrowEnd {
	0% { stroke-dashoffset: 40px; }
	100% { stroke-dashoffset: 50px; }
}

@media only screen and (max-width: 1280px) {
  .LinkWorkView li a::after { padding-bottom: 25%; }
  .LinkWorkView:has(li + li) li a::after { padding-bottom: 50%; }

  .LinkWorkView li a .txt-inner .title { font-size: 2.5rem; }
}
@media only screen and (max-width: 768px) {
  .LinkWorkView li,
  .LinkWorkView li.prev { text-align: center; }

  .LinkWorkView li a::after { padding-bottom: 30%; }
  .LinkWorkView:has(li + li) li a::after { padding-bottom: 60%; }
}
@media only screen and (max-width: 600px) {
  .LinkWorkView { display: block; }
  .LinkWorkView li a::after ,
  .LinkWorkView:has(li + li) li a::after { padding-bottom: 40%; }
}
@media only screen and (max-width: 425px) {
  .LinkWorkView li a::after,
  .LinkWorkView:has(li + li) li a::after { padding-bottom: 60%; }
}
@media only screen and (max-width: 320px) {
  .LinkWorkView li a::after,
  .LinkWorkView:has(li + li) li a::after { padding-bottom: 80%; }
}
</style>