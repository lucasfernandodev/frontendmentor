function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)

  );
}





function Transitions(){
  const sections = document.querySelectorAll('.wrapper');
  const titles = document.querySelectorAll('.title')

 if(!document.querySelectorAll('.main section')[0].classList.contains('show')){
  document.querySelectorAll('.main section')[0].classList.add('show')
 }
 
  document.addEventListener('scroll', function () {

    
    titles.forEach((el, index) => {
      const section = el.parentElement.parentElement
      console.log(section)
      if(isInViewport(el)){
        section.classList.add('show');
      }
    })
  
  }, {
    passive: true
  });
  console.log(sections)
}



export default Transitions;