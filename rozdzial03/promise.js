const myPromise = new Promise((resolve, reject) => {
  {
    setTimeout(() => {
      resolve("Operacja wykonana pomyslnie.");
      // reject("Niepowodzenie!");
    }, 500);
  }
});

myPromise
  .then((done) => {
    console.log(done);
  })
  .catch((err) => {
    console.log(err);
  });
