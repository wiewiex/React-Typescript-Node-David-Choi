async function delayedResult() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Operacja wykonana pomyslnie.");
      // reject("Niepowodzenie!");
    }, 500);
  });
}

(async function execAsyncFunc() {
  const result = await delayedResult();
  console.log(result);
})();
