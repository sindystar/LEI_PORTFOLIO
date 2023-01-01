// 버튼콜
const btnCall = document.querySelector(".btnCall");
const menuMo = document.querySelector(".menuMo");

btnCall.onclick = function(e){
    e.preventDefault();

    btnCall.classList.toggle("on");

    menuMo.classList.toggle("on");
}


// scroll 
const scrollView = document.querySelectorAll('.scrollView');
const btnScroll = document.querySelectorAll('.scroll li');
const btnScroll_arr = Array.from(btnScroll);
const base = -window.innerHeight / 3;
const scrollSpeed = 500;
let posArr = [];

getPos();

window.addEventListener('resize', Pos);

window.addEventListener('scroll', scrollActivation);

btnScroll.forEach((btn, idx) => {
	btn.addEventListener('click', (e) => {
		const scroll = window.scrollY;
		const isOn = e.currentTarget.classList.contains('on');
		if (isOn && scroll === posArr[idx]) return;
		moveScroll(idx);
	});
});

function getPos() {
	posArr = [];
	for (const el of scrollView) posArr.push(el.offsetTop);
}

function Pos() {
	getPos();
	const scrollActive = document.querySelector('li.on');
	const active_index = btnScroll_arr.indexOf(scrollActive);
	window.scroll(0, posArr[active_index]);
}

function scrollActivation() {
	const scroll = window.scrollY || window.pageYOffset;

	scrollView.forEach((_, idx) => {
		if (scroll >= posArr[idx] + base) {
			for (const el of btnScroll) el.classList.remove('on');
			btnScroll[idx].classList.add('on');
			scrollView[idx].classList.add('on');
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


