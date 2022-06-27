var state = {
    balance: 1000,
    income: 400,
    expense: 100,
    transactions: [
        { name: 'Salary', amount: 1000, type: 'income' },
        { name: 'Buy Grocery', amount: 50, type: 'expense' },
        { name: 'Buy Guitar', amount: 500, type: 'expense' }
    ]
}

var balanceEl = document.querySelector('#balance');
var incomeEl = document.querySelector('#income');
var expenseEl = document.querySelector('#expense');
var transactionsEl = document.querySelector('#transaction');
var incomeBtnEl = document.querySelector('#incomeBtn');
var expenseBtnEl = document.querySelector('#expenseBtn');
var nameInputEl = document.querySelector('#name');
var amountInputEl = document.querySelector('#amount');

function init() {
    update5tate();
    initListeners();
}

function initListeners() {
    incomeBtnEl.addEventListener('click', onAddIncomeClick);
    expenseBtnEl.addEventListener('click', onAddExpenseClick);
}

function onAddIncomeClick() {
    var name = nameInputEl.value;
    var amount = amountInputEl.value;
    if (name !== '' && amount !== '') {
        var transaction =  { 
            name: nameInputEl.value, 
            amount: parseInt(amountInputEl.value), type: 'income' 
        };

        state.transactions.push(transaction);

        updateState();
    } else {
        alert('please enter valid data');
    }
}

function onAddExpenseClick() {
    var name = nameInputEl.value;
    var amount = amountInputEl.value;
    if (name !== '' && amount !== '') {
        var transaction =  { 
            name: nameInputEl.value, 
            amount: parseInt(amountInputEl.value), type: 'income' 
        };

        state.transactions.push(transaction);

        updateState();
    } else {
        alert('please enter valid data');
    }
}

function update5tate() {
    var balance = 0,
    income = 0,
    expense = 0,
    item;

    for (var i = 0; i < state.transactions.length; i++) {
    item = state.transactions[i];

if (item.type === 'income') {
income += item.amount;
} else if (item.type === 'expense') {
    expense += item.amount;
}
    }

    balance = income - expense;

    state.balance = balance;
    state.income = income;
    state.expense = expense;

    render();
}

function render() {
    balanceEl.innerHTML = `$${state.balance}`;
    incomeEl.innerHTML = `$${state.income}`;
    expenseEl.innerHTML = `$${state.expense}`;

    var transactionEl, containerEl, amountEl, item, btn;

    transactionsEl.innerHTML = '';

    for (var i = 0; i < state.transactions.length; i++) {
        item = state.transactions[i];
        transactionEl = document.createElement('li');
        transactionEl.append(item.name);

        transactionsEl.appendChild(transactionEl);

        containerEl = document.createElement('div');
        amountEl = document.createElement('span');
        if (item.type === 'income') {
            amountEl.classList.add('income-amt');
        } else if  (item.type === 'expense') {
            amountEl.classList.add('expense-amt');
        }
        amountEl.innerHTML = `$${item.amount}`;

        containerEl.appendChild(amountEl);

        btnEl = document.createElement( 'button');
        btnEl.innerHTML = 'X';

        containerEl.appendChild(btnEl);

        transactionEl.appendChild(containerEl);
    }
}

init();