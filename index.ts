import { dlopen, FFIType } from "bun:ffi";

const KEYEVENTF_KEYUP = 0x0002;
const VK_F15 = 0x7e;

const user32 = dlopen("user32.dll", {
  keybd_event: {
    args: [FFIType.uint8_t, FFIType.uint8_t, FFIType.uint32_t, FFIType.ptr],
  },
});

function pressF15() {
  user32.symbols.keybd_event(VK_F15, 0, KEYEVENTF_KEYUP, 0);
}

setInterval(pressF15, 59000);
