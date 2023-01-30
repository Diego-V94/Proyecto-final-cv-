/*
document.getElementById('boton').onclick = function () {
    console.log("capturamos el evento click");
    document.getElementById("demo").innerHTML = "estamos probando nuestro primer evento en js"
}

document.addEventListener('click',function()
{
    console.log("Hola Mundo desde EventListener");
    document.getElementById("demo").innerHTML = "estamos probando nuestro primer evento en js"
})
*/

document.getElementById('boton').addEventListener('click',function()
{
    console.log("Hola Mundo desde EventListener");
    document.getElementById("demo").innerHTML = "estamos probando nuestro primer evento en js"
    const collection = document.getElementsByClassName("prueba");
for (let i = 0; i < collection.length; i++) {
  collection[i].style.backgroundColor = "green";
}
})

document.getElementById('Fondo_rojo').addEventListener('click',function()
{
    document.body.style.backgroundColor = '#FF0000';    
})

document.getElementById('Fondo_negro').addEventListener('click',function()
{
    document.body.style.backgroundColor = '#000000';    
})

document.getElementById('Ocultar').addEventListener('click',function()
{
    document.getElementById('demo').style.display = 'none';  
})

/*const collection = document.getElementsByClassName("prueba");
for (let i = 0; i < collection.length; i++) {
  collection[i].style.backgroundColor = "green";
}*/