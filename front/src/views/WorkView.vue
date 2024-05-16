<template>
  <div id="work-view">
    
    <section class="section black work-visual" data-theme="white">
      <VisualFull
        :titles = "title"
        :descs = "[date]"
        :dimmed = "false"
      >
        <template #visual>
          <div class="img">
            <img src="http://www.the-51.com/wp-content/uploads/2022/11/hyndaicard-main.png">
          </div>
        </template>
      </VisualFull>
    </section>

    <div id="content">
      <section class="section white info" data-theme="white">
        <div class="inner">
          <WorkProjectInfo
            :infos = "[
              { title: `Client`, txt: [`현대카드`] },
              { title: `Open`, txt: [`2022.06`] },
              { title: `Role`, txt: [`UX Planning`, `Design`, `Publishing`] }
            ]"
            :project = "{ title: `현대법인카드 PC/Mobile 웹 구축`, desc: `현대카드는 화폐 그 이상의 가치와 혁신을 담은 카드 플레이트와 디자인, 프리미엄카드 패키지, 그리고 잊혀졌던 아날로그 감성과 영감을 일깨워주는 라이브러리, 전 세계 최정상급 아티스트를 초청해 최고의 공연을 선사하는 슈퍼콘서트와 컬처프로젝트, 실험적인 시각예술 전시를 선보이는 스토리지 전시까지 혁신적인 브랜딩과 마케팅으로 트렌드를 주도하고 있습니다. 최신 가이드를 적용하여 현대법인카드에서도 일관된 브랜드 Identity를 느낄 수 있도록 하였습니다.` }"
          ></WorkProjectInfo>
          <!-- <ul class="project-info">
            <li>
              <div class="ttl">Client</div>
              <div class="txt">현대카드</div>
            </li>
            <li>
              <div class="ttl">Open</div>
              <div class="txt">2022.06</div>
            </li>
            <li>
              <div class="ttl">Role</div>
              <div class="txt">
                UX Planning
                Design
                Publishing
              </div>
            </li>
          </ul>
          <ul class="project-desc">
            <li>
              <div class="ttl">현대법인카드 PC/Mobile 웹 구축</div>
              <div class="txt">
                현대카드는 화폐 그 이상의 가치와 혁신을 담은 카드 플레이트와 디자인, 프리미엄카드 패키지, 그리고 잊혀졌던 아날로그 감성과 영감을 일깨워주는 라이브러리, 전 세계 최정상급 아티스트를 초청해 최고의
  공연을 선사하는 슈퍼콘서트와 컬처프로젝트, 실험적인 시각예술 전시를 선보이는 스토리지 전시까지 혁신적인 브랜딩과 마케팅으로 트렌드를 주도하고 있습니다. 최신 가이드를 적용하여 현대법인카드에서도 일관된 브랜드 Identity를 느낄 수 있도록 하였습니다.
              </div>
            </li>
          </ul> -->
        </div>
      </section>

      <section class="section white" data-theme="white">
        <div class="work-image"><img src="@/assets/images/work/view_img-01.png" alt=""></div>
      </section>
      <section class="section white" data-theme="white">
        <div class="work-image"><img src="@/assets/images/work/view_img-02.png" alt=""></div>
      </section>
      <section class="section white" data-theme="white">
        <div class="work-image"><img src="@/assets/images/work/view_img-03.png" alt=""></div>
      </section>
      <section class="section white" data-theme="white">
        <div class="work-image"><img src="@/assets/images/work/view_img-04.png" alt=""></div>
      </section>
      <section class="section white" data-theme="white">
        <div class="work-image"><img src="@/assets/images/work/view_img-05.png" alt=""></div>
      </section>
      <section class="section white" data-theme="white">
        <div class="work-image"><img src="@/assets/images/work/view_img-06.png" alt=""></div>
      </section>
      <section class="section white" data-theme="white">
        <div class="work-image"><img src="@/assets/images/work/view_img-07.png" alt=""></div>
      </section>
      <section class="section white" data-theme="white">
        <div class="work-image"><img src="@/assets/images/work/view_img-08.png" alt=""></div>
      </section>
      <section class="section white" data-theme="white">
        <div class="work-image"><img src="@/assets/images/work/view_img-09.png" alt=""></div>
      </section>
      <section class="section white" data-theme="white">
        <div class="work-image"><img src="@/assets/images/work/view_img-10.png" alt=""></div>
      </section>


      <section class="section white partners" data-theme="black">
        <div class="inner">
          <ContentTitle
            :titleL = "[
              { delay: 1, text: `Partnership` },
            ]"
            theme="white"
            align="center"
          ></ContentTitle>
          <WorkPartners
            :partners = "[
              { title: 'Adobe Korea', logoImage: 'http://www.the-51.com/wp-content/uploads/2022/11/logo-adobe.png' },
              { title: 'Hyundaicard My Company', logoImage: 'http://www.the-51.com/wp-content/uploads/2022/11/logo-hyundaicard.png' },
              { title: 'The Fifty-One', logoImage: 'http://www.the-51.com/wp-content/uploads/2022/11/logo-the51.png' }
            ]"
          ></WorkPartners>
        </div>
      </section>      

      <section class="section white" data-theme="white">
        <LinkWorkView :Links = "[
          { class:'next', url: '/test', stitle: 'Next Project', title: [`tvN Drama`, `Voice Season4`], img: 'http://www.the-51.com/wp-content/uploads/2022/05/마스크-그룹-1-1.png', },
        ]"></LinkWorkView>

        <!-- <LinkWorkView :Links = "[
          { class:'prev', url: '/test', stitle: 'Previous Project', title: [`HYUNDAICARD`, `My Company`], img: 'http://www.the-51.com/wp-content/uploads/2022/11/hyndaicard-main.png', },
          { class:'next', url: '/test', stitle: 'Next Project', title: [`AMOREPACIFIC`], img: 'http://www.the-51.com/wp-content/uploads/2022/05/img.png', },
        ]"></LinkWorkView> -->
      </section>
    </div>

  </div>
</template>

<script>
import FetchPageMixin from '@/mixins/FetchPageMixin';

// component
import VisualFull from '@/components/visual/VisualFull.vue'
import LinkWorkView from '@/components/common/LinkWorkView.vue'
import ContentTitle from '@/components/common/ContentTitle.vue'
import WorkProjectInfo from '@/components/common/WorkProjectInfo.vue'
import WorkPartners from '@/components/common/WorkPartners.vue'

export default {
  mixins: [FetchPageMixin],
  components: {
    VisualFull,
    LinkWorkView,
    ContentTitle,
    WorkProjectInfo,
    WorkPartners
  },
  data() {
    return {
      title: ['HYUNDAICARD', 'My Company'],
      date: 'Web & Mobile Site',
    }
  },
  mounted() {
    this.PageReady();
  }
}
</script>

<style scoped>
#work-view .info { padding: 14rem 0; }
#work-view .partners { padding: 20rem 0; }

@media only screen and (max-width: 1280px) {
  #work-view .info { padding: 10rem 0; }
  #work-view .partners { padding: 16rem 0; }
}
@media only screen and (max-width: 768px) {
  #work-view .info { padding: 6rem 0; }
  #work-view .partners { padding: 14rem 0; }
}
</style>