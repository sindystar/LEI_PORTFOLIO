const vidList = document.querySelector('.vidList');
const key = 'AIzaSyB-6xV4QXok9PwwPhxxeP3c4JzN_KmmKKY';
const playlistId = 'PLfYNuKPjo-c-_IvgCMUV4AhGDTrFFI8Qu';
const num = 8;
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

			if (title.length > 30) {
				title = title.substr(0, 20) + '...';
			}

			let con = el.snippet.description;
			const vidList = document.querySelector('.vidList');
			const key = 'AIzaSyB-6xV4QXok9PwwPhxxeP3c4JzN_KmmKKY';
			const playlistId = 'PLfYNuKPjo-c-_IvgCMUV4AhGDTrFFI8Qu';
			const num = 8;
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

						if (title.length > 30) {
							title = title.substr(0, 20) + '...';
						}

						let con = el.snippet.description;
						if (con.length > 100) {
							con = con.substr(0, 40) + '...';
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

				if (!e.target.closest('a')) return;

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
				const pop = vidList.querySelector('.pop');

				if (pop) {
					const close = pop.querySelector('span');
					if (e.target == close) pop.remove();
				}
			});

			if (con.length > 100) {
				con = con.substr(0, 40) + '...';
			}
			let date = el.snippet.publishedAt;

			date = date.split('T')[0];

			result += `
        <article>
          <a href="${el.snippet.resourceId.videoId}" class="pic">
            <img src="${el.snippet.thumbnails.medium.url}">
          </a>
          <div class="con">
            <p>${title}</p>
          </div>
        </article>
      `;
		});

		vidList.innerHTML = result;
	});

vidList.addEventListener('click', (e) => {
	e.preventDefault();

	//

	if (!e.target.closest('a')) return;
	복한다;
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
	const pop = vidList.querySelector('.pop');

	if (pop) {
		const close = pop.querySelector('span');
		if (e.target == close) pop.remove();
	}
});
