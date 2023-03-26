package base_converter_wasm

import (
	"github.com/thalessd/base-coverter-wasm/base_converter/internal/base_converter"
	"syscall/js"
)

func FromBase10ToBase2(_ js.Value, args []js.Value) interface{} {
	if len(args) == 0 {
		return ""
	}

	number := args[0].Int()
	return base_converter.FromBase10ToBase2(number)
}

func FromBase10ToBase8(_ js.Value, args []js.Value) interface{} {
	if len(args) == 0 {
		return ""
	}

	number := args[0].Int()
	return base_converter.FromBase10ToBase8(number)
}

func FromBase10ToBase16(_ js.Value, args []js.Value) interface{} {
	if len(args) == 0 {
		return ""
	}

	number := args[0].Int()
	return base_converter.FromBase10ToBase16(number)
}

func FromBase2ToBase10(_ js.Value, args []js.Value) interface{} {
	if len(args) == 0 {
		return ""
	}

	number := args[0].String()
	return base_converter.FromBase2ToBase10(number)
}

func FromBase8ToBase10(_ js.Value, args []js.Value) interface{} {
	if len(args) == 0 {
		return ""
	}

	number := args[0].String()
	return base_converter.FromBase8ToBase10(number)
}

func FromBase16ToBase10(_ js.Value, args []js.Value) interface{} {
	if len(args) == 0 {
		return ""
	}

	number := args[0].String()
	return base_converter.FromBase16ToBase10(number)
}
