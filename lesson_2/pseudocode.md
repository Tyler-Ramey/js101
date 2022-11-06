Pseudocode practice

Function that returns the sum of two numbers:

START

SET sumTwo(x, y)
  SET retult =  x + y
  return result
  
END

================================================================================

A function that takes an array of strings, and returns a string that is all those strings concatenated together:

A function that takes a array

  - for every string in the array combine that string to previous string
  - return concatenated string

START

SET concatStrings(array)
  SET concatString = ""
  FOR EACH string inside of the array
    SET concatString + array[current index]
    
  RETURN concatString
  
END

================================================================================

A method that takes an array of integers, and returns a new array with every other element from the original array, starting with the first element:

Define a function which takes an array 
  
  - Make new array to store elements of original array
  - Loop through array and add every other element to new array

Return the new array

START

SET everyOther(array)
  SET returnArray = []
  FOR every other element
    add element to returnArray
    
  RETURN return array
  
END

================================================================================

A function that determines the index of the 3rd occurrence of a given character in a string. 
For instance, if the given character is 'x' and the string is 'axbxcdxex', the function should return 6 (the index of the 3rd 'x'). 
If the given character does not occur at least 3 times, return null.

Make funciton that takes a string and what character to find
  - Make variable that keeps count of amount of times string is found
  - Go through each letter of the string, if the character is found add to counter variable
  - once that character is found 3 times, return the index of 3rd occurrence
  - if character doesnt occur 3 times, return null

START

SET thirdIndex(string, character)
  SET counter = 0
  FOR EACH character in the string
    IF character in string === character being searched for
      counter += 1
      IF counter === 3
        RETURN index of character
      ELSE
        Return null
        
END

================================================================================

a function that takes two arrays of numbers and returns the result of merging the arrays. 
The elements of the first array should become the elements at the even indexes of the returned array, 
while the elements of the second array should become the elements at the odd indexes.

Make a function that takes two arrays
  
  - Make new array
  - elements of first array go to even indexs
    - loop through first array and add elements to even index
  - elements of second aray go to odd indexs
    - loop through second array and add elemnts to odd index
  - return new array

START

SET merge(array1, array2)
  SET newArray = []
  FOR every element of array1, SET index 0, index + 2
    newArray[index] = current element of array1
  FOR every element of array2, SET index 1, index + 2
    newArray[index] = current element of array2
  
  RETURN newArray
  
END
    