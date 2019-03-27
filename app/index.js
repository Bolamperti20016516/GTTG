const readline = require('readline-sync');

const viaggi = require('./viaggi.js');

const menuPrincipale = function() {
  console.log("\n\tMenu principale\n");
  console.log("0) Esci dal programma\n");
  console.log("1) Crea viaggio\n");

  switch (readline.question("Inserisci il numero del menu corrispondente: ")) {
    case '0': process.exit(0);
    case '1':
      viaggi.build();
      break;
    default:
      console.log("Scelta inserita non valida. Riprova\n");
      menuPrincipale();
  }
}

console.log("Benvenuto nel programma GTTG!\n\tGreatest Tools for Table Games\n");
menuPrincipale();
