import { createDemoApp } from "polotno/polotno-app";

console.log("starting the app...");

const store = createDemoApp({
  container: document.getElementById("root"),
  // this is a demo key just for that project
  // (!) please don't use it in your projects
  // to create your own API key please go here: https://polotno.dev/cabinet
  key: "nFA5H9elEytDyPyvKL7T"
});
