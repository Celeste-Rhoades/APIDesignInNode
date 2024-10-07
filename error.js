setTimeout(() => {
  throw new Error("oops");
}, 3000);

process.on("uncaughtException", () => {});
process.on("unhandledRejection", () => {});
