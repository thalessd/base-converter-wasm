package base_converter

import (
	"fmt"
	"strconv"
)

func FromBase10ToBase2(number int) string {
	var result string
	for number > 0 {
		result = string(rune(number%2+'0')) + result
		number /= 2
	}
	return result
}

func FromBase10ToBase8(number int) string {
	var result string
	for number > 0 {
		result = string(rune(number%8+'0')) + result
		number /= 8
	}
	return result
}

func FromBase10ToBase16(number int) string {
	return fmt.Sprintf("%X", number)
}

func FromBase2ToBase10(number string) int {
	var result int
	for _, digit := range number {
		result *= 2
		result += int(digit - '0')
	}
	return result
}

func FromBase8ToBase10(number string) int {
	var result int
	for _, digit := range number {
		result *= 8
		result += int(digit - '0')
	}
	return result
}

func FromBase16ToBase10(number string) int {
	num, _ := strconv.ParseInt(number, 16, 0)
	return int(num)
}
