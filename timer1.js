const timer = function (seconds) {
  for (var i = 0; i < seconds.length; i++) {
    if ((Number(seconds[i])) > 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, seconds[i] * 1000);
    }
  }
};
timer(process.argv.slice(2));