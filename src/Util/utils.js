function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function isLight(color) {
    // Check if the color is light
    const r = parseInt(color.substring(1, 3), 16);
    const g = parseInt(color.substring(3, 5), 16);
    const b = parseInt(color.substring(5, 7), 16);
    // Calculate brightness
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 200; // Adjust the threshold as needed
}

export function getRandomDarkColor() {
    let color = getRandomColor();
    while (isLight(color)) {
        color = getRandomColor();
    }
    return color;
}
