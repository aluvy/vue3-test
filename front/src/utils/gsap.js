import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const triggers = ScrollTrigger.getAll();

const gsapScrollTrigger = function (ref) {
	ScrollTrigger.refresh();
	gsap.context(() => {
		const items = ref.querySelectorAll('.gsap-item');
		// console.log(items);
		items.forEach(item => {
			gsap.to(item, {
				scrollTrigger: {
					trigger: item,
					start: 'top 80%',
					end: 'bottom 100%',
					// markers: true,
					onEnter: e => {
						e.trigger.classList.add('onEnter');
					},
					// onLeave: e => {
					// 	e.trigger.classList.remove('onEnter');
					// },
				},
			});
		});
	}, ref.value);
};

const gsapKill = function () {
	// console.log(triggers);
	triggers.forEach(trigger => {
		trigger.kill();
	});
};

export { gsapScrollTrigger, gsapKill };
