// html의 search > input을 찾는다
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input')

// search에 클릭 이벤트 추가
searchEl.addEventListener('click', function(){
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus',function(){
  searchEl.classList.add('focused');
  //searchInputEl에 html을 추가하겠다
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur',function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});


//Footer
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();