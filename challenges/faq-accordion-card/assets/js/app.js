const acordion = document.querySelectorAll('.acordion .acordion-item');
let woman =document.querySelector('.woman');
let bg = document.querySelector('.bg')
for(let i = 0; i < acordion.length; i++){

    acordion[i].addEventListener('click', () => {
        for(h = 0; h < acordion.length;h++){
            if(i != h){
                acordion[h].classList.remove('active')
            }   
        }

        if(acordion[i].classList.contains('active')){
            acordion[i].classList.remove('active');
        }else{
            acordion[i].classList.add('active');
        }

       
    });
}

if(window.innerWidth <= 700){
    bg.src = 'assets/img/bg-pattern-mobile.svg'
    woman.src = 'assets/img/illustration-woman-online-mobile.svg';
}
window.addEventListener('resize', function(event){
    const width = event.currentTarget.innerWidth;
    if(width <= 400){
        bg.src = 'assets/img/bg-pattern-mobile.svg'
        woman.src = 'assets/img/illustration-woman-online-mobile.svg';
    }
   console.log(width)
  });