document.getElementById('boton1').addEventListener('click',function()
{
    document.getElementById("CAD").innerHTML = "Solidworks, Catia, SweetHome3d, sketchup";
    var elemento =  document.getElementById('boton1');
    elemento.style.display = "none";

})

document.getElementById('boton2').addEventListener('click',function()
{
    document.getElementById("impresoras 3D").innerHTML = "Anet, Creality, Hellbot";
    var elemento =  document.getElementById('boton2');
    elemento.style.display = "none";
    
})

document.getElementById('boton3').addEventListener('click',function()
{
    document.getElementById("lenguajes de programacion").innerHTML = "Html, css, javascript, c++, arduino, micropyton";
    var elemento =  document.getElementById('boton3');
    elemento.style.display = "none";
    
})