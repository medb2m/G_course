const fs = require('fs')

//gestion dossiers

fs.mkdir('./mesFichiers',(erreur)=>{
    if(erreur){
        console.log(erreur);
    }else {
        console.log("Dossier créé avec succès");
    }
})