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


