<template>
  <ul class="LinkWorkView" v-if="Links.length > 0">
    <li class="item" v-for="link in Links" :key="link">
      
      <router-link :to="link.url">
        <div class="txt">
          <p class="stitle">{{ link.stitle }}</p>
          <div class="txt-inner">
            <p class="title">
              <span v-for="item in link.title" :key="item">{{ item }}</span>
            </p>
            <div class="ico">
              <svg class="next-arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 39 12"><line class="top" x1="23" y1="-0.5" x2="29.5" y2="6.5" stroke="#ffffff;"></line><line class="bottom" x1="23" y1="12.5" x2="29.5" y2="5.5" stroke="#ffffff;"></line></svg>
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
.LinkWorkView li a { position: relative; display: block; }
.LinkWorkView li a::after { content: ''; display: block; padding-bottom: 41%; }
.LinkWorkView li a .txt { position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: center; margin: 0 auto; width: fit-content; color: #fff; line-height: 1.3; transition: transform 0.4s cubic-bezier(0.05, 0.2, 0.1, 1); z-index: 2; }
.LinkWorkView li a .txt .stitle { font-size: 1.4rem; }
.LinkWorkView li a .txt-inner { position: relative; margin-top: 0.8rem; }
.LinkWorkView li a .txt-inner .title {font-size: 3rem; font-weight: 300; }
.LinkWorkView li a .txt-inner .title span { display: block; }


/* .LinkWorkView li a .txt-inner .ico { position: absolute; right: -3px; top: 50%; margin-top: -2rem; width: 4rem; height: 4rem; transform: translate3d(38px, 0, 0); position: absolute; } */
/* .LinkWorkView li a .txt-inner .ico::before { position: absolute; left: 50%; top: 50%; content: ''; display: block; width: 26%; height: 26%; border: 2px solid #fff; border-width: 2px 2px 0 0; transform: rotate(45deg) translate3d(-72%, 0%, 0); animation: rightArrowEnd2 0.7s cubic-bezier(0, 0.2, 0.1, 1) forwards; } */
/* .LinkWorkView li a .txt-inner .ico::after { position: absolute; left: 50%; top: 50%; content: ''; display: block; width: 4.5rem; height: 2px; margin-top: -1px; background: #fff; transform-origin: left; animation: rightLineEnd2 0.4s cubic-bezier(0.05, 0.2, 0.1, 1) forwards; } */


.LinkWorkView li a .txt-inner svg { position: absolute;


    position: absolute;
    backface-visibility: hidden;
    right: -3px;
    top: 50%;
    margin-top: -15px;
    height: 30px;
    width: 40px;
    display: block;
    transform: translateX(38px);
    -webkit-transform: translateX(38px) rotate(180deg);
    transform: translateX(38px) rotate(180deg);
    left: -43px;
    right: auto;
    animation: rightArrowEnd2 0.7s cubic-bezier(0, 0.2, 0.1, 1) forwards;
  }
.LinkWorkView li a .txt-inner svg line {

  stroke-dashoffset: 40px;
  stroke: #fff;
  stroke-width: 2px;
  stroke-dasharray: 10px;
  stroke-dashoffset: 30px;

  animation: rightArrowLineEnd 0.4s cubic-bezier(0.3, 0.2, 0.1, 1) 0.25s forwards;

}
.LinkWorkView li a .txt-inner .line {

  
  
  height: 2px;
  width: 45px;
  background-color: #fff;
  position: absolute;
  content: '';
  right: -74px;
  display: block;
  backface-visibility: hidden;
  top: 50%;
  /* -webkit-transform: translateY(-50%) translateX(28px) scaleX(0); */
  /* -webkit-transform-origin: right; */
  transform: translateY(-50%) translateX(28px) scaleX(0);
  /* transform-origin: right; */
  left: -74px;
  /* left: -100px; */
  
  right: auto;
  animation: rightLineEnd 0.4s cubic-bezier(0.05, 0.2, 0.1, 1) forwards;
  animation: rightLineEnd2 0.4s cubic-bezier(0.05, 0.2, 0.1, 1) forwards;
  
  }

.LinkWorkView li a .bg { position: absolute; inset: 0; overflow: hidden; z-index: 1; }
.LinkWorkView li a .bg::before { position: absolute; inset: 0; content: ''; background: rgba(0,0,0, 0.35); transition: background-color 0.4s cubic-bezier(0.05, 0.2, 0.1, 1) 0s; z-index: 2; }
.LinkWorkView li a .bg img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }






/* hover */
.LinkWorkView li a:hover .txt { transform: translateX(40px) translateZ(0); backface-visibility: hidden; }
.LinkWorkView li a:hover .bg::before {background-color: rgba(13,13,13,0.9); }
.LinkWorkView li a:hover .bg img {  }
.LinkWorkView li a:hover .txt-inner svg {




  /* position: absolute;
    backface-visibility: hidden;
    right: -43px;
    top: 50%;
    margin-top: -15px;
    height: 30px;
    width: 40px;
    display: block;
    transform: translateX(38px);

    transform: translateX(38px) rotate(180deg);
    left: -43px;
    right: auto; */
    
  /* transform: translateX(42px); animation: rightArrowStart2 0.4s cubic-bezier(0.05, 0.2, 0.1, 1) forwards; */
  /* animation: rightArrowEnd2 0.7s cubic-bezier(0, 0.2, 0.1, 1) forwards; */

  position: absolute;
    backface-visibility: hidden;
    right: -43px;
    top: 50%;
    margin-top: -15px;
    height: 30px;
    width: 40px;
    display: block;
    transform: translateX(38px);


  -webkit-transform: translateX(38px) rotate(180deg);
    transform: translateX(38px) rotate(180deg);
    left: -43px;
    right: auto;

  animation: rightArrowStart2 0.4s cubic-bezier(0.05, 0.2, 0.1, 1) forwards;


  -webkit-transform: translateX(42px);
    transform: translateX(42px);
  
}

.LinkWorkView li a:hover .txt-inner svg line {
  /* animation: rightArrowLineStart 0.3s cubic-bezier(0.05, 0.2, 0.1, 1) 0.1s forwards; stroke-dashoffset: 30px; */

  /* stroke-width: 2px;
    stroke-dasharray: 10px;
    stroke-dashoffset: 30px;
    
  stroke: #ffffff;

  animation: rightArrowLineEnd 0.4s cubic-bezier(0.3, 0.2, 0.1, 1) 0.25s forwards;
  stroke-dashoffset: 40px; */

  stroke-width: 2px;
    stroke-dasharray: 10px;
    stroke-dashoffset: 30px;

  stroke: #ffffff;
  animation: rightArrowLineEnd 0.4s cubic-bezier(0.3, 0.2, 0.1, 1) 0.25s forwards;
    stroke-dashoffset: 40px;

  animation: rightArrowLineStart 0.3s cubic-bezier(0.05, 0.2, 0.1, 1) 0.1s forwards;
    stroke-dashoffset: 30px;



}
.LinkWorkView li a:hover .txt-inner .line {

  /* -webkit-transform: translateY(-50%) translateX(0px) scaleX(1); */
    /* -webkit-transform-origin: right; */
    /* transform: translateY(-50%) translateX(0px) scaleX(1); */
    /* transform-origin: right; */
    /* animation: rightLineStart2 0.4s cubic-bezier(0.05, 0.2, 0.1, 1) forwards; */

    /* -webkit-transform: translateY(-50%) translateX(-28px) scaleX(0); */
    /* -webkit-transform-origin: left; */
    /* transform: translateY(-50%) translateX(-28px) scaleX(0);
    transform-origin: left;
    left: -74px;
    right: auto; */


    /* height: 2px;
    width: 45px;
    background-color: #fff;
    position: absolute;
    content: '';
    right: -74px;
    display: block;
    backface-visibility: hidden;
    top: 50%;
    -webkit-transform: translateY(-50%) translateX(28px) scaleX(0);
    -webkit-transform-origin: right;
    transform: translateY(-50%) translateX(28px) scaleX(0);
    transform-origin: right; */



    -webkit-transform: translateY(-50%) translateX(-28px) scaleX(0);
    -webkit-transform-origin: left;
    transform: translateY(-50%) translateX(-28px) scaleX(0);
    transform-origin: left;
    left: -74px;
    right: auto;

    animation: rightLineEnd2 0.4s cubic-bezier(0.05, 0.2, 0.1, 1) forwards;



  -webkit-transform: translateY(-50%) translateX(0px) scaleX(1);
  -webkit-transform-origin: right;
  transform: translateY(-50%) translateX(0px) scaleX(1);
  transform-origin: right;
  animation: rightLineStart2 0.4s cubic-bezier(0.05, 0.2, 0.1, 1) forwards;

    
    
    /* transform: translateY(-50%) translateX(0px) scaleX(1);
    transform-origin: left;
    animation: rightLineStart 0.4s cubic-bezier(0.05, 0.2, 0.1, 1) forwards; */


    /* transform-origin: left;
    animation: portRightLineStart 0.4s cubic-bezier(0.05, 0.15, 0.1, 1) forwards; */

}







/* 
.blog_next_prev_buttons img{position:absolute; left:0; top:-50%; width:100%; opacity:0; max-width:none!important; will-change:transform}
.blog_next_prev_buttons .inner{position:absolute; left:0; top:0; width:100%; text-align:center; opacity:0}
.blog_next_prev_buttons{text-align:center; overflow:hidden; position:relative; background-color:#333}
.blog_next_prev_buttons span.full-link a,
.blog_next_prev_buttons span.full-link,
 .blog_next_prev_buttons span.bg-overlay{display:block; position:absolute; text-indent:-9999px; top:0; z-index:10; margin-bottom:0!important; left:0; width:100%; height:100%}
 .blog_next_prev_buttons span.bg-overlay{background-color:#282b30; z-index:2; opacity:0.3; transition:all 0.3s ease; -webkit-transition:all 0.3s ease; }
 .blog_next_prev_buttons:hover span.bg-overlay{opacity:0}
 .blog_next_prev_buttons.bg-color-only span.bg-overlay{opacity:0!important}
 .blog_next_prev_buttons.bg-color-only:hover span.bg-overlay{opacity:0.08!important}
 .blog_next_prev_buttons span {display:block; color:#fff; margin-bottom:5px}
 .blog_next_prev_buttons[data-style*="next_prev"] .next-post h3 span { text-align: left; }
 .blog_next_prev_buttons[data-style*="next_prev"] .previous-post h3 span { text-align: right; }
 .blog_next_prev_buttons .col{height:250px; border-left:1px solid #ddd}
 .blog_next_prev_buttons[data-style="fullwidth_next_only"] img {
   -ms-transition: transform 0.4s cubic-bezier(0.05, 0.2, 0.1, 1) 0s;
     -webkit-transition: transform 0.4s cubic-bezier(0.05, 0.2, 0.1, 1) 0s;
     transition: transform 0.4s cubic-bezier(0.05, 0.2, 0.1, 1) 0s;
 }
 .blog_next_prev_buttons[data-style="fullwidth_next_only"]:hover img {
   -webkit-transform: scale(1.1);
   transform: scale(1.1);
 }
 .blog_next_prev_buttons[data-post-header-style="default_minimal"] .col{height:350px}
 @media only screen and (max-width:1000px){.blog_next_prev_buttons[data-post-header-style="default_minimal"] .col{height:200px}
 }
 .blog_next_prev_buttons .col h3{transition:opacity 0.2s linear; -webkit-transition:opacity 0.2s linear; padding:0 15%; color:#fff; margin:0}
 .full-width-content.blog_next_prev_buttons > .col.span_12.dark h3 { color: #fff;}
 .container-wrap[data-nav-pos="after_project_2"] { padding-bottom: 0!important; }
 .container-wrap[data-nav-pos="after_project_2"] .bottom_controls .controls > .hidden, .blog_next_prev_buttons[data-style="fullwidth_next_prev"] .controls > .hidden { display: none!important; }
 .container-wrap[data-nav-pos="after_project_2"] .bottom_controls .controls > .only, .blog_next_prev_buttons[data-style="fullwidth_next_prev"] .controls > .only { width: 100%!important; }
 .container-wrap[data-nav-pos="after_project_2"] .bottom_controls .only span:not(.text), .blog_next_prev_buttons[data-style="fullwidth_next_prev"] .only span:not(.text) { text-align: center!important; }
 #full_width_portfolio .container-wrap[data-nav-pos="after_project_2"] .bottom_controls { margin-top: 0; }
 .container-wrap[data-nav-pos="after_project_2"] .bottom_controls, .blog_next_prev_buttons[data-style="fullwidth_next_prev"] ul { padding: 0; }
 .blog_next_prev_buttons[data-style="fullwidth_next_prev"] ul { margin: 0;}
 .container-wrap[data-nav-pos="after_project_2"] .bottom_controls .container {
   max-width: none;
   width: 100%!important;
   padding: 0!important;
 }
 .container-wrap[data-nav-pos="after_project_2"] .bottom_controls #portfolio-nav,
 body .container-wrap[data-nav-pos="after_project_2"]  .bottom_controls .container{
   height: auto!important;
   line-height: 0;
 }
 .container-wrap[data-nav-pos="after_project_2"] .bottom_controls  #portfolio-nav ul,
 .blog_next_prev_buttons[data-style="fullwidth_next_prev"] .controls {
   display: -webkit-flex;
     display: flex;
     -webkit-flex-wrap: wrap;
     flex-wrap: wrap;
     width: 100%;
 }
 .container-wrap[data-nav-pos="after_project_2"] .bottom_controls  #portfolio-nav { display: block!important;}
 .container-wrap[data-nav-pos="after_project_2"] .bottom_controls  #portfolio-nav ul .previous-project,
 .container-wrap[data-nav-pos="after_project_2"] .bottom_controls  #portfolio-nav ul .next-project,
 .blog_next_prev_buttons[data-style="fullwidth_next_prev"] ul .previous-post,
 .blog_next_prev_buttons[data-style="fullwidth_next_prev"] ul .next-post {
   width: 50%;
   line-height: 0;
   height: auto!important;
   padding: 6%;
   min-height: 300px;
    -webkit-justify-content: center;
   justify-content: center; 
   display: -webkit-flex;
     display: flex;
     -moz-box-align: center;
     -moz-box-pack: center;
     align-items: center;
     -webkit-align-items: center; 
     float: none!important;
   overflow: hidden;
   position: relative;
   background-color: #333;
 }
 .blog_next_prev_buttons[data-style="fullwidth_next_prev"] ul .previous-post,
 .blog_next_prev_buttons[data-style="fullwidth_next_prev"] ul .next-post {
   padding: 6% 9%;
 }
 .container-wrap[data-nav-pos="after_project_2"] .bottom_controls .previous-project:after,
 .container-wrap[data-nav-pos="after_project_2"] .bottom_controls .next-project:after,
 .blog_next_prev_buttons[data-style="fullwidth_next_prev"] ul .previous-post:after,
 .blog_next_prev_buttons[data-style="fullwidth_next_prev"] ul .next-post:after {
   background-color: rgba(13,13,13,0.35);
   position: absolute;
   left: 0;
   top: 0;
   content: '';
   display: block;
   z-index: 1;
   width: 100%;
   height: 100%;
   -webkit-transition: background-color 0.4s cubic-bezier(0.05, 0.2, 0.1, 1) 0s;
   transition: background-color 0.4s cubic-bezier(0.05, 0.2, 0.1, 1) 0s;
 }
 .container-wrap[data-nav-pos="after_project_2"] .bottom_controls .next-project:hover:after,
 .container-wrap[data-nav-pos="after_project_2"] .bottom_controls .previous-project:hover:after,
 .blog_next_prev_buttons[data-style="fullwidth_next_prev"] ul .previous-post:hover:after,
 .blog_next_prev_buttons[data-style="fullwidth_next_prev"] ul .next-post:hover:after {
   background-color: rgba(13,13,13,0.9);
 }
 .container-wrap[data-nav-pos="after_project_2"] .bottom_controls .controls li a,
 .blog_next_prev_buttons[data-style="fullwidth_next_prev"]  li a {
   position: absolute;
   top: 0;
   left: 0;
   width: 100%!important;
   height: 100%!important;
   z-index: 101;
   display: block;
 }
 .container-wrap[data-nav-pos="after_project_2"] .bottom_controls .next-project:hover h3,
 .blog_next_prev_buttons[data-style="fullwidth_next_prev"] .next-post:hover h3 {
   -webkit-transform: translateX(-40px) translateZ(0);
   transform: translateX(-40px) translateZ(0);
   backface-visibility: hidden;
 }
 .container-wrap[data-nav-pos="after_project_2"] .bottom_controls .previous-project:hover h3,
 .blog_next_prev_buttons[data-style="fullwidth_next_prev"] .previous-post:hover h3 {
   transform: translateX(40px) translateZ(0);
   backface-visibility: hidden;
 }
 .container-wrap[data-nav-pos="after_project_2"] .bottom_controls .next-project.mouse-leaving h3 .text .line,
 .blog_next_prev_buttons[data-style="fullwidth_next_prev"] .next-post.mouse-leaving h3 .text .line {
   animation: rightLineEnd 0.4s cubic-bezier(0.05, 0.2, 0.1, 1) forwards;
 }
 .container-wrap[data-nav-pos="after_project_2"] .bottom_controls .previous-project.mouse-leaving h3 .text .line, .blog_next_prev_buttons[data-style="fullwidth_next_prev"] .previous-post.mouse-leaving h3 .text .line {
   animation: rightLineEnd2 0.4s cubic-bezier(0.05, 0.2, 0.1, 1) forwards;
 }
 .container-wrap[data-nav-pos="after_project_2"] .bottom_controls .next-project:hover h3 .text .line,
 .portfolio-items[data-ps="8"] .col:hover .line, .blog_next_prev_buttons[data-style="fullwidth_next_prev"] .next-post:hover h3 .text .line {
   -webkit-transform: translateY(-50%) translateX(0px) scaleX(1);
   -webkit-transform-origin: left;
   transform: translateY(-50%) translateX(0px) scaleX(1);
   transform-origin: left;
    animation: rightLineStart 0.4s cubic-bezier(0.05, 0.2, 0.1, 1) forwards;
 }
 .portfolio-items[data-ps="8"] .col:hover .line {
   transform-origin: left;
   animation: portRightLineStart 0.4s cubic-bezier(0.05, 0.15, 0.1, 1) forwards;
 }
 .container-wrap[data-nav-pos="after_project_2"] .bottom_controls .previous-project:hover h3 .text .line,
 .blog_next_prev_buttons[data-style="fullwidth_next_prev"] .previous-post:hover h3 .text .line {
   -webkit-transform: translateY(-50%) translateX(0px) scaleX(1);
   -webkit-transform-origin: right;
   transform: translateY(-50%) translateX(0px) scaleX(1);
   transform-origin: right;
    animation: rightLineStart2 0.4s cubic-bezier(0.05, 0.2, 0.1, 1) forwards;
 }
 .container-wrap[data-nav-pos="after_project_2"] .bottom_controls .next-project h3 .text .line,
 .container-wrap[data-nav-pos="after_project_2"] .bottom_controls .previous-project h3 .text .line,
 .blog_next_prev_buttons[data-style="fullwidth_next_prev"] h3 .text .line,
 .portfolio-items[data-ps="8"] .line {
   height: 2px;
   width: 45px;
   background-color: #fff;
   position: absolute;
   content:'';
   right: -74px;
   display: block;
   backface-visibility: hidden;
   top: 50%; 
   -webkit-transform: translateY(-50%) translateX(28px) scaleX(0);
   -webkit-transform-origin: right;
   transform: translateY(-50%) translateX(28px) scaleX(0);
   transform-origin: right;
 }

*/









.portfolio-items[data-ps="8"] .line {
	right: 32px;
	left: auto;
	bottom: 10px;
	top: auto;
	-ms-transition: none!important;
	-webkit-transition: none!important;
	transition: none!important;
	width: 37px;
}

.container-wrap[data-nav-pos="after_project_2"] .bottom_controls .previous-project h3 .text .line,
.blog_next_prev_buttons[data-style="fullwidth_next_prev"] .previous-post h3 .text .line {
  -webkit-transform: translateY(-50%) translateX(-28px) scaleX(0);
  -webkit-transform-origin: left;
  transform: translateY(-50%) translateX(-28px) scaleX(0);
  transform-origin: left;
  left: -74px;
  right: auto;
}

@keyframes portRightLineStart {
	0% { transform: translateY(-50%) translateX(-25px) scaleX(0); }
	100% { transform: translateY(-50%) translateX(0px) scaleX(1); }
}

@keyframes rightLineStart {
	0% { transform: translateY(-50%) translateX(-88px) scaleX(0); }
	100% { transform: translateY(-50%) translateX(0px) scaleX(1); }
}

@keyframes rightLineEnd {
	0% {  transform: translateY(-50%) translateX(0px) scaleX(1);  }
	100% { transform: translateY(-50%) translateX(28px) scaleX(0); }
}

@keyframes rightLineStart2 {
	0% { transform: translateY(-50%) translateX(88px) scaleX(0); }
	100% { transform: translateY(-50%) translateX(0px) scaleX(1); }
}

@keyframes rightLineEnd2 {
	0% {  transform: translateY(-50%) translateX(0px) scaleX(1);  }
	100% { transform: translateY(-50%) translateX(-28px) scaleX(0); }
}


.container-wrap[data-nav-pos="after_project_2"] .bottom_controls .next-project h3 .next-arrow,
.container-wrap[data-nav-pos="after_project_2"] .bottom_controls .previous-project h3 .next-arrow,
.portfolio-items[data-ps="8"] .next-arrow,
.blog_next_prev_buttons[data-style="fullwidth_next_prev"] h3 .next-arrow { position: absolute; backface-visibility: hidden;
    right: -43px; top: 50%; margin-top: -15px; height: 30px; width: 40px; display: block; transform: translateX(38px); 
     }
.portfolio-items[data-ps="8"] .next-arrow {
	right: 60px;
	left: auto;
	top: auto;
	bottom: -3px;
}
.container-wrap[data-nav-pos="after_project_2"] .bottom_controls .previous-project.mouse-leaving h3 .next-arrow,
.blog_next_prev_buttons[data-style="fullwidth_next_prev"] .previous-post.mouse-leaving h3 .next-arrow {
	animation: rightArrowEnd2 0.7s cubic-bezier(0, 0.2, 0.1, 1) forwards;
}
.container-wrap[data-nav-pos="after_project_2"] .bottom_controls .next-project.mouse-leaving h3 .next-arrow,
.blog_next_prev_buttons[data-style="fullwidth_next_prev"] .next-post.mouse-leaving h3 .next-arrow {
	animation: rightArrowEnd 0.7s cubic-bezier(0, 0.2, 0.1, 1) forwards;
}

.container-wrap[data-nav-pos="after_project_2"] .bottom_controls .previous-project h3 .next-arrow,
.blog_next_prev_buttons[data-style="fullwidth_next_prev"] .previous-post h3 .next-arrow {
	-webkit-transform: translateX(38px) rotate(180deg); 
	transform: translateX(38px) rotate(180deg); 
	left: -43px;
	right: auto;
}

.container-wrap[data-nav-pos="after_project_2"] .bottom_controls .next-project:hover h3 .next-arrow,
.blog_next_prev_buttons[data-style="fullwidth_next_prev"] .next-post:hover h3 .next-arrow {
	animation: rightArrowStart 0.4s cubic-bezier(0.05, 0.2, 0.1, 1) forwards;
}
.container-wrap[data-nav-pos="after_project_2"] .bottom_controls .previous-project:hover h3 .next-arrow,
.blog_next_prev_buttons[data-style="fullwidth_next_prev"] .previous-post:hover h3 .next-arrow {
	animation: rightArrowStart2 0.4s cubic-bezier(0.05, 0.2, 0.1, 1) forwards;
}


.container-wrap[data-nav-pos="after_project_2"] .bottom_controls .next-project:hover h3 .next-arrow,
.container-wrap[data-nav-pos="after_project_2"] .bottom_controls .previous-project:hover h3 .next-arrow,
.blog_next_prev_buttons[data-style="fullwidth_next_prev"] .previous-post:hover h3 .next-arrow,
.blog_next_prev_buttons[data-style="fullwidth_next_prev"] .next-post:hover h3 .next-arrow {
	-webkit-transform: translateX(42px);
	transform: translateX(42px);
}


@keyframes rightArrowStart {
	0% { transform: translateX(-50px); }
	100% { transform: translateX(42px); }
}

@keyframes rightArrowEnd {
	0% { transform: translateX(42px); }
	100% { transform: translateX(75px); }
}

@keyframes rightArrowStart2 {
	0% { transform: translateX(50px) rotate(180deg); }
	100% { transform: translateX(-42px) rotate(180deg); }
}

@keyframes rightArrowEnd2 {
	0% { transform: translateX(-42px) rotate(180deg); }
	100% { transform: translateX(-75px) rotate(180deg); }
}


.container-wrap[data-nav-pos="after_project_2"] .bottom_controls .next-project h3 .next-arrow line,
.container-wrap[data-nav-pos="after_project_2"] .bottom_controls .previous-project h3 .next-arrow line,
.blog_next_prev_buttons[data-style="fullwidth_next_prev"] .previous-post h3 .next-arrow line, 
.blog_next_prev_buttons[data-style="fullwidth_next_prev"] .next-post h3 .next-arrow line, 
.portfolio-items[data-ps="8"] line {
    stroke-width: 2px;
    stroke-dasharray: 10px;
    stroke-dashoffset: 30px;
}
.container-wrap[data-nav-pos="after_project_2"] .bottom_controls .next-project h3 .next-arrow line,
.container-wrap[data-nav-pos="after_project_2"] .bottom_controls .previous-project h3 .next-arrow line,
.blog_next_prev_buttons[data-style="fullwidth_next_prev"] .previous-post h3 .next-arrow line, 
.blog_next_prev_buttons[data-style="fullwidth_next_prev"] .next-post h3 .next-arrow line, 
.portfolio-items[data-ps="8"] line {
     stroke: #ffffff; 
}
.portfolio-items[data-ps="8"] line {
-ms-transition: none!important;
	-webkit-transition: none!important;
	transition: none!important;
}

.container-wrap[data-nav-pos="after_project_2"] .bottom_controls .next-project.mouse-leaving h3 .next-arrow line,
.container-wrap[data-nav-pos="after_project_2"] .bottom_controls .previous-project.mouse-leaving h3 .next-arrow line,
.blog_next_prev_buttons[data-style="fullwidth_next_prev"] .previous-post.mouse-leaving h3 .next-arrow line,
.blog_next_prev_buttons[data-style="fullwidth_next_prev"] .next-post.mouse-leaving h3 .next-arrow line {
	animation: rightArrowLineEnd 0.4s cubic-bezier(0.3, 0.2, 0.1, 1) 0.25s forwards;
	stroke-dashoffset: 40px;
}

body .container-wrap[data-nav-pos="after_project_2"] .bottom_controls .next-project:hover .next-arrow line,
body .container-wrap[data-nav-pos="after_project_2"] .bottom_controls .previous-project:hover .next-arrow line,
.blog_next_prev_buttons[data-style="fullwidth_next_prev"] .controls .previous-post:hover .next-arrow line,
.blog_next_prev_buttons[data-style="fullwidth_next_prev"] .controls .next-post:hover .next-arrow line {
	animation: rightArrowLineStart 0.3s cubic-bezier(0.05, 0.2, 0.1, 1) 0.1s forwards;
	stroke-dashoffset: 30px;
}
.portfolio-items[data-ps="8"] .col:hover line {
	animation: rightArrowLineStart 0.48s cubic-bezier(0.05, 0.2, 0.1, 1) 0.12s forwards;
	stroke-dashoffset: 30px;
}


@keyframes rightArrowLineStart {
	0% { stroke-dashoffset: 30px; }
	100% { stroke-dashoffset: 40px; }
}

@keyframes rightArrowLineEnd {
	0% { stroke-dashoffset: 40px; }
	100% { stroke-dashoffset: 50px; }
}



.container-wrap[data-nav-pos="after_project_2"] .bottom_controls .next-project h3,
.container-wrap[data-nav-pos="after_project_2"] .bottom_controls .previous-project h3,
.blog_next_prev_buttons[data-style="fullwidth_next_prev"] h3 {
	display: inline-block;
	-webkit-transform: translateX(0px) translateZ(0);
	-webkit-transition: transform 0.4s cubic-bezier(0.05, 0.2, 0.1, 1);
	transform: translateX(0px) translateZ(0);
	transition: transform 0.4s cubic-bezier(0.05, 0.2, 0.1, 1);
}
.container-wrap[data-nav-pos="after_project_2"] .bottom_controls .next-project span:not(.text),
.blog_next_prev_buttons[data-style="fullwidth_next_prev"] .next-post span:not(.text) {
	display: block;
	font-size: 14px;
	text-align: left;
}
.container-wrap[data-nav-pos="after_project_2"] .bottom_controls .previous-project span:not(.text),
.blog_next_prev_buttons[data-style="fullwidth_next_prev"] .previous-post span:not(.text) {
	display: block;
	font-size: 14px;
	text-align: right;
}
.container-wrap[data-nav-pos="after_project_2"] .bottom_controls .next-project h3,
.container-wrap[data-nav-pos="after_project_2"] .bottom_controls .next-project span,
.container-wrap[data-nav-pos="after_project_2"] .bottom_controls .previous-project h3,
.container-wrap[data-nav-pos="after_project_2"] .bottom_controls .previous-project span,
.blog_next_prev_buttons[data-style="fullwidth_next_prev"] .next-post h3, .blog_next_prev_buttons[data-style="fullwidth_next_prev"] .next-post span,
.blog_next_prev_buttons[data-style="fullwidth_next_prev"] .previous-post h3, .blog_next_prev_buttons[data-style="fullwidth_next_prev"] .next-post span {
	color: #fff;
	position: relative;
	z-index: 100;
}

.container-wrap[data-nav-pos="after_project_2"] .bottom_controls .proj-bg-img,
.blog_next_prev_buttons[data-style="fullwidth_next_prev"] .post-bg-img {
	width: 100%;
	position: absolute;
	left: 0;
	top: 0;
	background-size: cover;
	background-position: center;
	height: 100%;
	-ms-transition: transform  0.4s cubic-bezier(0.05, 0.2, 0.1, 1) 0s;
    -webkit-transition: transform  0.4s cubic-bezier(0.05, 0.2, 0.1, 1) 0s;
    transition: transform  0.4s cubic-bezier(0.05, 0.2, 0.1, 1) 0s;
}
.container-wrap[data-nav-pos="after_project_2"] .bottom_controls li:hover .proj-bg-img, .blog_next_prev_buttons[data-style="fullwidth_next_prev"] li:hover .post-bg-img {
	-webkit-transform: scale(1.1);
    transform: scale(1.1);
}
</style>