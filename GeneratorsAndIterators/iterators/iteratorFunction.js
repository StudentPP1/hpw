import chalk from "chalk";

export function iterate(iterable, timeout) {
  const iterator = iterable[Symbol.iterator]();
  const colors = {
    red: chalk.red,
    green: chalk.green,
    blue: chalk.blue,
  };
  let counter = 0;
  let sum = 0;

  const sleep = (sec) => new Promise((resolve) => {
      setTimeout(resolve, sec * 1000);
  });

  const next = async () => {
    while (true) {
      await sleep(timeout);

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
    }
  };

  next();
}
