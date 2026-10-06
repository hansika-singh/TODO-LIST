let btn = document.querySelector("#mode");
current_mode = "light";
btn.addEventListener("click",() => {
    if(current_mode == "light"){
        current_mode = "dark";
    document.body.classList.add("dark");
    }
    else{
        current_mode = "light";
        document.body.classList.remove("dark");
    }
});

