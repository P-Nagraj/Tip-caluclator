let bill_Input = document.getElementById("billAmount")
let percentage_Input = document.getElementById("percentageTip")
let tip_Input = document.getElementById("tipAmount")
let total_Amount = document.getElementById("totalAmount")
let error_Message = document.getElementById("errorMessage")
let errorMessage = "Please Enter a Valid Input"

function calculate() {
    let bill_Input_Value = bill_Input.value
    let percentage_Input_Value = percentage_Input.value
    if (bill_Input_Value === "") {
        error_Message.textContent = errorMessage
    } 
    else if (percentage_Input_Value === "") {
        error_Message.textContent = errorMessage
    } 
    else {
        error_Message.textContent = ""
        let bill = parseInt(bill_Input_Value)
        let percentage = parseInt(percentage_Input_Value)
        let caltip = (percentage / 100) * bill
        let caltotal = bill + caltip
        tip_Input.value = caltip
        total_Amount.value = caltotal

    }

}