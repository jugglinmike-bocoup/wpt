// META: global=jsshell
// META: script=/wasm/core/harness.js

// unwind.wast:3
let $1 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x00\x01\x7f\x03\xb2\x80\x80\x80\x00\x31\x00\x00\x01\x00\x01\x00\x01\x01\x00\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x07\x94\x8a\x80\x80\x00\x31\x1a\x66\x75\x6e\x63\x2d\x75\x6e\x77\x69\x6e\x64\x2d\x62\x79\x2d\x75\x6e\x72\x65\x61\x63\x68\x61\x62\x6c\x65\x00\x00\x11\x66\x75\x6e\x63\x2d\x75\x6e\x77\x69\x6e\x64\x2d\x62\x79\x2d\x62\x72\x00\x01\x17\x66\x75\x6e\x63\x2d\x75\x6e\x77\x69\x6e\x64\x2d\x62\x79\x2d\x62\x72\x2d\x76\x61\x6c\x75\x65\x00\x02\x14\x66\x75\x6e\x63\x2d\x75\x6e\x77\x69\x6e\x64\x2d\x62\x79\x2d\x62\x72\x5f\x69\x66\x00\x03\x1a\x66\x75\x6e\x63\x2d\x75\x6e\x77\x69\x6e\x64\x2d\x62\x79\x2d\x62\x72\x5f\x69\x66\x2d\x76\x61\x6c\x75\x65\x00\x04\x17\x66\x75\x6e\x63\x2d\x75\x6e\x77\x69\x6e\x64\x2d\x62\x79\x2d\x62\x72\x5f\x74\x61\x62\x6c\x65\x00\x05\x1d\x66\x75\x6e\x63\x2d\x75\x6e\x77\x69\x6e\x64\x2d\x62\x79\x2d\x62\x72\x5f\x74\x61\x62\x6c\x65\x2d\x76\x61\x6c\x75\x65\x00\x06\x15\x66\x75\x6e\x63\x2d\x75\x6e\x77\x69\x6e\x64\x2d\x62\x79\x2d\x72\x65\x74\x75\x72\x6e\x00\x07\x1b\x62\x6c\x6f\x63\x6b\x2d\x75\x6e\x77\x69\x6e\x64\x2d\x62\x79\x2d\x75\x6e\x72\x65\x61\x63\x68\x61\x62\x6c\x65\x00\x08\x12\x62\x6c\x6f\x63\x6b\x2d\x75\x6e\x77\x69\x6e\x64\x2d\x62\x79\x2d\x62\x72\x00\x09\x18\x62\x6c\x6f\x63\x6b\x2d\x75\x6e\x77\x69\x6e\x64\x2d\x62\x79\x2d\x62\x72\x2d\x76\x61\x6c\x75\x65\x00\x0a\x15\x62\x6c\x6f\x63\x6b\x2d\x75\x6e\x77\x69\x6e\x64\x2d\x62\x79\x2d\x62\x72\x5f\x69\x66\x00\x0b\x1b\x62\x6c\x6f\x63\x6b\x2d\x75\x6e\x77\x69\x6e\x64\x2d\x62\x79\x2d\x62\x72\x5f\x69\x66\x2d\x76\x61\x6c\x75\x65\x00\x0c\x18\x62\x6c\x6f\x63\x6b\x2d\x75\x6e\x77\x69\x6e\x64\x2d\x62\x79\x2d\x62\x72\x5f\x74\x61\x62\x6c\x65\x00\x0d\x1e\x62\x6c\x6f\x63\x6b\x2d\x75\x6e\x77\x69\x6e\x64\x2d\x62\x79\x2d\x62\x72\x5f\x74\x61\x62\x6c\x65\x2d\x76\x61\x6c\x75\x65\x00\x0e\x16\x62\x6c\x6f\x63\x6b\x2d\x75\x6e\x77\x69\x6e\x64\x2d\x62\x79\x2d\x72\x65\x74\x75\x72\x6e\x00\x0f\x22\x62\x6c\x6f\x63\x6b\x2d\x6e\x65\x73\x74\x65\x64\x2d\x75\x6e\x77\x69\x6e\x64\x2d\x62\x79\x2d\x75\x6e\x72\x65\x61\x63\x68\x61\x62\x6c\x65\x00\x10\x19\x62\x6c\x6f\x63\x6b\x2d\x6e\x65\x73\x74\x65\x64\x2d\x75\x6e\x77\x69\x6e\x64\x2d\x62\x79\x2d\x62\x72\x00\x11\x1f\x62\x6c\x6f\x63\x6b\x2d\x6e\x65\x73\x74\x65\x64\x2d\x75\x6e\x77\x69\x6e\x64\x2d\x62\x79\x2d\x62\x72\x2d\x76\x61\x6c\x75\x65\x00\x12\x1c\x62\x6c\x6f\x63\x6b\x2d\x6e\x65\x73\x74\x65\x64\x2d\x75\x6e\x77\x69\x6e\x64\x2d\x62\x79\x2d\x62\x72\x5f\x69\x66\x00\x13\x22\x62\x6c\x6f\x63\x6b\x2d\x6e\x65\x73\x74\x65\x64\x2d\x75\x6e\x77\x69\x6e\x64\x2d\x62\x79\x2d\x62\x72\x5f\x69\x66\x2d\x76\x61\x6c\x75\x65\x00\x14\x1f\x62\x6c\x6f\x63\x6b\x2d\x6e\x65\x73\x74\x65\x64\x2d\x75\x6e\x77\x69\x6e\x64\x2d\x62\x79\x2d\x62\x72\x5f\x74\x61\x62\x6c\x65\x00\x15\x25\x62\x6c\x6f\x63\x6b\x2d\x6e\x65\x73\x74\x65\x64\x2d\x75\x6e\x77\x69\x6e\x64\x2d\x62\x79\x2d\x62\x72\x5f\x74\x61\x62\x6c\x65\x2d\x76\x61\x6c\x75\x65\x00\x16\x1d\x62\x6c\x6f\x63\x6b\x2d\x6e\x65\x73\x74\x65\x64\x2d\x75\x6e\x77\x69\x6e\x64\x2d\x62\x79\x2d\x72\x65\x74\x75\x72\x6e\x00\x17\x17\x75\x6e\x61\x72\x79\x2d\x61\x66\x74\x65\x72\x2d\x75\x6e\x72\x65\x61\x63\x68\x61\x62\x6c\x65\x00\x18\x0e\x75\x6e\x61\x72\x79\x2d\x61\x66\x74\x65\x72\x2d\x62\x72\x00\x19\x11\x75\x6e\x61\x72\x79\x2d\x61\x66\x74\x65\x72\x2d\x62\x72\x5f\x69\x66\x00\x1a\x14\x75\x6e\x61\x72\x79\x2d\x61\x66\x74\x65\x72\x2d\x62\x72\x5f\x74\x61\x62\x6c\x65\x00\x1b\x12\x75\x6e\x61\x72\x79\x2d\x61\x66\x74\x65\x72\x2d\x72\x65\x74\x75\x72\x6e\x00\x1c\x18\x62\x69\x6e\x61\x72\x79\x2d\x61\x66\x74\x65\x72\x2d\x75\x6e\x72\x65\x61\x63\x68\x61\x62\x6c\x65\x00\x1d\x0f\x62\x69\x6e\x61\x72\x79\x2d\x61\x66\x74\x65\x72\x2d\x62\x72\x00\x1e\x12\x62\x69\x6e\x61\x72\x79\x2d\x61\x66\x74\x65\x72\x2d\x62\x72\x5f\x69\x66\x00\x1f\x15\x62\x69\x6e\x61\x72\x79\x2d\x61\x66\x74\x65\x72\x2d\x62\x72\x5f\x74\x61\x62\x6c\x65\x00\x20\x13\x62\x69\x6e\x61\x72\x79\x2d\x61\x66\x74\x65\x72\x2d\x72\x65\x74\x75\x72\x6e\x00\x21\x18\x73\x65\x6c\x65\x63\x74\x2d\x61\x66\x74\x65\x72\x2d\x75\x6e\x72\x65\x61\x63\x68\x61\x62\x6c\x65\x00\x22\x0f\x73\x65\x6c\x65\x63\x74\x2d\x61\x66\x74\x65\x72\x2d\x62\x72\x00\x23\x12\x73\x65\x6c\x65\x63\x74\x2d\x61\x66\x74\x65\x72\x2d\x62\x72\x5f\x69\x66\x00\x24\x15\x73\x65\x6c\x65\x63\x74\x2d\x61\x66\x74\x65\x72\x2d\x62\x72\x5f\x74\x61\x62\x6c\x65\x00\x25\x13\x73\x65\x6c\x65\x63\x74\x2d\x61\x66\x74\x65\x72\x2d\x72\x65\x74\x75\x72\x6e\x00\x26\x1d\x62\x6c\x6f\x63\x6b\x2d\x76\x61\x6c\x75\x65\x2d\x61\x66\x74\x65\x72\x2d\x75\x6e\x72\x65\x61\x63\x68\x61\x62\x6c\x65\x00\x27\x14\x62\x6c\x6f\x63\x6b\x2d\x76\x61\x6c\x75\x65\x2d\x61\x66\x74\x65\x72\x2d\x62\x72\x00\x28\x17\x62\x6c\x6f\x63\x6b\x2d\x76\x61\x6c\x75\x65\x2d\x61\x66\x74\x65\x72\x2d\x62\x72\x5f\x69\x66\x00\x29\x1a\x62\x6c\x6f\x63\x6b\x2d\x76\x61\x6c\x75\x65\x2d\x61\x66\x74\x65\x72\x2d\x62\x72\x5f\x74\x61\x62\x6c\x65\x00\x2a\x18\x62\x6c\x6f\x63\x6b\x2d\x76\x61\x6c\x75\x65\x2d\x61\x66\x74\x65\x72\x2d\x72\x65\x74\x75\x72\x6e\x00\x2b\x1c\x6c\x6f\x6f\x70\x2d\x76\x61\x6c\x75\x65\x2d\x61\x66\x74\x65\x72\x2d\x75\x6e\x72\x65\x61\x63\x68\x61\x62\x6c\x65\x00\x2c\x13\x6c\x6f\x6f\x70\x2d\x76\x61\x6c\x75\x65\x2d\x61\x66\x74\x65\x72\x2d\x62\x72\x00\x2d\x16\x6c\x6f\x6f\x70\x2d\x76\x61\x6c\x75\x65\x2d\x61\x66\x74\x65\x72\x2d\x62\x72\x5f\x69\x66\x00\x2e\x19\x6c\x6f\x6f\x70\x2d\x76\x61\x6c\x75\x65\x2d\x61\x66\x74\x65\x72\x2d\x62\x72\x5f\x74\x61\x62\x6c\x65\x00\x2f\x17\x6c\x6f\x6f\x70\x2d\x76\x61\x6c\x75\x65\x2d\x61\x66\x74\x65\x72\x2d\x72\x65\x74\x75\x72\x6e\x00\x30\x0a\x80\x88\x80\x80\x00\x31\x87\x80\x80\x80\x00\x00\x41\x03\x42\x01\x00\x0b\x88\x80\x80\x80\x00\x00\x41\x03\x42\x01\x0c\x00\x0b\x8a\x80\x80\x80\x00\x00\x41\x03\x42\x01\x41\x09\x0c\x00\x0b\x8c\x80\x80\x80\x00\x00\x41\x03\x42\x01\x41\x01\x0d\x00\x1a\x1a\x0b\x8e\x80\x80\x80\x00\x00\x41\x03\x42\x01\x41\x09\x41\x01\x0d\x00\x1a\x1a\x0b\x8b\x80\x80\x80\x00\x00\x41\x03\x42\x01\x41\x00\x0e\x00\x00\x0b\x8d\x80\x80\x80\x00\x00\x41\x03\x42\x01\x41\x09\x41\x00\x0e\x00\x00\x0b\x89\x80\x80\x80\x00\x00\x41\x03\x42\x01\x41\x09\x0f\x0b\x8a\x80\x80\x80\x00\x00\x02\x40\x41\x03\x42\x01\x00\x0b\x0b\x8d\x80\x80\x80\x00\x00\x02\x40\x41\x03\x42\x01\x0c\x00\x0b\x41\x09\x0b\x8d\x80\x80\x80\x00\x00\x02\x7f\x41\x03\x42\x01\x41\x09\x0c\x00\x0b\x0b\x91\x80\x80\x80\x00\x00\x02\x40\x41\x03\x42\x01\x41\x01\x0d\x00\x1a\x1a\x0b\x41\x09\x0b\x91\x80\x80\x80\x00\x00\x02\x7f\x41\x03\x42\x01\x41\x09\x41\x01\x0d\x00\x1a\x1a\x0b\x0b\x90\x80\x80\x80\x00\x00\x02\x40\x41\x03\x42\x01\x41\x00\x0e\x00\x00\x0b\x41\x09\x0b\x90\x80\x80\x80\x00\x00\x02\x7f\x41\x03\x42\x01\x41\x09\x41\x00\x0e\x00\x00\x0b\x0b\x8c\x80\x80\x80\x00\x00\x02\x7f\x41\x03\x42\x01\x41\x09\x0f\x0b\x0b\x8d\x80\x80\x80\x00\x00\x02\x7f\x41\x03\x02\x40\x42\x01\x00\x0b\x0b\x0b\x91\x80\x80\x80\x00\x00\x02\x40\x41\x03\x02\x40\x42\x01\x0c\x01\x0b\x1a\x0b\x41\x09\x0b\x90\x80\x80\x80\x00\x00\x02\x7f\x41\x03\x02\x40\x42\x01\x41\x09\x0c\x01\x0b\x0b\x0b\x94\x80\x80\x80\x00\x00\x02\x40\x41\x03\x02\x40\x42\x01\x41\x01\x0d\x01\x1a\x0b\x1a\x0b\x41\x09\x0b\x94\x80\x80\x80\x00\x00\x02\x7f\x41\x03\x02\x40\x42\x01\x41\x09\x41\x01\x0d\x01\x1a\x1a\x0b\x0b\x0b\x94\x80\x80\x80\x00\x00\x02\x40\x41\x03\x02\x40\x42\x01\x41\x01\x0e\x00\x01\x0b\x1a\x0b\x41\x09\x0b\x93\x80\x80\x80\x00\x00\x02\x7f\x41\x03\x02\x40\x42\x01\x41\x09\x41\x01\x0e\x00\x01\x0b\x0b\x0b\x8f\x80\x80\x80\x00\x00\x02\x7f\x41\x03\x02\x40\x42\x01\x41\x09\x0f\x0b\x0b\x0b\x89\x80\x80\x80\x00\x00\x43\x00\x00\x00\x00\x00\x50\x0b\x8f\x80\x80\x80\x00\x00\x02\x7f\x43\x00\x00\x00\x00\x41\x09\x0c\x00\x50\x0b\x0b\x8f\x80\x80\x80\x00\x00\x02\x7f\x42\x00\x41\x09\x41\x01\x0d\x00\x1a\x50\x0b\x0b\x93\x80\x80\x80\x00\x00\x02\x7f\x43\x00\x00\x00\x00\x41\x09\x41\x00\x0e\x01\x00\x00\x50\x0b\x0b\x8b\x80\x80\x80\x00\x00\x43\x00\x00\x00\x00\x41\x09\x0f\x50\x0b\x92\x80\x80\x80\x00\x00\x43\x00\x00\x00\x00\x44\x00\x00\x00\x00\x00\x00\xf0\x3f\x00\x51\x0b\x98\x80\x80\x80\x00\x00\x02\x7f\x43\x00\x00\x00\x00\x44\x00\x00\x00\x00\x00\x00\xf0\x3f\x41\x09\x0c\x00\x51\x0b\x0b\x91\x80\x80\x80\x00\x00\x02\x7f\x42\x00\x42\x01\x41\x09\x41\x01\x0d\x00\x1a\x51\x0b\x0b\x9b\x80\x80\x80\x00\x00\x02\x7f\x43\x00\x00\x00\x00\x44\x00\x00\x00\x00\x00\x00\xf0\x3f\x41\x09\x41\x00\x0e\x00\x00\x51\x0b\x0b\x94\x80\x80\x80\x00\x00\x43\x00\x00\x00\x00\x44\x00\x00\x00\x00\x00\x00\xf0\x3f\x41\x09\x0f\x51\x0b\x94\x80\x80\x80\x00\x00\x43\x00\x00\x00\x00\x44\x00\x00\x00\x00\x00\x00\xf0\x3f\x42\x00\x00\x1b\x0b\x9a\x80\x80\x80\x00\x00\x02\x7f\x43\x00\x00\x00\x00\x44\x00\x00\x00\x00\x00\x00\xf0\x3f\x42\x00\x41\x09\x0c\x00\x1b\x0b\x0b\x93\x80\x80\x80\x00\x00\x02\x7f\x41\x00\x41\x01\x41\x00\x41\x09\x41\x01\x0d\x00\x1a\x1b\x0b\x0b\x9d\x80\x80\x80\x00\x00\x02\x7f\x43\x00\x00\x00\x00\x44\x00\x00\x00\x00\x00\x00\xf0\x3f\x42\x00\x41\x09\x41\x00\x0e\x00\x00\x1b\x0b\x0b\x96\x80\x80\x80\x00\x00\x43\x00\x00\x00\x00\x44\x00\x00\x00\x00\x00\x00\xf0\x3f\x42\x01\x41\x09\x0f\x1b\x0b\x8b\x80\x80\x80\x00\x00\x02\x7f\x43\x00\x00\x00\x00\x00\x0b\x0b\x8e\x80\x80\x80\x00\x00\x02\x7f\x43\x00\x00\x00\x00\x41\x09\x0c\x00\x0b\x0b\x8e\x80\x80\x80\x00\x00\x02\x7f\x41\x00\x41\x09\x41\x01\x0d\x00\x1a\x0b\x0b\x92\x80\x80\x80\x00\x00\x02\x7f\x43\x00\x00\x00\x00\x41\x09\x41\x00\x0e\x01\x00\x00\x0b\x0b\x8d\x80\x80\x80\x00\x00\x02\x7f\x43\x00\x00\x00\x00\x41\x09\x0f\x0b\x0b\x8b\x80\x80\x80\x00\x00\x03\x7f\x43\x00\x00\x00\x00\x00\x0b\x0b\x91\x80\x80\x80\x00\x00\x02\x7f\x03\x7f\x43\x00\x00\x00\x00\x41\x09\x0c\x01\x0b\x0b\x0b\x91\x80\x80\x80\x00\x00\x02\x7f\x03\x7f\x41\x00\x41\x09\x41\x01\x0d\x01\x1a\x0b\x0b\x0b\x95\x80\x80\x80\x00\x00\x02\x7f\x03\x7f\x43\x00\x00\x00\x00\x41\x09\x41\x00\x0e\x01\x01\x01\x0b\x0b\x0b\x8d\x80\x80\x80\x00\x00\x03\x7f\x43\x00\x00\x00\x00\x41\x09\x0f\x0b\x0b");

// unwind.wast:212
assert_trap(() => call($1, "func-unwind-by-unreachable", []));

// unwind.wast:213
assert_return(() => call($1, "func-unwind-by-br", []));

// unwind.wast:214
assert_return(() => call($1, "func-unwind-by-br-value", []), 9);

// unwind.wast:215
assert_return(() => call($1, "func-unwind-by-br_if", []));

// unwind.wast:216
assert_return(() => call($1, "func-unwind-by-br_if-value", []), 9);

// unwind.wast:217
assert_return(() => call($1, "func-unwind-by-br_table", []));

// unwind.wast:218
assert_return(() => call($1, "func-unwind-by-br_table-value", []), 9);

// unwind.wast:219
assert_return(() => call($1, "func-unwind-by-return", []), 9);

// unwind.wast:221
assert_trap(() => call($1, "block-unwind-by-unreachable", []));

// unwind.wast:222
assert_return(() => call($1, "block-unwind-by-br", []), 9);

// unwind.wast:223
assert_return(() => call($1, "block-unwind-by-br-value", []), 9);

// unwind.wast:224
assert_return(() => call($1, "block-unwind-by-br_if", []), 9);

// unwind.wast:225
assert_return(() => call($1, "block-unwind-by-br_if-value", []), 9);

// unwind.wast:226
assert_return(() => call($1, "block-unwind-by-br_table", []), 9);

// unwind.wast:227
assert_return(() => call($1, "block-unwind-by-br_table-value", []), 9);

// unwind.wast:228
assert_return(() => call($1, "block-unwind-by-return", []), 9);

// unwind.wast:230
assert_trap(() => call($1, "block-nested-unwind-by-unreachable", []));

// unwind.wast:231
assert_return(() => call($1, "block-nested-unwind-by-br", []), 9);

// unwind.wast:232
assert_return(() => call($1, "block-nested-unwind-by-br-value", []), 9);

// unwind.wast:233
assert_return(() => call($1, "block-nested-unwind-by-br_if", []), 9);

// unwind.wast:234
assert_return(() => call($1, "block-nested-unwind-by-br_if-value", []), 9);

// unwind.wast:235
assert_return(() => call($1, "block-nested-unwind-by-br_table", []), 9);

// unwind.wast:236
assert_return(() => call($1, "block-nested-unwind-by-br_table-value", []), 9);

// unwind.wast:237
assert_return(() => call($1, "block-nested-unwind-by-return", []), 9);

// unwind.wast:239
assert_trap(() => call($1, "unary-after-unreachable", []));

// unwind.wast:240
assert_return(() => call($1, "unary-after-br", []), 9);

// unwind.wast:241
assert_return(() => call($1, "unary-after-br_if", []), 9);

// unwind.wast:242
assert_return(() => call($1, "unary-after-br_table", []), 9);

// unwind.wast:243
assert_return(() => call($1, "unary-after-return", []), 9);

// unwind.wast:245
assert_trap(() => call($1, "binary-after-unreachable", []));

// unwind.wast:246
assert_return(() => call($1, "binary-after-br", []), 9);

// unwind.wast:247
assert_return(() => call($1, "binary-after-br_if", []), 9);

// unwind.wast:248
assert_return(() => call($1, "binary-after-br_table", []), 9);

// unwind.wast:249
assert_return(() => call($1, "binary-after-return", []), 9);

// unwind.wast:251
assert_trap(() => call($1, "select-after-unreachable", []));

// unwind.wast:252
assert_return(() => call($1, "select-after-br", []), 9);

// unwind.wast:253
assert_return(() => call($1, "select-after-br_if", []), 9);

// unwind.wast:254
assert_return(() => call($1, "select-after-br_table", []), 9);

// unwind.wast:255
assert_return(() => call($1, "select-after-return", []), 9);

// unwind.wast:257
assert_trap(() => call($1, "block-value-after-unreachable", []));

// unwind.wast:258
assert_return(() => call($1, "block-value-after-br", []), 9);

// unwind.wast:259
assert_return(() => call($1, "block-value-after-br_if", []), 9);

// unwind.wast:260
assert_return(() => call($1, "block-value-after-br_table", []), 9);

// unwind.wast:261
assert_return(() => call($1, "block-value-after-return", []), 9);

// unwind.wast:263
assert_trap(() => call($1, "loop-value-after-unreachable", []));

// unwind.wast:264
assert_return(() => call($1, "loop-value-after-br", []), 9);

// unwind.wast:265
assert_return(() => call($1, "loop-value-after-br_if", []), 9);

// unwind.wast:266
assert_return(() => call($1, "loop-value-after-br_table", []), 9);

// unwind.wast:267
assert_return(() => call($1, "loop-value-after-return", []), 9);