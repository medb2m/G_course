const http = require('http')

const serveur = http.createServer((req, rep)=>{
    //console.log("serveur créé");


    //Definition de l'en-tete
    rep. setHeader("content-type", "text/html");   
    //Definition de la reponse selon la requete
    rep.write("<head><title>SERVEUR</title></head>")
    if (req.url ==="/home"){
        rep.write("<h1>Bienvenue Dev</h1>"); 
    }else if (req.url ==="/back"){
        rep.write("<h1>Bienvenue DevBack</h1>"); 
    }else {
        rep.write("<h1>URL inconnue</h1>");
    }
    //Finalisation de la reponse
    rep.end();
})

serveur.listen(3001,"localhost", ()=>{
    console.log("serveur prêt à écouter les requettes au port 3001")
})