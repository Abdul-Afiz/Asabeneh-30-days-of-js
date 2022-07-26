// let sentence1 = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.';

// let pattern1 = /[0-9]+/g;

// let num_match = sentence1.match(pattern1).reduce( (acc, cur) => acc + Number(cur), 0 )

// console.log( num_match );

//  const sentence2 = 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.';

//  let match2 = /-\d|\d+/g

//  let num_match1 = sentence2.match(match2)
//  .sort( (a,b) => a - b);

//  num_match1 = num_match1
//  .map( item => Number(item))
//  .slice(num_match1.length - 2)
//  .reduce( (acc, cur) => acc + cur, 0 )

//  console.log( num_match1 )

// let patternCheck = /^[a-zA-z _]*$/

// const is_valid_variable = patternCheck.test('firstname')

// console.log(is_valid_variable)

// let paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`

// const tenMostFrequentWords = (arr, count) => {

//  pattern2 = /[a-z]{1,}/gi;

//  let mostFreq = arr.match(pattern2)
//     .reduce( (acc, cur) => { acc[cur] ? acc[cur] += 1: acc[cur] = 1;return acc} ,{});

//  mostFreq = Object.entries(mostFreq)
//     .sort( (a,b) => b[1] - a[1]).map(item => ({word: item[0], count: item[1]})).slice(0, count)

//  return mostFreq

// }


// console.log( tenMostFrequentWords(paragraph, 10) )

// let sentence3 = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`

// const cleantext = (arr) => {

//     return arr.replace(/[^\w ]/g, '' )
// }

// const cleanText = cleantext(sentence3)

// console.log( tenMostFrequentWords(cleanText, 3))


