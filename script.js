//Header

let buttonsHeader = document.querySelectorAll('.buttonsHeader')
buttonsHeader.forEach(element => {
    element.addEventListener('mouseover', function () {

        let id = element.id
        let elementLine = document.getElementById(`${id}Line`)
        elementLine.style.width = "100%"
        let audio = new Audio("./sound/ui-sound-off-270300.mp3");
        audio.play();

    })

    element.addEventListener('mouseleave', function () {

        let id = element.id
        let elementLine = document.getElementById(`${id}Line`)
        elementLine.style.width = "10px"

    })
})


document.querySelectorAll(".buttonsHeader").forEach(button => {
    button.addEventListener("click", function () {
        let target = this.getAttribute("title");
        if (target == "#aboutSection") {
            window.scrollTo(0, 0)
        }
        else if (target) {
            document.querySelector(target).scrollIntoView({ behavior: "smooth" });
        }
    });
});

//Header


//GitHub

async function fetchRepos() {

    const response = await fetch("https://api.github.com/users/ryanoliveira466/repos");
    if (!response.ok) {

        let gitHubDivHeight = document.getElementById('github').offsetHeight
        let meDivHeight = document.getElementById('me').offsetHeight

        let style = document.createElement("style");
        style.innerHTML = `
        @keyframes divBack {
            0% {
            

                opacity: 0;
                height: 0px;
                transform: translateY(-100vh);
                 
            }

            90%{
            opacity: 0;
            }

            100% {
                 
                opacity: 1;
                height: ${meDivHeight}px;
                transform: translateY(0vh);
                 
            }
        }
  
        @keyframes divGo {
            0% {
                
                opacity: 1;
                height: ${meDivHeight}px;
                transform: translateY(0vh);
            }

            10%{
            opacity: 0;
            }


            

            100% {
               
                opacity: 0;
                height: 0px;
                transform: translateY(-100vh);
                 
            }
        }
  
        .divGo {
            animation: divGo 3s ease-in-out forwards;
        }
  
        .divBack {
            animation: divBack 3s ease-in-out forwards;
        }
  
        @keyframes divBackGit {
            0% {
  
               
                opacity: 0;
                 height: 0px;
                transform: translateX(-100vw);
                 
            }


            90%{
            opacity: 0;
            }

            100% {
                  
                opacity: 1;
                 height: ${gitHubDivHeight}px;
                transform: translateX(0vw);
                 
            }
        }
  
        @keyframes divGoGit {
            0% {
                 
                height: ${gitHubDivHeight}px;
                opacity: 1;
                transform: translateX(0vw);
                 
            }


            10%{
            opacity: 0;
            }

            100% {
                
                 
                opacity: 0;
                height: 0px;
                transform: translateX(-100vw);
                 
            }
        }
  
        .divGoGit {
            animation: divGoGit 3s ease-in-out forwards;
        }
  
        .divBackGit {
            animation: divBackGit 3s ease-in-out forwards;
        }
  `;

        document.head.appendChild(style);

        document.getElementById('github').style.transform = 'translateX(-100vw)'
        document.getElementById('github').style.height = '0px'
        document.getElementById('loadingScreen').classList.add('opacityLoadingScreen')
        setTimeout(() => {
            document.getElementById('github').style.transition = 'all 1s ease'
        }, 50);

        return false;
    }

    else {

        const repos = await response.json();
        const repoList = document.getElementById("contactDivRepo");

        repoList.innerHTML = ""; // Clear loading message

        repos.forEach(repo => {
            const link = document.createElement('a');
            link.href = repo.html_url;
            link.target = '_blank';  //Open link in a new tab
            link.title = repo.name

            //Create the <img> tag
            const img = document.createElement('img');
            img.className = 'contentImgGit'; // Add class if needed
            img.alt = 'GitHub';  //Alt text for accessibility

            if (repo.name == "guessingGame" || repo.name == "atividadesAlgoritmos" || repo.name == "passwordGenerator" || repo.name == "ticTacToeGame") {
                img.src = 'img/RepositoryLogo/JavaScript-logo.png';
            }

            else if (repo.name == "orientacaoObjetos") {
                img.src = 'img/RepositoryLogo/typescript-icon-icon-2048x2048-2rhh1z66.png';
            }

            else if (repo.name == "bancoDados") {
                img.src = 'img/RepositoryLogo/mariadb-vector-logo.png';
            }

            else if (repo.name == "gitHub-gitFork" || repo.name == "gitHub-gitComandos") {
                img.src = 'img/RepositoryLogo/github-6980894_960_720.webp';
            }

            else if (repo.name == "gitHub-gitExercicios") {
                img.src = 'img/RepositoryLogo/git-logo-in-html-css.png';
            }

            else if (repo.name == "apiGatos") {
                img.src = 'img/RepositoryLogo/gato.jpg';
            }

            else if (repo.name == "testeApiRoboHash") {
                img.src = 'img/RepositoryLogo/robo.png';
            }

            else if (repo.name == "bootStrap") {
                img.src = 'img/RepositoryLogo/bootstrap-flat-logo-vector-illustration_582637-461.avif';
            }

            else if (repo.name == "html") {
                img.src = 'img/RepositoryLogo/html.png';
            }

            else if (repo.name == "css") {
                img.src = 'img/RepositoryLogo/css.jpg';
            }

            else if (repo.name == "redeSocial") {
                img.src = 'img/RepositoryLogo/facebook.png';
            }

            else if (repo.name == "colormind") {
                img.src = 'img/RepositoryLogo/colormind.webp';
            }

            else if (repo.name == "siteF1") {
                img.src = 'img/RepositoryLogo/fiSite.png';
            }

            else if (repo.name == "interfacePrimeVideo") {
                img.src = 'img/RepositoryLogo/interfacePrimeVideo.png';
            }

            else if (repo.name == "pokedexApi") {
                img.src = 'img/RepositoryLogo/pokedexApi.jpg';
            }

            else if (repo.name == "java-javaDesktop") {
                img.src = 'img/RepositoryLogo/java.svg';
            }

            else if (repo.name == "java-javaBD") {
                img.src = 'img/RepositoryLogo/apachederby.png';
            }

            else if (repo.name == "musicPlayer") {
                img.src = 'img/RepositoryLogo/musicPlayer.png';
            }

            else if (repo.name == "frontEnd") {
                img.src = 'img/RepositoryLogo/frontEnd.jpg';
            }

            else if (repo.name == "localStorage") {
                img.src = 'img/RepositoryLogo/backend.webp';
            }

            else if (repo.name == "portifolio") {
                img.src = 'img/RepositoryLogo/portifolio.avif';
            }

            else if (repo.name == "ryanoliveira466") {
                img.src = 'img/RepositoryLogo/2021-02-markdown-logo.webp';
            }

            else if (repo.name == "ryanoliveira466.github.io") {
                img.src = 'img/RepositoryLogo/womanIcon.png';
            }





            //Append the <img> tag to the <a> tag
            link.appendChild(img);


            repoList.appendChild(link);
        });



        let gitHubDivHeight = document.getElementById('github').offsetHeight
        let meDivHeight = document.getElementById('me').offsetHeight

        let style = document.createElement("style");
        style.innerHTML = `
        @keyframes divBack {
            0% {
            

                opacity: 0;
                height: 0px;
                transform: translateY(-100vh);
                 
            }

            90%{
            opacity: 0;
            }

            100% {
                 
                opacity: 1;
                height: ${meDivHeight}px;
                transform: translateY(0vh);
                 
            }
        }
  
        @keyframes divGo {
            0% {
                
                opacity: 1;
                height: ${meDivHeight}px;
                transform: translateY(0vh);
            }

            10%{
            opacity: 0;
            }


            

            100% {
               
                opacity: 0;
                height: 0px;
                transform: translateY(-100vh);
                 
            }
        }
  
        .divGo {
            animation: divGo 3s ease-in-out forwards;
        }
  
        .divBack {
            animation: divBack 3s ease-in-out forwards;
        }
  
        @keyframes divBackGit {
            0% {
  
               
                opacity: 0;
                 height: 0px;
                transform: translateX(-100vw);
                 
            }


            90%{
            opacity: 0;
            }

            100% {
                  
                opacity: 1;
                 height: ${gitHubDivHeight}px;
                transform: translateX(0vw);
                 
            }
        }
  
        @keyframes divGoGit {
            0% {
                 
                height: ${gitHubDivHeight}px;
                opacity: 1;
                transform: translateX(0vw);
                 
            }


            10%{
            opacity: 0;
            }

            100% {
                
                 
                opacity: 0;
                height: 0px;
                transform: translateX(-100vw);
                 
            }
        }
  
        .divGoGit {
            animation: divGoGit 3s ease-in-out forwards;
        }
  
        .divBackGit {
            animation: divBackGit 3s ease-in-out forwards;
        }
  `;

        document.head.appendChild(style);

        document.getElementById('github').style.transform = 'translateX(-100vw)'
        document.getElementById('github').style.height = '0px'
        document.getElementById('loadingScreen').classList.add('opacityLoadingScreen')
        setTimeout(() => {
            document.getElementById('github').style.transition = 'all 1s ease'
        }, 50);

        let buttonsGit = document.querySelectorAll('.contentImgGit');

        buttonsGit.forEach(element => {
            element.addEventListener('mouseover', function () {
                let audio = new Audio("./sound/minimal-pop-click-ui-1-198301.mp3");
        
                audio.play().catch(error => {
                    console.error("Audio play failed:", error);
                });
            });
        });

    }



 



}

fetchRepos();






//GitHub


//Pagination

const buttonPag = document.querySelectorAll('.pagbtn')

buttonPag.forEach(element => {
    element.addEventListener('click', function () {


        let gitHubDivHeight = document.getElementById('github')
        let meDivHeight = document.getElementById('me')

        gitHubDivHeight.style.pointerEvents = 'none'
        meDivHeight.style.pointerEvents = 'none'

        setTimeout(() => {
            gitHubDivHeight.style.pointerEvents = 'all'
            meDivHeight.style.pointerEvents = 'all'
        }, 3000);


        this.classList.add("bg-white")
        window.scrollTo(0, 0)

        if (element.id == "pagAbout") {

            document.getElementById('github').classList.remove('divBackGit')
            document.getElementById('github').classList.add('divGoGit')

            document.getElementById('me').classList.remove('divGo')
            document.getElementById('me').classList.add('divBack')
        }

        if (element.id == "pagGit") {

            document.getElementById('github').classList.remove('divGoGit')
            document.getElementById('github').classList.add('divBackGit')

            document.getElementById('me').classList.remove('divBack')
            document.getElementById('me').classList.add('divGo')
        }

        const otherBtn = document.querySelectorAll('.pagbtn')
        otherBtn.forEach(button => {

            if (button != element) {
                button.classList.remove("bg-white")
            }
        })

        const disabled = document.querySelectorAll('#paginationDiv button')

        disabled.forEach(dis => {
            dis.disabled = true

            setTimeout(() => {
                dis.disabled = false
            }, 3000);
        })

    })

        element.addEventListener('mouseover', function () {
            let audio = new Audio("./sound/minimal-pop-click-ui-1-198301.mp3");
    
            audio.play().catch(error => {
                console.error("Audio play failed:", error);
            });
        });
     
})

//Pagination



//Sound

let buttonsSound = document.querySelectorAll('.contentImgP, .contentImgL ,.contentImgC');

        buttonsSound.forEach(element => {
            element.addEventListener('mouseover', function () {
                let audio = new Audio("./sound/minimal-pop-click-ui-1-198301.mp3");
        
                audio.play().catch(error => {
                    console.error("Audio play failed:", error);
                });
            });
        });

//Sound




//Footer

function updatePath() {
    const parent = document.querySelector('footer');
    const elements = document.querySelectorAll('.motion');
    const parentWidth = parent.offsetWidth - (parent.offsetWidth * 0.2);  // 80% of parent width

    elements.forEach((element, index) => {
        // Add slight variation in curves for each element
        const variation = (index + 1) * 10; // Change curve slightly per element

        const path = `M0,${50 + variation} C0,${100 + variation} ${parentWidth},${variation} ${parentWidth},${100 + variation}`;

        // Apply the new path
        element.style.offsetPath = `path("${path}")`;

        // Set an infinite animation with random delays for variety
        element.style.animation = `moveAlongPath 5s linear infinite`;
        element.style.animationDelay = `${index * 0.5}s`; // Staggered start times
    });
}

// Run the update when the page loads or window resizes
window.addEventListener('resize', updatePath); // Recalculate if the window is resized
window.addEventListener('load', updatePath);   // Initial calculation when the page loads

//Footer