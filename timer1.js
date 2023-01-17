const timer = array => {
  if (array.length === 0) {
    return;
  }

  for (const number of array) {
    if (Number(number) > 0) {
      setTimeout(() => process.stdout.write('\x07'), number * 1000);
    }
  }
};

timer(process.argv.slice(2));