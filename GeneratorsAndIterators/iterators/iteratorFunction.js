import chalk from "chalk";

export function iteratorFunction(iterable, timeout) {
  const iterator = iterable[Symbol.iterator]();
  const colors = {
    red: chalk.red,
    green: chalk.green,
    blue: chalk.blue,
  };
  let counter = 0;
  let sum = 0;

  return {
    next: () => {
      const start = Date.now();
      while (Date.now() - start < timeout * 1000) {}
      
      const result = iterator.next().value;
      if (typeof result === "number") {
        counter++;
        sum += result;
        console.log("Sum: ", sum, " Avg: ", sum / counter);
      } else if (Object.keys(colors).includes(result)) {
        var today = new Date();
        var day = String(today.getDate()).padStart(2, "0");
        var month = String(today.getMonth() + 1).padStart(2, "0");
        var year = today.getFullYear();
        today = day + "." + month + "." + year;
        console.log(colors[result](today));
      } else {
        console.log(result);
      }
    },
  };
}
