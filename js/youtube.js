const vidList = document.querySelector('.vidList');
const key = 'AIzaSyB-6xV4QXok9PwwPhxxeP3c4JzN_KmmKKY';
const playlistId = 'PLfYNuKPjo-c-_IvgCMUV4AhGDTrFFI8Qu';
const num = 10;
const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId}&maxResults=${num}`;

fetch(url)
	.then((data) => {
		return data.json();
	})
	.then((json) => {
		let items = json.items;
		console.log(items);
		let result = '';

		items.map((el) => {
			let title = el.snippet.title;

			if (title.length > 60) {
				title = title.substr(0, 60) + '...';
			}

			let con = el.snippet.description;
			if (con.length > 100) {
				con = con.substr(0, 100) + '...';
			}
			let date = el.snippet.publishedAt;

			date = date.split('T')[0];

			result += `
				<article>
					<a href="${el.snippet.resourceId.videoId}" class="pic">
						<img src="${el.snippet.thumbnails.medium.url}">
					</a>
					<div class="con">
						<h2>${title}</h2>
						<p>${con}</p>
						<span>${date}</span>
					</div>
				</article>
			`;
		});

		vidList.innerHTML = result;
	});

vidList.addEventListener('click', (e) => {
	e.preventDefault();

	const vidId = e.target.closest('article').querySelector('a').getAttribute('href');

	let pop = document.createElement('figure');
	pop.classList.add('pop');
	pop.innerHTML = `
			<iframe src="https://www.youtube.com/embed/${vidId}" frameborder="0" width="100%" height="100%" allowfullscreen></iframe>
			<span class="btnClose">close</span>
		`;
	vidList.append(pop);
});

vidList.addEventListener('click', (e) => {
	//클릭이벤트를 vidList 이벤트위임으로 걸어주는것
	const pop = vidList.querySelector('.pop');
	//pop이 존재하는경우 (미래시)
	//pop이라는 조건문은 존재의 여부를 물어보는것
	if (pop) {
		//존재한다면 pop안의 close를 찾아서
		const close = pop.querySelector('span');
		//선택(클릭)한 대상이 close버튼이라면 그때 pop자체를 아예 지워버림
		if (e.target == close) pop.remove();
	}
});
