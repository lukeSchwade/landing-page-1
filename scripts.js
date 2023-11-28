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