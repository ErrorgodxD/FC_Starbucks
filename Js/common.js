const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('Input'); //searchEl 안에 input을 찾는다.

searchEl.addEventListener('click', function () {   
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused'); //특정 요소에 class요소를 가지고 있는 객체에서 class를 추가하겠다.
  searchInputEl.setAttribute('placeholder', '통합검색');//Set=지정 HTML의 속성을 Attribute라고 함 
}); //  searchInputEl부분에 focus가 되면 두번째 인수로 작성하는 함수가 실행됨

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');  // blut가 되면 class가 제거됨.
}); 

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 2022