<template>
  <div id="recruit-page">
    
    <section class="section recruit-visual" data-theme="light">
      <div class="slogan">
        <div class="slogan-inner">
          <h2>
            <p class="gsap-item">PEOPLE <span>OF</span></p>
            <p class="gsap-item">THE FIFTY ONE</p>
          </h2>
        </div>
      </div>
      <div class="bg gsap-item">
        <div class="img" :style="`background-image: url(${visual})`"></div>
      </div>
    </section>

    <div id="content">
      
      <section class="section recruit-leader" data-theme="light">
        <div class="inner">
          <div class="title">
            <h3>
              <p>'THE51'을 이끌어갈</p>
              <p><span>LEADER</span><span>채용</span></p>
            </h3>
          </div>
          <div class="content">
            <p class="desc">(주)더피프티원은 10년 동안 쌓은 전략, 마케팅, 콘텐츠, 컨설팅, 브랜딩 등 <br class="pc_show">다양한 노하우를 바탕으로 가장 앞선 디지털 솔루션을 제공하는 The First One 에이전시입니다.</p>
            <div class="leader-item">
              <div class="item-ttl">근무조건</div>
              <div class="item-cont">
                <dl>
                  <dt>근무형태</dt>
                  <dd>정규직</dd>
                  <dt>근무지</dt>
                  <dd>
                    프로젝트 투입에 따라 다름
                    <span>*본사: 서울시 강남구 역삼동</span>
                  </dd>
                  <dt>근무시간</dt>
                  <dd>
                    09:00 ~ 18:00
                    <span>* 프로젝트 투입에 따라 다름</span>
                  </dd>
                  <dt>연봉</dt>
                  <dd>회사 내규에 따름</dd>
                </dl>
              </div>
            </div>
            <div class="leader-item">
              <div class="item-ttl">접수방법</div>
              <div class="item-cont">
                <p>E-MAIL 접수</p>
                <p>메일 제목 “입사지원” 표기 후 Recruit@The-51.com 으로 접수</p>
              </div>
            </div>
            <div class="leader-item">
              <div class="item-ttl">제출서류</div>
              <div class="item-cont">
                <p>
                  이력서 / 자기소개서 / 포트폴리오
                  <span>(디자이너 필수)</span>
                </p>
                <p>
                  최종 합격 후 별도 제출 서류 안내합니다.
                  <span>* 허위사실이 발견될 경우 채용이 취소될 수 있습니다.</span>
                </p>
              </div>
            </div>
            <div class="leader-item">
              <div class="item-ttl">전형절차</div>
              <div class="item-cont">
                <p>서류전형 > 1차 실무 면접 > 최종합격</p>
                <span>* 수시 면접으로 진행합니다.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section recruit-other" data-theme="light">
        <div class="inner">
          <div class="title">
            <h3>모집분야 및 자격요건</h3>
          </div>
          <div class="content">
            <ul>
              <li class="other-item">
                <div class="item-ttl">
                  UX전략 기획 (UX Consulting) 사원~책임 (1년이상)
                </div>
                <div class="item-cont">
                  담당업무
  UX 컨설팅 프로젝트 업무 전반
  UX 방법론을 통한 인사이트 도출
  UX 전략 및 컨셉 정의
  UX/UI 기획
  보고서 및 제안서 작업
  자격요건
  직업적 윤리의식과 사람에 대한 예의를 기본적으로 갖춘 사람
  남다른 창의력과 성실함을 갖춘 사람
  오픈 마인드로 협업을 중시하는 마음가짐을 가진 사람
  자신의 성장과 팀의 성장을 일치시키고자 노력하는 사람
  우대사항
  UX 컨설팅 프로젝트 참여 경험
  UX 컨설팅 관련 교육 수료 및 관련 전공
  석사 이상
                </div>
              </li>
            </ul>
          </div>
          
  
          
        </div>
      </section>

      <section class="section" data-theme="light">
        <div class="inner">
          항상 즐겁게 일할
  THE 51의 크루를 기다리고 있습니다.
  각 분야에서 인재이신 여러분들의 많은 지원과 관심 부탁드립니다.
  
          <ul>
            <li>업무의 전문성
  자신의 분야에 전문성을 가지고 이를
  업무적으로 깊이 있게 적용할 수 있는 사람,
  그 전문성을 지속적으로 발전시켜 나갈 수 있는
  열정 있는 인재를 원합니다.</li>
            <li>
              창의적 사고
  변화와 혁신을 두려워하지 않으며
  기존의 틀에서 벗어난 발상의 전환으로
  창의적 사고를 지속적으로 할 수 있는
  인재를 원합니다.
            </li>
            <li>
              올바른 인성
  도덕성, 책임감, 팀워크, 상호존중,
  업무 예절 등을 가진 올바른 인성과
  제대로 된 가치관을 가진 인재를 원합니다.
            </li>
          </ul>
        </div>
      </section>

      <section class="section" data-theme="light">
        <div class="inner">
          WANT TO JOIN US?
          이력서 및 포트폴리오 첨부하여 메일 제목 “입사지원” 표기 후 메일로 접수
          RECRUIT@THE-51.COM
          Click to copy
        </div>
      </section>

    </div>
  </div>
</template>

<script>
import '@/assets/css/page-recruit.css'
import PageMixin from '@/mixins/PageMixin';
// assets
import visual from '@/assets/images/recruit/visual.png'

export default {
  mixins: [PageMixin],
  data() {
    return {
      visual,
    }
  },
}
</script>