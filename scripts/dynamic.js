// Dynamic content
let colors=["red","green","purple","blue","yellow","black","aqua"]
let colorul=document.createElement("ul")
for (let i=0;i< colors.length;i++){
    let li=document.createElement("li");
    li.innerText=colors[i];
    li.style.color=colors[i];
    colorul.appendChild(li);
}
document.body.appendChild(colorul)