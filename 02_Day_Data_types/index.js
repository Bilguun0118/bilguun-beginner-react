//Numbers ------------------------------------------
let age = 35
const gravity = 9.81  // we use const for non-changing values, gravitational constant in  m/s2
let mass = 72         // mass in Kilogram
const PI1 = 3.14       // pi a geometrical constant

// More Examples
const boilingPoint = 100 // temperature in oC, boiling point of water which is a constant
const bodyTemp = 37      // oC average human body temperature, which is a constant

console.log("numbers: ", age, gravity, mass, PI1, boilingPoint, bodyTemp)

//Math Object ------------------------------------------
const PI = Math.PI

console.log('PI', PI)                            // 3.141592653589793

// Rounding to the closest number
// if above .5 up if less 0.5 down rounding

console.log('math.round: PI - ',Math.round(PI))                // 3 to round values to the nearest number

console.log('math.round:', Math.round(9.81))              // 10

console.log('math.floor:', Math.floor(PI))                // 3 rounding down

console.log('math.ceil:', Math.ceil(PI))                 // 4 rounding up

console.log('math.min:', Math.min(-5, 3, 20, 4, 5, 10)) // -5, returns the minimum value

console.log('math.max', Math.max(-5, 3, 20, 4, 5, 10)) // 20, returns the maximum value

const randNum = Math.random() // creates random number between 0 to 0.999999
console.log('math.random', randNum)

// Let us  create random number between 0 to 10

const num = Math.floor(Math.random () * 11) // creates random number between 0 and 10
console.log('math.floor', num)

//Absolute value
console.log('math.absolute', Math.abs(-10))      // 10

//Square root
console.log('math.square', Math.sqrt(100))     // 10

console.log('math.sqrt', Math.sqrt(2))       // 1.4142135623730951

// Power
console.log('math.pow', Math.pow(3, 2))     // 9

console.log('math.E: ', Math.E)             // 2.718

// Logarithm
// Returns the natural logarithm with base E of x, Math.log(x)
console.log('math.log:', Math.log(2))        // 0.6931471805599453
console.log('math.log2:', Math.log(10))       // 2.302585092994046

// Returns the natural logarithm of 2 and 10 respectively
console.log('math.ln2:', Math.LN2)           // 0.6931471805599453
console.log('math.ln10:', Math.LN10)          // 2.302585092994046

// Trigonometry
Math.sin(0)
Math.sin(60)

Math.cos(0)
Math.cos(60)

// Random Number Generator

let randomNum1 = Math.random() // generates 0 to 0.999...

//Одоо 0-10 хооронд санамсаргүй тоо үүсгэхийн тулд random() аргыг хэрхэн ашиглаж болохыг харцгаая.

let randomNum = Math.random()         // generates 0 to 0.999
let numBtnZeroAndTen = randomNum * 11

console.log(numBtnZeroAndTen)         // this gives: min 0 and max 10.99

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen)
console.log(randomNumRoundToFloor)    // this gives between 0 and 10

// Strings ------------------------------------------
let space = ' '           // an empty space string
let firstName1 = 'Tumurbaatar'
let lastName = 'Bilguun'
let country1 = 'Mongolia'
let city = 'Erdenet'
let language = 'JavaScript'
let job = 'student'
let quote = "The saying,'Seeing is Believing' is not correct in 2020."
let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`

//Мөрний холболт
let fullName = firstName1 + space + lastName; // concatenation, merging two string together.
console.log('full name: ', fullName);

//Мөр дэх Escape дараалал

// \n: шинэ мөр
// \t: Таб гэдэг нь 8 зай гэсэн үг
// \\: Буцах зураас
// \': Ганц ишлэл (')
// \": Давхар ишлэл (")

console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')

//Загварын текст (Загварын мөр)
//Syntax

console.log(`The sum of 2 and 3 is 5`)              // statically writing the data
let a = 5
let b = 8
console.log(`The sum of ${a} and ${b} is ${a + b}`) // injecting the data dynamically

//String Methods ------------------------------------------
let js = 'JavaScript'
console.log(js.length)         // 10
let firstNameis = 'Tumurbaatar'
console.log(firstNameis.length)  // 11

// 2. Let us access different characters in 'JavaScript' string.
let string1 = 'JavaScript'
let firstLetter = string[0]

console.log(firstLetter)           // J

let secondLetter = string[1]       // a
let thirdLetter = string[2]
let lastLetter = string[9]

console.log(lastLetter)            // t

let lastIndex = string.length - 1

console.log(lastIndex)  // 9
console.log(string[lastIndex])    // t

//3. toUpperCase(): this method changes the string to uppercase letters.
let string3 = 'JavaScript'

console.log(string.toUpperCase())     // JAVASCRIPT

let firstName3 = 'Asabeneh'

console.log(firstName3.toUpperCase())  // ASABENEH

let country3 = 'Finland'

console.log(country3.toUpperCase())    // FINLAND

//4. toLowerCase(): this method changes the string to lowercase letters.
let string4 = 'JavasCript'

console.log(string.toLowerCase())     // javascript

let firstName4 = 'Asabeneh'

console.log(firstName4.toLowerCase())  // asabeneh

let country4 = 'Finland'

console.log(country4.toLowerCase())   // finland

//5. substr(): It takes two arguments, the starting index and number of characters to slice.
let string5 = 'JavaScript'
console.log(string.substr(4,6))    // Script

let country5 = 'Mongolia'
console.log(country.substr(3, 4))   // land

//6. substring(): It takes two arguments, the starting index and the stopping index but it doesn't include the character at the stopping index.
let string6 = 'JavaScript'

console.log(string.substring(0,4))     // Java
console.log(string.substring(4,10))    // Script
console.log(string.substring(4))       // Script

let country6 = 'Finland'

console.log(country.substring(0, 3))   // Fin
console.log(country.substring(3, 7))   // land
console.log(country.substring(3))      // land

//