import Scrollbar from 'smooth-scrollbar';

let scrollbar;

const scrollbarInit = ScrollTrigger => {
	const ScrollContainer = document.querySelector('#my-scrollbar');
	const ScrollbarOptions = {
		damping: 0.1, // 낮을수록 많이 미끄러짐 보통 0.1 ~ 0.5 사이를 많이 넣음
		// thumbMinSize: 0,
		// renderByPixels: true,
		alwaysShowTracks: false, // true: scroll bar가 항상 보이게 한다.
		// continuousScrolling: true,
		// wheelEventTarget: ,
		// plugins: {},
	};
	scrollbar = Scrollbar.init(ScrollContainer, { ...ScrollbarOptions });
	Scrollbar.init(ScrollContainer, ScrollbarOptions);
	ScrollTrigger.scrollerProxy(ScrollContainer, {
		scrollTop(value) {
			if (arguments.length) {
				scrollbar.scrollTop = value; // setter
			}
			return scrollbar.scrollTop; // getter
		},
	});

	scrollbar.addListener(ScrollTrigger.update);
	ScrollTrigger.defaults({ scroller: ScrollContainer });
};

const markers = gsap => {
	if (document.querySelector('.gsap-marker-scroller-start')) {
		const markers = gsap.utils.toArray('[class *= "gsap-marker"]');
		scrollbar.addListener(({ offset }) => {
			gsap.set(markers, { marginTop: -offset.y });
		});
	}
};

// scrollbar.addListener(s => {
// 	console.log(s.offset.y); // returns “scrollTop” equivalent
// });

export { scrollbar, scrollbarInit, markers };
