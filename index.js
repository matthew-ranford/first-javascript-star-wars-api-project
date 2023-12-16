const name = document.getElementById('name')
// Fast way to access an element quickly
const gender = document.getElementById('gender')
const birthyear = document.getElementById('birth_year')
const eyecolor = document.getElementById('eye_color')
const skincolor = document.getElementById('skin_color')
//The 'ID' is written that way with the _ as that is how the information is presented in the star wars API

document
  .querySelector('.randomCharacter')
  // Grabbing the button class 'randomCharacter' and adding an eventListener to it for interactivity
  .addEventListener('click', (click) => {
    //This is the start of the function
    click.preventDefault()
    //This is the method
    name.innerHTML = '<em>Loading...</em>'
    //Once the button is clicked 'Loading' in italic, will now render after the first static image of HTML was ... under each header
    //<em>Loading... will be in red italic before the character is displayed
    gender.innerHTML = '<em>Loading...</em>'
    birthyear.innerHTML = '<em>Loading...</em>'
    eyecolor.innerHTML = '<em>Loading...</em>'
    skincolor.innerHTML = '<em>Loading...</em>'
    console.log('CLICKED')

    const randomNumber = Math.ceil(Math.random() * 83)
    //Will cycle through all of the information through the star wars API which is 83 characters long

    fetch(`https://swapi.dev/api/people/${randomNumber}/`)
      .then((response) => response.json())
      // First = respond with the JSON 'Object' information of the character
      .then((character) => {
        //Second = and then populate that information in the declared <DIV> ID section
        name.innerHTML = character['name']
        gender.innerHTML = character['gender']
        birthyear.innerHTML = character['birth_year']
        eyecolor.innerHTML = character['eye_color']
        skincolor.innerHTML = character['skin_color']
      })
  })
//The function starts with the eventListener because when the button is clicked, all of the above code needs to be completed so that the information can render properly within my HTML webpage

// Want to add an eventListener to the 'button' - click button then it fetches more data - 13/03

// document
//   .getElementById("Button")
//   .addEventListener("click", function fetch() {
//     document.getElementById("Name").innerText = JSON.stringify(data);
//     document.getElementById("Gender").innerText = "Male";
//     document.getElementById("Birth-Year").innerText = "1993";
//     document.getElementById("Eye-Color").innerText = "Blue Green";
//     document.getElementById("Skin-Color").innerText = "Pale as";
//   });

// fetch("https://swapi.dev/api/people/")
//   .then((Response) => Response.json())
//   .then((data) => {
//     Name.innerText = JSON.stringify(data, Math.ceil(Math.random() * 82));
//     console.log(data);
//   });

// const data = { name: "Luke Skywalker" };
// fetch("https://swapi.dev/api/people/1")
//   .then((Response) => Response.json())
//   .then((data) => {
//     Name.innerText = JSON.stringify(data);
//     console.log(data);
//   });

// document.querySelector("Name")

// These are all the pages with all the 'people data' - will try the above to see if that will work first

// fetch("https://swapi.dev/api/people/?page=1")
//   .then((Response) => Response.json())
//   .then((data) => {
//     console.log(data);
//   });

// fetch("https://swapi.dev/api/people/?page=2")
//   .then((Response) => Response.json())
//   .then((data) => {
//     console.log(data);
//   });

// fetch("https://swapi.dev/api/people/?page=3")
//   .then((Response) => Response.json())
//   .then((data) => {
//     console.log(data);
//   });

// fetch("https://swapi.dev/api/people/?page=4")
//   .then((Response) => Response.json())
//   .then((data) => {
//     console.log(data);
//   });

// fetch("https://swapi.dev/api/people/?page=5")
//   .then((Response) => Response.json())
//   .then((data) => {
//     console.log(data);
//   });

// fetch("https://swapi.dev/api/people/?page=6")
//   .then((Response) => Response.json())
//   .then((data) => {
//     console.log(data);
//   });

// fetch("https://swapi.dev/api/people/?page=7")
//   .then((Response) => Response.json())
//   .then((data) => {
//     console.log(data);
//   });

// fetch("https://swapi.dev/api/people/?page=8")
//   .then((Response) => Response.json())
//   .then((data) => {
//     console.log(data);
//   });

// fetch("https://swapi.dev/api/people/?page=9")
//   .then((Response) => Response.json())
//   .then((data) => {
//     console.log(data);
//   });//
