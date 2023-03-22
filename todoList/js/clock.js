// 현재 시간을 들고와도 자동으로 값이 바뀌지 않음 => 고정
// 그 값을 새로 들고오면 바뀜 > new Date()값을 새로 할당
// 시간을 출력할 태그 가져옴
const clock = document.querySelector("#clock");


// 타이머함수의 콜백함수로 사용하기 위해 함수로 작성
function getClock(){

    // 현재 시간 : Date() - 시간을 가져오는 객체
    let date = new Date(); // 현재 시간을 가져옴
    let hour = String(date.getHours()).padStart(2,'0');
    let minutes = String(date.getMinutes()).padStart(2,'0');
    let seconds = String(date.getSeconds()).padStart(2,'0');
    
    // clock에 현재 시간 출력
    clock.innerHTML=`${hour}:${minutes}:${seconds}`;

    // return을 통해 시간을 문자열로 돌려줄 수 있다
    // return값을 이용해서 clock.innerHTML = getClock();
    return `${hour}:${minutes}:${seconds}`;
}


// 타이머 함수인 interval 사용 => 1초마다 new Date()의 값을 할당
// 현재 시간을 1초마다 다시 화면에 출력
// setInterval(getClock,1000);
setInterval(function(){
    clock.innerHTML = getClock();
},1000);

// 타이머는 1초 뒤에 실행되기때문에,
// 화면에 바로 출력하기위해 함수 호출
// getClock();
clock.innerHTML = getClock();
