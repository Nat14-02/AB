duvalines=[];
function abc()
{
    mostrar_lista=[];
    for(var i =1;i<14;i++ )
    {
      n1=document.getElementById("nombre_"+i).value;

duvalines.push(n1);
    }

var longitud= duvalines.length;
document.getElementById("Nombres").innerHTML=duvalines;

 document.getElementById("ordenar").style.display = "inline-block";
 for(var l =1;l<longitud;l++ )
 {
 

mostrar_lista.push("<h4>"+duvalines[l]+"</h4>");
 }
 document.getElementById("Nombres").innerHTML=mostrar_lista;
}
function ordenar()
{
    duvalines.sort();
    document.getElementById("Nombres").innerHTML=duvalines;
}