// 실시간 시간 1초마다 출력하기
const clock = document.querySelector("#clock");

function getClock(){

    let date = new Date();
    let hour = String(date.getHours()).padStart(2, '0');
    let minutes = String(date.getMinutes()).padStart(2, '0');
    let seconds = String(date.getSeconds()).padStart(2, '0');
    
    clock.innerHTML = `${hour}:${minutes}:${seconds}`;

}

setInterval(getClock, 1000);
getClock();


// 로그인 내용 입력되면 환영합니다 출력
// 리스트 입력+추가버튼 클릭하면 리스트 추가
// 체크박스 checked => color 변경
// 리스트 X버튼 삭제
