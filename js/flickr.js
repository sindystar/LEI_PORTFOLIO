
const base = "https://www.flickr.com/services/rest/?";
const method = "flickr.interestingness.getList";
const key = "ebb580daf8a6e1fcec5b215244ed1d71";
const per_page = 20;
const format = "json";

const url = `${base}method=${method}&api_key=${key}&per_page=${per_page}&format=${format}&nojsoncallback=1`;

//#list 변수로 저장 
const frame = document.querySelector("#list");



//해당 url값으로 비동기식 데이터 호출 
fetch(url)
  //호출된 데이터가 전달완료가 되면 해당 데이터값을 json객체로 변환 
  .then(data => {
    let result = data.json();
    //console.log(result); 
    return result;
  })
  //변환된 json객체를 전달받아서 필요정보값만 호출 
  .then(json => {

    let items = json.photos.photo;
    //console.log(items);

    //htmls 변수에 빈문자열 저장 
    let htmls = "";

    //배열의 갯수만큼 반복처리 
    items.map(data => {
      //console.log(data); 

      //data정보값을 이용해서 썸네일 이미지 URL 생성 
      let imgSrc = `https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_m.jpg`;

      let imgSrcBig = `https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_b.jpg`;

      htmls += `
                <li class="item">
                    <div>
                        <a href=${imgSrcBig}>
                            <img src=${imgSrc}>
                        </a>
                        <p>${data.title}</p>
                    </div>
                </li>
        `;
    })

    //완성된 DOM문자열을 frame에 삽입해서 동적 리스트 DOM생성 
    frame.innerHTML = htmls;

    //밑에 내용전에 여기부터 __*** 밑에 별세개까지 같이만. 
    // isoLayout(); 로딩과 DOM작업의 부조화가 일어남


    //이미지들이 다 로딩이 되어있는지 확인하는작업
    //동적으로 생성된 이미지의 전체 갯수를 구해서 
    const imgs = frame.querySelectorAll("img");
    //console.log(imgs);
    const len = imgs.length;
    let count = 0;
    //console.dir(imgs[0]);//모든속성과 메소드들을 볼 수 있음
    //이미지의 갯수만큼 반복을 돌면서 
    for (let el of imgs) {
      //이미지가 하나씩 로딩될때마다 count값을 1씩 증가 
      el.onload = () => {
        count++;

        //count값이 이미지전체갯수와 같다면 
        //모두 로딩완료됐으므로
        //isoLayout 함수 호출 
        if (count == len) isoLayout();
      }
    }

  })



function isoLayout() {

  //isoLayout이 호출될 때 
  //list에 on클래스를 붙여서 
  //아래에서 위로 올라오는 초기 모션 추가 
  //이유 : 모든 이미지가 로딩될때까지 isoLayout이 적용되지 않으므로 지저분한 레이아웃을 숨기기 위한 용도
  frame.classList.add("on");

  new Isotope("#list", {  //___***
    itemSelector: ".item",
    columnWidth: ".item",
    transitionDuration: "0.5s"
  });
}