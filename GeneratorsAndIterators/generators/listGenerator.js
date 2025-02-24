export function* listGenerator (list) {
    while (true) {
        for (const item of list) {
            yield item;
        }
    }
}