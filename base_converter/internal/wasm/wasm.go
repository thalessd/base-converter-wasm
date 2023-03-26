package wasm

import "github.com/thalessd/base-coverter-wasm/base_converter/internal/base_converter_wasm"

func Init() {
	c := make(chan struct{}, 0)
	base_converter_wasm.Init()
	<-c
}
