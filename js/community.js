// slider 
const slider = document.querySelector('.slider');
const ul = slider.querySelector('ul');
const lis = ul.querySelectorAll('li');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let len = lis.length;

// const txt_p = document.querySelectorAll('.txt p');
// const span = document.querySelector('.txt p span');

// span.innerText = '01';

let active = 0;

let enableClick = true;
let sliderSpeed = 500;

init();

next.addEventListener('click', (e) => {
	e.preventDefault();
	if (enableClick) {
		nextslide();
		enableClick = false;
	}
});
prev.addEventListener('click', (e) => {
	e.preventDefault();
	if (enableClick) {
		prevslide();
		enableClick = false;
	}
});

function init() {
	ul.style.left = '-100%';
	ul.prepend(ul.lastElementChild);
	ul.style.width = `${100 * len} %`;
	lis.forEach((el) => {
		el.style.width = `${100 / len}%`;
	});
}
function nextslide() {
	new Anim(ul, {
		prop: 'left',
		value: '-200%',
		duration: sliderSpeed,
		callback: () => {
			ul.style.left = '-100%';
			ul.append(ul.firstElementChild);
			enableClick = true;
		},
	});
	if (active == len - 1) {
		active = 0;
	} else {
		active++;
	}
	txtActive(txt_p, active);
}
function prevslide() {
	new Anim(ul, {
		prop: 'left',
		value: '0%',
		duration: sliderSpeed,
		callback: () => {
			ul.style.left = '-100%';
			ul.prepend(ul.lastElementChild);
			enableClick = true;
		},
	});
	if (active == 0) {
		active = len - 1;
	} else {
		active--;
	}
	txtActive(txt_p, active);
}

function txtActive(arr, index) {
	for (let el of arr) el.classList.remove('on');
	arr[index].classList.add('on');

	arr[index].querySelector('span').innerText = `0${index + 1}`;
}
