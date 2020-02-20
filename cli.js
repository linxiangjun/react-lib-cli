#!/usr/bin/env node

const program = require("commander");
const execSync = require("child_process").execSync;
const chalk = require("chalk");
const inquirer = require("inquirer");
const symbols = require("log-symbols");

const library = require("./constant");
const PKG = require("./package.json");

program.version(PKG.version);

program
  .command("ls")
  .description("List all the popular react libraries")
  .action(onLibrary);

program.parse(process.argv);

if (process.argv.length === 2) {
  program.outputHelp();
}

function onLibrary() {
  inquirer
    .prompt([
      {
        name: "libraryIndex",
        message: `请选择库类型索引\n${showLibraryType()}`
      }
    ])
    .then(answers => {
      const { libraryIndex } = answers;
      const libraryKeys = Object.keys(library);

      if (isNaN(libraryIndex)) {
        return exit("输入的索引类型错误");
      }

      if (libraryIndex < 1 || libraryIndex > libraryKeys.length) {
        return exit("输入的索引超出范围");
      }

      const libraryKey = libraryKeys[libraryIndex - 1];
      const librarys = library[libraryKey];

      inquirer
        .prompt([
          {
            name: "libraryList",
            message: `请选择库索引，多个以空格分隔(例如：1 2)\n${showLibrary(
              librarys
            )}`
          },
          {
            name: "dev",
            message: `请选择安装以上库到开发还是生产环境(1: 生产，2：开发)`
          }
        ])
        .then(answers => {
          const { libraryList, dev } = answers;
          installList = "";

          libraryList.split(" ").forEach(function(index) {
            installList += `${librarys[index]} `;
          });

          onUse(installList, dev);
        });
    });
}

function showLibraryType() {
  let info = [];
  Object.keys(library).forEach(function(item) {
    info.push(item);
  });

  return msg(info);
}

function showLibrary(librarys) {
  let info = [];

  Object.values(librarys).forEach(function(item) {
    info.push(item);
  });

  return msg(info);
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
  console.log(symbols.error, chalk.red(err));
}

function msg(infos) {
  let msg = "";
  infos.forEach(function(info, index) {
    msg += `${index + 1}. ${info}\n`;
  });
  return msg;
}
