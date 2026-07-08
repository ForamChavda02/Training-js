function creditCheck(customer, callback) {
    console.log("checking credit score...");

    setTimeout(() => {
        const goodCredit = true;

        if(goodCredit) {
            callback(null, customer);
        }
        else {
            callback("Poor credit score");
        }
    }, 2000);
}

function checkSalary(customer, callback) {
    console.log("checking salary");

    setTimeout(() => {
        const salaryEnough = true;

        if(salaryEnough) {
            callback(null);
        }
        else {
            callback("Salary is too low for loan");
        }
    }, 2000);
}

const customer = {
    name: "Foram",
    salary: 50000
};

creditCheck(customer, (err, customerData) => {
    if(err) {
        console.log(err);
        return;
    }
    checkSalary(customerData, (err) => {
        if(err) {
            console.log(err);
            return;
        }
        console.log("Loan Approved");
    });
});