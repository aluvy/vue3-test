<template>
  <div id="recruit-page">
    
    <section class="section recruit-visual" data-theme="light">
      <div class="slogan">
        <div class="slogan-inner">
          <h2>
            <p class="gsap-item">PEOPLE <span>OF</span></p>
            <p class="gsap-item">THE <span class="red-dot">FIFTY ONE</span></p>
          </h2>
        </div>
      </div>
      <div class="bg gsap-item">
        <div class="img pc-show" :style="`background-image: url(${visual})`"></div>
        <div class="img mo-show" :style="`background-image: url(${visualM})`"></div>
      </div>
    </section>

    <div id="content">

      <section class="section recruit" data-theme="light">
        <div class="inner">
          <h3 class="ttl">
            <p>'THE51'을 이끌어갈</p>
            <p><span>LEADER</span><span class="red-dot">채용</span></p>
          </h3>

          <div class="cont">
            <p class="recruit-desc">
              (주)더피프티원은 10년 동안 쌓은 전략, 마케팅, 콘텐츠, 컨설팅, 브랜딩 등 <br class="pc-show">
              다양한 노하우를 바탕으로 가장 앞선 디지털 솔루션을 제공하는 The First One 에이전시입니다.
            </p>
            <ul class="info">
              <li>
                <div class="info-ttl">근무조건</div>
                <dl class="info-cont">
                  <dt>근무형태</dt>
                  <dd>정규직</dd>
                  <dt>근무지</dt>
                  <dd>
                    프로젝트 투입에 따라 다름<br class="mo-show">
                    <span class="subscript">&nbsp;* 본사: 서울시 강남구 역삼동</span>
                  </dd>
                  <dt>근무시간</dt>
                  <dd>
                    09:00 ~ 18:00<br class="mo-show">
                    <span class="subscript">&nbsp;* 프로젝트 투입에 따라 다름</span>
                  </dd>
                  <dt>연봉</dt>
                  <dd>회사 내규에 따름</dd>
                </dl>
              </li>
              <li>
                <div class="info-ttl">접수방법</div>
                <dl class="info-cont">
                  <dt>E-MAIL 접수</dt>
                  <dd>메일 제목 “입사지원” 표기 후 Recruit@The-51.com 으로 접수</dd>
                </dl>
              </li>
              <li>
                <div class="info-ttl">제출서류</div>
                <dl class="info-cont">
                  <dt>
                    이력서 / 자기소개서 / 포트폴리오
                    <span class="subscript">&nbsp;(디자이너 필수)</span>
                  </dt>
                  <dd>
                    최종 합격 후 별도 제출 서류 안내합니다.<br>
                    <span class="subscript">* 허위 사실이 발견될 경우 채용이 취소될 수 있습니다.</span>
                  </dd>
                </dl>
              </li>
              <li>
                <div class="info-ttl">전형절차</div>
                <dl class="info-cont">
                  <dt>
                    서류전형<i class="fa-solid fa-chevron-right"></i>1차 실무 면접<i class="fa-solid fa-chevron-right"></i>최종합격
                  </dt>
                  <dd><span class="subscript">* 수시 면접으로 진행합니다.</span></dd>
                </dl>
              </li>
            </ul>

            <h4 class="ttl">모집분야 및 자격요건</h4>
            <div class="part">
              <CustomAccordion
                v-for="item in parts" :key="item"
                :idx="item.idx" :state="item.state"
                class="part-item" :class="{ active: item.state }">
                <template #title>
                  <a href="#" @click.prevent="item.state = !item.state">
                    <strong>
                      {{ item.field }}
                      <span>({{ item.eng }})</span>
                    </strong>
                    <span>{{ item.position }}</span>
                    <i></i>
                  </a>
                </template>
                <template #content>
                  <div class="part-cont">
                    <dl v-for="detail in item.details" :key="detail">
                      <dt>{{ detail.title }}</dt>
                      <dd v-for="list in detail.lists" :key="list">{{ list }}</dd>
                    </dl>
                  </div>
                </template>
              </CustomAccordion>
            </div>
          </div>
        </div>
      </section>

      <section class="section talent" data-theme="light">
        <div class="inner">
          <div class="tit-area">
            <strong>
              항상 즐겁게 일할<br>
              <span class="red-dot">THE 51의 크루를 기다리고 있습니다</span>
            </strong>
            <p>각 분야에서 인재이신 여러분들의 많은 지원과 관심 부탁드립니다.</p>
          </div>
          <ul>
            <li v-for="talent in talents" :key="talent">
              <i :style="`background-image:url(${talent.ico})`"></i>
              <strong>{{ talent.title }}</strong>
              <p>{{ talent.desc }}</p>
            </li>
          </ul>
        </div>
      </section>

      <section class="section joinus" data-theme="light">
        <div class="inner">
          <strong>WANT TO JOIN US?</strong>
          <p>이력서 및 포트폴리오 첨부하여 <br class="mo-show">메일 제목 “입사지원” 표기 후 메일로 접수</p>
          <div class="email" @mousemove="mouseMove" @mouseleave="mouseLeave">
            RECRUIT@THE-51.COM
            <input type="text" class="blind" ref="copyto" value="RECRUIT@THE-51.COM">
            <button type="button" :class="{ active: mouseEvent.active }" :style="{ left:`${mouseEvent.x}px`, top: `${mouseEvent.y}px` }" @click="copyToEmail">Click to<br>copy</button>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<script>
import '@/assets/css/page-recruit.css'
import PageMixin from '@/mixins/PageMixin';

// components
import CustomAccordion from '@/components/common/CustomAccordion.vue'

// assets
import visual from '@/assets/images/recruit/visual.png'
import visualM from '@/assets/images/recruit/visual-m.png'
import talent1 from '@/assets/images/recruit/talent1.png'
import talent2 from '@/assets/images/recruit/talent2.png'
import talent3 from '@/assets/images/recruit/talent3.png'

export default {
  mixins: [PageMixin],
  components: {
    CustomAccordion
  },
  data() {
    return {
      visual,
      visualM,
      mouseEvent: { active: false, x: 0, y: 0 },
      parts : [
        {
          idx: 0,
          field: `UX전략 기획`,
          eng: `UX Consulting`,
          position: `사원~책임 (1년 이상)`,
          state: false,
          details: [
            {
              title: '담당업무',
              lists: [
                `UX 컨설팅 프로젝트 업무 전반`,
                `UX 방법론을 통한 인사이트 도출`,
                `UX 전략 및 컨셉 정의`,
                `UX/UI 기획`,
                `보고서 및 제안서 작업`
              ]
            },
            {
              title: `자격요건`,
              lists: [
                `직업적 윤리의식과 사람에 대한 예의를 기본적으로 갖춘 사람`,
                `남다른 창의력과 성실함을 갖춘 사람`,
                `오픈 마인드로 협업을 중시하는 마음가짐을 가진 사람`,
                `자신의 성장과 팀의 성장을 일치시키고자 노력하는 사람`,
              ]
            },
            {
              title: `우대사항`,
              lists: [
                `UX 컨설팅 프로젝트 참여 경험`,
                `UX 컨설팅 관련 교육 수료 및 관련 전공`,
                `석사 이상`
              ]
            }
          ]
        },
        {
          idx: 1,
          field: `서비스 기획`,
          eng: `Web/Mobile`,
          position: `PM/PL (5년 이상)`,
          state: false,
          details: [
            {
              title: '담당업무',
              lists: [
                `콘셉트/전략기획 리딩`,
                `서비스 콘텐츠 기획 리딩`,
                `제안서/보고서 작성 및 프레젠테이션 진행`,
                `서비스 이슈 감지/개선/해결 방향 제시 및 리딩`,
              ]
            },
            {
              title: `자격요건`,
              lists: [
                `Web/Mobile에 대한 UI/UX 기획 리딩 가능한 분`,
                `콘텐츠 및 서비스 콘셉트/전략 수립 능력 보유자`,
                `프로젝트 프로세스 이해 및 원활한 커뮤니케이션 가능한 분`,
                `IT 트렌드 및 비즈니스에 대한 이해력/통찰력 보유자`
              ]
            },
            {
              title: `우대사항`,
              lists: [
                `웹 에이전시 경력자 우대`,
                `글로벌 사이트 구축 및 운영 경험자 우대`,
                `영어 커뮤니케이션 가능한 분 우대`
              ]
            }
          ]
        }
      ],
      talents: [
        {
          ico: talent1,
          title: "업무의 전문성",
          desc: "자신의 분야에 전문성을 가지고 이를 업무적으로 깊이 있게 적용할 수 있는 사람, 그 전문성을 지속적으로 발전시켜 나갈 수 있는 열정 있는 인재를 원합니다.",
        },
        {
          ico: talent2,
          title: "창의적 사고",
          desc: "변화와 혁신을 두려워하지 않으며 기존의 틀에서 벗어난 발상의 전환으로 창의적 사고를 지속적으로 할 수 있는 인재를 원합니다.",
        },
        {
          ico: talent3,
          title: "올바른 인성",
          desc: "도덕성, 책임감, 팀워크, 상호존중, 업무 예절 등을 가진 올바른 인성과 제대로 된 가치관을 가진 인재를 원합니다.",
        }
      ],
    }
  },
  methods: {
    mouseMove(e) {
      this.mouseEvent.active = true;
      if( e.layerX < 10 || e.layerY < 10 ) return;
      this.mouseEvent.x = e.layerX;
      this.mouseEvent.y = e.layerY;
    },
    mouseLeave() {
      this.mouseEvent.active = false;
    },
    copyToEmail() {
      const input = this.$refs.copyto;
      input.select();
      input.setSelectionRange(0, 99999); // For mobile devices
      document.execCommand('copy');

      alert('이메일 주소가 복사 되었습니다.');
    }
  }
}
</script>