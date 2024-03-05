<template>
  <div id="kakaomap" ref="map"></div>
</template>

<script>
import maker from '@/assets/images/contact/maker.svg'

export default {
  data() {
    return {
      maker,
      LatLng: { Lat: 37.5028772, Lng: 127.028281 },
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
  },
  methods: {
    initMap() {
      const container = this.$refs.map;
      const options = {
        center: new kakao.maps.LatLng(this.LatLng.Lat, this.LatLng.Lng),
        level: 3,
        scrollwheel: false,
      };
      this.map = new kakao.maps.Map(container, options);

      const markerPosition  = new kakao.maps.LatLng(this.LatLng.Lat, this.LatLng.Lng);
      const icon = new kakao.maps.MarkerImage(
          maker,
          new kakao.maps.Size(16, 16),
      );
      var marker = new kakao.maps.Marker({
        position: markerPosition,
        image: icon,
        title: 'maker_icon'
      });
      marker.setMap(this.map);

      let makerWrap = document.querySelector("#kakaomap").querySelector("[title='maker_icon']").parentElement;
      makerWrap.classList.add('maker_icon');
    },
  },
};
</script>

<style>
#kakaomap { width: 100%; height: 100%; }
#kakaomap, #kakaomap * { touch-action: manipulation; }
#kakaomap .maker_icon { position: relative; margin: -4px 0 0 -9px !important; }
#kakaomap .maker_icon img { position: relative; z-index: 2; }
#kakaomap .maker_icon::before,
#kakaomap .maker_icon::after { position: absolute; left: 8px; top: 8px; content:''; display: block; width:18rem; height: 18rem; border-radius: 18rem; background: #ff7061; transform: translate3d(-50%, -50%, 0); opacity: 0; animation: maker cubic-bezier(0,.55,.55,1) 2s; animation-fill-mode:forwards; animation-delay: 1s; animation-iteration-count: infinite; z-index: 1; }
#kakaomap .maker_icon::after { animation-delay: 0.78s; }

@keyframes maker {
  0% { opacity: 0; transform: translate3d(-50%, -50%, 0) scale(0); }
  1% { opacity: 0.25; }
  20% { opacity: 0.25; }
  60% {  opacity:0; transform: translate3d(-50%, -50%, 0) scale(1); }
}
</style>