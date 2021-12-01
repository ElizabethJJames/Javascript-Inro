    var button = document.getElementById("initialJSFunction");
    var paraArray = document.getElementsByClassName('javascriptOutput');
    var para1 = document.getElementsByClassName('javascriptOutput')[0];
    var para2 = paraArray[1];


    console.log (
        paraArray,
        para1,
        para2,
        button
    );


    button.addEventListener('click', ()=>{
        para1.innerHTML = "The Button Worked!",
        para2.style.border = "hotpink 5px solid", 
        para2.style.background = "pink",
        para2.innerHTML = "I am Pink Now"
    })