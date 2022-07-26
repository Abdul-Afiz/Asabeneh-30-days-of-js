// function add() {
//     let one = 0;

//     let addOne = () => {
//         one++
//         return one
//     };

//     return addOne;
// }

// const addUp = add()
// console.log(addUp())
// console.log(addUp())
// console.log(addUp())

// function Myname() {

//     let name = 'aweda';

//     function addname() {
        
//         let addname = 'my name is ' + name
//         return addname
//     }

//     function add2name() {
//         let fullname = 'my fullname is Jimoh Afeez ' + name
//         return fullname
//     }

//     const nickname = () => name + ' igi-iwe';

//     return {addname : addname(), add2name : add2name(), add3name: nickname() }
    
// }name

// console.log(Myname())

// function personAccount(firstname, lastname, incomes, expenses) {
    
//     function addIncome() {
//         let i_ncomes = [450];
//         i_ncomes.push(incomes)
//         return i_ncomes
//     };

//     function addExpense() {
//         let e_xpenses = [50];
//         e_xpenses.push(expenses)
//         return e_xpenses
//     };

//     function totalIncomes() {

//         let addincomes = addIncome().reduce( (a, b)  => a + b, 0) 

//         return `This is ${lastname} ${firstname} totalIncome ${addincomes}`
//     };

//     function totalExpenses() {

//         let addexpenses = addExpense().reduce( (a, b)  => a + b, 0) 

//         return `This is ${lastname} ${firstname} totalExpense ${addexpenses}`
//     };

//     function acctBalance() {

//         let bal = totalIncomes() - totalExpenses() 

//         return `This is ${lastname} ${firstname} remaining balance ${bal}`
//     };

//     function accountInfo() { 

//         return `This is ${lastname} ${firstname} account summary total income ${totalIncomes()}, total expenses ${totalExpenses()} and remanining balance of ${acctBalance()}`
//     };

//     return {
//         accountInfo : accountInfo(),
//         acctBalance: acctBalance()
//     }

// }

// console.log(personAccount('jimoh', 'afeez', inc,expen))