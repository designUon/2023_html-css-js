// todolist 만들기
// 추가 => 할일 값을 받아와서 ul의 li로 출력하기 => 추가
// 완료 => 할일을 완료(체크)를 했을 때, 완료표시
// 삭제 => 하지않을 때 그 할일을 삭제

// 할일 입력창에 값을 입력하고 submit을 했을 때 => 이벤트
// 작성한 할일을 ul에 li로 추가 => 실행할 함수
const todoForm = document.querySelector("#todo_form");
todoForm.addEventListener("submit", todoAdd);

// todo를 추가하는 함수
function todoAdd(e){

    // e.preventDefault();
    e.preventDefault();

    // todoForm.firstElementChild는 input type=text
    // input태그의 값을 가져와서 ul의 list로 추가하기
    const todoValue = todoForm.firstElementChild.value;

    // li태그 생성 => ul 태그 찾아서 추가
    const li = document.createElement("li");

    // li태그에 추가할 내용 : 체크박스, 텍스트노드, 버튼
    // li.innerHTML = todoValue; => 일반 텍스트로 리스트가 추가됨
    const check = document.createElement("input");
    check.type="checkbox";
    const text = document.createTextNode(todoValue);
    const button = document.createElement("button");
    button.innerHTML = "X";
    // 시간을 추가하기위한 span태그
    const time = document.createElement("span");
    time.innerHTML = getClock();
    
    // li태그에 생성한 태그 추가
    li.appendChild(check);
    li.appendChild(text);
    li.appendChild(time);
    li.appendChild(button);


    // #todolist ul
    document.querySelector("#todolist").appendChild(li);


    // 추가 후 값이 그대로 남아있음 => input의 value값을 ""으로 바꿈
    todoForm.firstElementChild.value = "";

    // 빈값도 추가가 됨 => html 해당태그에 required 추가

    // check에 클릭이벤트 추가
    check.addEventListener("click", todoCheck);

    // button 에 클릭이벤트 추가
    button.addEventListener("click", todoDelete);

    
}



// 버튼에 클릭이벤트를 추가해서 선택된 li가 삭제되는 함수 작성 remove()
// const delBtn = document.querySelectorAll("#todolist button");
function todoDelete(e){
    const button = e.target;
    const li = button.parentNode;
    li.remove();
};



// const li = check.parentNode;

// check에 들어가는 todoCheck 함수는 따로 작성
function todoCheck(e){
    const check = e.target;
    const li = check.parentNode;
    // console.log(e.target);
    if(check.checked){
        // check.parentNode.style.color = "darkgray";
        li.style.color = "darkgray";
    }else{
        // check.parentNode.style.color = "";
        li.style.color = "";
    }

    // let xbutton = document.querySelector("#todolist button");
    // console.log("체크박스가 클릭되었습니다");

};

