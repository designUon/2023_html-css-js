// scroll 스크롤 이벤트
// 스크롤 할 때마다 실행되는 함수도 함께 작성

// 네비게이션 바 가져오기
const nav = document.querySelector("#nav");

// 스크롤 이벤트로 조건을 걸 때 사용할 수 있는 속성
// 스크롤의 위치 : scrollTop, 
// 스크롤 길이 : scrollHeight,
// 화면의 길이 : innerHeight,

window.addEventListener("scroll", function(){
    // console.log("스크롤이벤트");
    // scrollY가 200 이상 스크롤되면 scrollon 클래스를 추가
    if(this.scrollY>=200){
        nav.classList.add("scrollon");
    }else{
        nav.classList.remove("scrollon");
    }

    // scrollY가 200 미만이면 scrollon 제거

    // console.log("스크롤위치", window.scrollX);
    // console.log("스크롤위치", window.scrollY);
    // console.log("화면바깥길이", window.outerHeight);
    // console.log("화면안쪽길이", window.innerHeight);
    // console.log("스크린Y위치", window.screenY);
});
