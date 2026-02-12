//adapted from https://medium.com/@srivishnu.k90/add-dynamic-form-fields-with-html-and-pure-javascript-in-2-minutes-c4950e0a1717


// WHERE!!!!!!!!!!
const Nintendo = document.getElementById("Nintendo");
const SEGA = document.getElementById("SEGA");
const Sony = document.getElementById("Sony");
const Microsoft = document.getElementById("Microsoft");

//WHAAAAAAAAATTTT!!!!!!!!
function NintendoChoice()
{
    let newChoices = document.createElement('input');
    newChoices.setAttribute("class", "column");
    newChoices.innerHTML = '<div class="checkcontainer" id="row"><label for="small"> Kind: </label> <input type="radio" class="checkbox" name="Kind" id="Kind1"><label for="small"> Kind: </label> <input type="radio" class="checkbox" name="Kind" id="Kind2"><label for="small"> Kind: </label> <input type="radio" class="checkbox" name="Kind"id="Kind3"><label for="small"> Kind: </label> <input type="radio" class="checkbox" name="Kind" id="Kind4"></div>';
    document.getElementById('inRows').appendChild(newColumn);
}

function SEGAChoice()
{

}

//WHEEEEENNNN!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
Nintendo.addEventListener("click", NintendoChoice);


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