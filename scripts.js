// Victoria Le

// ID section
// get paragraph by id, add span width with tan class and "this is new tan text" text content
document.getElementById("firstPara").innerHTML += "<span class=\"tan\"> This is new tan text</span>";

//tag name section
// get all images and change width to 250px
let images = document.getElementsByTagName("img");
console.log(images);

for(let image of images){
    image.width = "250";
}

// get element by class name
// set the med-blue spans to: #3C5E73
// set light-blue spans to: #7C9EA6
let ltBlueSpans = document.getElementsByClassName("light-blue");
let medBlueSpans = document.getElementsByClassName("med-blue");

for(let span of ltBlueSpans){
    span.style.color = "#7C9EA6";
}
for(let span of medBlueSpans){
    span.style.color = "#3C5E73";
}

// get elements by css selector
