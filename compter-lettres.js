let invites = ['Pierre', 'Paul', 'Jacques', 'Valentin', 'Laura', 'Jean-Charles', 'Pierre-Emmanuel', 'Robert', 'Jennifer'];
let petit = 0;
let moyen = 0;
let grand = 0;

document.write("<ul>");

for(let i = 0 ; i < invites.length ; i++){

    let taillePrenom = invites[i].length;
    let carton;

    if(taillePrenom <= 6){
        carton = "PETIT";
        petit++;
    }
    else if(taillePrenom <= 8){
        carton = "MOYEN";
        moyen++;
    }
    else{
        carton = "GRAND";
        grand++;
    }

    document.write(`<li>${invites[i]} - ${carton}</li>`);

}

document.write("</ul>");

document.write(`Il faudra ${petit} petits cartons, ${moyen} cartons moyens et ${grand} grands cartons !`);