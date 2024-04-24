import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const triggers = ScrollTrigger.getAll();

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

	const countStart = (trigger, num) => {
		console.log(trigger, num);

		// let start = 100;
		trigger.textContent = 'test';

		// while (1) {
		// 	if (num >= count) break;
		// 	console.log(start);
		// 	start++;
		// 	trigger.textContent = start;
		// }
	};

	count.forEach(item => {
		gsap.fromTo(
			item,
			{ text: '0' },
			{
				scrollTrigger: {
					trigger: item,
					start: 'top 80%',
					end: 'bottom 80%',
					once: true,
					onEnter: ({ trigger }) => {
						countStart(trigger, Number(trigger.dataset.count));

						trigger.textContent = 'test';
					},
				},
			}
		);
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

const gsapThemeTrigger = function () {
	gsap.utils.toArray('section[data-theme]').forEach(item => {
		let theme = item.getAttribute('data-theme');
		const header = document.querySelector('#header');

		ScrollTrigger.create({
			trigger: item,
			start: 'top 40px',
			end: 'bottom 40px',
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
	triggers.forEach(trigger => trigger.kill());
};

const gsapRefresh = function () {
	console.log('refresh');
	ScrollTrigger.refresh();
	ScrollTrigger.update();
};

export { gsapWorkItem, gsapWorkCount, gsapAnimationTrigger, gsapThemeTrigger, gsapParallaxTrigger, gsapVisualTrigger, gsapRefresh, gsapKill };
