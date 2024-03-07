import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const triggers = ScrollTrigger.getAll();

const gsapAnimationTrigger = function () {
	ScrollTrigger.refresh();
	ScrollTrigger.update();

	const container = document.querySelector('#container');
	gsap.context(() => {
		const items = container.querySelectorAll('.gsap-item');
		// console.log(items);
		items.forEach(item => {
			gsap.to(item, {
				scrollTrigger: {
					trigger: item,
					start: 'top 100%',
					// start: 'top 80%',
					end: 'bottom 0%',
					// markers: true,
					// toggleActions: 'restart pause resume none',

					onEnter: e => e.trigger.classList.add('onEnter'),
					// onLeave: e => e.trigger.classList.remove('onEnter'),
					// onEnterBack: e => e.trigger.classList.add('onEnter'),
					// onLeaveBack: e => e.trigger.classList.remove('onEnter'),
				},
			});
		});
	}, container);
};

const gsapThemeTrigger = function () {
	ScrollTrigger.refresh();

	gsap.utils.toArray('[data-theme]').forEach(item => {
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
	if (!parallaxItem) return;

	gsap.to('.parallax-item', {
		scrollTrigger: {
			scrub: true,
		},
		y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
		ease: 'none',
	});
};

const gsapParallaxVisualTrigger = function () {
	// console.log('gsapParallaxVisualTrigger');
	gsap.to('.parallax-bg', {
		scrollTrigger: {
			scrub: true,
		},
		y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
		ease: 'none',
	});
	gsap.to('.parallax-text', {
		scrollTrigger: {
			scrub: true,
		},
		opacity: () => (ScrollTrigger.maxScroll(window) / window.innerHeight) * -1,
		ease: 'none',
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

export { gsapAnimationTrigger, gsapThemeTrigger, gsapParallaxTrigger, gsapParallaxVisualTrigger, gsapRefresh, gsapKill };
