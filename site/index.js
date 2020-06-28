const js = import("./node_modules/@rust_to_wasm/rust_to_wasm");
js.then(js => {
  js.greet("WebAssembly");
});