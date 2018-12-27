
document.getElementById('change').addEventListener('click', loadXMLDoc);

function loadXMLDoc()
{
  console.log('hi');
var xmlhttp;
if (window.XMLHttpRequest)
  {// para IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// para IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","info.txt",true);
xmlhttp.setRequestHeader("Cache-control", "no-cache");
xmlhttp.setRequestHeader("Cache-control", "no-store");

xmlhttp.setRequestHeader("Cache-control", "max-age=100");
xmlhttp.send();
}
