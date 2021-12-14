function changeText () {
    let change = document.getElementById("container");
    if(change.innerHTML==="Click Me"){
        change.innerHTML = "Hello JavaScript World";
    }
    else {
        change.innerHTML="Click Me";
    }
}