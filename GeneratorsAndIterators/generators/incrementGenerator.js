export function* incrementGenerator(startValue) {
    let counter = startValue + 1;
    while (true) {
        yield counter++;
    }
}