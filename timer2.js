var readline = require('readline');

readline.emitKeypressEvents(process.stdin);

if (process.stdin.isTTY)
  process.stdin.setRawMode(true);

//console.log(center("Interactive timer"));
process.stdin.write('\t\tpress "b" to beep now or choose between 1 to 9 to set time to alert');
process.stdin.write('\n\t\t\t\tpress "ctrl + c" to exit');
process.stdin.on('keypress', (chunk, key) => {
  if (key && key.name == 'b') {
    process.stdin.write('\x07');
  }
});

process.stdin.on('keypress', (str, key) => {
  if (key && key.name === '1' || key.name === '2' || key.name === '3' || key.name === '4' || key.name === '5' || key.name === '6' || key.name === '7' || key.name === '8' || key.name === '9') {
    setTimeout(() => {
      process.stdin.write('\x07');
    }, key.name * 1000);
    process.stdin.write(`\n\t\t\t     setting timer for ${key.name} seconds...`);
  }
});

process.stdin.on('keypress', (str, key) => {
  if (key.ctrl && key.name === 'c') {
    process.stdin.write("\n\t\t\t       Thanks for using me, ciao!\n");
    process.exit();
  }
});