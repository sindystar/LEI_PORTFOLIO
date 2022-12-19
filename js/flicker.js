//key ebb580daf8a6e1fcec5b215244ed1d71  // 

const base = "https://www.flickr.com/services/rest/?";
const method = "flickr.interestingness.getList";
const key = "ebb580daf8a6e1fcec5b215244ed1d71";
const per_page = 50;
const format = "json";

const url = `${base}method=${method}&api_key=${key}&per_page=${per_page}&format=${format}&nojsoncallback=1`;

const frame = document.querySelector("#list")  // list 변수로 저장 

//해당 url값으로 비동기식 데이터를 호출
    fetch(url)
    .then(data => {
        let result = data.jason();
        // console.log(result);
        return result;
    })
    .then(jason => {

        let items = jason.photos.photo;
        // console.log(items);

        let htmls = "";

        items.map(data => {
            // console.log(data);
            let imgSrc = `https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_m.jpg`;

            let imgSrcBig = `https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_b.jpg`;

            htmls += `
                        <li class="item">
                            <div>
                                <a href=${imgSrcBig}>
                                    img src=${imgSrc}>
                                </a>
                                <p>${data.title}</p>
                            </div>
            `;
        }) 
        frame.innerHTML = htmls;

        const imgs = frame.querySelectorAll("img");
        // console.log(imgs);
        const len = imgs.length;
        let count = 0;
        // console.dir(imgs[0]);

        for (let el of imgs) {
            el.onload = () => {
                count++;

                if(count == len) isoLayout();

            }
        }   
    })
