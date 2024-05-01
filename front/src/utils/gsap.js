import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { scrollbar, scrollbarInit, markers } from '@/utils/scrollbar.js';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

scrollbarInit(ScrollTrigger); // smooth scrollbar init

let triggers = ScrollTrigger.getAll();

/** header theme setting */
const gsapHeaderThemeTrigger = function () {
	const section = gsap.utils.toArray('section[data-theme]');

	if (!section) return;

	section.forEach(item => {
		let theme = item.dataset.theme;
		const header = document.querySelector('#header');

		ScrollTrigger.create({
			trigger: item,
			start() {
				const headerH = header.offsetHeight;
				return `top ${headerH}`;
			},
			end() {
				const headerH = header.offsetHeight;
				return `bottom ${headerH}`;
			},
			// markers: true,
			onEnter: () => header.setAttribute('data-theme', theme),
			onEnterBack: () => header.setAttribute('data-theme', theme),
			// markers: true,
		});
	});
	// markers(gsap);
};

/** loader show animation */
const gsapLoader = () => {
	const items = gsap.utils.toArray('#load-screen span');
	if (!items.length) return;

	const wrap = document.querySelector('#load-screen');
	const tl = gsap.timeline();
	tl.set(wrap, { duration: 0, autoAlpha: 1 });

	items.forEach(item => {
		tl.fromTo(
			item,
			{
				scaleX: 1,
				scaleY: 1,
				transformOrigin() {
					const position = this.targets()[0].dataset.position;
					let x = 'center';
					let y = 'center';
					if (position === 'top') {
						x = 'center';
						y = 'top';
					} else if (position === 'bottom') {
						x = 'center';
						y = 'bottom';
					} else if (position === 'left') {
						x = 'left';
						y = 'center';
					} else if (position === 'right') {
						x = 'right';
						y = 'center';
					}

					return `${x} ${y}`;
				},
			},
			{
				duration: 1,
				ease: 'power4.inOut',
				scaleX() {
					const position = this.targets()[0].dataset.position;
					return position === 'left' || position === 'right' ? 0 : 1;
				},
				scaleY() {
					const position = this.targets()[0].dataset.position;
					return position === 'top' || position === 'bottom' ? 0 : 1;
				},
			},
			0
		);
	});
	tl.to(wrap, { autoAlpha: 0 });
};

/** loader hide */
const gsapLoaderEnd = () => {
	const items = gsap.utils.toArray('#load-screen span');
	if (!items.length) return;

	const wrap = document.querySelector('#load-screen');

	gsap.set(wrap, { duration: 0, autoAlpha: 1 });
	items.forEach(item => {
		gsap.set(item, {
			scaleX: 1,
			scaleY: 1,
			duration: 0,
		});
	});
};

/** full visual animation */
const gsapFullVisualAnimation = () => {
	const visualAreaFull = document.querySelector('.visual-area-full');
	if (!visualAreaFull) return;

	const bgInner = visualAreaFull.querySelector('.bg-inner');
	const titles = [...visualAreaFull.querySelectorAll('.title-item')].map(a => a.querySelector('span'));
	const descs = [...visualAreaFull.querySelectorAll('.desc-item')].map(a => a.querySelector('span'));

	gsap.from(bgInner, { duration: 3, scale: 1.5, ease: 'power3.out' });

	const tl = gsap.timeline();
	titles.forEach((a, i) => {
		tl.from(
			a,
			{
				delay() {
					return i === 0 ? 0.6 : 0;
				},

				y: '100%',
				ease: 'power3.out',
			},
			'<0.1'
		);
	});
	descs.forEach(a => {
		tl.from(a, { opacity: 0, ease: 'power3.out' }, '<0.1');
	});

	// parallax
	const parallaxItems = [...visualAreaFull.querySelectorAll('[data-speed]')];
	const slogan = visualAreaFull.querySelector('.slogan');

	const scrollTl = gsap.timeline({
		scrollTrigger: {
			trigger: visualAreaFull,
			start: 'top top',
			end: 'bottom top',
			// markers: true,
			scrub: true,
		},
	});

	parallaxItems.forEach(a => {
		const depth = a.dataset.speed;
		const height = a.offsetHeight;
		const y = height * depth;

		scrollTl.to(a, { y, ease: 'none' }, 0);
	});
	scrollTl.to(slogan, { opacity: 0, ease: 'none' }, 0);

	markers(gsap);
};

/** normal visual animation */
const gsapNormalVisualAnimation = () => {
	const visualAreaDefault = document.querySelector('.visual-area-normal');
	if (!visualAreaDefault) return;

	const bgInner = visualAreaDefault.querySelector('.bg-inner');
	const cates = [...visualAreaDefault.querySelectorAll('.cate-item')].map(a => a.querySelector('span'));
	const titles = [...visualAreaDefault.querySelectorAll('.title-item')].map(a => a.querySelector('span'));
	const descs = [...visualAreaDefault.querySelectorAll('.desc-item')].map(a => a.querySelector('span'));

	gsap.from(bgInner, { duration: 3, scale: 1.5, ease: 'power3.out' });

	const tl = gsap.timeline();
	cates.forEach((a, i) => {
		tl.from(
			a,
			{
				delay() {
					return i === 0 ? 0.6 : 0;
				},
				opacity: 0,
				y: '150%',
				ease: 'power3.out',
			},
			'<0.1'
		);
	});
	titles.forEach(a => {
		tl.from(
			a,
			{
				y: '100%',
				ease: 'power3.out',
			},
			'<0.1'
		);
	});
	descs.forEach(a => {
		tl.from(a, { opacity: 0, y: '150%', ease: 'power3.out' }, '<0.1');
	});
};

/** about visual animation */
const gsapAboutVisualAnimation = () => {
	const visualAreaAbout = document.querySelector('.visual-area-about');
	if (!visualAreaAbout) return;

	const bgInner = visualAreaAbout.querySelector('.bg-inner');
	const cates = [...visualAreaAbout.querySelectorAll('.cate-item')].map(a => a.querySelector('span'));
	const titles = [...visualAreaAbout.querySelectorAll('.title-item')].map(a => a.querySelector('span'));
	const descs = [...visualAreaAbout.querySelectorAll('.desc-item')].map(a => a.querySelector('span'));
	const sns = visualAreaAbout.querySelector('.sns-wrap');

	const isMobile = matchMedia('screen and (max-width: 768px)').matches; // 768보다 낮을 때 true

	gsap.from(bgInner, {
		delay: 0.6,
		duration: 1.5,
		opacity: 0,
		x() {
			return isMobile ? 0 : '20%';
		},
		y() {
			return isMobile ? '50%' : 0;
		},
		ease: 'power3.out',
	});

	const tl = gsap.timeline();
	cates.forEach((a, i) => {
		tl.from(
			a,
			{
				delay() {
					return i === 0 ? 0.6 : 0;
				},
				opacity: 0,
				y: '150%',
				ease: 'power3.out',
			},
			'<0.1'
		);
	});
	titles.forEach(a => {
		tl.from(
			a,
			{
				y: '100%',
				ease: 'power3.out',
			},
			'<0.1'
		);
	});
	descs.forEach(a => {
		tl.from(a, { opacity: 0, y: '150%', ease: 'power3.out' }, '<0.1');
	});
	tl.from(sns, { opacity: 0, y: '70%', ease: 'power3.out' }, '<0.1');
};

/** work list item */
const gsapWorkItem = () => {
	const workItem = gsap.utils.toArray('.work-item');
	if (!workItem.length) return;

	gsap.set(workItem, { transformPerspective: '2000px' });
	workItem.forEach(item => {
		gsap.from(item, {
			autoAlpha: 0,
			rotationX: -45,
			y: 120,
			transformOrigin: '50% 50%',
			scrollTrigger: {
				trigger: item,
				start: `${-120 - 45} 95%`, // -y-rotationX
				end: 'bottom 95%',
				once: true,
				// markers: true,
				// id: 'workItem',
				// onEnter: ({ trigger }) => trigger.classList.add('onEnter'),
			},
		});
	});
	// markers(gsap);
};

/** work page Project Stats */
const gsapWorkCount = () => {
	const count = gsap.utils.toArray('.stats-cont .count');
	if (!count.length) return;

	count.forEach(item => {
		let startCount = { var: 0 };

		function changeNumber() {
			item.innerHTML = startCount.var.toFixed();
		}
		gsap.to(startCount, {
			var: item.dataset.count,
			duration: 3,
			ease: 'power3.out',
			onUpdate: changeNumber,
			scrollTrigger: {
				trigger: item,
			},
		});
	});
	// markers(gsap);
};

const gsapAnimationTrigger = function () {
	gsap.utils.toArray('.gsap-item').forEach(item => {
		ScrollTrigger.create({
			trigger: item,
			start: 'top 100%',
			// end: 'bottom 0%',
			// markers: true,
			onEnter: e => e.trigger.classList.add('onEnter'),
		});
	});
	// markers(gsap);
};

/**
 * .parallax-item 클래스에 data-speed="-0.1" 속성 필요
 * @returns
 */
const gsapParallaxTrigger = function () {
	const parallaxItem = document.querySelectorAll('.parallax-item');
	if (!parallaxItem.length) return;

	gsap.to('.parallax-item', {
		scrollTrigger: {
			scrub: true,
		},
		y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
		ease: 'none',
	});
	// markers(gsap);
};

/**
 * LinkPage PrevNext
 */
const gsapLinkPagePrevNext = function () {
	const Items = gsap.utils.toArray('.linkpage-prevnext .item');
	if (!Items.length) return;

	gsap.set(Items, { transformPerspective: '2000px' });
	Items.forEach((item, idx) => {
		gsap.from(item, {
			autoAlpha: 0,
			delay() {
				return 0.2 * idx;
			},
			rotationX: -35,
			// y: 120,
			transformOrigin: '100% 100%',
			scrollTrigger: {
				trigger: item,
				start: `${-45} 95%`, // -y-rotationX
				end: 'bottom 95%',
				once: true,
				// markers: true,
			},
		});
	});
	// markers(gsap);
};

const gsapKill = function () {
	console.log('gsapKill');
	triggers = ScrollTrigger.getAll();
	triggers.forEach(trigger => trigger.kill());
};

const gsapRefresh = function () {
	console.log('gsapRefresh');
	ScrollTrigger.refresh();
	ScrollTrigger.update();
};

export {
	scrollbar,

	// loader
	gsapLoader,
	gsapLoaderEnd,

	// header theme
	gsapHeaderThemeTrigger,

	// visual
	gsapFullVisualAnimation,
	gsapNormalVisualAnimation,
	gsapAboutVisualAnimation,

	// work
	gsapWorkItem,
	gsapWorkCount,

	// link
	gsapLinkPagePrevNext,

	//
	gsapAnimationTrigger,
	gsapParallaxTrigger,

	// reset, kill
	gsapRefresh,
	gsapKill,
};
