// 버튼콜
const btnCall = document.querySelector(".btnCall");
const menuMo = document.querySelector(".menuMo");

btnCall.onclick = function(e){
    e.preventDefault();

    btnCall.classList.toggle("on");

    menuMo.classList.toggle("on");
}


// scroll 
const scrollWrap = document.querySelectorAll('.scrollWrap');
const scrollBtn = document.querySelectorAll('.scroll li');
const scrollBtn_arr = Array.from(scrollBtn);
const base = -window.innerHeight / 3;
const scrollSpeed = 500;
let posArr = [];

getPos();

window.addEventListener('resize', Pos);
window.addEventListener('scroll', scrollActivation);

scrollBtn.forEach((btn, idx) => {
	btn.addEventListener('click', (e) => {
		const scroll = window.scrollY;
		const isOn = e.currentTarget.classList.contains('on');
		if (isOn && scroll === posArr[idx]) return;
		moveScroll(idx);
	});
});

function getPos() {
	posArr = [];
	for (const el of scrollWrap) posArr.push(el.offsetTop);
}

function Pos() {
	getPos();
	const scrollActive = document.querySelector('li.on');
	const active_index = scrollBtn_arr.indexOf(scrollActive);
	window.scroll(0, posArr[active_index]);
}

function scrollActivation() {
	const scroll = window.scrollY || window.pageYOffset;

	scrollWrap.forEach((_, idx) => {
		if (scroll >= posArr[idx] + base) {
			for (const el of scrollBtn) el.classList.remove('on');
			scrollBtn[idx].classList.add('on');
			scrollWrap[idx].classList.add('on');
		}
	});
}

function moveScroll(index) {
	new Anim(window, {
		prop: 'scroll',
		value: posArr[index],
		duration: scrollSpeed,
	});
}

//rolling
const frame = document.querySelector('#visual');
const panels = frame.querySelectorAll('.panel li');
const btns = frame.querySelectorAll('.btns li');
const btnPlay = frame.querySelector('.fa-play');
const btnPause = frame.querySelector('.fa-pause');
const len = panels.length - 1;
let num = 0;
let timer = null;

startRolling();

btns.forEach((btn, idx) => {
	btn.addEventListener('click', () => {
		activation(idx);
		stopRolling();
	});
});

btnPlay.addEventListener('click', startRolling);
btnPause.addEventListener('click', stopRolling);

function activation(index) {
	for (const el of panels) el.classList.remove('on');
	for (const el of btns) el.classList.remove('on');
	panels[index].classList.add('on');
	btns[index].classList.add('on');

	num = index;
}

function rolling() {
	num < len ? num++ : (num = 0);
	activation(num);
}

function startRolling() {
	timer = setInterval(rolling, 4000);
	btnPlay.classList.add('on');
	btnPause.classList.remove('on');
}

function stopRolling() {
	clearInterval(timer);
	btnPause.classList.add('on');
	btnPlay.classList.remove('on');
}

// main

const btnMetro = document.querySelectorAll('#metro nav a');
const boxMetro = document.querySelectorAll('#metro section');
const btnFooter = document.querySelector('footer .toggle');
const mapFrame = document.querySelector('#location');
const mapInfo = mapFrame.querySelector('.mapInfo');

//메트로 탭메뉴 토글 버튼
btnMetro.forEach((btn, idx) => {
	btn.addEventListener('click', (e) => {
		e.preventDefault();

		for (const el of btnMetro) el.classList.remove('on');
		btnMetro[idx].classList.add('on');

		for (const el of boxMetro) el.classList.remove('on');
		boxMetro[idx].classList.add('on');

		setTimeout(() => {
			for (const el of boxMetro) el.classList.remove('active');
			boxMetro[idx].classList.add('active');
		}, 0);
	});
});

//footer토글버튼 이벤트
btnFooter.addEventListener('click', (e) => {
	e.preventDefault();
	e.currentTarget.parentElement.classList.toggle('on');
});

//지도 연결 코드
const mapContainer = document.querySelector('#map');
const mapOption = {
	center: new kakao.maps.LatLng(37.5704837, 126.9705674),
	level: 3,
};
const map = new kakao.maps.Map(mapContainer, mapOption);

//마커 인스턴스 생성
const marker = new kakao.maps.Marker({
	position: mapOption.center,
});
marker.setMap(map);

//지도 줌기능 비활성화 (휠이벤트)
map.setZoomable(false);

//mapInfo패널 이벤트 연결
mapInfo.addEventListener('click', () => {
	mapInfo.classList.add('off');
	map.setCenter(mapOption.center);
});
mapFrame.addEventListener('mouseleave', () => {
	mapInfo.classList.remove('off');
});

//브라우저 리사이즈시 지도 항상 가운데 유지
window.addEventListener('resize', () => {
	map.setCenter(mapOption.center);
});

// youtube
const frame1 = document.querySelector('.vidListA');
const playlistId1 = 'PLfYNuKPjo-c-_IvgCMUV4AhGDTrFFI8Qu';

const frame2 = document.querySelector('.vidListB');
const playlistId2 = 'PLfYNuKPjo-c_K9Q0SehDk8RynA_45fzgU';

const frame3 = document.querySelector('.vidListC');
const playlistId3 = 'PLfYNuKPjo-c84_pudwu-9LP-DLMkZFdox';

const frame4 = document.querySelector('.vidListD');
const playlistId4 = 'PLfYNuKPjo-c87JK46KkDFUDZDvKg9-qVF';

const frame5 = document.querySelector('.vidListE');
const playlistId5 = 'PLfYNuKPjo-c9S5jEKcXWdP5O-e4yDFTml';

const frame6 = document.querySelector('.vidListF');
const playlistId6 = 'PLfYNuKPjo-c-nR8wqehdxZsV6voiF44jp';

const frame7 = document.querySelector('.vidListG');
const playlistId7 = 'PLfYNuKPjo-c8XcLm1nTWBOxL7CnCu9Feh';

const frame8 = document.querySelector('.vidListH');
const playlistId8 = 'PLfYNuKPjo-c8j-VsnKEktFPVasBwXq-uS';

const frame9 = document.querySelector('.vidListI');
const playlistId9 = 'PLfYNuKPjo-c9PJ9KdmpaCOaRtJfMN5WYf';

const frame10 = document.querySelector('.vidListJ');
const playlistId10 = 'PLfYNuKPjo-c_0tllSpqdEXZYVt0lJ-_be';


getYoutube(frame1, playlistId1, 1);
getYoutube(frame2, playlistId2, 1);
getYoutube(frame3, playlistId3, 1);
getYoutube(frame4, playlistId4, 1);
getYoutube(frame5, playlistId5, 1);
getYoutube(frame6, playlistId6, 1);
getYoutube(frame7, playlistId7, 1);
getYoutube(frame8, playlistId8, 1);
getYoutube(frame9, playlistId9, 1);
getYoutube(frame10, playlistId10, 1);


async function getYoutube(frame, playlist, count) {
	const key = 'AIzaSyB-6xV4QXok9PwwPhxxeP3c4JzN_KmmKKY';
	const playlistId = playlist;
	const num = count;
	const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId}&maxResults=${num}`;

	const data = await fetch(url);
	const json = await data.json();
	let items = json.items;
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
	frame.innerHTML = result;

	//동적으로 생성된 썸네일 클릭시 팝업 생성
	const pics = document.querySelectorAll('.pic');

	pics.forEach((pic) => {
		pic.addEventListener('click', (e) => {
			e.preventDefault();
			const vidId = e.currentTarget.getAttribute('href');
			let pop = document.createElement('figure');
			console.log(vidId);
			pop.classList.add('pop');
			pop.innerHTML = `
      <iframe src="https://www.youtube.com/embed/${vidId}" frameborder="0" width="100%" height="100%" allowfullscreen></iframe>
      <span class="btnClose">close</span>
    `;
			frame.append(pop);
		});
	});

	//동적으로 생성된 팝업의 닫기 버튼 클릭시 팝업 제거 (이벤트 위임 처리)
	frame.addEventListener('click', (e) => {
		const pop = frame.querySelector('.pop');

		if (pop) {
			const close = pop.querySelector('span');
			if (e.target == close) pop.remove();
		}
	});
}
