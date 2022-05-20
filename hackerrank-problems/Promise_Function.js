function who() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('scary');
    }, 200);
  });
}

function what() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('lurks');
    }, 300);
  });
}

function where() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('in the shadows');
    }, 500);
  });
}

 async function msg() {
  const a = await who();
  const b = await what();
  const c = await where();

  console.log(`${ a } ${ b } ${ c }`);
}

msg();
