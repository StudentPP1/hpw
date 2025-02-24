export function* colorGenerator() {
    const colors = ["red", "green", "blue"];

    while (true) {
        for (const color of colors) {
            yield color;
        }
    }
}