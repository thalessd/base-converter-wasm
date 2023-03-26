# Base Converter - Using React with GO WebAssembly
This is a simple base converter that uses React with GO WebAssembly. It is a simple example of how to use React with GO WebAssembly.

## How to run on linux

```bash
cp "$(go env GOROOT)/misc/wasm/wasm_exec.js" public

GOOS=js GOARCH=wasm go build -o ./public/base_converter.wasm ./base_converter/main.go
```
