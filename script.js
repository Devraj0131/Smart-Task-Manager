let notes = [];  //creating an array to store the input from user

// Making a function to add notes to array
function addNote() {
    let input = document.getElementById("input"); // accessing element through Id to take input
    let message = document.getElementById("message"); //accessing element through Id to display message

    let value = input.value.trim(); //storing value in variable name "value" and also trimming the extra space

    // making a condition if user click on add btn without writing anything then it will display whats written in message.innerhtml
    if (value === "") {
        message.innerHTML = "Please write something";
        return; // here function returns
    }

    message.innerHTML = " "; // and restore the value to as it was before

    notes.push(value); // updates the input to note to store it

    input.value = ""; // revert the input to as  

    displayNote();

}

// Here I am making a function to display notes and task and also checkbox with them to mark them complete
function displayNote() {
    let notelist = document.getElementById("notelist"); // By using Id got the ul to display note
    let total = document.getElementById("total"); // This is to display the total note that I used in span

    notelist.innerHTML = ""; //Ensures that the notelist is clear and to ensure that duplicates are not created
    // using loop to access notes 
    for (let i = 0; i < notes.length; i++) {
        // creating list tag in unordered list to display notes through loop
        let li = document.createElement("li");
        // creating Checkbox to display notes through loop
        let checkbox = document.createElement("input"); // Creating a input tag 
        checkbox.type = "checkbox"; // Giving the input tag a type

        // Now, creating span tag to display the note in array and the task so when i have to show complete only text changes
        let span = document.createElement("span")
        span.textContent = notes[i];

        // Now, When checkbox is clicked to mark it complete 
        checkbox.addEventListener("change", function () {
            if (checkbox.checked)  // When checkbbox is clicked then a line will go through it to show task complete 
            {
                span.style.textDecoration = "line-through"; // using style to make the line through it
                span.style.color = "gray"; //making the text gray 
            }
            else // and if the checkbox is not checked then:-
            {
                span.style.textDecoration = "none";
                span.style.color = "black";
            }
        });

        //creating a delete button along with li to ensure it is connected with the li.
        let deleteBtn = document.createElement("button"); // create a button
        deleteBtn.textContent = "Delete"; // Displaying delete inside the button
        // using Event to make it so when it is clicked to delete the task 
        deleteBtn.addEventListener("click", function () {
            notes.splice(i, 1); // here I used splice to access the index no. and remove one value from the array 
            console.log("notes");
            displayNote();// called display here to display the change not only in console
        });

        // this is so every update is added to the tag list (li), putting the created tags in li.
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);

        notelist.appendChild(li); // putting li to ul which is parent to this
    }

    total.innerHTML = notes.length; //updating the total note using length to find the length of array and directly diplaying it to the display
}

//Creating funtion to change the theme.

function toggle() {
    let body = document.getElementById("body"); //accessing the the body using id that I put in html

    if (body.classList.contains("dark"))  // checking if the body contains class dark or not if it contains then 
    {
        body.classList.remove("dark"); // remove the class if clicked
    }
    else {
        body.classList.add("dark"); // and if not then add the class to body
    }
}