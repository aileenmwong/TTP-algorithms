// Question 1 -- sumOfTwo(a,b,v): You have two integer arrays, a and b, and an integer target value v. Determine whether there is a pair of numbers, where one number is taken from a and the other from b, that can be added together to get a sum of v. Return true if such a pair exists, otherwise return false.

// ASSUMPTIONS
// I assume that variables a, b, and v are all integers. If they are not, I will need to use parseInt()

function sumOfTwo(a,b,v) {
  if ((a + b) == v) {
  return true;
  } else {
    return false;
  }
}


// Question 2 -- stringReformatting(string): The string s contains dashes that split it into groups of characters. You are given an integer k that represents the number of characters in groups that your output should have. Your goal is to return a new string that breaks s into groups with a length of k by placing dashes at the correct intervals. If necessary, the first group of characters can be shorter than k. It is guaranteed that there are no consecutive dashes in s.
// For s = "2-4a0r7-4k" and k = 4, the output should be stringReformatting(s, k) = "24a0-r74k";
// The input string "2-4a0r7-4k" is split into three groups with lengths of 1, 5 and 2. Since k = 4, you need to split the string into two groups of 4 characters each, making the output string "24a0-r74k".
// For s = "2-4a0r7-4k" and k = 3, the output should be stringReformatting(s, k) = "24-a0r-74k".
// Given the same input string and k = 3, split the string into groups of 2, 3, and 3 characters to get the output string of "24-a0r-74k".



// Question 3 -- getClosingParen(sentence, openingParenIndex):
// "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing."
// Write a function that, given a sentence like the one above, along with the position of an opening parenthesis, finds the corresponding closing parenthesis.
// Example: if the example string above is input with the number 10 (position of the first parenthesis), the output should be 79 (position of the last parenthesis).
