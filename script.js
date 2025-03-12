//Header

// Pop Up Header

// window.onscroll = function () {
//     let header = document.getElementById("header");
    
//     if (window.scrollY > 0) {
//         header.classList.add("fixed");
//     } else {
//         header.classList.remove("fixed");
//     }
// };

// Pop Up Header
 
let buttonsHeader = document.querySelectorAll('.buttonsHeader')
buttonsHeader.forEach(element => {
    element.addEventListener('mouseover', function(){
        
        let id = element.id
        let elementLine = document.getElementById(`${id}Line`) 
        elementLine.style.width = "100%"
        let audio = new Audio("./sound/ui-sound-off-270300.mp3"); // Load the audio file
        audio.play(); // Play the audio
     
    })

    element.addEventListener('mouseleave', function(){
        
        let id = element.id
        let elementLine = document.getElementById(`${id}Line`) 
        elementLine.style.width = "10px"
     
    })
})


document.querySelectorAll(".buttonsHeader").forEach(button => {
    button.addEventListener("click", function() {
        let target = this.getAttribute("title");
        if (target == "#aboutSection") {
            window.scrollTo(0,0)
        }
        else if (target) {
            document.querySelector(target).scrollIntoView({ behavior: "smooth" });
        }
    });
});

//Header