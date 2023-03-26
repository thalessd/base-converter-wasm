FROM golang:1.20-alpine3.17 AS build-wasm

WORKDIR /app

ENV GOOS=js
ENV GOARCH=wasm

COPY ./base_converter ./base_converter

RUN mkdir -p /app/output

RUN cd ./base_converter && go mod download
RUN cd ./base_converter && go mod tidy

RUN go build -C ./base_converter -o ../output/base_converter.wasm \
github.com/thalessd/base-coverter-wasm/base_converter/cmd/wasm

RUN cp "$(go env GOROOT)/misc/wasm/wasm_exec.js" output

FROM node:18-alpine3.17 AS build-react

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

COPY --from=build-wasm /app/output ./build

FROM nginx:1.21.3-alpine

COPY --from=build-react /app/build /usr/share/nginx/html

EXPOSE 80
