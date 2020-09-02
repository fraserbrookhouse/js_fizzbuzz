class Fizzbuzz {
  isDivisibleByThree(number) {
    return this._isDivisibleBy(number, 3);
  }

  isDivisibleByFive(number) {
    return this._isDivisibleBy(number, 5);
  }

  isDivisibleByFifteen(number) {
    return this._isDivisibleBy(number, 15);
  }

  _isDivisibleBy(number, divisor) {
    return number % divisor === 0;
  }

  says(number) {
    if (this.isDivisibleByFifteen(number)) {
      return "FizzBuzz";
    } else if (this.isDivisibleByThree(number)) {
      return "Fizz";
    } else if (this.isDivisibleByFive(number)) {
      return "Buzz";
    } else {
      return number;
    }
  }
}
