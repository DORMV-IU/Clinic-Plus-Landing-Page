var burger;
var overlay;
// var mailbox;

function  gather() {
    burger = document.querySelector(".burger");
    logo = document.querySelector("#logo");
    overlay = document.querySelector(".overlay");

    //Menu Links (CSS NOT WORKING FOR SOME REASON)
    // whyChooseUs = document.querySelector(".wcu");
    

    // levetating = document.querySelectorAll(".levetating");
    // console.log("HI");
}

gather();

const one = document.querySelector(".one");



function clicks() {

    let tog = false;

    burger.addEventListener("click", () => {
         one.classList.toggle("brg_active");
        // console.log("its working");

        tog = !tog;

        if(tog){
            console.log("menu_open");
            document.body.style.position = 'fixed';
        }
        else{
            console.log("menu_closed");
            document.body.style.position = 'relative';
        }

        
    });

    overlay.addEventListener("click", () => {
        one.classList.toggle("brg_active");

        tog = !tog;

        if (tog) {
            console.log("menu_open");
            document.body.style.position = 'fixed';
        }
        else {
            console.log("menu_closed");
            document.body.style.position = 'relative';
        }
    });

    logo.addEventListener("click", () => {
        window.location='./index.html';
    });

    // Menu Scrolling
    // whyChooseUs.addEventListener("click", () => {
    //     document.getElementById("wcu").scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    // })


}

clicks();

// const float = new gsap.timeline()

// while (true) {
//     float.fromTo(levetating, 3, { y: '0px' }, { y: '-20px', ease: Power2.easeInOut })
//         .fromTo(levetating, 3, { y: '-20px' }, { y: '20px', ease: Power2.easeInOut }, "-=3")
//         .fromTo(levetating, 3, { y: '20px' }, { y: '0px', ease: Power2.easeInOut }, "-=6")
// }