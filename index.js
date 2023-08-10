//1) intialize the count as 0
//2) listen for clicks on the increment button
//3) increment the count variable when the button is clicked (log it out)
//4) change the count-el in the HTML to reflect the new count



let count = 0
// grab the count-el element, store it in a countEl variable
// camelCase
let countEl = document.getElementById("count-el")
console.log(countEl)

function increment() {
    count = count + 1
    // set countEl's innerText to the count
    countEl.textContent = count

    // document.getElementById("count-el").innerText = count //in one line we can write as
}


// 1. Create a function, save(), which logs out the count when it's called
// function save() {
    // document.getElementById("save-el").innerText += " " + count + " - "
//     console.log(count);
// }


//Detailed soln (line 25)

//// 1. Grab the save-el paragrah and store it in a variable called saveEl
// let saveEl = document.getElementById("save-el")
// function save() {
//     let countStr = count + " - "
//     // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
//     // 3. Render the variable in the saveEl using innerText
//     saveEl.innerText += countStr
//     // NB: Make sure to not delete the existing content of the paragraph
//     console.log(count)
// }

// using textContent instead innerText (for above save() func)

let saveEl = document.getElementById("save-el")

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr

    // reseting the counter
    count = 0
    countEl.textContent = 0
}

// textContent reders all the contents even which are hidden or unreadable but innerText doesnot

function reset() {
    count = 0
    countEl.textContent = 0

    saveEl.textContent = "Previous entires: "
}


