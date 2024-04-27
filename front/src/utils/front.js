import store from '@/store/';

const front = {
	/** front.setVh : 가로사이즈 변경 시에만 실행 */
	winW: 0,
	setVh: function () {
		if (_this.winW === window.innerWidth) return;
		_this.winW = window.innerWidth;
		document.documentElement.style.setProperty('--vh', `${window.innerHeight}px`);

		return _this.winW;
	},

	/** front isMobile : mobile 일 때 true 반환 */
	isMobile: function () {
		const userAgent = navigator.userAgent;
		const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
		// const ios = /iPhone|iPad|iPod/i;
		// const iosApp = /liivm_ios/i;
		// const aos = /Android/i;
		// const aosApp = /liivm_android/i;

		const isMobile = mobile.test(userAgent); // mobile일 때 true
		return isMobile;
	},

	/** front.isOpenAside : aside open 시 html에 OpenAside 클래스 추가 */
	isOpenAside: function (state) {
		state ? document.documentElement.classList.add('OpenAside') : document.documentElement.classList.remove('OpenAside');
	},

	/** front.isNoScroll : scroll block */
	isNoScroll: function (state) {
		state ? document.documentElement.classList.add('no-scroll') : document.documentElement.classList.remove('no-scroll');
	},

	/** front.isScrolled : 스크롤 값이 10 이상이면 html에 scrolled 클래스 추가 */
	isScroll: function (s) {
		// if (window.scrollY > 10) {
		// 	document.documentElement.classList.add('scrolled');
		// 	store.commit('setScrolled', true);
		// } else {
		// 	document.documentElement.classList.remove('scrolled');
		// 	store.commit('setScrolled', false);
		// }
		const scrollY = s ? s.offset.y : 0;
		if (scrollY > 10) {
			document.documentElement.classList.add('scrolled');
			store.commit('setScrolled', true);
		} else {
			document.documentElement.classList.remove('scrolled');
			store.commit('setScrolled', false);
		}
	},
};

const _this = front;

export default front;
