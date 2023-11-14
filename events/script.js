// console.log(document);

const counterText = document.getElementById('counter');
const posBtn = document.getElementById('pos-btn');
const negBtn = document.getElementById('neg-btn');

let count =0;
updateCount();

posBtn.addEventListener('click',()=>{
    count++;
    updateCount();
})

negBtn.addEventListener('click',() =>{
    count--;
    if(count>0){
       count--;
       updateCount();
    }
   
})

function updateCount(){
    counterText.innerHTML = count;
}
























// const body = document.body;
// console.log(body);

// const body = document.body;
// const children = body.children[1].children[0].innerHTML = "changed";
// const list = document.getElementById('list');

// // console.log(list.parentElement.children);
// console.log(list.lastElementChild.innerHTML = "changed eight");
// const numberInput = document.getElementById("number-input");
// numberInput.value = "Aman";
// const submitbtn = document.getElementById("submit-btn"); 
// const form = document.getElementById('dummy-form');
// submitbtn.addEventListener('click',(event) =>{ 
//     form.preventDefaultBehavior();
//     console.log(numberInput.value);
// })
// console.log(children);




