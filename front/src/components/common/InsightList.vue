<template>
  <div class="insight-wrap">
    <template  v-for="listgroup in listGroups" :key="listgroup">
      <ul class="insight-group" :class="`layout-${listgroup.layout}`">
        <li v-for="list in listgroup.data" :key="list" :class="`theme-${list.theme}`">
          <router-link :to="`/insightView/${list.idx}`" class="gsap-item">
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
.insight-group { display: grid; grid-template-columns: repeat(4, 1fr); }

.insight-group li a { position: relative; display: block; }
.insight-group li a::after { position: absolute; inset: 0; content: ''; background: rgba(0,0,0, 0.3); transition: background .7s; z-index: 2; }
.insight-group li .title-wrap { position: absolute; left: 0; bottom: 0; width: 100%; height: 50%; display: flex; flex-direction: column; align-items: center; justify-content: flex-end; color: #fff; padding: 0 2rem 2.4rem; background: linear-gradient(0deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%); z-index: 3; }

.insight-group li .title-wrap .title,
.insight-group li .title-wrap .date { font-weight: normal; line-height: 1.1; text-align: center; word-break: keep-all; }
.insight-group li .title-wrap .title { font-size: 1.8rem; letter-spacing: 0.1rem; }
.insight-group li .title-wrap .title span { display: block; }
.insight-group li .title-wrap .date { font-size: 1.2rem; font-style: italic; margin-top: 1.4rem; }

.insight-group li .bg { position: relative; background-size: cover; background-position: center; z-index: 1; }
.insight-group li .bg::before { content: ''; display: block; padding-bottom: 100%; }

/* layout */
.insight-group.layout-51 li:nth-child(1) { grid-column: 1 / 3; grid-row: 1 / 3; }
.insight-group.layout-52 li:nth-child(3) { grid-column: 3 / 5; grid-row: 1 / 3; }
.insight-group.layout-53 li:nth-child(2) { grid-column: 2 / 4; grid-row: 1 / 3; }
.insight-group.layout-11 li:nth-child(1) { grid-column: 1 / 5; }
.insight-group.layout-11 li .bg::before { padding-bottom: 50%; }

/* size */
.insight-group.layout-11 .title-wrap .title,
.insight-group.layout-51 li:nth-child(1) .title-wrap .title,
.insight-group.layout-52 li:nth-child(3) .title-wrap .title,
.insight-group.layout-53 li:nth-child(2) .title-wrap .title { font-size: 3rem; }
.insight-group.layout-11  .title-wrap .date,
.insight-group.layout-51 li:nth-child(1) .title-wrap .date,
.insight-group.layout-52 li:nth-child(3) .title-wrap .date,
.insight-group.layout-53 li:nth-child(2) .title-wrap .date { font-size: 1.6rem; margin-top: 1.6rem; }


/* hover */
.insight-group li a:hover::after { background: rgba(0,0,0,0); }

.insight-group li .onEnter { animation-name: slide-up-20; animation-duration: .5s; }
.insight-group li:nth-child(1) .onEnter { animation-delay: 0s; }
.insight-group li:nth-child(2) .onEnter { animation-delay: .1s; }
.insight-group li:nth-child(3) .onEnter { animation-delay: .2s; }
.insight-group li:nth-child(4) .onEnter { animation-delay: 0s; }
.insight-group li:nth-child(4) .onEnter { animation-delay: .1s; }


@media only screen and (max-width: 1024px) {
}
@media only screen and (max-width: 768px) {
  .insight-group { grid-template-columns: repeat(2, 1fr); }
  .insight-group li .title-wrap .title { font-size: 1.6rem; }

  .insight-group.layout-11 .title-wrap .title,
  .insight-group.layout-51 li:nth-child(1) .title-wrap .title,
  .insight-group.layout-52 li:nth-child(3) .title-wrap .title,
  .insight-group.layout-53 li:nth-child(2) .title-wrap .title,
  .insight-group.layout-11 li:nth-child(1) .title-wrap .title { font-size: 2.4rem; }
  .insight-group.layout-11  .title-wrap .date,
  .insight-group.layout-51 li:nth-child(1) .title-wrap .date,
  .insight-group.layout-52 li:nth-child(3) .title-wrap .date,
  .insight-group.layout-53 li:nth-child(2) .title-wrap .date,
  .insight-group.layout-11 li:nth-child(1) .title-wrap .date { font-size: 1.4rem; margin-top: 1rem; }

  .insight-group.layout-51 li:nth-child(1) { grid-column: 1 / 3; grid-row: 1 / 3; }
  .insight-group.layout-52 li:nth-child(3) { grid-column: 1 / 3; grid-row: 3 / 5; }
  .insight-group.layout-53 li:nth-child(2) { grid-column: 1 / 3; grid-row: 2 / 4; }
  .insight-group.layout-11 li:nth-child(1) { grid-column: 1 / 3; }
}
@media only screen and (max-width: 425px) {
  .insight-group { display: block; }

  .insight-group.layout-11 li .bg::before { padding-bottom: 100%; }

  .insight-group.layout-11 .title-wrap .title,
  .insight-group.layout-51 li:nth-child(1) .title-wrap .title,
  .insight-group.layout-52 li:nth-child(3) .title-wrap .title,
  .insight-group.layout-53 li:nth-child(2) .title-wrap .title,
  .insight-group.layout-11 li:nth-child(1) .title-wrap .title { font-size: 1.6rem; }
  .insight-group.layout-11  .title-wrap .date,
  .insight-group.layout-51 li:nth-child(1) .title-wrap .date,
  .insight-group.layout-52 li:nth-child(3) .title-wrap .date,
  .insight-group.layout-53 li:nth-child(2) .title-wrap .date,
  .insight-group.layout-11 li:nth-child(1) .title-wrap .date { font-size: 1.2rem; margin-top: 1rem; }

  .insight-group li:nth-child(1) .onEnter,
  .insight-group li:nth-child(2) .onEnter,
  .insight-group li:nth-child(3) .onEnter,
  .insight-group li:nth-child(4) .onEnter,
  .insight-group li:nth-child(4) .onEnter { animation-delay: 0s; }
}
</style>