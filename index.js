const fs = require("fs");
const os = require("os");
const path = require("path");

let usuario = os.homedir();

let desktop = path.join(usuario, "Desktop");

if(!fs.existsSync(desktop)){
  desktop = path.join(usuario,"OneDrive","Desktop")
}

const modelos3D = path.join(desktop, "Modelos 3D");
console.log(modelos3D);

if (!fs.existsSync(modelos3D)) {
  fs.mkdirSync(modelos3D);
}

const dirStl = path.join(modelos3D, "stl");
const dir3mf = path.join(modelos3D, "3mf");

if (!fs.existsSync(dirStl)) {
  fs.mkdirSync(dirStl);
}
if (!fs.existsSync(dir3mf)) {
  fs.mkdirSync(dir3mf);
}

const files = fs.readdirSync(desktop);

files.forEach((file) => {
  const ext = path.extname(file);
  const origem = path.join(desktop, file);

  if (ext === ".stl") {
    const destino = path.join(dirStl, file);
    fs.renameSync(origem, destino);
  }
  if (ext === ".3mf") {
    const destino = path.join(dir3mf, file);
    fs.renameSync(origem, destino);
  }
  console.log(file, ext);
});
