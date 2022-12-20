    // key = AIzaSyCmP3r3u88PwMa8IwuU_sJej9A7zBnH2O8
// play list = PLfYNuKPjo-c_K9Q0SehDk8RynA_45fzgU

const playListId = "PLfYNuKPjo-c_K9Q0SehDk8RynA_45fzgU";
const key = "AIzaSyCmP3r3u88PwMa8IwuU_sJej9A7zBnH2O8";
const num = 5;
const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playListId}&maxResult=${num}`;

const vidList = document.querySelector(".vidList");

fetch(url)  // 데이터 불러오기
  .then((data) => {
    return data.json();
  })
  .then((json) => {
    let items = json.items;
    console.log(items);


    let = results = '';

    items.map((el) => {
      results += `
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

vidList.addEventListener("click", (e) => {
  //이벤트위임으로 클릭이벤트는 vidList에 걸어주어 안의 아티클의 모든 섬네일에 클릭이벤트를 걸어주는것
  e.preventDefault();

  const vidId = e.target.closest("a").getAttribute("href");
  //클릭한 타겟의 a태그를 찾아서 안의 href속성에 있는 주소를 변수담음

  let pop = document.createElement("figure");
  pop.classList.add("pop");
  //figure태그를 생성한뒤 pop이라는 class를 붙임

  pop.innerHTML = `
      <iframe src="https://www.youtube.com/embed/${vidId}" frameborder="0" width="100%"
 height="100%" allowfullscreen></iframe>
      <span class="btnClose">close</span>
 `;

  vidList.append(pop);
  //작성한 pop을 vidList끝에 넣어줌
});

vidList.addEventListener("click", (e) => {
  //클릭이벤트를 vidList 이벤트위임으로 걸어주는것
  const pop = vidList.querySelector(".pop");
  //pop이 존재하는경우 (미래시)
  //pop이라는 조건문은 존재의 여부를 물어보는것
  if (pop) {
    //존재한다면 pop안의 close를 찾아서
    const close = pop.querySelector("span");
    //선택(클릭)한 대상이 close버튼이라면 그때 pop자체를 아예 지워버림
    if (e.target == close) pop.remove();
  }
})


