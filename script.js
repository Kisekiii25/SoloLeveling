let lineCon = document.getElementsByClassName("lineCon")[0]
let linksul = document.getElementsByClassName("links")[0]

lineCon.addEventListener("click", () =>{
    linksul.classList.toggle("active");
})