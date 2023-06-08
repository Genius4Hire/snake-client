// set up standard in, so that we can interact with user input
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", (key) => {
    switch (key) {
      case 'w' : process.stdout.write("Wow!"); break;
      case '\u0003' : process.exit(); break;
      case 'x' : process.exit(); break;
    
      default : break;
    }

  })
  console.log("After callback!")
  return stdin;
};

module.exports = {setupInput};