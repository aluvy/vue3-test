const header = document.querySelector('#header');

const themeChk = function () {
	const io = new IntersectionObserver(entries => {
		// console.log('entries', entries);
		entries.forEach(entry => {
			// console.log('entry', entry);
			// entry의 target으로 DOM에 접근합니다.
			const $target = entry.target;

			console.log('target', $target, entry.isIntersecting);

			// 화면에 노출 상태에 따라 해당 엘리먼트의 class를 컨트롤 합니다.
			if (entry.isIntersecting) {
				// article.dataset.columns
				// $target.classList.add('screening');
				header.classList.add('test');
			} else {
				// $target.classList.remove('screening');
			}
		});
	});

	setTimeout(() => {
		const items = document.querySelectorAll('section[data-headerTheme]');
		console.log(items);
		// console.log(items);
		items.forEach(item => {
			io.observe(item);
		});
	}, 600);
};

export { themeChk };
