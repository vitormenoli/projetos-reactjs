const { execSync } = require("child_process");
const fs = require("fs");

const projects = fs.readdirSync(__dirname).filter((folder) => 
  fs.existsSync(`${folder}/package.json`) // Somente pastas com package.json
);

projects.forEach((project) => {
  console.log(`Deploying ${project}...`);
  execSync(`cd ${project} && npm install && npm run deploy`, { stdio: "inherit" });
});

console.log("Todos os projetos foram implantados com sucesso!");