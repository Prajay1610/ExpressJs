const fs = require("fs");

//create folder
const createFolder = (folderName) => {
  //check if folder exists
  if (fs.existsSync(folderName)) {
    //create the folder
    fs.mkdirSync(folderName);
  }
};

//create a file
const createFile = (fileName, content) => {
  //check if file exists
  if (fs.existsSync(fileName)) {
    //create a file
    fs.writeFileSync(fileName, content);
  }
};
