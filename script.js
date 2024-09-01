//SET 1 QUESTION 1

//declare function fizzBuzz that takes two parameters, which are strings
//declare a formula that adds the string length of the two strings
//we then state a conditional statement that checks if the string length is divisible by 3
//we then state another condition which checks if the string length is divisible by 5
//we also write another condition which checks if the strng length is divisible by both 3 and 5
//we need to show the output of each result into the console

function fizzBuzz(str1, str2) {
  let strSum = str1.length + str2.length;

  if (strSum % 3 == 0) {
    console.log("fizz");
  } else if (strSum % 5 == 0) {
    console.log("Buzz");
  } else if (strSum % 3 == 0 && strSum % 5 == 0) {
    console.log("fizzBuzz");
  }
}
fizzBuzz("babys", "girls");

//SET I PART 2

//write a function that prompts a user to enter their year of birth
// declare a method that creates makes current year dynamic so that the current year does not need to be written manually.
//declare a formula that calculates someone's age as a difference of the current year and the year of birth
//use an if statement that seeks to check for the three age categories
//display result in the console

let yearOfBirth = prompt("please enter your year of birth");
const currentYear = new Date().getFullYear();

let age = currentYear - yearOfBirth;
if (age < 18) {
  console.log("you are a minor");
} else if (age <= 36) {
  console.log("you are an adult");
} else if (age > 36) {
  console.log("you are an elder");
}

//SET I PART 3

//declare function twoSum which takes two parameters nums and target
//set an array and a desired target
//create a loop as counter that wil iterate to give the first counter
//create another loop that will iterate through the numbers to give the second counter
//write a formula to add the two numbers picked in the array
//write a conditional statement that seeks to test if the sum obtained in step 4 is equal to the target
//then return the indices of the numbers that gave us the target.

function twoSum(nums, target) {
  for (i = 0; i < nums.length; i++) {
    for (j = 1; j < nums.length; j++) {
      let sum = nums[i] + nums[j];
      if (sum == 22) {
        console.log([i, j]);
      }
    }
  }
}

twoSum([2, 7, 11, 15], 22);

// SET I PART 4

//declare function firstPalindrome which takes a parameter, words
//create a loop that checks through the string to check for the first palindromic string
//use the .split() method to convert the string into an array
//use .reverse() method to reverse the formed array
//use the .join() method to join the reversed array
//compare if reversed array is the same as the original string of array someArray()
//if so return return the element
//if the condition is not met, return an empty array.

function firstPalindrome(words) {
  for (element of words) {
    let reversedArray = element.split("").reverse().join("");
    if (reversedArray == element) {
      return element;
    }
  }
  return "";
}

let someArray = ["car", "ada", "flower", "kayak"];
firstPalindrome(someArray);

//SET I PART 5

//write a function sumNums
//get the number
//convert number into string then the string into an array so that we can access each digit of the number
//check if the array's length is equal to 1
//if length is equal to 1 return the number
//introduce a while loop with a condition that the length should not be equal to 1
//set sum and initialize it to 0
//introduce a for loop to iterate through
//introduce if statement that returns current sum

function sumNums(num) {
  let number = num;
  let stringNum = number.toString();
  if (stringNum.length == 1) {
    return +stringNum; //this converts string into a number
  }

  while (stringNum.length !== 1) {
    let sum = 0;
    for (i = 0; i < stringNum.length; i++) {
      sum += parseInt(stringNum[i]);
    }
    if (sum < 10) {
      return sum;
    } else {
      stringNum = sum.toString();
    }
  }
}
sumNums(387);

//SET II PART 1

//declare the function that categorizes the content of the array
//create variables that will store Even numbers, Odd numbers and chars under one object called result.
//create a loop to iterate through the whole array
//create a method that will detect odd numbers, even numbers and chars
//create an if statement that will return either even, odd or chars
//in each category use an array method to get the result and add it to the empty array in each category
//Next is to use the push method to add each generated number in to the Evens, odds and chars arrays
//then we usse the bubbleSort function to sort numbers in Ascending order.
//then finally bubbleSort helps us to generate individual arrays
function categorizeArray(arr) {
  let result = {
    evens: [],
    odds: [],
    chars: [],
  };

  // Separate elements into evens, odds, and chars
  arr.forEach((item) => {
    if (typeof item === "number") {
      if (item % 2 === 0) {
        result.evens.push(item);
      } else {
        result.odds.push(item);
      }
    } else if (typeof item === "string" && item.length === 1) {
      result.chars.push(item);
    }
  });

  // Sorting functions
  const bubbleSort = (array) => {
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
  };

  // Sort each array using bubble sort
  bubbleSort(result.evens);
  bubbleSort(result.odds);
  bubbleSort(result.chars);

  return result;
}

// Example usage
const inputArray = [5, 2, 3.5, 8, "a", "c", 7, "b", 4];
const output = categorizeArray(inputArray);
console.log(output);

//SET II PART 2

//declare the function
//set variable to store array
//create a loop that runs through the entire array
//set a counter and intialize it to 0
//compare the number if it is equal to the next number
//return true
//if numbers are not the same return false

let numbers = [1, 2, 3, 2];
const trueOrFalse = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] === numbers[j]) {
        return true;
      } else {
      }
    }
  }
  return false;
};
console.log(trueOrFalse(numbers));

//set II part 3

//declare the function
//set a variable that stores the array nums of size n
//set a set the variable as a parameter to the function
//set a loop that runs through the whole array
//check for the number that appears more than once
//if the number appears twice return number

let num = [4, 5, 6, 5];
const majorityElement = (num) => {
  for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length; j++) {
      if (num[i] === num[j]) {
        return num[i];
      }
    }
  }
};
console.log(majorityElement(num));

//SET II PART 4

//declare the function
//set variable to store the array of nums
//loop through the array
//find the number of times the element appears
//set a variable which will be the counter to check how many times the element appears
//check if the element is the same as the next element
//increase the counter to check the element(s)
//if the element count is 1 return that element

let nums = [1, 3, 4, 3, 1];
function returnSingleElement(nums) {
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count++;
      }
    }
    if (count === 1) {
      return nums[i];
    }
  }
}

console.log(returnSingleElement(nums));

//SET II PART 5

//create the variable  strs that holds the array
//create the function called commonPrefix
//Give commonPrefix a parameter strs
//use the foor loop to extract the longest common prefix strings of the array
//get variable to hold the first character of the first Element

let strs = ["flower", "flow", "flight"];
const commonPrefix = (strs) => {
  let characters = "";
  // if(strs.length === 0){
  //   return ""
  // }

  for (let i = 0; i < strs[0].length; i++) {
    let currentCharacter = strs[0][i]; //the value of  first element "flower"
    for (let j = 1; j < strs.length; j++) {
      if (i >= strs[j].length || strs[j][i] !== currentCharacter) {
        //if "flower" is greater than the length of "flow"
        return characters;
      }
      // if (currentCharacter[j] !== strs[i][j]) {
      //   currentCharacter = currentCharacter.substring(0, j);
      //   break
      //   console.log("currentCharacter", currentCharacter);
      // }
    }

    characters += currentCharacter;
  }
  return characters;
};

console.log(commonPrefix(strs));
console.log("strs", strs[0].length); //helps to identify what you are logging into the console.
