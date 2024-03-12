<template>
  <div class="work-wrap">
    <template  v-for="listgroup in listGroups" :key="listgroup">
      <ul class="work-group" :class="`layout-${listgroup.layout}`" >
        <li v-for="list in listgroup.data" :key="list" :class="`theme-${list.theme}`">
          <router-link :to="`/work/${list.idx}`" class="gsap-item">
            <div class="title-wrap">
              <p class="title">
                <span v-for="ttl in list.title" :key="ttl">{{ ttl }}</span>
              </p>
            </div>
            <div class="bg" :style="`background-image:url(${list.image})`"></div>
          </router-link>
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    listGroups: Object,
  },
}
</script>

<style>
:root {
  --workitem-height: 35%
}
.work-group { display: grid; grid-template-columns: repeat(4, 1fr); }

.work-group li { perspective: 2000px; }
.work-group li a { position: relative; display: block; }
.work-group li a::after { position: absolute; inset: 0; content: ''; /* background: rgba(0,0,0, 0.3);*/ transition: background .5s; z-index: 2; }
.work-group li .title-wrap { position: absolute; left: 0; bottom: 0; width: 100%; height: 50%; display: flex; flex-direction: column; align-items: flex-start; justify-content: flex-end; color: #fff; padding: 2.2rem; z-index: 3; }
.work-group li.theme-white { color: #fff; }
.work-group li.theme-black { color: #000; }

.work-group li .title-wrap .title { font-size: 2.4rem; letter-spacing: 0.1rem; }
.work-group li .bg { position: relative; background-size: cover; background-position: center; z-index: 1; }
.work-group li .bg::before { content: ''; display: block; padding-bottom: calc(var(--workitem-height) * 2); }


/* layout */
.work-group.layout-51 li:nth-child(1) { grid-column: 1 / 3; grid-row: 1 / 3; }
/* .work-group.layout-51 li:nth-child(1) .title-wrap { padding: 4.4rem; }
.work-group.layout-51 li:nth-child(1) .title-wrap .title { font-size: 2.4rem; } */

.work-group.layout-52 li:nth-child(3) { grid-column: 3 / 5; grid-row: 1 / 3; }
/* .work-group.layout-52 li:nth-child(3) .title-wrap { padding: 4.4rem; }
.work-group.layout-52 li:nth-child(3) .title-wrap .title { font-size: 2.4rem; } */

.work-group.layout-41 li:nth-child(1) { grid-column: 1 / 3; grid-row: 1 / 3; }
.work-group.layout-41 li:nth-child(1) .title-wrap { padding: 4.4rem; }
.work-group.layout-41 li:nth-child(1) .title-wrap .title { font-size: 2.4rem; }
.work-group.layout-41 li:nth-child(2) .bg::before { padding-bottom: var(--workitem-height); }
.work-group.layout-41 li:nth-child(2) { grid-column: 3 / 5; grid-row: 1 / 2; }

.work-group.layout-42 li:nth-child(1) { grid-column: 1 / 3; grid-row: 1 / 3; }
.work-group.layout-42 li:nth-child(1) .title-wrap { padding: 4.4rem; }
.work-group.layout-42 li:nth-child(1) .title-wrap .title { font-size: 2.4rem; }
.work-group.layout-42 li:nth-child(4) .bg::before { padding-bottom: var(--workitem-height); }
.work-group.layout-42 li:nth-child(4) { grid-column: 3 / 5; grid-row: 2 / 3; }


.work-group.layout-43 li:nth-child(1) .bg::before { padding-bottom: var(--workitem-height); }
.work-group.layout-43 li:nth-child(1) { grid-column: 1 / 3; grid-row: 1 / 2; }
.work-group.layout-43 li:nth-child(2) { grid-column: 3 / 5; grid-row: 1 / 3; }
/* .work-group.layout-43 li:nth-child(4) .title-wrap { padding: 4.4rem; }
.work-group.layout-43 li:nth-child(4) .title-wrap .title { font-size: 2.4rem; } */

.work-group.layout-44 li:nth-child(3) { grid-column: 3 / 5; grid-row: 1 / 3; }
/* .work-group.layout-44 li:nth-child(3) .title-wrap { padding: 4.4rem; }
.work-group.layout-44 li:nth-child(3) .title-wrap .title { font-size: 2.4rem; } */
.work-group.layout-44 li:nth-child(4) .bg::before { padding-bottom: var(--workitem-height); }
.work-group.layout-44 li:nth-child(4) { grid-column: 1 / 3; grid-row: 2 / 3; }

.work-group.layout-45 li:nth-child(1) .bg::before { padding-bottom: calc(var(--workitem-height) * 3); }
.work-group.layout-45 li:nth-child(1) { grid-column: 1 / 3; grid-row: 1 / 4; }
.work-group.layout-45 li:nth-child(2) .bg::before,
.work-group.layout-45 li:nth-child(3) .bg::before,
.work-group.layout-45 li:nth-child(4) .bg::before { padding-bottom: var(--workitem-height); }
.work-group.layout-45 li:nth-child(2) { grid-column: 3 / 5; grid-row: 1 / 2; }
.work-group.layout-45 li:nth-child(3) { grid-column: 3 / 5; grid-row: 2 / 3; }
.work-group.layout-45 li:nth-child(4) { grid-column: 3 / 5; grid-row: 3 / 4; }

.work-group.layout-46 li:nth-child(1) .bg::before,
.work-group.layout-46 li:nth-child(3) .bg::before,
.work-group.layout-46 li:nth-child(4) .bg::before { padding-bottom: var(--workitem-height); }
.work-group.layout-46 li:nth-child(1) { grid-column: 1 / 3; grid-row: 1 / 2; }
.work-group.layout-46 li:nth-child(3) { grid-column: 1 / 3; grid-row: 2 / 3; }
.work-group.layout-46 li:nth-child(4) { grid-column: 1 / 3; grid-row: 3 / 4; }
.work-group.layout-46 li:nth-child(2) .bg::before { padding-bottom: calc(var(--workitem-height) * 3); }
.work-group.layout-46 li:nth-child(2) { grid-column: 3 / 5; grid-row: 1 / 4; }
/* .work-group.layout-46 li:nth-child(2) .title-wrap { padding: 4.4rem; }
.work-group.layout-46 li:nth-child(2) .title-wrap .title { font-size: 2.4rem; } */

.work-group.layout-31 li:nth-child(1) { grid-column: 1 / 3; grid-row: 1 / 3; }
/* .work-group.layout-31 li:nth-child(1) .title-wrap { padding: 4.4rem; }
.work-group.layout-31 li:nth-child(1) .title-wrap .title { font-size: 2.4rem; } */
.work-group.layout-31 li:nth-child(2) .bg::before,
.work-group.layout-31 li:nth-child(3) .bg::before { padding-bottom: var(--workitem-height); }
.work-group.layout-31 li:nth-child(2) { grid-column: 3 / 5; grid-row: 1 / 2; }
.work-group.layout-31 li:nth-child(3) { grid-column: 3 / 5; grid-row: 2 / 3; }

.work-group.layout-32 li:nth-child(1) .bg::before,
.work-group.layout-32 li:nth-child(3) .bg::before { padding-bottom: var(--workitem-height); }
.work-group.layout-32 li:nth-child(1) { grid-column: 1 / 3; grid-row: 1 / 2; }
.work-group.layout-32 li:nth-child(3) { grid-column: 1 / 3; grid-row: 2 / 3; }
.work-group.layout-32 li:nth-child(2) { grid-column: 3 / 5; grid-row: 1 / 3; }

.work-group.layout-33 li:nth-child(1) .bg::before { padding-bottom: var(--workitem-height); }
.work-group.layout-33 li:nth-child(1) { grid-column: 1 / 3; }

.work-group.layout-34 li:nth-child(3) .bg::before { padding-bottom: var(--workitem-height); }
.work-group.layout-34 li:nth-child(3) { grid-column: 3 / 5; }

.work-group.layout-21 li .bg::before { padding-bottom: var(--workitem-height); }
.work-group.layout-21 li:nth-child(1) { grid-column: 1 / 3; }
.work-group.layout-21 li:nth-child(2) { grid-column: 3 / 5; }


/* hover */
.work-group li a:hover::after { background: rgba(0,0,0, 0.5); }

.work-group li .onEnter { animation-name: workList-item; animation-duration: .7s; }
.work-group li:nth-child(1) .onEnter { animation-delay: 0s; }
.work-group li:nth-child(2) .onEnter { animation-delay: .1s; }
.work-group li:nth-child(3) .onEnter { animation-delay: .2s; }
.work-group li:nth-child(4) .onEnter { animation-delay: 0s; }
.work-group li:nth-child(5) .onEnter { animation-delay: .1s; }

@keyframes workList-item {
  0% { transform: rotateX(-45deg) translate3d(0, 20%, 0); }
  100% { transform: rotateX(0) translate3d(0,0,0); }
}



@media only screen and (max-width: 1440px) {
  :root {
    --workitem-height: 55%;
  }
  .work-group li .title-wrap { padding: 2.2rem; }
}

@media only screen and (max-width: 1024px) {
}

@media only screen and (max-width: 768px) {
  :root {
    --workitem-height: 52%;
  }
  .work-group { display: block; }
  .work-group li .title-wrap { padding: 0 2rem 3rem; }
  .work-group li .title-wrap .title { font-size: 1.6rem; }

  .work-group li .bg::before,
  .work-group.layout-41 li:nth-child(2) .bg::before,
  .work-group.layout-42 li:nth-child(4) .bg::before,
  .work-group.layout-43 li:nth-child(1) .bg::before,
  .work-group.layout-44 li:nth-child(4) .bg::before,
  .work-group.layout-45 li:nth-child(1) .bg::before,
  .work-group.layout-45 li:nth-child(4) .bg::before,
  .work-group.layout-46 li:nth-child(4) .bg::before,
  .work-group.layout-46 li:nth-child(2) .bg::before,
  .work-group.layout-31 li:nth-child(3) .bg::before,
  .work-group.layout-32 li:nth-child(3) .bg::before,
  .work-group.layout-33 li:nth-child(1) .bg::before,
  .work-group.layout-34 li:nth-child(3) .bg::before,
  .work-group.layout-21 li .bg::before { padding-bottom: var(--workitem-height); }



  /* .work-group.len1 li .title-wrap .title,
  .work-group.len5 li.size2 .title-wrap .title { font-size: 2rem; } */
}
@media only screen and (max-width: 425px) {
  /* .work-group.len4 { display: grid; grid-template-columns: repeat(1, 1fr); }
  .work-group.len5 { display: grid; grid-template-columns: repeat(1, 1fr); } */

  /* .len5 li.order1.size2,
  .len5 li.order2.size2,
  .len5 li.order3.size2 { grid-column: initial; grid-row: initial; } */

  /* .work-group li.order1.onEnter,
  .work-group li.order2.onEnter,
  .work-group li.order3.onEnter,
  .work-group li.order4.onEnter,
  .work-group li.order5.onEnter { animation-delay: 0s; } */
}
</style>./WorkList.vue