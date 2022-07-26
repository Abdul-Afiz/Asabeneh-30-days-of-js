// class Animal {
//     constructor (name, age, color, legs) {
//         this.name = name;
//         this.age = age;
//         this.color = color;
//         this.legs = legs
//     }

//     get getname () {
//         return this.name
//     }

//     sound(){
//         return 'generic sound'
//     }

//     getfullinfo () {
//         let fullinfo = `My name is ${this.name}, i'm ${this.age}years. i'm ${this.color} in color and have ${this.legs}legs.`

//         return fullinfo
//     }
// }

// class Dog extends Animal{
    
//     constructor( name, age, color, legs, region ){
//         super(name, legs, color, age)
//         this.region = []
//     };

//     sound(){
//         return `gboof gboof`
//     };

//     set setregion(region){
//         return this.region.push(region)
//     };

//     get getregion(){
//         return this.region
//     };
// }

// class Cat extends Animal{

//     sound(){
//         return `Meow Meow`
//     }
// }

// let doo = new Dog ('bingo', 1, 'black', 4)

// doo.setregion = 'africa'

// console.log(doo)
// console.log(new Cat())

// let age = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

// class Statistics{

//     constructor(data){
//         this.data = data
//         this.sort = this.data.sort( (a,b) => a - b )

//      };

//     count () {
//          return this.data.length
//     };

//     sum(){
//         return this.data.reduce( (acc, cur) => acc + cur , 0 )
//     };

//     min(){
//         return this.data.sort( (a,b) => a - b )[0]
//     };

//     max(){
//         return this.data.sort( (a,b) => b - a )[0]
//     }

//     range(){
//         return this.max() - this.min()
//     }

//     mean(){
//         return Math.round(this.sum() / this.count())
//     }

//     median(){
//         return this.count() % 2 ?

//          this.sort[ (this.count() - 1) / 2 ] 

//          : (this.sort[ ( this.count() / 2 ) - 1 ]

//          + this.sort[this.count() / 2]) / 2
//     };

//     mode(){
        
//         let data = this.data.reduce( (acc, cur) => 
//         { 
//           acc[cur] ? acc[cur] += 1 : acc[cur] = 1;

//           return acc}, { } );

//           return data = Object.entries(data).sort( (a, b) => b[1] - a[1] )

//           .map( item => ({'mode': item[0], 'count': item[1]}) )[0]
//     };

//     var(){

//         return this.data.map( item => (item - this.mean()) ** 2 )

//         .reduce( (acc, cur) => acc + cur, 0) / this.count()
//     };

//     std(){

//         return (this.var() ** 0.5).toFixed(1)

//     };

//     freqDist(){

//         let data = this.data.reduce( (acc, cur) => 
//         { 
//           acc[cur] ? acc[cur] += 1 : acc[cur] = 1;

//           return acc}, { } );

//           return data = Object.entries(data).sort( (a, b) => b[1] - a[1] )

//         .map( item =>   [ (item[1] / this.count() * 100),  item[0]]  ).sort( (a,b) => b[0] - a[0] )
//     };

//     describe(){
//         return ` Count: ${this.count()} \n Sum: ${this.sum()} \n Min: ${this.min()} \n Max: ${this.max()} \n Range: ${this.range()} \n Mean: ${this.mean()} \n Median: ${this.median()} \n Mode: ${this.mode()} \n Variance: ${this.var()} \n Standard Deviation: ${this.std()} \n Frequency Distribution: ${this.freqDist()}`
//     }

// }

// let statistics = new Statistics(age)

// console.log('count:', statistics.count())
// console.log('sum:', statistics.sum())
// console.log('min:', statistics.min())
// console.log('max:', statistics.max())
// console.log('range:', statistics.range())
// console.log('mean:', statistics.mean())
// console.log('median:', statistics.median())
// console.log('mode:', statistics.mode())
// console.log('var:', statistics.var())
// console.log('std:', statistics.std())
// console.log('freqDist:', statistics.freqDist())
// console.log(statistics.describe())

class PersonAccount{

    constructor(firstname, lastname){

        this.firstname = firstname,
        this.lastname = lastname,
        this.incomes = [],
        this.expenses = []

    }

    totalIncome(){

        return this.incomes.reduce( (acc, cur) => acc + cur, 0 )

    };

    totalExpense(){

        return this.expenses.reduce( (acc, cur) => acc + cur, 0 )

    };

    accountBal(){

        return this.totalIncome() - this.totalExpense()

    }

    accountInfo (){

        return `This account belongs to ${this.firstname} ${this.lastname}, with total income of ${this.totalIncome()}, total enpenses of ${this.totalExpense()} and a total balance of ${this.accountBal()}.`

    };

    set rcvIncome(val){

        this.incomes.push(val)

    };

    set rcvExpense(val){

        this.expenses.push(val)

    };

    get Incomes(){

        return this.incomes

    };

    get Expenses(){

        return this.expenses

    };

}

let account = [100, 200, 500, 100, 100]

let user = new PersonAccount ('Jimoh', 'Aweda')

user.rcvIncome = 100
user.rcvIncome = 500
user.rcvIncome = 100
user.rcvIncome = 100
user.rcvIncome = 100
user.rcvIncome = 1000

user.rcvExpense = 100
user.rcvExpense = 100
user.rcvExpense = 100
user.rcvExpense = 100

console.log(user.accountInfo())

