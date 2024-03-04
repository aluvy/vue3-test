<template>
  <div id="kakaomap" ref="map"></div>
</template>

<script>
import { toRaw } from "vue";
export default {
  name: "KakaoMap",
  data() {
    return {
      markerPositions1: [
        [33.452278, 126.567803],
        [33.452671, 126.574792],
        [33.451744, 126.572441],
      ],
      markerPositions2: [
        [37.5028772, 127.028281],
        // [37.499590490909185, 127.0263723554437],
        // [37.499427948430814, 127.02794423197847],
        // [37.498553760499505, 127.02882598822454],
        // [37.497625593121384, 127.02935713582038],
        // [37.49629291770947, 127.02587362608637],
        // [37.49754540521486, 127.02546694890695],
        // [37.49646391248451, 127.02675574250912],
      ],
      markers: [],
      LatLng: { Lat: 37.5028772, Lng: 127.028281 },
      infowindow: null,
    };
  },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=254410f25b638fcce34ea8cc1750ea44";
      document.head.appendChild(script);
    }

    // this.displayMarker(this.markerPositions1);
  },
  methods: {
    initMap() {
      // const container = document.getElementById("map");
      const container = this.$refs.map;
      const options = {
        center: new kakao.maps.LatLng(this.LatLng.Lat, this.LatLng.Lng),
        level: 3,
      };

      //지도 객체를 등록합니다.
      //지도 객체는 반응형 관리 대상이 아니므로 initMap에서 선언합니다.
      this.map = new kakao.maps.Map(container, options);

      var markerPosition  = new kakao.maps.LatLng(this.LatLng.Lat, this.LatLng.Lng);
      // var icon = new kakao.maps.MarkerImage(
      //     'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png',
      //     new kakao.maps.Size(31, 35),
      //     {
      //         offset: new kakao.maps.Point(16, 34),
      //         alt: "마커 이미지 예제",
      //         shape: "poly",
      //         coords: "1,20,1,9,5,2,10,0,21,0,27,3,30,9,30,20,17,33,14,33"
      //     }
      // );

      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
        position: markerPosition,
        // image: icon,
        // text: "dd"
        // itemName: 'ddd'
      });

      // 마커가 지도 위에 표시되도록 설정합니다
      marker.setMap(this.map);
    },
    displayMarker(markerPositions) {
      if (this.markers.length > 0) {
        this.markers.forEach((marker) => marker.setMap(null));
      }

      const positions = markerPositions.map(
        (position) => new kakao.maps.LatLng(...position)
      );

      if (positions.length > 0) {
        this.markers = positions.map(
          (position) =>
            new kakao.maps.Marker({
              map: toRaw(this.map),
              position,
            })
        );

        const bounds = positions.reduce(
          (bounds, latlng) => bounds.extend(latlng),
          new kakao.maps.LatLngBounds()
        );

        toRaw(this.map).setBounds(bounds);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#kakaomap {
  width: 100%;
  height: 100%;
}
/* 
.button-group {
  margin: 10px 0px;
  position: relative;
  z-index: 9999;
}

button {
  margin: 0 3px;
} */


/* #kakaomap div:has([name^='daum.maps.Marker.Area']) { display: block; width: 1rem; height: 1rem; background:red; } */
#kakaomap div:has( > [name^='daum.maps.Marker.Area']) { position: relative; }
#kakaomap div:has( > [name^='daum.maps.Marker.Area']) > img { width: 1.6rem !important; height: 1.6rem !important; border-radius: 1.6rem; background: #ff7061;}
#kakaomap div:has( > [name^='daum.maps.Marker.Area'])::before,
#kakaomap div:has( > [name^='daum.maps.Marker.Area'])::after { position: absolute; left: 50%; top: 50%; content:''; display: block; width: 18rem; height: 18rem; border-radius: 18rem; transform: translate3d(-50%, -50%, 0); background: #ff7061; }
#kakaomap div:has( > [name^='daum.maps.Marker.Area'])::before { opacity: 0.2; }
#kakaomap div:has( > [name^='daum.maps.Marker.Area'])::after { opacity: 0.4; }

/* daum.maps.Marker.Area:4 */

/* .nectar-google-map .animated-dot,
.nectar-leaflet-map .animated-dot {width:20px; height:20px; left:-9px;  top:-5px;  position:relative}

.nectar-google-map .animated-dot .middle-dot,
.nectar-leaflet-map .animated-dot .middle-dot {width:16px; height:16px; border-radius:30px; position:absolute; left:2px; top:2px; transform-origin:50% 50%; animation-fill-mode:forwards; animation-iteration-count:infinite}

.nectar-google-map[data-dark-color-scheme="1"] .animated-dot .middle-dot:after{width:100%; height:100%; display:block; position:absolute; left:0; top:0; content:' '; background-color:#fff; border-radius:30px; z-index:100; opacity:0; animation:animationSignal2 cubic-bezier(0,.55,.55,1) 2s;  transform-origin:50% 50%;  animation-fill-mode:forwards;  animation-delay:0.78s;  animation-iteration-count:infinite}

.nectar-google-map .animated-dot .signal,
.nectar-leaflet-map .animated-dot .signal {width:180px; pointer-events:none; height:180px; border-radius:200px; position:absolute; left:-80px; top:-80px; opacity:0; -webkit-animation:animationSignal cubic-bezier(0,.55,.55,1) 2s; animation:animationSignal cubic-bezier(0,.55,.55,1) 2s;  transform-origin:50% 50%;  animation-fill-mode:forwards;  animation-delay:0.78s;  animation-iteration-count:infinite}

.nectar-google-map .animated-dot .signal2,
.nectar-leaflet-map .animated-dot .signal2 {width:180px; height:180px; pointer-events:none; border-radius:200px; position:absolute; left:-80px; top:-80px; opacity:0; -webkit-animation:animationSignal cubic-bezier(0,.55,.55,1) 2s; animation:animationSignal cubic-bezier(0,.55,.55,1) 2s;  transform-origin:50% 50%;  animation-fill-mode:forwards;  animation-delay:1s;  animation-iteration-count:infinite} */

</style>