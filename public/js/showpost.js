"use strict";

const commentForm = document.querySelector("#commentForm");
const errorContainer = document.querySelector("#errorContainer");

async function subComment(event){
    event.preventDefault();
    
    const commentText = document.querySelector("#commentinput").value;
    const response = await fetch(`${window.location.origin}/comments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({commentText})
        });
    console.log(response);
    if (response.ok){
        // commentForm.submit();
        window.location = window.location.href;
    } else if (response.status === 400){
        const errors = await response.json();
        console.log(errors);
        errorContainer.classList.remove("hidden");
        const errorMessage = errorContainer.querySelector("#errorMessage");
        let errorString ="";
        for (const error of errors){
            errorString += error + "";
            console.log(error);
        }
        errorMessage.textContent = errorString;
    } else {
        errorContainer.classList.remove("hidden");
        const errorMessage = errorContainer.querySelector("#errorMessage");

        errorMessage.textContent = "unknown error";
    }
    return false;
}
commentForm.addEventListener('submit', subComment);

function show() {
    errorContainer.classList.add("hidden");
}

function submitDelete(){
    window.confirm("Are you sure you want to delete? It will be gone forever..");
}
// deletePost = document.querySelector("#deleteForm");
// async function deleteP(event){
//     event.preventDefault();
//     return false;
// }

// deletePost.addEventListener('click', deleteP);
// function disable(){
//     commentForm.disable = true;
//     setTimeout(function(){
//         commentForm.disable = false; 
//     }, 5000);
// }
// commentForm.addEventListener('click', disable);