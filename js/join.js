    const form = document.querySelector("#member");
    const btnSubmit = form.querySelector("input[type=submit]");

    btnSubmit.addEventListener("click", (e) => {
    //클릭이벤트 안에서 설정하는 함수들이 모두 거짓일때만 클릭이벤트가 발생하도록 설정
    //버튼을 누르면 액션으로 설정한 페이지로 링크되기 때문에 링크를 방지하는 e.preventDefault() 이구문을 각 함수에 적용해야한다
    if (!isTxt("userid", 5)) e.preventDefault();
    //텍스트 인증 함수가 참이 아니라면 멈추게 설정
    });

    //1. type이 text인 form요소 인증함수

    function isTxt(el, len) {
    //만약 매개변수로 입력받은 글자수가 없다면 디폴트값으로 설정 : 5로 지정
    if (len === undefined) len = 5;

    let input = form.querySelector(`[name=${el}]`);
    //input을 찾는데 어떤 input이냐면 name= 매개변수로 넣은 값이 것을 찾아준다
    let txt = input.value;
    //찾은 input의 안에 사용자가 적은 값을 추적해서 변수로 저장함

    //입력한 value의 값의 글자수가 설정한 len의 값 이상이라면 
    if (txt.length >= len) {
    //일단 에러메시지 p요소가 있는지 없는지를 판별
    const errMsgs = input.closest("td").querySelectorAll("p");
    // 있다면 제거하고
    if (errMsgs.length > 0) input.closest("td").querySelector("p").remove();
    //코드 참일 때 실행할 코드
    return true;
    } else {
    //일단 에러메시지 p요소가 있는지 없는지를 판별
    const errMsgs = input.closest("td").querySelectorAll("p");
    // 있다면 제거하고
    if (errMsgs.length > 0) return false;
    //return을 이용해서 에러메시지가 존재하면 구문을 중단시켜서 p태그가 중첩되지 않게 만듦

    // input.closest("td").querySelector("p").remove();
    //경고 문구나 안내하는 문구를 적어줌
    const errMsg = document.createElement("p");
    errMsg.append(`입력항목을 ${len}글자 이상 입력하세요`);
    input.closest("td").append(errMsg);
    return false;
    }
    }