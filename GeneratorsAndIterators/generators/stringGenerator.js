export function* stringGenerator(maxLength) {
    const symbols = "abcdefghijklmnopqrstuvwxyz?-+()&*^:1234567890".split('');
    while (true) {
        let string = "";
        for (let i = 0; i < maxLength; i++) {
            string += symbols[Math.floor(Math.random() * symbols.length)]
        }
        yield string;
    }
}