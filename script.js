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
        let target = this.getAttribute("aria-labelledby");
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

        document.getElementById('loadingScreen').classList.add('opacityLoadingScreen')
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

            else if (repo.name == "backEnd") {
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

             else if (repo.name == "UX-UI") {
                img.src = 'img/RepositoryLogo/uxui.jpg';
            }

             else if (repo.name == "JUnit-TestesUnitarios") {
                img.src = 'img/RepositoryLogo/junit.jpg';
            }





            //Append the <img> tag to the <a> tag
            link.appendChild(img);


            repoList.appendChild(link);
        });

        document.getElementById('loadingScreen').classList.add('opacityLoadingScreen')

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
        this.classList.add('opacity-50')
        window.scrollTo(0, 0)





        if (element.id === "pagAbout") {
            github.classList.remove('divBackGit', 'divGoGit');
            github.classList.add('opacity');

            github.addEventListener('animationend', function onAnimationEnd() {
                github.classList.remove('opacity');
                github.style.display = 'none';

                me.style.display = 'flex';
                me.classList.remove('divGo');
                me.classList.add('divBack');

                //Quando o usuário clica/ ele adiciona a função e depois remove pois se não haverá dois animationed que fazem dar um loop
                github.removeEventListener('animationend', onAnimationEnd);
            });
        }

        if (element.id === "pagGit") {
            me.classList.remove('divGo', 'divBack');
            me.classList.add('opacity');

            me.addEventListener('animationend', function onAnimationEnd() {
                me.classList.remove('opacity');
                me.style.display = 'none';

                github.style.display = 'flex';
                github.classList.remove('divGoGit');
                github.classList.add('divBackGit');

                //Quando o usuário clica/ ele adiciona a função e depois remove pois se não haverá dois animationed que fazem dar um loop
                me.removeEventListener('animationend', onAnimationEnd);
            });
        }







        const otherBtn = document.querySelectorAll('.pagbtn')
        otherBtn.forEach(button => {

            if (button != element) {
                button.classList.remove("bg-white")
                button.classList.remove('opacity-50')
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




window.addEventListener('resize', updatePath); // Recalculate if the window is resized
window.addEventListener('load', updatePath);   // Initial calculation when the page loads

//Footer


/* Scroll reveal effects!  */
const divs = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible'); // Optional, for repeated animation
        }
    });
});

divs.forEach(div => observer.observe(div));





const footer = document.getElementById('footer')

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible-op');
        } else {
            entry.target.classList.remove('visible-op'); // Optional, for repeated animation
        }
    });
});

observer2.observe(footer)

/* Scroll reveal effects!  */




//SVG

const path = document.getElementById('complexPath');
        
// Calculate path length dynamically to apply proper stroke-dasharray
const pathLength = path.getTotalLength();

// Set the stroke-dasharray and stroke-dashoffset to match the path length
path.style.strokeDasharray = pathLength;
path.style.strokeDashoffset = pathLength;

// Function to handle scroll and dynamically draw the path based on scroll position
function handleScroll() {
    // Get the scroll position relative to the entire document
    const scrollY = window.scrollY; // Scroll Boundaries
    const documentHeight = document.documentElement.scrollHeight; //Full height of the document
    const windowHeight = window.innerHeight; //User view

    

    // Calculate the scroll percentage
    const scrollPercentage = (scrollY) / (documentHeight - windowHeight);

   
    

    // Use scroll percentage to dynamically change the stroke-dashoffset
    const drawLength = pathLength * scrollPercentage;
    path.style.strokeDashoffset = pathLength - drawLength; // As the user scrolls down, the path is drawn

    // Optional: If the user scrolls up, the drawing will reverse
}

// Listen for the scroll event
window.addEventListener('scroll', handleScroll);

//SVG
