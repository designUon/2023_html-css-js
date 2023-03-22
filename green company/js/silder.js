// 슬라이더 버튼을 눌렀을때 slider_item 위치 바뀜
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

// 슬라이더 아이템
const sliderItems = document.querySelectorAll(".slider_item");

// 전체 슬라이더 갯수
const maxSlide = sliderItems.length;
// 현재 슬라이더를 알려주기 위한 변수
let currentSlide = 1;

// next 버튼을 눌렀을 떄 left값이 이동
nextBtn.addEventListener("click", function(){
    if(currentSlide < maxSlide){

        currentSlide++; // 2 => -100%, 3 => -200%,
        // sliderItems를 통해서 모든 left값 이동
        for(let i=0; i<sliderItems.length; i++){
            sliderItems[i].style.left = `${100+(-100)*currentSlide}%`;
        }
    
    }
});

// prev 버튼을 눌렀을 떄 left값이 이동
prevBtn.addEventListener("click", function(){
    // 현재 슬라이더가 1보다 클때 실행
    if(currentSlide > 1){

        currentSlide--; // 2 => -100%, 3 => -200%,
        // sliderItems를 통해서 모든 left값 이동
        for(let i=0; i<sliderItems.length; i++){
            sliderItems[i].style.left = `${100+(-100)*currentSlide}%`;
        }
    
    }
});