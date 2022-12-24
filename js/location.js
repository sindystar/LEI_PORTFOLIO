//38f993fec453c589a1a04dc16e1f4318

var mapContainer = document.getElementById('map'), // 지도를 표시할 div
	mapOption = {
		center: new kakao.maps.LatLng(37.5704837, 126.9705674), // 지도의 중심좌표
		level: 3, // 지도의 확대 레벨
	};

// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
var map = new kakao.maps.Map(mapContainer, mapOption);

var mapContainer = document.getElementById('map'), // 지도를 표시할 div
	mapOption = {
		center: new kakao.maps.LatLng(37.5704837, 126.9705674), // 지도의 중심좌표
		level: 3, // 지도의 확대 레벨
	};

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

function setCenter() {
	// 이동할 위도 경도 위치를 생성합니다
	var moveLatLon = new kakao.maps.LatLng(37.5704837, 126.9705674);
	//다른 지역을 지도에 표시 하려면 latlng의 위도 경도의 값을 변경하면 됩니다.
	// 위도, 경도는 구글맵을 이용해서 알아볼수 있습니다.

	// 지도 중심을 이동 시킵니다
	map.setCenter(moveLatLon);
}

function panTo() {
	// 이동할 위도 경도 위치를 생성합니다
	var moveLatLon = new kakao.maps.LatLng(37.5704837, 126.9705674);

	// 지도 중심을 부드럽게 이동시킵니다
	// 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	map.panTo(moveLatLon);
}

// // 마커가 표시될 위치입니다
// var markerPosition  = new kakao.maps.LatLng(37.459244, 126.7522197);

// // 마커를 생성합니다
// var marker = new kakao.maps.Marker({
//     position: markerPosition
// });

// // 마커가 지도 위에 표시되도록 설정합니다
// marker.setMap(map);

var imageSrc = 'img/marker1.png', // 마커이미지의 주소입니다
	imageSize = new kakao.maps.Size(200, 85), // 마커이미지의 크기입니다
	imageOption = { offset: new kakao.maps.Point(100, 99) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
	markerPosition = new kakao.maps.LatLng(37.5704837, 126.9705674); // 마커가 표시될 위치입니다

// 마커를 생성
var marker = new kakao.maps.Marker({
	position: markerPosition,
	image: markerImage, // 마커이미지 설정
});

// 마커가 지도 위에 표시되도록 설정
marker.setMap(map);

var mapContainer = document.getElementById('map'), // 지도를 표시할 div
	mapOption = {
		center: new kakao.maps.LatLng(37.5704837, 126.9705674), // 지도의 중심좌표
		level: 3, // 지도의 확대 레벨
	};

/*
카카오맵 / location 

지도가 안나오면 확인할 내용
1) https://developers.kakao.com/console/app/836924/config/platform
이곳에서 플랫폼의 주소와 본인의 go live 한 페이지의 주소가 같은지를 확인 //주소는 바뀔수 있으므로 주소 변경이 관건!
2) 자바스크립트 키를 적는부분에 오타가 있는지 확인

1. https://developers.kakao.com/console/app/836935 카카오앱으로 로그인하고 
2. 자바스크립트 앱 키 복사 / key : 0cc5617eaa9229eec2d215375c979895
3. 플랫폼에서 수정 : go live 했을때 사이트 도메인 주소 를 품랫폼에서 '수정'하기 / 슬러시 넣으면 안됨 
4. 깃 커밋한 주소 넣으려면 https://깃허브아이디.github.io 릴리즈주소 넣을수 있슴 
5. https://apis.map.kakao.com/ 열어서 web선택 / 시작하기 선택 /
6. sample / 지도 생성하기  
7. guide / 시작하기 / <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=발급받은 APP KEY를 넣으시면 됩니다."></script>/ html에  js 붙여 넣기 / key넣기 
8. 이렇게만 해도 지도는 나옴
9. sample / 오버레이 / 마커생성하기 or 다른 이미지로 마커 생성하기 

*/
