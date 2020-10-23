const preloader = document.querySelector('.preloader')

window.addEventListener('load', function(){
    setTimeout(() =>{
        $(preloader).fadeToggle();
    },3000);
});



const t4 = new TimelineMax();
t4.fromTo('.logo',{opacity:1,duration:3}, {opacity:0},'+=9')
t4.fromTo('.logo-container', 1, {
  ease:Power2.easeInOut
}, {top:'-110%', ease:Expo.easeInOut});

/*===== MENU SHOW =====*/ 
var t1 = new TimelineMax({paused: true});

t1.to(".one", 0.3, {
     y: 6,
     rotation: 45,
     width:40,
     ease: Expo.easeInOut
});
t1.to(".two", 0.3, {
     y: -6,
     rotation: -45,
     ease: Expo.easeInOut,
     delay: -0.3
});

t1.to(".menu", 2, {
     top: "0%",
     ease: Expo.easeInOut,
     delay: -2
});

t1.staggerFrom(".menu ul li", 2, {x: -200, opacity: 0, ease:Expo.easeOut}, 0.3);

t1.reverse();
$(document).on("click", ".toggle-btn", function() {
     t1.reversed(!t1.reversed());
});
$(document).on("click", ".nav", function() {
     t1.reversed(!t1.reversed());
});


/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   



/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
window.addEventListener('load', function(){
  sr.reveal('.home__title',{delay:1000}); 
sr.reveal('.button',{delay: 1200}); 
sr.reveal('.home__img',{delay: 1230}); 
sr.reveal('.home__social-icon',{delay:1200, interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});

/*SCROLL WORK*/
sr.reveal('.work__img',{interval: 300});
sr.reveal('.filter-btn',{interval:300}) 
});





var counter = document.querySelector(".percent");

            TweenLite.set(counter, {
                xPercent: -5,
                yPercent: -5,
            });

            window.addEventListener("mousemove", moveCounter);

            function moveCounter(e) {
                TweenLite.to(counter, 0.5, {
                    x: e.clientX,
                    y: e.clientY,
                });
            }

            function progress() {
                var windowScrollTop = $(window).scrollTop();
                var docHeight = $(document).height();
                var windowHeight = $(window).height();
                var progress = (windowScrollTop / (docHeight - windowHeight)) * 100;

                var $bgColor = progress > 99 ? "#fff" : "#fff";
                var $textColor = progress > 99 ? "#fff" : "#333";

                $(".percent_value")
                    .text(Math.round(progress) + "%")
                    .css({ color: $textColor });

                $(".fill")
                    .height(progress + "%")
                    .css({ backgroundColor: $bgColor });
            }
            progress();
            $(document).on("scroll", progress);



            
            const menu = [
              {
                id: 1,
                title: "trillo",
                category: "html & css",
                img: "img/trillo.png",
                github:"https://github.com/ahwindavid/Trillo"
              },
              {
                id: 2,
                title: "netflix-clone",
                category: "react",
                img: "img/netflix.png",
                link:"https://netflix-clone-410d9.web.app/"
              },
              {
                id: 3,
                title: "instagram-clone",
                category: "react",
                img: "img/instagram.png",
                link:"https://instagram-clone-1b81a.web.app/"
              },
              {
                id: 4,
                title: "booklist",
                category: "react",
                img: "img/booklist.png"
              
              },
              {
                id: 5,
                title: "recipe",
                category: "react",
                img: "img/recipe.png",
                github:"https://github.com/ahwindavid/food-recipe"
              },
              {
                id: 6,
                title: "movie database",
                category: "react",
                img: "img/movie.png",
                github:"https://github.com/ahwindavid/Movie-Database"
              },
              {
                id: 7,
                title: "natours",
                category: "html & css",
                img: "img/natours.png",
                
              },
              {
                id: 8,
                title: "laqed communication",
                category: "wordpress",
                img: "img/laqed.png",
              },
              {
                id: 8,
                title: "design",
                category: "figma",
                img: "img/design.png",
              },
              
            ];
            const sectionCenter = document.querySelector('.work__container');
            const btnContainer = document.querySelector('.btn-container');
            
            window.addEventListener('DOMContentLoaded', function(){
              displayMenuItems(menu);
              displayMenuButton();
            });
            
            
            function displayMenuItems(menuItems){
              let displayMenu = menuItems.map(function(item){
                return `
                <div class = 'work__station'>
                <div class = 'work__img'>
                <img src="${item.img}" alt=${item.title} />
                
               </div
                <br/>
                <div class="work__info">
                    <h4>${item.title}</h4>
                <div class="work__social">
                <a href="${item.github}" target = '_blank' class="work__social-icon"><i class='bx bxl-github'></i></a>
                <a href="${item.link}" target = '_blank' class="work__social-icon"><i class='bx bx-link-external' ></i></a>
                </div>
                </div>
                
                </div>`
              });   
              displayMenu = displayMenu.join("");
              sectionCenter.innerHTML = displayMenu;
            }
            
            function displayMenuButton(){
              const categories = menu.reduce(function(values,item){
                if(!values.includes(item.category)){
                  values.push(item.category);
                }
                return values
              },['all']);
              const categoryBtns = categories.map(function(category){
                return `<button type="button" class="filter-btn" data-id="${category}">
                ${category}
              </button>`
              }).join('');
              btnContainer.innerHTML = categoryBtns;
              const filterBtn = document.querySelectorAll('.filter-btn');
              filterBtn.forEach(function(btn){
                btn.addEventListener('click', function(e){
                  const category = e.currentTarget.dataset.id;
                  const menuCategory = menu.filter(function(menuItem){
              
                    if(menuItem.category === category){
                      return menuItem;
                    }
                    
                  });
                  if(category === 'all'){
                     displayMenuItems(menu)
                  }else{
                     displayMenuItems(menuCategory);
                  }
                });
              });
            }



