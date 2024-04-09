function divcontent(e)
{
var x = document.getElementById("cont");
e.preventDefault();
if(x.style.display === "none")
{
   x.style.display = "block";
}
else
{
x.style.display = "none";
}
}
function htmlcontent()
{
   var y = document.getElementById("menu");
   
   if(y.style.display === "block")
   {
      y.style.display = "none";
   }
   else
   {
      y.style.display = "block";
   }
}
