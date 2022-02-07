let background = document.querySelector("div");
let columns = 10;
let rows = 8;
background.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;

for(i=0; i < (rows * columns) / 2; i++)
{
    background.appendChild(document.createElement("p")).classList.add("odd");
    background.appendChild(document.createElement("p")).classList.add("even");
}