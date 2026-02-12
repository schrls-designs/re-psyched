//adapted from https://medium.com/@srivishnu.k90/add-dynamic-form-fields-with-html-and-pure-javascript-in-2-minutes-c4950e0a1717


const Nintendo = document.getElementById("Nintendo");
const SEGA = document.getElementById("SEGA");
const Sony = document.getElementById("Sony");
const Microsoft = document.getElementById("Microsoft");

const C21 = document.getElementById("C21");
const C22 = document.getElementById("C22");
const C23 = document.getElementById("C23");
const C24 = document.getElementById("C24");

const Q1 = document.getElementById("Question1");
Q1.style.display = "none";

const Q2 = document.getElementById("Question2");
Q2.style.display = "none";

let click = false;
let click2 = false;

function FirstChoice()
{
  if (click === false)
  {
     click = true;
     Q1.style.display = "block";
  }
  else
  {
    click = false;
    Q1.style.display = "none";
  }
  
}
Nintendo.addEventListener("click", FirstChoice);
SEGA.addEventListener("click", FirstChoice);
Sony.addEventListener("click", FirstChoice);
Microsoft.addEventListener("click", FirstChoice);


function SecondChoice()
{
     click2 = true;
     Q2.style.display = "block";
}

C21.addEventListener("click", SecondChoice);
C22.addEventListener("click", SecondChoice);
C23.addEventListener("click", SecondChoice);
C24.addEventListener("click", SecondChoice);

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