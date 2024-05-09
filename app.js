let header = document.querySelector(".header");
let scrollWindows = window.scrollY;
let navbar = document.querySelector(".navbar");
if(window.innerWidth > 457){
  addEventListener("scroll",e=>{
  	window.scrollY > 40 ? header.classList.add("active")
  				   : header.classList.remove("active")
  })
}



 const swiper = new Swiper(".mySwiper", {
 	  loop:true,
 	  autoplay:true,
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
        breakpoints: {
        	769:{
        		  slidesPerView: 3,
                   spaceBetween: 30
        	},
        	500:{
        		  slidesPerView: 2,
                   spaceBetween: 30
        	}

        }
    });


addEventListener("scroll",e=>{
	if(scrollWindows < window.scrollY){
		scrollWindows = window.scrollY;
		navbar.classList.remove("actives")
	}else{
		scrollWindows = window.scrollY;
		
		window.innerWidth < 457 &&	navbar.classList.add("actives");
		
	}
	


})



