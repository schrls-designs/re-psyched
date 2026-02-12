
// WHERE!!!!!!!!!!
const sectionOne = document.getElementById("dark-mode-id");

//WHAAAAAAAAATTTT!!!!!!!!
function toggleDarkMode()
{
    sectionOne.classList.toggle("dark-mode");
}

//WHEEEEENNNN!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
sectionOne.addEventListener("click", toggleDarkMode);


//where
const imageChange = document.getElementById("image");


//what
function toggleimage()
{
    
    if (imageChange.getAttribute("src") === "images/image.jpg")
    {
        imageChange.alt = "sumn else"
        imageChange.src = "images/brick.png"
    }
    else if (imageChange.getAttribute("src") === "images/brick.png")
    {
        imageChange.alt = "sumn else"
        imageChange.src = "images/image.jpg"
    }
   
}


//when
imageChange.addEventListener("click", toggleimage)