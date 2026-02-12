//--event listener logic--

//where
const themeText = document.getElementById("themetext"); //get an id within html file
const randompage = document.getElementById("surpriseme"); //get an id within html file

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


//

// RANDOM NUMBER GENERATOR

let pagesArray = ["GuidePage.html", "InformationPage.html", "AboutPage.html", "QuizPage.html"];

function randompagesender()
{
let randomNumber1 = Math.floor(Math.random() * 4); // random number between 0 and 4.
document.getElementById("surpriseme").href = pagesArray[randomNumber1];
console.log(pagesArray[randomNumber1]);
}
randompage.addEventListener("click", randompagesender); //string function, run function
