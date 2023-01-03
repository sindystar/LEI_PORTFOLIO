const mapFrame = document.querySelector('#map');
const info = mapFrame.querySelector('.info');



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

// //Info패널 이벤트 연결 하면 지도 가운데 유지 안됨 ,이벤트 발생 안함 
info.addEventListener('click', () => {
	info.classList.add('off');
	map.setCenter(mapOption.center);
});
mapFrame.addEventListener('mouseleave', () => {
	info.classList.remove('off');
});

//브라우저 리사이즈시 지도 항상 가운데 유지
window.addEventListener('resize', () => {
	map.setCenter(mapOption.center);
});
