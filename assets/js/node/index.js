const { resolve, dirname } = require('path')
const fs = require('fs').promises;
const markdownTitle = require('markdown-title')

async function readFiles(dir, files) {

  if (!files) files = [];


  dir = resolve(dirname(require.main.filename), dir);

  let listfiles = await fs.readdir(dir);

  for (let k in listfiles) {
    try {
      let isIndex = await fs.stat(dir + '/' + listfiles[k] + '/index.html');
      let isReadme = await fs.stat(dir + '/' + listfiles[k] + '/README.md');

      if (isIndex && isReadme) {

        const md = await fs.readFile(dir + '/' + listfiles[k] + '/README.md', "utf8");
        let title = markdownTitle(md)
        await files.push({ title: title.replaceAll('🚀 Frontend Mentor -', "").replaceAll("Frontend Mentor -", "").trim(), id: listfiles[k] });

      }
    } catch (error) {

    }
  }

  return files;
}

async function WriteFile() {
  const projects = await readFiles('../../../challenges/');

  const data = `export default function data(){return [${JSON.stringify(projects)}]}`
  fs.writeFile('./assets/js/node/data.js', data, (err) => {
    if (err) throw err;
    console.log('O arquivo foi criado!');
  });
  console.log();
}

WriteFile()