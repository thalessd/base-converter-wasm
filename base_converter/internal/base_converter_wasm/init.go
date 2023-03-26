package base_converter_wasm

import (
	"syscall/js"
)

func Init() {
	js.Global().Set("baseConverter", js.ValueOf(map[string]interface{}{
		"fromBase10ToBase2":  js.FuncOf(FromBase10ToBase2),
		"fromBase10ToBase8":  js.FuncOf(FromBase10ToBase8),
		"fromBase10ToBase16": js.FuncOf(FromBase10ToBase16),
		"fromBase2ToBase10":  js.FuncOf(FromBase2ToBase10),
		"fromBase8ToBase10":  js.FuncOf(FromBase8ToBase10),
		"fromBase16ToBase10": js.FuncOf(FromBase16ToBase10),
	}))
}
