const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log("Server says: ", data)
  
  });

  conn.on("connect", () => {
    console.log("Connected!")
    conn.write("Name: JAD");
    // setInterval(()=> {
    //   conn.write("Move: up");
    // }, 250);

  })


  return conn;
};


module.exports = {connect};