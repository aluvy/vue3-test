<template>
  <div id="work-view">
    
    <section class="section black work-visual" data-theme="white">
      <VisualFull
        :titles = "title"
        :descs = "[date]"
      >
        <template #visual>
          <div class="img">
            <img :src="visual">
          </div>
        </template>
      </VisualFull>
    </section>

    <div id="content">
      <section class="section white" data-theme="white">
        


Client
현대카드
Open
2022.06
Role
UX Planning
Design
Publishing
현대법인카드 PC/Mobile 웹 구축
현대카드는 화폐 그 이상의 가치와 혁신을 담은 카드 플레이트와 디자인, 프리미엄카드 패키지, 그리고
잊혀졌던 아날로그 감성과 영감을 일깨워주는 라이브러리, 전 세계 최정상급 아티스트를 초청해 최고의
공연을 선사하는 슈퍼콘서트와 컬처프로젝트, 실험적인 시각예술 전시를 선보이는 스토리지 전시까지
혁신적인 브랜딩과 마케팅으로 트렌드를 주도하고 있습니다.
최신 가이드를 적용하여 현대법인카드에서도 일관된 브랜드 Identity를 느낄 수 있도록 하였습니다.


<img src="@/assets/images/work/view_img-01.png">
<img src="@/assets/images/work/view_img-02.png">
<img src="@/assets/images/work/view_img-03.png">
<img src="@/assets/images/work/view_img-04.png">
<img src="@/assets/images/work/view_img-05.png">
<img src="@/assets/images/work/view_img-06.png">
<img src="@/assets/images/work/view_img-07.png">
<img src="@/assets/images/work/view_img-08.png">
<img src="@/assets/images/work/view_img-09.png">
<img src="@/assets/images/work/view_img-10.png">



Partnership

Adobe Korea

Hyundaicard My Company

The Fifty-One



      </section>

      <section class="section white" data-theme="white">
        <LinkWorkView :Links = "[
          { class:'prev', url: '/test', stitle: 'Previous Project', title: [`HYUNDAICARD`, `My Company`], img: 'http://www.the-51.com/wp-content/uploads/2022/11/hyndaicard-main.png', },
          { class:'next', url: '/test', stitle: 'Next Project', title: [`AMOREPACIFIC`], img: 'http://www.the-51.com/wp-content/uploads/2022/05/img.png', },
        ]"></LinkWorkView>
      </section>
    </div>

  </div>
</template>

<script>
import FetchPageMixin from '@/mixins/FetchPageMixin';

// component
import VisualFull from '@/components/visual/VisualFull.vue'
import LinkWorkView from '@/components/common/LinkWorkView.vue'
// import ContentTitle from '@/components/common/ContentTitle.vue'

// assets
// import visual from '@/assets/images/insight/20240101-visual.jpg'
import visual from '@/assets/images/insight/visual.jpg'

export default {
  mixins: [FetchPageMixin],
  components: {
    VisualFull,
    LinkWorkView,
    // ContentTitle,
  },
  data() {
    return {
      visual,
      title: [],
      date: '',
      data: [
        { title: '', desc: '', image: '', },
        { title: '', desc: '', image: '', },
        { title: '', desc: '', image: '', },
        { title: '', desc: '', image: '', },
        { title: '', desc: '', image: '', },
      ],
    }
  },
  mounted() {
    this.title = ['HYUNDAICARD', 'My Company'];
    // this.title = this.title.map((o,i)=>{
    //   return { delay: i, text: o }
    // })

    this.date = 'Web & Mobile Site';

    this.PageReady();
  }
}
</script>

<style scoped>
</style>