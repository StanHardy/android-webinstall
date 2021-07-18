const DEVICE_NAMES = {
    lavender: "Redmi Note 7",
};

export function getDeviceName(device) {
    return device in DEVICE_NAMES ? DEVICE_NAMES[device] : device;
}
