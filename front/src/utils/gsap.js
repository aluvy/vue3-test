import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

let triggers = ScrollTrigger.getAll();

// load End
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

// load screen settings
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

// work list item
const gsapWorkItem = () => {
	const workItem = gsap.utils.toArray('.work-item');
	if (!workItem.length) return;

	gsap.set(workItem, { transformPerspective: '2000px' });
	workItem.forEach(item => {
		gsap.fromTo(
			item,
			{
				autoAlpha: 0,
				rotationX: -45,
				y: 120,
				transformOrigin: '50% 50%',
			},
			{
				autoAlpha: 1,
				rotationX: 0,
				y: 0,
				transformOrigin: '50% 50%',
				scrollTrigger: {
					trigger: item,
					start: 'top 80%',
					end: 'bottom 80%',
					once: true,
					// markers: true,
					onEnter: ({ trigger }) => trigger.classList.add('onEnter'),
				},
			}
		);
	});
};

// work page Project Stats
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
};

// theme
const gsapThemeTrigger = function () {
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
		});
	});
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
};

const gsapVisualTrigger = function () {
	const visualTriggerMode = document.querySelectorAll('.visualTriggerMode');
	if (!visualTriggerMode.length) return;

	gsap.to('.visualTrigger-bg', {
		scrollTrigger: {
			scrub: true,
		},
		y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
		ease: 'none',
	});
	gsap.to('.visualTrigger-slogan', {
		scrollTrigger: {
			trigger: '.visualTriggerMode',
			start: '1% 1%',
			end: '99% 1%',
			scrub: 1,
			// markers: true,
		},
		opacity: 0,
		// height: 0,
	});
};

const gsapKill = function () {
	triggers = ScrollTrigger.getAll();
	triggers.forEach(trigger => trigger.kill());
};

const gsapRefresh = function () {
	console.log('refresh');
	ScrollTrigger.refresh();
	ScrollTrigger.update();
};

export { gsapLoader, gsapLoaderEnd, gsapWorkItem, gsapWorkCount, gsapAnimationTrigger, gsapThemeTrigger, gsapParallaxTrigger, gsapVisualTrigger, gsapRefresh, gsapKill };
