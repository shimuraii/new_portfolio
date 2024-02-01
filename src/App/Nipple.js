import nipplejs from 'nipplejs';

const manager = nipplejs.create({
    zone: document.getElementById("space"),
    mode: 'w    dynamic',
    position: {
      left: "100px",
      top: "100px"
    },
    follow: true,
    catchDistance: 0
  });
  manager.on("move", (e) => {
    console.log(e);
  });