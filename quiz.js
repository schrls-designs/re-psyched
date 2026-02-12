//adapted from https://medium.com/@srivishnu.k90/add-dynamic-form-fields-with-html-and-pure-javascript-in-2-minutes-c4950e0a1717


const Nintendo = document.getElementById("Nintendo");
const SEGA = document.getElementById("SEGA");
const Sony = document.getElementById("Sony");
const Microsoft = document.getElementById("Microsoft");

const C21 = document.getElementById("C21");
const C22 = document.getElementById("C22");
const C23 = document.getElementById("C23");
const C24 = document.getElementById("C24");

const C31 = document.getElementById("C31");
const C32 = document.getElementById("C32");
const C33 = document.getElementById("C33");
const C34 = document.getElementById("C34");

const Q1 = document.getElementById("Question1");
Q1.style.display = "none";

const Q2 = document.getElementById("Question2");
Q2.style.display = "none";

const Q3 = document.getElementById("Question3");
Q3.style.display = "none";


let click = false;
let click2 = false;
let click3 = false;

function FirstChoice()
{
  if (click === false)
  {
     click = true;
     Q1.style.display = "inline";
  }
  else
  {
    click = false;
    Q1.style.display = "none";
    Q2.style.display = "none";
    Q3.style.display = "none";
    Q4.style.display = "none";
  }
  
}
Nintendo.addEventListener("click", FirstChoice);
SEGA.addEventListener("click", FirstChoice);
Sony.addEventListener("click", FirstChoice);
Microsoft.addEventListener("click", FirstChoice);


function SecondChoice()
{
    if (click2 === false)
  {
     click2 = true;
     Q2.style.display = "inline";
  }
  else
  {
    click2 = false;
    Q2.style.display = "none";
    Q3.style.display = "none";
    Q4.style.display = "none";
  }
}

C21.addEventListener("click", SecondChoice);
C22.addEventListener("click", SecondChoice);
C23.addEventListener("click", SecondChoice);
C24.addEventListener("click", SecondChoice);


function ThirdChoice()
{
   if (click3 === false)
  {
     click3 = true;
     Q3.style.display = "inline";
  }
  else
  {
    click3 = false;
    Q3.style.display = "none";
    Q4.style.display = "none";
  }
}

C31.addEventListener("click", ThirdChoice);
C32.addEventListener("click", ThirdChoice);
C33.addEventListener("click", ThirdChoice);
C34.addEventListener("click", ThirdChoice);

// function FourthChoice()
// {
//   Final.style.display = "block";
// }

// //where
// const imageChange = document.getElementById("image");


// //what
// function toggleimage()
// {
    
//     if (imageChange.getAttribute("src") === "images/image.jpg")
//     {
//         imageChange.alt = "sumn else"
//         imageChange.src = "images/brick.png"
//     }
//     else if (imageChange.getAttribute("src") === "images/brick.png")
//     {
//         imageChange.alt = "sumn else"
//         imageChange.src = "images/image.jpg"
//     }
   
// }


// //when
// imageChange.addEventListener("click", toggleimage)