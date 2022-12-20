    // key = AIzaSyCmP3r3u88PwMa8IwuU_sJej9A7zBnH2O8
// play list = PLfYNuKPjo-c_K9Q0SehDk8RynA_45fzgU
    
const playListId = "PLfYNuKPjo-c_K9Q0SehDk8RynA_45fzgU";
const key = "AIzaSyCmP3r3u88PwMa8IwuU_sJej9A7zBnH2O8";
const num = 6;
const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playListId}&maxResult=${num}`;
const vidList = document.querySelector(".vidList");



    fetch(url)  // 데이터 불러오기
    .then((data) => {
        return data.json();
    })
    .then((json) => {
        let items = json.items;
        console.log(items);

        let = results = '';   //비어있는 변수 만들기 

        items.map((el) => {   //아이템즈에 반복을 돌면서 각각 넣어주기     
            result += `
            <article>
        <a href="${el.snippet.resourceId.videoId}" class="pic">
            <img src="${el.snippet.thumbnails.medium.url}">
        </a>
        <p>${el.snippet.title}</p>
    </article>
    `;
    })

        vidList.innerHTML = results;   //맵이 끝나는 지점에 꽂아 넣기 
    })
//     // 동영상 클릭시 큰동영상 나타나게 
vidList.addEventListener("click", (e) => {
//         //이벤트 위임으로 클릭 이벤트는 vidList에 걸어 주어 안의 아티클의 모든 섬네일에 클릭 이벤트를 걸어 주는것
    e.preventDefault();

    const vidId = e.target.closest("a").getAttribute("href");
// //클릭한 타겟의 a태그를 찾아서 안의 href속성에 있는 주소를 변수담음 
    let pop = document.createElement("figure");
    pop.classList.add("pop");  //figure태크를 생성한뒤 pop 라는 class를 붙임 
pop.innerHTML = `
        <iframe src="https://www.youtube.com/embed/${vidId}" frameborder="0" width="100%"
    height="100%" allowfullscreen></iframe>
        <span class="btnClose">close</span>
 `;   //아이프레임즈 주소를 가져 와서 넣어 주기 그리고 스팬 텍으로 클로즈를 쓰고 

vidList.append(pop);   //작성한 POP만들고 vidList 꽂아 넣어 주기 
});
//     // 동영상 닫기
vidList.addEventListener("click", (e) => {   //클릭 이벤트를 비드리스트에 이벤트 위임으로 걸러주기 
    const pop = vidList.querySelector(".pop");  // 담길 클래스가 있는지?  
// //팝이 존재하는 경우 (미래시)
    if (pop) {    //if로 물어 보고 있다면....존재하고 있다면 팝안의 클로스를 찾아서 
        const close = pop.querySelector("span");   //만약 선택한 대상이 클로즈 버튼이라면 그때 POP자체를 아예 지워 버림 
        if (e.target == close) pop.remove();
    }
})


    // 오 타 찾아 보기  주석 확인 하기!