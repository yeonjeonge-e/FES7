function sayHello() {
  return new Promise((resolve, reject) => {
    //  resolve 성공 시 출력
    //  reject  실패 시 출력
    // const hello = "disend disend"
    resolve(hello);
  });
}

// sayHello().then((resolveData) => {
//   console.log(resolveData);         //  disend disend
// });

async function test() {
  const hello1 = await sayHello();
  console.log(hello1);
}

test();