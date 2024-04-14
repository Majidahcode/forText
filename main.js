//Check if local storage
let mainColors = localStorage.getItem("color_option");
// console.log(mainColors);

if (mainColors !== null) {
    // console.log('local Storage Is nto Impyt ');
    // console.log( localStorage.getItem("color_option"));
    document.documentElement.style.setProperty('--main-color', mainColors);

    //Remove All Active Class From All Childerns
    document.querySelectorAll(".colors-list li").forEach(elment => {
        elment.classList.remove("active");

        
        if (elment.dataset.color === mainColors) {
            //Add Active Class On Element
            elment.classList.add("active");
        }
    });

    

    
}

//Random Background Option
let backgroundOption = true;

//Varibale To Control The Interval
let backgroundInterval;


//checke If there LOcal Sotrage
let backgrounLocalItem = localStorage.getItem("background_option");


//Check IF RAndome Back Local Is Not Empty
if (backgrounLocalItem !== null){
    
    if (backgrounLocalItem === "true") {
        backgroundOption = this;

    }else{
        backgroundOption = false;
    }
    
    //REmove ALl SpAn
    document.querySelectorAll(".random-background span").forEach(elment => {

        elment.classList.remove("active");
    });

    if (backgrounLocalItem === "true"){

        document.querySelector(".random-background .yes").classList.add("active");

    }else{
        document.querySelector(".random-background .no").classList.add("active");


    }

}



//Toggle Spin Class On Open
document.querySelector(".toggle-setting .fa-gear").onclick = function () {
    
    this.classList.toggle("fa-spin");

    //Toggle Class Fa-spin For Rotation On Self
    document.querySelector(".setting-box").classList.toggle("open");

};

//Switch Color
const colorLi = document.querySelectorAll(".colors-list li");


colorLi.forEach(li => {
    
    li.addEventListener("click", (e) => {
        // console.log(e.target.dataset.color);

        //Set Color IN ROot
        document.documentElement.style.setProperty('--main-colorr', e.target.dataset.color);

        //Set Color In Local Storage
        localStorage.setItem("color_option", e.target.dataset.color);
        
        handleActive(e);
    });

});


//Switch Color
const randomBackEl = document.querySelectorAll(".random-background span");


randomBackEl.forEach(span => {
    
    span.addEventListener("click", (e) => {

        handleActive(e);

        if (e.target.dataset.background === 'yes') {
            
            backgroundOption = true;

            randomizeImgs();

            localStorage.setItem("background_option", true);

        
        } else {

            backgroundOption = false;

            clearInterval(backgroundInterval);

            localStorage.setItem("background_option", false);
        }
    });

});






//Selcet Landing Page Element
let landingPage = document.querySelector(".landing-page");

//Get Arrey Of Images 
let imgsArrey = ["01.jpg", "02.jpg", "03.jpg", "04.jpg","05.jpg" ,"06.jpg","07.jpg", "08.jpg", "09.jpg", "10.jpg","11.jpg" ,"12.jpg","13.jpg", "14.jpg", "15.jpg"];


//Function To Randomaize Images
function randomizeImgs() {
    
    if (backgroundOption === true) {

        backgroundInterval = setInterval(() => {

            //Get Random Numper
            let randomNumber = Math.floor(Math.random() * imgsArrey.length); 
        
            //Change Background Imgs URL
            landingPage.style.backgroundImage = 'url("images/' + imgsArrey[randomNumber] + '")';
        
        }, 1000);
    }
}



randomizeImgs();

//Slecet Skills
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {

    //Skills Offset Top
    let skillsOffsetTop = ourSkills.offsetTop;
    
    //Outer Height 
    let skillsOuterHeight = ourSkills.offsetHeight;
    

    // Window Height 
    let windowHeight = this.innerHeight;

    //window ScrollTop
    let windowScrollTop = this.pageYOffset;
    

    if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {
        
        let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

        allSkills.forEach(skill => {
            
            skill.style.width = skill.dataset.progress;
            
        });
    }

};

// Create Popup With The Image
let ourGallery = document.querySelectorAll(".gallary img");

ourGallery.forEach(img => {

    img.addEventListener('click', (e) => {

    // Create Overlay Element
    let overlay = document.createElement("div");

    // Add Class To Overlay
    overlay.className = 'popup-overlay';

    // Append Overlay To The Body
    document.body.appendChild(overlay);

    // Create The Popup Box
    let popupBox = document.createElement("div");

    // Add Class To The Popup Box
    popupBox.className = 'popup-box';

    if (img.alt !== null ) {

        let imgHeading = document.createElement("h3");

        let imgText = document.createTextNode(img.alt);

        imgHeading.appendChild(imgText);
        
        popupBox.appendChild(imgHeading);

    }
    

    // Create The Image
    let popupImage = document.createElement("img");

    // Set Image Source
    popupImage.src = img.src;

    // Add Image To Popup Box
    popupBox.appendChild(popupImage);

    // Append The Popup Box To Body
    document.body.appendChild(popupBox);

    let closeButton = document.createElement("span");

    let closeButtonText = document.createTextNode("X");


    closeButton.appendChild(closeButtonText);


    closeButton.className = 'close-button';

    popupBox.appendChild(closeButton);


    
    


    });

});

//Selct All BUllets

const allBullets = document.querySelectorAll(".nav-bullets .bullet");

const allLinks = document.querySelectorAll(".links a");

function scrollToSomewhere(elements) {

    elements.forEach(ele => {

        ele.addEventListener("click", (e) => {

            e.preventDefault();

            document.querySelector(e.target.dataset.section).scrollIntoView({
                
                behavior: 'smooth'
            })
        })
    })
}

scrollToSomewhere(allBullets);
scrollToSomewhere(allLinks);


function handleActive(ev) {

    //Remove All Active Class From All Childerns
    ev.target.parentElement.querySelectorAll(".active").forEach(elment => {
        
        elment.classList.remove("active");
    });

    //Add Active Class On  Self
    ev.target.classList.add("active");
}



let bulletsSpan = document.querySelectorAll(".bullets-option span");

let bulletsContainer = document.querySelector(".nav-bullets");

let bulletLocalItem = localStorage.getItem("bullets-option");

if (bulletLocalItem !== null) {

    bulletsSpan.forEach(span => {

        span.classList.remove("active");
        
    });

    if (bulletLocalItem === 'block') {

        bulletsContainer.style.display = 'block';

        document.querySelector(".bullets-option .yes").classList.add("active");



    } else {

        bulletsContainer.style.display = 'none';

        document.querySelector(".bullets-option .no").classList.add("active");
        

    }
}

bulletsSpan.forEach(span => {

    span.addEventListener("click", (e) => {

        if (span.dataset.display === 'show') {

            bulletsContainer.style.display = 'block';

            localStorage.setItem("bullets-option", 'block');

        } else {

            bulletsContainer.style.display = 'none';

            localStorage.setItem("bullets-option", 'none');

            
        }

        handleActive(e);


    });
});


document.querySelector(".reset-option").onclick = function () {

    localStorage.removeItem("colors-list");
    localStorage.removeItem("background_option");
    localStorage.removeItem("bullets-option");
    
    window.location.reload();
};

// Toggle Menu

let toggleBtn = document.querySelector(".toggle-menu");

let tLinks = document.querySelector(".links");

toggleBtn.onclick = function (e) {

    //Stope Propagation
    e.stopPropagation();

    this.classList.toggle("menu-active");

    tLinks.classList.toggle("open");
};


//Click anye where outside Menu and Toggle Button
document.addEventListener("click", (e) => {
    
    if (e.target !== toggleBtn && e.target !== tLinks) {
        
        //Check If Menu Is Open
        if (tLinks.classList.contains("open")) {

            toggleBtn.classList.toggle("menu-active");

            tLinks.classList.toggle("open");

        }
    }

});

//Stop Prpagation On Menu
tLinks.onclick = function (e) {
    e.stopPropagation();
}
