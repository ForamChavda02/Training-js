/*Create a function that converts text characters into their corresponding numerical positions in the alphabet (e.g., A=1, B=2).
Non-alphabetical characters should be preserved.

Input Example: "Create JIRA ticket"
Output Example: "3 18 5 1 20 5 10 9 18 1 20 9 3 11 5 20"
*/
//17:49 - 16:52
function textCharacterToNumeric(string) {
    let resultArr = [];
    let array = string.toUpperCase().split("");
    for(let i = 0; i < array.length; i++) {
        resultArr.push(array[i].toString().charCodeAt() - 64);
    } 
    for(let j = 0; j < resultArr.length; j++) {
        if(resultArr[j] <= 0) {
            resultArr[j] = " ";
        }
    }
    return resultArr.toString().split(",").join(" ");
}
console.log(textCharacterToNumeric("Create JIRA ticket"));
//3 18 5 1 20 5   10 9 18 1   20 9 3 11 5 20