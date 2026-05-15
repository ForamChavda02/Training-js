function division(a, b) {

    try {
        if(b === 0) {
            throw "Cannot divide by zero";
        }
        let ans = a / b;
        console.log("answer is: ", ans);
    } catch(error) {
        console.log("Error: ", error);
    } finally {
        console.log("code run successfully");//code run successfully
    }
}

division(10, 5);//answer is:  2
division(10, 0);//Error:  Cannot divide by zero