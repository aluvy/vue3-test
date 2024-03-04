<template>
  <div id="map11">
    <vueDaumMap
      class="vueDaumMap"
      ref="vueDaumMap"
      :appKey="appKey"
      v-model:center="center"
      v-model:level="level"
      :mapTypeId="mapTypeId"
      :libraries="libraries"
      @load="onLoad">
    </vueDaumMap>
    <!-- <div class="maker">ddd</div> -->


    <!-- <div style="position: absolute; margin: -39px 0px 0px -14px; z-index: 0; left: 253px; top: 225px; display: block;">
      <img draggable="false" src="https://t1.daumcdn.net/mapjsapi/images/2x/marker.png" alt="" role="presentation" title="" style="min-width: 0px; min-height: 0px; max-width: 99999px; max-height: none; border: 0px; display: block; position: absolute; user-select: none; -webkit-user-drag: none; clip: rect(0px, 29px, 42px, 0px); top: 0px; left: 0px; width: 29px; height: 42px;">
      <img src="https://t1.daumcdn.net/mapjsapi/images/2x/transparent.gif" alt="" role="presentation" draggable="false" usemap="#daum.maps.Marker.Area:k" style="min-width: 0px; min-height: 0px; max-width: 99999px; max-height: none; border: 0px; display: block; position: absolute; user-select: none; -webkit-user-drag: none; width: 29px; height: 42px;">
      <map id="daum.maps.Marker.Area:k" name="daum.maps.Marker.Area:k"><area href="javascript:void(0)" alt="" role="presentation" shape="poly" coords="14,39,9,27,4,21,1,16,1,10,4,4,11,0,18,0,25,4,28,10,28,16,25,21,20,27" title="" style="-webkit-tap-highlight-color: transparent;"></map>
    </div> -->

  </div>
</template>

<script>
import VueDaumMap from 'vue-daum-map';

// https://codesandbox.io/p/sandbox/nervous-keldysh-87yxg?file=%2Fsrc%2Fcomponents%2FKakaoMap.vue%3A81%2C13-84%2C15

export default {
  components: {
    VueDaumMap,
  },
  data() {
    return {
      appKey: '254410f25b638fcce34ea8cc1750ea44', // 테스트용 appkey
      center: { lat: 37.5028772, lng: 127.028281 }, // 지도의 중심 좌표
      level: 3, // 지도의 레벨(확대, 축소 정도),
      mapTypeId: VueDaumMap.MapTypeId.NORMAL, // 맵 타입
      libraries: [], // 추가로 불러올 라이브러리
      map: null, // 지도 객체. 지도가 로드되면 할당됨.
      daum: null, // 다음 API 객체. 지도가 로드되면 할당됨.

      markers: [
        { lat: 37.5028772, lng: 127.028281 }
      ],
    }
  },
  methods: {
    onLoad (map, daum) {
      this.map = map;
      this.daum = daum;

      // console.log('map', map);
      // console.log('daum', daum);

      const container = document.querySelector('.vueDaumMap');
      console.log(container);
      // setTimeout(()=>{

      const maker = document.createElement("div");
      maker.classList.add('maker');
        
      console.log(container.children[0].children[0].prepend(maker));
      // }, 100);
      
      // console.log(this.daum.maps.Maker());
      // this.daum.maps.Maker();
      // console.log(this.daum.maps);
    }
  },
}
</script>

<style>
.vueDaumMap { position: relative; width: 100%; height: 100%; }
#map11 { position: relative; width: 100%; height: 100%; }

.maker { position: absolute; margin: -39px 0px 0px -14px; z-index: 2; left: 253px; top: 225px; display: block; width: 5rem; height: 5rem; background-color: red; }
</style>