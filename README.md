# Challenge #1. Number conversion

### Description

Write a program that would take a number and return its English representation. Example:

- *Input*: `42`
- *Output*: `'forty two'`

For implementation use the `convertNumberToEnglishText(n: number): string` function located in `src/index.ts`.
 
### Project setup

You need to have `node` and `npm` installed on your machine.

1. Run `npm i` to install dependencies.
1. Run `npm t` to run tests.

### Requirements checklist

1. All test cases that are currently in `src/index.test.ts` must pass.
1. Skip the word "and" for larger numbers, i.e. `two thousand one` instead of `two thousand and one`.
1. The implementation must cover cases from `-99999` to `99999`.

### Comments after task completion:
Input number is split into three digit groups, which are then handled and converted to text using a separate function, which keeps getting called as long as there are three digit groups remaining after each iteration. The three digit group is further split and each digit (hundreds, tens and ones place) is found and then compared against the Map structure which holds the number-word key-value pairs. Results of the conversion are recombined to form a complete string of the input number converted to words. Prefix "negative" is added for negative values.

Usability can be further extended to larger numbers by updating the Map with larger scale numbers (billion, trillion and so on).