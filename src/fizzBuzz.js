class Fizzbuzz {
  isDivisibleByThree(number) {
    if (number % 3 === 0) {
      return true;
    } else {
      return false;
    }
  }

  isDivisibleByFive(number) {
    if (number % 5 === 0) {
      return true;
    } else {
      return false;
    }
  }
}