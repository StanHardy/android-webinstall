const DEVICE_NAMES = {
    lavender: "Oneplus 7 Pro",
};

export function getDeviceName(device) {
    return device in DEVICE_NAMES ? DEVICE_NAMES[device] : device;
}
