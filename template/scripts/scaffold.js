const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');


const packageUpdateJSON = require('./packageUpdate.json');
const packageJSON = require('../package.json');

const outputFilePath = path.join(__dirname, "..", "package.json");

const keysToAdd = Object.keys(packageUpdateJSON);

keysToAdd.forEach(key => {
  if (!packageJSON[key]) {
    packageJSON[key] = packageUpdateJSON[key];
  } else {
    console.log(`${key} already exists in package.json. Skipping...`);
  }
});

if (packageJSON) {
  fs.writeFile(outputFilePath, JSON.stringify(packageJSON, null, 2), (err) => {
    if (err)
      throw err;

    console.log("\n\npackage.json updated.\nInstalling dev dependencies...");

    const installDeps = spawn("npm", ["install"], { stdio: 'inherit' });

    installDeps.on('exit', (exitCode) => {
      console.log(`\n\ndevDependencies installed & exited with code ${exitCode}`);
      if (exitCode === 0) {
        const createTailwindConfig = spawn("npx", ["tailwindcss", "init", "--full"], { stdio: 'inherit' });

        createTailwindConfig.on('exit', childProcessExitCode => {
          console.log(`\ngenerate:scaffold exited with code ${childProcessExitCode}`)
        })
      }
    });
  });
}



