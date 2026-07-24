# Explicação do código

const fs = require("fs");
const os = require("os");
const path = require("path");

let usuario = os.homedir(); // Vê o caminho até o usuário

let desktop = path.join(usuario, "Desktop"); //Junta o usuário com o Desktop

if (!fs.existsSync(desktop)) {
  // Verifica se existe o caminho Desktop
  desktop = path.join(usuario, "OneDrive", "Desktop"); //Se não exisistir, junta com o OneDrive e o desktop
}

const modelos3D = path.join(desktop, "Modelos 3D"); // Faz o caminho da pasta modelos 3D

if (!fs.existsSync(modelos3D)) {
  //Verifica se o modelos 3d já existe, o caminho
  fs.mkdirSync(modelos3D); //Se não existir, cria a pasta.
}

const dirStl = path.join(modelos3D, "stl"); //Faz o caminho para a pasta stl, que fica dentro da modelo 3d
const dir3mf = path.join(modelos3D, "3mf"); //Faz o caminho para a pasta 3mf, que fica dentro da modelo 3d

if (!fs.existsSync(dirStl)) {
  //Verifica se não existe o caminho
  fs.mkdirSync(dirStl); //Se não existir, cria a pasta
}
if (!fs.existsSync(dir3mf)) {
  //Verifica se não existe o caminho
  fs.mkdirSync(dir3mf); //Se não existir, cria a pasta
}

const files = fs.readdirSync(desktop);//Lê todos os arquivos do desktop e armazena

files.forEach((file) => { 
  const ext = path.extname(file); //Guarda a extensão de cada arquivo
  const origem = path.join(desktop, file);//Guarda o caminho de cada arquivo

  const info = fs.statSync(origem); //Guarda a informação de cada arquivo

  if (!info.isFile()) { //Verifica se é um arquivo, se não for, não executa
    return;
  }

  if (ext === ".stl") { //Ve se é .stl
    const destino = path.join(dirStl, file);//Junta o caminho para pasta stl com o arquivo
    fs.renameSync(origem, destino);//move o arquivo para a pasta stl
  }
  if (ext === ".3mf") {
    const destino = path.join(dir3mf, file);//Junta o caminho para pasta 3mf com o arquivo
    fs.renameSync(origem, destino);//move para a pasta 3mf
  }
  console.log(file, ext);
});
