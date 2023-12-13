function wait(ms = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
async function go() {
  console.log("start");
  await wait(2000);
  console.log("end");
}
go();

//other options

async function fd() {}

const arrowF = async () => {};

window.addEventListener("click", async function () {});

const person = {
  //method
  sayHi: async function () {},
  //method shorthand
  async sayHello() {},
  //function property
  sayHey: async () => {},
};
