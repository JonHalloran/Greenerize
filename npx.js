#!/usr/bin/env node

let cp = require('child_process');
let argv = require('optimist').argv;

let inputName = Array.from(argv._)[0];
let repoArray = inputName.split('/');
let repoName = repoArray[repoArray.length - 1];
let withoutGit = repoName.split('.')[0];
console.log(withoutGit);

cp.execSync(`git clone ${inputName}`);
cp.execSync(`cd ${withoutGit} && touch important.txt`);
cp.execSync(`cd ${withoutGit} && git add .`);
cp.execSync(`cd ${withoutGit} && git ci -m'Add important file'`);
cp.execSync(`cd ${withoutGit} && rm important.txt`);
cp.execSync(`cd ${withoutGit} && git add .`);
cp.execSync(`cd ${withoutGit} && git ci -m'Remove unimportant file'`);
cp.execSync(`cd ${withoutGit} && touch ui.txt`);
cp.execSync(`cd ${withoutGit} && git add .`);
cp.execSync(`cd ${withoutGit} && git ci -m'Add ui file'`);
cp.execSync(`cd ${withoutGit} && rm ui.txt`);
cp.execSync(`cd ${withoutGit} && git add .`);
cp.execSync(`cd ${withoutGit} && git ci -m'Remove unused ui file'`);
cp.execSync(`cd ${withoutGit} && touch react.txt`);
cp.execSync(`cd ${withoutGit} && git add .`);
cp.execSync(`cd ${withoutGit} && git ci -m'Add react file'`);
cp.execSync(`cd ${withoutGit} && rm react.txt`);
cp.execSync(`cd ${withoutGit} && git add .`);
cp.execSync(`cd ${withoutGit} && git ci -m'Remove unused react file'`);
cp.execSync(`cd ${withoutGit} && git push origin master`);
cp.execSync(`rm -rf ${withoutGit}`);
console.log("Keeping gardens green :)");