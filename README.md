# Base Converter - Using React with GO WebAssembly
This is a simple base converter that uses React with GO WebAssembly. It is a simple example of how to use React with GO WebAssembly.

## How to run dev mode

```bash
# Need NodeJS, GO and Linux (WSL) to run this project

# Copy the wasm_exec.js file to public folder
cp "$(go env GOROOT)/misc/wasm/wasm_exec.js" public

# Build GO code to WASM
GOOS=js GOARCH=wasm go build -C ./base_converter -o ../public/base_converter.wasm github.com/thalessd/base-coverter-wasm/base_converter/cmd/wasm

# Run the project
npm run start
```

## How to run production mode

```bash
# Docker and docker-compose are required

# Docker compose up
docker-compose up -d

# Access the project
http://localhost:8080
```

---

Thanks for reading!