package base_converter

import (
	"testing"
)

func TestFromBase10ToBase2(t *testing.T) {
	got := FromBase10ToBase2(10)
	want := "1010"

	if got != want {
		t.Errorf("got %q want %q", got, want)
	}
}

func TestFromBase10ToBase8(t *testing.T) {
	got := FromBase10ToBase8(10)
	want := "12"

	if got != want {
		t.Errorf("got %q want %q", got, want)
	}
}

func TestFromBase10ToBase16(t *testing.T) {
	got := FromBase10ToBase16(10)
	want := "A"

	if got != want {
		t.Errorf("got %q want %q", got, want)
	}
}

func TestFromBase2ToBase10(t *testing.T) {
	got := FromBase2ToBase10("1010")
	want := 10

	if got != want {
		t.Errorf("got %q want %q", got, want)
	}
}

func TestFromBase8ToBase10(t *testing.T) {
	got := FromBase8ToBase10("12")
	want := 10

	if got != want {
		t.Errorf("got %q want %q", got, want)
	}
}

func TestFromBase16ToBase10(t *testing.T) {
	got := FromBase16ToBase10("A")
	want := 10

	if got != want {
		t.Errorf("got %q want %q", got, want)
	}
}
