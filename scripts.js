// //Check if Nightmode box is clicked using querySelector

// const checkbox = document.querySelector("input[name='nightCheck']",
// );
// console.log(checkbox);
// console.log("hello");
// checkbox.addEventListener('change', function() {
//     const element = document.getElementById("mainContent");
//   if (this.checked) {
//     element.classList.toggle("night-mode")
//     console.log("Checkbox is checked..");
//   } else {
//     console.log("Checkbox is not checked..");
//     element.classList.toggle("night-mode")

//   }
// });

// ATTEMPT #2 check if checkbox element is clicked on

function toggleNightMode() {
    const element = document.getElementById ("mainContent");
    const element2 = document.getElementById("quote");
    element.classList.toggle("night-mode");
    element2.classList.toggle("night-mode");
}

function signupButton (){
    console.log("Signup click");
}

const changeTitle = (nameChange) => {
    const logoTitle = document.querySelector('.logo');
    logoTitle.innerHTML = nameChange;

}

//Add new node and style it
const addMessage = () => {
    const parentNode = document.querySelector('.hero-text');
    const button = parentNode.querySelector('.signup-button');
    button.disabled = true;
    const div = document.createElement('sign-up-message');
    div.style.cssText = 'color: gray';
    div.textContent = `That doesn't work right now.`;
    div.setAttribute('id', 'fadeAwaySource');
  
    parentNode.appendChild(div);
    addFade(button);
}

const addFade = async (button)  => {
    await new Promise(r => setTimeout(r, 2000));
    const el = document.getElementById("fadeAwaySource");
    el.classList.toggle('fade');
        el.addEventListener("transitionend", () => {
            removeElement(el);
            button.disabled = false;
        });




}

const removeElement = (el) => {
   el.remove();
}