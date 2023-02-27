// $(document).ready(function(){
//     $(window).scroll(function(){
//         var scroll = $(window).scrollTop();
//         if (scroll > 300) {
//             $("header").css("background" , "#333");  

//         }else{
//             $("header").css("background" , "#linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(\"/assets/images/main.jpg\");");  
//             $("header").css("background-size" , "cover");  
//             $("header").css("background-repeat" , "no-repeat");  
//             $("header").css("background-position" , "center");  
//             $("header").css(" background-attachment" , "fixed");  
//         }
//     })
//   })

const header = document.querySelector("header");


const sectionWelcome = document.querySelector(".welcome");
const sectionWelcomeOptions = {
    rootMargin: "-200px 0px 0px 0px"
}

const sectionWelcomeObserver = new IntersectionObserver
(
    function(entries, sectionWelcomeObserver){
        entries.forEach(entry => {
            if(!entry.isIntersecting){
                header.classList.add("header-scrolled");
            }else{
                header.classList.remove("header-scrolled");
            }
        });
    }, 
    
    sectionWelcomeOptions);

    sectionWelcomeObserver.observe(sectionWelcome);


// const sectionReservationCardShouldAppead = document.querySelector(".reservation-card-should-appear");
// const sectionWelcomeOptions = {
//     rootMargin: "-200px 0px 0px 0px"
// }

// const sectionWelcomeObserver = new IntersectionObserver
// (
//     function(entries, sectionWelcomeObserver){
//         entries.forEach(entry => {
//             if(!entry.isIntersecting){
//                 header.classList.add("header-scrolled");
//             }else{
//                 header.classList.remove("header-scrolled");
//             }
//         });
//     }, 
    
//     sectionWelcomeOptions);

//     sectionWelcomeObserver.observe(sectionWelcome);