#!/usr/bin/env node

const program = require("commander");
const execSync = require("child_process").execSync;
const chalk = require("chalk");

const library = require("./constant");
const PKG = require("./package.json");

program.version(PKG.version);

program
  .command("ls")
  .description("List all the popular react libraries")
  .action(showLibrary);

program
  .command("select <index>")
  .description("Select library index")
  .action(onSelect);

program
  .command("install <name> <dev>")
  .description("install selected library")
  .action(onUse);

program.parse(process.argv);

if (process.argv.length === 2) {
  program.outputHelp();
}

function showLibrary() {
  let info = [];
  Object.keys(library).forEach(function(item, index) {
    info.push(item);
  });

  printMsg(info);
}

function onSelect(index) {
  const libraryKeys = Object.keys(library);
  if (index < 1 || index > libraryKeys.length) {
    return exit("输入的索引不对");
  }
  const libraryKey = libraryKeys[index - 1];
  let info = [];

  Object.keys(library[libraryKey]).forEach(function(item, index) {
    info.push(item);
  });

  printMsg(info);
}

function onUse(name, dev) {
  const params = dev ? "-S" : "-D";
  execSync(`npm i ${params} ${name}`, { cwd: process.cwd() });
}

function exit(err) {
  printErr(err);
  process.exit(1);
}

function printErr(err) {
  console.error(chalk.red(err));
}

function printMsg(infos) {
  console.log("");
  infos.forEach(function(info, index) {
    console.log("  " + (index + 1) + ". " + info);
  });
  console.log("");
}
