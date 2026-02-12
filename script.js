//--event listener logic--

//where
const themeText = document.getElementById("themetext"); //get an id within html file

let themetostore = localStorage.getItem("currenttheme");

let firstChange = localStorage.getItem("firstclick");

console.log(localStorage.getItem("currenttheme"));
console.log(localStorage.getItem("firstclick"));


if(themetostore != null)
{
  theme.setAttribute('href', themetostore);
}
else
{
   theme.setAttribute('href', 'Colour.css');
}

if (firstChange !== "true")
{
  localStorage.setItem("firstclick", "false")
}


if(themetostore === "Colour1.css")
{
    themeText.textContent= "PlayStation Dusk";
    themeText.classList= "themetext";
}
else if (firstChange === "false" && themetostore === "Colour.css")
{
   themeText.textContent= "Dreamcast Ocean (Click to Change)";
}
else
{
    themeText.textContent= "Dreamcast Ocean";
}


//what
function changeText()
{
  if (themeText.textContent === "PlayStation Dusk")
  {
    themeText.textContent= "Dreamcast Ocean";
    themeText.classList= "themetext";

    console.log(localStorage.getItem("currenttheme"));
    console.log(localStorage.getItem("firstclick"));
  }
    
  else if (themeText.textContent === "Dreamcast Ocean" || themeText.textContent === "Dreamcast Ocean (Click to Change)")
 {
    themeText.textContent= "PlayStation Dusk";
    themeText.classList= "themetext";

    console.log(localStorage.getItem("currenttheme"));
    console.log(localStorage.getItem("firstclick"));
 }
}

// ADAPTED FROM https://www.geeksforgeeks.org/javascript/how-to-switch-between-multiple-css-stylesheets-using-javascript/ 

function toggleTheme() 
{   
    // Select the <link> element
    let theme = document.getElementById('theme');

    // Toggle between light.css and dark.css
    if (theme.getAttribute('href') == 'Colour.css') 
    {   
        localStorage.setItem("firstclick", "true");
        theme.setAttribute('href', 'Colour1.css');
        localStorage.setItem("currenttheme", "Colour1.css");
    } 
    else 
    {
       localStorage.setItem("firstclick", "true");
       theme.setAttribute('href', 'Colour.css');
       localStorage.setItem("currenttheme", "Colour.css");
    }
}

//when
themeText.addEventListener("click", changeText); //string function, run function
themeText.addEventListener("click", toggleTheme); //string function, run function


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