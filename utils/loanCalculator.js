const calculateLoanTotal= (principalAmount, interestType, interestRate) => {

    if (interestType === "Without Interest") {
        return principalAmount;
    }

    const interestAmount= principalAmount * (interestRate / 100);

    const totalAmount= principalAmount + interestAmount;
    return totalAmount;
};

module.exports= calculateLoanTotal;