$(document).ready(function () { $("#input").cleditor(); });
function onDragStart(event){
    event.dataTransfer.setData("text", event.target.id);
}

function onDragOver(event){
    event.preventDefault();
}

function onDrop(event){
    console.log(event)
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
}