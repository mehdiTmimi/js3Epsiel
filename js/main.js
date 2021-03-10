let btn=document.getElementById("btn");
btn.onclick=function()
{
    let nom=document.getElementById("nom")
    let prenom=document.getElementById("prenom")
    let moyenne=document.getElementById("moyenne")
    let table1=document.getElementById("tableNonAdmis");
    let table2=document.getElementById("tableAdmis");
    if(nom.value=="" || prenom.value=="" || moyenne.value=="")
        alert("veuillez remplir tous les champs");
    else
    {
        if(parseFloat(moyenne.value)>=10)
        {
            let s= addToTable1(nom.value,prenom.value,moyenne.value);
            table2.innerHTML+=s;// table1.innerHTML=table1.innerHTML+s
        }
        else{
            let res =addToTable2(nom.value,prenom.value,moyenne.value)
            table1.appendChild(res);
        }
        vider();
    }
}
function addToTable2(nom,prenom,moyenne)
{
    let tr=document.createElement("tr")
    let td1=document.createElement("td")
    let td2=document.createElement("td")
    let td3=document.createElement("td")
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    td1.innerHTML=nom;
    td2.innerHTML=prenom
    td3.innerHTML=moyenne
    return tr;
}
function  addToTable1(nom,prenom,moyenne)
{
    let appreciation;
    if(parseFloat(moyenne)<12)
    appreciation="passable";
    else if(parseFloat(moyenne)<14)
    appreciation="assez bien"
    else if(parseFloat(moyenne)<16)
    appreciation="bien"
    else 
    appreciation="tres bien"
    let str="<tr><td>"+nom+"</td><td>"+prenom+"</td><td>"+moyenne+"</td><td>"+appreciation+"</td></tr>"
    return str;
}
function vider()
{
    let nom=document.getElementById("nom")
    let prenom=document.getElementById("prenom")
    let moyenne=document.getElementById("moyenne")
    nom.value=""
    prenom.value=""
    moyenne.value="" 
}