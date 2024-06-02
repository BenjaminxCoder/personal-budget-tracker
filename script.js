document.addEventListener('DOMContentLoaded', () =>{
    const budgetForm = document.getElementById('budget-form');
    const descriptionInput = document.getElementById('description');
    const amountInput = document.getElementById('amount');
    const typeSelect = document.getElementById('type');
    const totalIncomeDisplay = document.getElementById('total-income');
    const totalExpensesDisplay = document.getElementById('total-expenses');
    const balanceDisplay =document.getElementById('balance');
    const transactionHistory = document.getElementById('transaction-history');

    let totalIncome = 0;
    let totalExpenses = 0;

    budgetForm.addEventListener('submit', (e) =>{
        e.preventDefault();

        const description = descriptionInput.value;
        const amount = parseFloat(amountInput.value);
        const type = typeSelect.value;

        if (description && amount){
            addTransaction(description, amount, type);
            updateBudget(type, amount);
            updateDisplay();
            descriptionInput.value = '';
            amountInput.value = '';
        }
    });

    function addTransaction(description, amount, type){
        const transactionItem = document.createElement('li');
        transactionItem.textContent = `${description}: $${amount.toFixed(2)}`;
        if (type === 'income'){
            transactionItem.classList.add('income');
        } else {
            transactionItem.classList.add('expense')
        }
        transactionHistory.appendChild(transactionItem);
    }

    function updateBudget(type, amount){
        if (type === 'income'){
            totalIncome += amount;
        } else if (type === 'expense'){
            totalExpenses += amount;
        }
    }

    function updateDisplay(){
        totalIncomeDisplay.textContent = totalIncome.toFixed(2);
        totalExpensesDisplay.textContent = totalExpenses.toFixed(2);
        const balance = totalIncome - totalExpenses;
        balanceDisplay.textContent = balance.toFixed(2);
    }
});