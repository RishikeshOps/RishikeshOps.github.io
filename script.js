const hits = document.getElementById("hits");

// calls POST API to trigger Lambda function to add +1 visit to visit count attribute in DynamoDB
async function increaseCount() {
  try {
    let response = await fetch('https://e1ge8hoz1g.execute-api.us-east-1.amazonaws.com/Prod/counter', {
      headers: {
        "Content-Type": "application/json",
      },       
      method: "POST",
    });
    let data = await response.json();
    return data;
  } catch(err) {
    console.log(err);
  }
}   

// updates the visitor count to current visits after getting current
// visit count from DynamoDB table
async function setIncreaseCount() {
  try {
    let data = await increaseCount();
    console.log(data);
    let increasedCount = data.Visit_Count;
    document.getElementById("hits").innerText = `Thank you for visiting my site. You are viewer number ${increasedCount}.`;
  } catch(err) {
    console.log(err);
  }
}
  
// Calls function to update index.html with accurate visit count
setIncreaseCount();
  
// Calls function to add +1 visit count in DynamoDB
// Returns value of count attribute in DynamoDB in response body
increaseCount
