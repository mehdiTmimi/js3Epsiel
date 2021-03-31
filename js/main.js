let btn=document.getElementById("btn");

// code qui va communiquer avec le web service
let req=new XMLHttpRequest();
req.open("GET","http://localhost:3000/etudiants");
req.onreadystatechange=function()
{
    if(req.status==200 && req.readyState==4)
    {
       let reponse=JSON.parse(req.responseText);

       /*console.log(" avant transformation :"+req.responseText)
       console.log(" apres transformation :")
       console.log(reponse[0].nom);
       */
       let table1=document.getElementById("tableNonAdmis");
       let table2=document.getElementById("tableAdmis");
        for(let i=0;i<reponse.length;i++)
            {
                let etudiant=reponse[i];
                if(etudiant.moyenne>=10)
                    {
                        let s= addToTable1(etudiant.nom,etudiant.prenom,etudiant.moyenne);
                        table2.innerHTML+=s;// table1.innerHTML=table1.innerHTML+s
                    }
                    else{
                        let res =addToTable2(etudiant.nom,etudiant.prenom,etudiant.moyenne);
                        table1.appendChild(res);
                    }
            }
    }
}
req.send();
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