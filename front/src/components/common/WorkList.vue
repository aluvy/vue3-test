<template>
  <div class="work-wrap">
    <template  v-for="listgroup in listGroups" :key="listgroup">
      <ul class="work-group" :class="{ len1: listgroup.length === 1, len4: listgroup.length === 4, len5: listgroup.length === 5 }">
        <li v-for="list in listgroup" :key="list" :class="{ size1: list.size === 1, size2: list.size === 2, order1: list.order===1, order2: list.order===2, order3: list.order===3, order4: list.order===4, order5: list.order===5 }">
          <router-link :to="`/work/${list.idx}`" class="gsap-item">
            <div class="title-wrap">
              <p class="title">
                <span v-for="ttl in list.title" :key="ttl">{{ ttl }}</span>
              </p>
              <p class="date">{{ list.date.slice(0,4) }}.{{ list.date.slice(4,6) }}</p>
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
  }
}
</script>

<style>
.work-group.len1 { display: block; }
.work-group.len4 { display: grid; grid-template-columns: repeat(4, 1fr); }
.work-group.len5 { display: grid; grid-template-columns: repeat(4, 1fr); }

.work-group li { perspective: 2000px; }
.work-group li a { position: relative; display: block; }
.work-group li a::after { position: absolute; inset: 0; content: ''; background: rgba(0,0,0, 0.3); transition: background .7s; z-index: 2; }
.work-group li .title-wrap { position: absolute; left: 0; bottom: 0; width: 100%; height: 50%; display: flex; flex-direction: column; align-items: center; justify-content: flex-end; color: #fff; padding: 0 2rem 4rem; background: linear-gradient(0deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%); z-index: 3; }

.work-group li .title-wrap .title,
.work-group li .title-wrap .date { font-weight: normal; line-height: 1; text-align: center; word-break: keep-all; }
.work-group li .title-wrap .title { font-size: 1.8rem; letter-spacing: 0.1rem; }
.work-group li .title-wrap .title span { display: block; }
.work-group li .title-wrap .date { font-size: 1.2rem; font-style: italic; margin-top: 1.4rem; }
.work-group li .bg { position: relative; background-size: cover; background-position: center; z-index: 1; }
.work-group li .bg::before { content: ''; display: block; padding-bottom: 100%; }

.len1 li .bg::before { padding-bottom: 50%; }

.len5 li.order1.size2 { grid-column: 1 / 3; grid-row: 1 / 3; order: 1; }
.len5 li.order2.size2 { grid-column: 2 / 4; grid-row: 1 / 3; order: 2; }
.len5 li.order3.size2 { grid-column: 3 / 5; grid-row: 1 / 3; order: 3; }

.work-group.len1 li .title-wrap .title,
.work-group.len5 li.size2 .title-wrap .title { font-size: 3rem; }
.work-group.len1 li .title-wrap .date,
.work-group.len5 li.size2 .title-wrap .date { font-size: 1.6rem; margin-top: 1.6rem; }

/* hover */
.work-group li a:hover::after { background: rgba(0,0,0,0); }

.work-group li .onEnter { animation-name: workList-item; animation-duration: .7s; }
.work-group li.order1 .onEnter { animation-delay: 0s; }
.work-group li.order2 .onEnter { animation-delay: .1s; }
.work-group li.order3 .onEnter { animation-delay: .2s; }
.work-group li.order4 .onEnter { animation-delay: 0s; }
.work-group li.order5 .onEnter { animation-delay: .1s; }

@keyframes workList-item {
  0% { transform: rotateX(-45deg) translate3d(0, 20%, 0); }
  100% { transform: rotateX(0) translate3d(0,0,0); }
}


@media only screen and (max-width: 1024px) {
  .work-group.len4 { display: grid; grid-template-columns: repeat(2, 1fr); }
  .work-group.len5 { display: grid; grid-template-columns: repeat(2, 1fr); }

  .len5 li.order1.size2 { grid-column: 1 / 3; grid-row: 1 / 3; }
  .len5 li.order2.size2 { grid-column: 1 / 3; grid-row: 2 / 4; }
  .len5 li.order3.size2 { grid-column: 1 / 3; grid-row: 3 / 4; }
}
@media only screen and (max-width: 768px) {
  .work-group li .title-wrap { padding: 0 2rem 3rem; }
  .work-group li .title-wrap .title { font-size: 1.6rem; }

  .work-group.len1 li .title-wrap .title,
  .work-group.len5 li.size2 .title-wrap .title { font-size: 2rem; }
  .work-group.len1 li .title-wrap .date,
  .work-group.len5 li.size2 .title-wrap .date { font-size: 1.4rem; margin-top: 1.2rem; }
}
@media only screen and (max-width: 425px) {
  .work-group.len4 { display: grid; grid-template-columns: repeat(1, 1fr); }
  .work-group.len5 { display: grid; grid-template-columns: repeat(1, 1fr); }

  .len5 li.order1.size2,
  .len5 li.order2.size2,
  .len5 li.order3.size2 { grid-column: initial; grid-row: initial; }

  .work-group li.order1.onEnter,
  .work-group li.order2.onEnter,
  .work-group li.order3.onEnter,
  .work-group li.order4.onEnter,
  .work-group li.order5.onEnter { animation-delay: 0s; }
}
</style>./WorkList.vue