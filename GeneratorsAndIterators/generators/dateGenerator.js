export function* dateGenerator() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    while (true) {
        for (const day of days) {
            yield day;
        }
    }
}