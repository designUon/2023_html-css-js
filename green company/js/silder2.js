// 슬라이더 버튼을 눌렀을때 slider_item 위치 바뀜
// const prevBtn = document.querySelector("#prev");
// const nextBtn = document.querySelector("#next");

// 슬라이더 버튼을 눌렀을 때 각 위치의 슬라이더 출력
const slider2Btns = document.querySelectorAll("#slider2_btns a");


// 슬라이더 아이템
const slider2Items = document.querySelectorAll(".slider2_item");

// 각각의 버튼을 눌렀을 때 그 위치에 있는 슬라이더로 이동

// 각각의 버튼 => slide2Btns[0], slide2Btns[1], slide2Btns[2]
// 각각의 아이템 => slide2Items[0], slide2Items[1], slide2Items[2]
// 화면이 보이는 위치 => left=0, left=-100%, let = -200%

// [규칙]
// 버튼[0]을 누르면 left = 0 이동,
// 버튼[1]을 누르면 left = -100% 이동
// => 버튼[i]를 누르면 let = 1*100%

// 버튼[1]을 가져와서 확인 후 아래 내용 반복해서 사용
// slider2Btns[i].addEventListener("click", function(e){

//     e.preventDefault();
//     // 버튼의 인덱스가 1일때, 위치를100%
//     // slider2Items의 내용

//     for(let i=0; i<slider2Items.length; i++){
//         slider2Btns[i].style.left= `${1*-100}%`;
//     }

// });

// 버튼 배열에 이벤트리스너 추가
for(let i=0; i<slider2Btns.length; i++){

    slider2Btns[i].addEventListener("click", function(e){

        e.preventDefault();
        // forEach는 배열에 있는 각각의 값을 꺼내서
        // 콜백함수를 통해 쓸 수 있다
        // 배열.forEach(function(배열의값, 인덱스){});
        slider2Items.forEach(function(item, index){
            item.style.left = `${i*-100}%`;
        });

        // a태그의 모든 on을 제거
        for(let i=0; i<slider2Btns.length; i++){
            slider2Btns[i].classList.remove("on");
        }

        // 현재 a태그에 on을 추가
        e.target.classList.add("on");

    });

}



// 슬라이더 내부에 slider2_dots을 만들어서 버튼 작성
// 형태 => class="slider2_dots" => dot을 묶는 태그
// class="dot" => 각 슬라이더로 이동하는 dot
// 어떻게 추가 => slider2Items의 갯수에 따라서 생성 및 추가
// 위치 => slider2의 하단에 추가

const dots = document.createElement("div");
dots.classList.add("slider2_dots");

for(let i=0; i<slider2Items.length; i++){
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dots.appendChild(dot);

    // dot에 이벤트리스너 추가
    dot.addEventListener("click", function(e){
        // 각각의 슬라이더의 left값 수정
        slider2Items.forEach(function(item){
            item.style.left = `${i*-100}%`
        });
        
        // 모든 dot의 .on을 제거하고 현재 클릭한 dot만 .on
        // 모든 dot? => dots의 자식을 통해서 찾을 수 있음
        // >> dots의 자식들을 반복해서 remove()
        for(let i=0; i<dots.children.length; i++){
            dots.children[i].classList.remove("on");
        }
        // 현재 dot? => 이벤트 객체를 통해서 찾을 수 있음
        e.target.classList.add("on");

    });

}

const slider2 = document.querySelector("#slider2");
slider2.appendChild(dots);

