var state = {
    balance: 100,
    income: 400,
    expense: 100,
    transactions: [
        { name: 'Salary', amount: 5000, type: 'income' },
        { name: 'Buy Grocery', amount: 50, type: 'expense' },
        { name: 'Buy Guitar', amount: 500, type: 'expense' }
    ]
}

var balanceEl = document.querySelector('#balance');
var incomeEl = document.querySelector('#income');
var expenseEl = document.querySelector('#expense');
var transactionsEl = document.querySelector('#transaction');

function init() {
    balanceEl.innerHTML = `$${state.balance}`;
    incomeEl.innerHTML = `$${state.income}`;
    expenseEl.innerHTML = `$${state.expense}`;

    var transactionEl;

    for (var i = 0; i < state.transactions.length; i++) {
        transactionEl = document.createElement('li');
        transactionEl.append(state.transactions[i].name);

        transactionsEl.appendChild(transactionEl);
    }
}

init();