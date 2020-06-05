export const delayChange = (status) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("timeout resolving");
      resolve(status);
    }, 1000);
  });
