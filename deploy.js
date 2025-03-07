const { execSync } = require("child_process");
const fs = require("fs-extra"); // Recomendo usar fs-extra para facilitar operações com pastas
const path = require("path");

// Lista com os nomes dos diretórios dos projetos – ajuste conforme o número de projetos
const projects = ['1_Calculadora', '2_Cronometro']; // Adicione os demais projetos aqui

// Diretório temporário para consolidar os builds
const deployDir = path.join(__dirname, 'deploy-temp');

// Remove o diretório de deploy antigo (se existir) e cria um novo
fs.removeSync(deployDir);
fs.mkdirSync(deployDir);

// Função para compilar e copiar o build de cada projeto
projects.forEach((project) => {
  console.log(`Building ${project}...`);
  // Instala dependências e compila o projeto
  execSync(`cd ${project} && npm install && npm run build`, { stdio: "inherit" });
  
  console.log(`Copiando build de ${project}...`);
  // Copia o conteúdo da pasta 'dist' do projeto para uma subpasta em deployDir
  fs.copySync(path.join(__dirname, project, 'dist'), path.join(deployDir, project));
});

// Cria um index.html simples na raiz para listar os projetos
const indexContent = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Projetos ReactJS</title>
  </head>
  <body>
    <h1>Projetos ReactJS</h1>
    <ul>
      ${projects.map(p => `<li><a href="./${p}/">${p}</a></li>`).join("\n")}
    </ul>
  </body>
</html>
`;
fs.writeFileSync(path.join(deployDir, 'index.html'), indexContent);

console.log("Deploy consolidado sendo realizado...");
// Faz o deploy do diretório consolidado usando o gh-pages
execSync(`npx gh-pages -d ${deployDir}`, { stdio: "inherit" });

console.log("Todos os projetos foram implantados com sucesso!");