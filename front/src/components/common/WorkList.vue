<template>
  <div class="insight-wrap">
    <template  v-for="listgroup in listgroups" :key="listgroup">
      <ul class="insight-group" :class="{ len1: listgroup.length === 1, len4: listgroup.length === 4, len5: listgroup.length === 5 }">
        <li v-for="list in listgroup" :key="list" :class="{ size1: list.size === 1, size2: list.size === 2, order1: list.order===1, order2: list.order===2, order3: list.order===3, order4: list.order===4, order5: list.order===5 }" class="gsap-item">
          <router-link :to="`/insight/${list.idx}`">
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
    listgroups: Object,
  }
}
</script>

<style>
.insight-group.len1 { display: block; }
.insight-group.len4 { display: grid; grid-template-columns: repeat(4, 1fr); }
.insight-group.len5 { display: grid; grid-template-columns: repeat(4, 1fr); }

.insight-group li a { position: relative; display: block; }
.insight-group li a::after { position: absolute; inset: 0; content: ''; background: rgba(0,0,0, 0.3); transition: background .7s; z-index: 2; }
.insight-group li .title-wrap { position: absolute; left: 0; bottom: 0; width: 100%; height: 50%; display: flex; flex-direction: column; align-items: center; justify-content: flex-end; color: #fff; padding: 0 2rem 4rem; background: linear-gradient(0deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%); z-index: 3; }

.insight-group li .title-wrap .title,
.insight-group li .title-wrap .date { font-weight: normal; line-height: 1; text-align: center; word-break: keep-all; }
.insight-group li .title-wrap .title { font-size: 1.8rem; letter-spacing: 0.1rem; }
.insight-group li .title-wrap .title span { display: block; }
.insight-group li .title-wrap .date { font-size: 1.2rem; font-style: italic; margin-top: 1.4rem; }
.insight-group li .bg { position: relative; background-size: cover; background-position: center; z-index: 1; }
.insight-group li .bg::before { content: ''; display: block; padding-bottom: 100%; }

.len1 li .bg::before { padding-bottom: 50%; }

.len5 li.order1.size2 { grid-column: 1 / 3; grid-row: 1 / 3; order: 1; }
.len5 li.order2.size2 { grid-column: 2 / 4; grid-row: 1 / 3; order: 2; }
.len5 li.order3.size2 { grid-column: 3 / 5; grid-row: 1 / 3; order: 3; }

.insight-group.len1 li .title-wrap .title,
.insight-group.len5 li.size2 .title-wrap .title { font-size: 3rem; }
.insight-group.len1 li .title-wrap .date,
.insight-group.len5 li.size2 .title-wrap .date { font-size: 1.6rem; margin-top: 1.6rem; }

/* hover */
.insight-group li a:hover::after { background: rgba(0,0,0,0); }

.insight-group li.onEnter { animation-name: slide-up-10; animation-duration: .5s; }
.insight-group li.order1.onEnter { animation-delay: 0s; }
.insight-group li.order2.onEnter { animation-delay: .1s; }
.insight-group li.order3.onEnter { animation-delay: .2s; }
.insight-group li.order4.onEnter { animation-delay: 0s; }
.insight-group li.order5.onEnter { animation-delay: .1s; }


@media only screen and (max-width: 1024px) {
  .insight-group.len4 { display: grid; grid-template-columns: repeat(2, 1fr); }
  .insight-group.len5 { display: grid; grid-template-columns: repeat(2, 1fr); }

  .len5 li.order1.size2 { grid-column: 1 / 3; grid-row: 1 / 3; }
  .len5 li.order2.size2 { grid-column: 1 / 3; grid-row: 2 / 4; }
  .len5 li.order3.size2 { grid-column: 1 / 3; grid-row: 3 / 4; }
}
@media only screen and (max-width: 768px) {
  .insight-group li .title-wrap { padding: 0 2rem 3rem; }
  .insight-group li .title-wrap .title { font-size: 1.6rem; }

  .insight-group.len1 li .title-wrap .title,
  .insight-group.len5 li.size2 .title-wrap .title { font-size: 2rem; }
  .insight-group.len1 li .title-wrap .date,
  .insight-group.len5 li.size2 .title-wrap .date { font-size: 1.4rem; margin-top: 1.2rem; }
}
@media only screen and (max-width: 425px) {
  .insight-group.len4 { display: grid; grid-template-columns: repeat(1, 1fr); }
  .insight-group.len5 { display: grid; grid-template-columns: repeat(1, 1fr); }

  .len5 li.order1.size2,
  .len5 li.order2.size2,
  .len5 li.order3.size2 { grid-column: initial; grid-row: initial; }

  .insight-group li.order1.onEnter,
  .insight-group li.order2.onEnter,
  .insight-group li.order3.onEnter,
  .insight-group li.order4.onEnter,
  .insight-group li.order5.onEnter { animation-delay: 0s; }
}
</style>./WorkList.vue