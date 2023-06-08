let connection;

const setupInput = function (connectionInstance) {
  const stdin = process.stdin;
  connection = connectionInstance;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};


// set up standard in, so that we can interact with user input
const handleUserInput = function (key) {
  switch (key) {
    case 'w' : connection.write("Move: up"); break;
    case 'a' : connection.write("Move: left"); break;
    case 's' : connection.write("Move: down"); break;
    case 'd' : connection.write("Move: right"); break;
    case '1' : connection.write("Say: xLent"); break;
    case '2' : connection.write("Say: move"); break;
    case '3' : connection.write("Say: goof!"); break;
    case '4' : connection.write("Say: foo"); break;
    case '5' : connection.write("Say: bar"); break;
    case '6' : connection.write("Say: Woot!"); break;
    // case '\u0003' : process.exit(); break; not working in ubuntu.. using 'x' to quit instead
    case 'x' : process.exit(); break;
    default : break;
  }

};


module.exports = {setupInput};