const fs = require("fs");

module.exports.build = function () {
  var viaggiObj = JSON.parse(fs.readFileSync('./Json/Viaggi.json', 'utf8'));
  console.log("Creazione di un viaggio in corso...\n");

  console.log(JSON.stringify(viaggiObj));
/*
  console.log("preparazione\n", viaggiObj.preparazione);
  console.log("eventi\n", viaggiObj.eventi);
  console.log("arrivo\n", viaggiObj.arrivo);*/
};
