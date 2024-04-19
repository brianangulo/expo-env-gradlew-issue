function test() {
  const fs = require('node:fs');

  const content = process.env.EXPO_PUBLIC_TEST || "did not get defined";
  
  fs.writeFile('./test.txt', content, () => {});

  return {}
}

module.exports = test
