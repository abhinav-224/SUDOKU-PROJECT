let homeBtn = document.querySelector("#home");
let githubBtn = document.querySelector("#github");
let linkedinBtn = document.querySelector("#linkedin");

homeBtn.addEventListener("click", function(){
    window.location.assign("./index.html");
})

githubBtn.addEventListener("click", function(){
    window.location.assign("https://github.com/abhinav-224");
})

linkedinBtn.addEventListener("click", function(){
    window.location.assign("https://www.linkedin.com/in/abhinav-kumar-6b46161a8/");
})
