const fs = require('fs');
const path = require('path');

function renameFiles(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      renameFiles(filePath);
    } else if (file.endsWith('.js') && !file.endsWith('.mjs')) {
      const newPath = filePath.replace(/\.js$/, '.mjs');
      fs.renameSync(filePath, newPath);
    }
  });
}

const distDir = path.join(__dirname, '../dist');
if (fs.existsSync(distDir)) {
  renameFiles(distDir);
  console.log('Renamed .js files to .mjs');
}
