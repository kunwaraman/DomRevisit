// const headingElement = document.getElementById('heading');
// console.log(headingElement);

// const headingElement = document.getElementsByClassName('heading');
// console.log(headingElement[1].innerHTML="changed"); 
// console.log(headingElement);

 // change int he html code via javascript through inner html (``) back tick
// const containerDiv = document.getElementById('container');
// containerDiv.innerHTML = `<h1> this is inside the container </h1>
//                           <p>this is also there</p>`;

// just for doing count
const containerDiv = document.getElementById('container');
const count = 123;
containerDiv.innerHTML = `<h1>${count} this is inside the container </h1>
                          <p>this is also there</p>`;

containerDiv.style.border ="2px solid black";
containerDiv.style.padding ="20px";
containerDiv.classList.add('funky');

console.log(containerDiv.classList);

const img = document.getElementById('dummy-img');
img.src = "https://via.placeholder.com/200"
console.log(img);
// append in dom
const newElement = document.createElement('h1');
newElement.innerHTML = 'This is NEW H1';
// containerDiv.appendChild(newElement);
 
containerDiv.innerHTML = newElement;