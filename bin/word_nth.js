#! /usr/bin/env node

const clipboardy = require('clipboardy');
const color = require("cli-color");

const word_nth = n=>n < 1 ? null : "$"+`{\\text{${word}}^`.repeat(n-1)+
`{\\text{${word}}`+"}".repeat(n)+"$";


if(process.argv.length < 4){
    console.log(color.bold("word_nth usage:"));
    console.log(color.italic("  word_nth <your_word> <n>"));
    process.exit();
}

const word = process.argv[2];

const generated = word_nth(Number(process.argv[3]));

console.log(color.blueBright(`\n${generated}\n`));
clipboardy.writeSync(generated);
console.log(color.green.italic("   result copied to clipboard..."));