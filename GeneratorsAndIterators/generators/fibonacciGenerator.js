export function* fibonacciGenerator() {
    let temp = 1;
    let oldValue = 1;
    let current = 1;

    yield current;
  
    while (true) {
        temp = current;
  
        yield temp;
  
        current += oldValue;
        oldValue = temp;
    }
}