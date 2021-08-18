function getInputvalue(inputId) {

    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    // clear the input box 
    inputField.value = '';
    return amountValue;
}

function updateTotalField(totalFieldId, Amount) {
    const totalElement = document.getElementById(totalFieldId);
    const TotalText = totalElement.innerText;
    const previousTotal = parseFloat(TotalText);
    totalElement.innerText = previousTotal + Amount;

}

function updateBalance(depositAmount, isAdd) {

    // update balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    if (isAdd == true) {
        balanceTotal.innerText = depositAmount + previousBalanceTotal;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - depositAmount;
    }
}

document.getElementById('deposit-button').addEventListener('click', function () {

    // const depositInput = document.getElementById('deposit-input');
    // const depositAmountText = depositInput.value;
    // const depositAmount = parseFloat(depositAmountText);
    const depositAmount = getInputvalue('deposit-input');

    // get and update deposit total
    // const depositTotal = document.getElementById('deposit-total');
    // const depositTotalText = depositTotal.innerText;
    // const previousDepositTotal = parseFloat(depositTotalText);
    // depositTotal.innerText = previousDepositTotal + depositAmount;
    updateTotalField('deposit-total', depositAmount);

    // // update balance 
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // balanceTotal.innerText = depositAmount + previousBalanceTotal;
    updateBalance(depositAmount, true);
})
// withdrw method 
document.getElementById('withdraw-button').addEventListener('click', function () {

    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;
    // const withdrawAmount = parseFloat(withdrawAmountText);
    const withdrawAmount = getInputvalue('withdraw-input');

    // get and update withdrawTotal 
    // const withdrawTotal = document.getElementById('withdraw-total');
    // const previousWithdrawTotaltext = withdrawTotal.innerText;
    // const previousWithdrawTotal = parseFloat(previousWithdrawTotaltext);
    // withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;
    updateTotalField('withdraw-total', withdrawAmount);

    // update balance after withdraw
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // balanceTotal.innerText = previousBalanceTotal - withdrawAmount;
    updateBalance(withdrawAmount, false);
})