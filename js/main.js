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
	timer = setInterval(rolling, 2000);
	btnPlay.classList.add('on');
	btnPause.classList.remove('on');
}

function stopRolling() {
	clearInterval(timer);
	btnPause.classList.add('on');
	btnPlay.classList.remove('on');
}

// clip path

const section = document.querySelector('section');
const txt = document.querySelector('.txt');
const innerText = document.querySelector('.innerText');

window.addEventListener('scrolll', () => {
	const scrolll = window.scrollY;

	section.style.clipPath = `circle(${scrolll}px at center center)`;
	txt.style.left = 100 - scroll / 5 + '%';
	innerText.style.left = 100 - scrolll / 5 + '%';
});
