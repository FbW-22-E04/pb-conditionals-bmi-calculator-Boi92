//Q1 Store Mark's and John's mass and height in variables.
const markHeight = 1.65
const markMass = 80
const johnHeight = 1.77
const johnMass = 95


//Q2 Calculate both their BMIs and store their BMIs in variables. 
const markBMI = (markMass / (markHeight * markHeight))
const johnBMI = (johnMass / (johnHeight * johnHeight))
console.log(markBMI , '&' , johnBMI)


//Q3 Create a boolean variable containing information about whether Mark has a higher BMI than John.
const markMoreBeefCake = markBMI >= johnBMI 
console.log(markMoreBeefCake)


//Q4 Print a string to the console containing the variable from step 3 using string interpolation. (e.g. "Is Mark's BMI higher than John's? Why yes, it's [boolean], it is"). 
console.log("Q4: The statement that Mark has a higher BMI than John is" ,markMoreBeefCake)
console.log("Q4: Is Mark's BMI higher than John's? Why yes, it's",markMoreBeefCake)




//Q5 Create an *if* statement which prints the name and BMI of the person with the highest BMI. 


if ((markBMI < johnBMI))
    {console.log("Q5: Marks BMI is higher, it is ",markBMI.toFixed(2))}
else{console.log("Q5: Johns BMI is higher, it is ",johnBMI.toFixed(2))}