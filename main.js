/*
Question No 1:
Write a simple asynchronous TypeScript function fetchGreeting that returns a
greeting message after a 2-second delay using setTimeout.
*/
const fetchGreeting = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Hello how are you?");
            resolve("");
        }, 2000);
    });
};
// fetchGreeting().then((resolve)=>{console.log(resolve)})
/*
Question No 2:
 Write a function simulateTask that simulates a task by logging "Task started",
waits for 1 second, and then logs "Task completed". Use setTimeout for the delay.
*/
const simulateFunction = () => {
    console.log("Task started");
    setTimeout(() => {
        console.log("Task Completed");
    }, 1000);
};
// simulateFunction()
/*
Question No 3:
Write a function fetchData that returns a Promise which resolves with the string
"Data fetched successfully!" after a delay of 1 second.
*/
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data fetched successfully");
            resolve("");
        }, 1000);
    });
};
// fetchData().then((message)=>{console.log(message)})
/*
Question No 4:
Write a function fetchWithError that returns a Promise. It should randomly either
resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a
delay of 1 second. Handle the rejection using .catch
*/
const fetchWithError = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.4) {
                console.log("Data fetched successfully!");
                resolve("");
            }
            else {
                console.log("Data fetched failed");
                reject("");
            }
        }, 1000);
    });
};
// fetchWithError().then((message)=>{console.log(message)}).catch((err)=>{console.log(err)})
/*
Question No 5:
Write a function executeSequentially that executes two functions fetchData and
processData sequentially using Promises, and logs the results in the order they are
called.
*/
// const executeSequentially=()=>{
//     return new Promise((resolve)=> {
//         console.log("Fetching Data")
//         resolve("")
//     })
// }
// const processData = ()=>{
//     return new Promise((resolve) => {
//         console.log("Processing Data")
//         resolve("")
//     })
// }
// executeSequentially().then(processData)
let fetchData1 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Fetching Data");
            resolve("123");
        }, 2000);
    });
};
let processData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Processing Data");
            resolve("");
        }, 1000);
    });
};
let executeSequentially = async () => {
    try {
        let fetch = await fetchData1();
        console.log(fetch);
        let process = await processData();
        console.log(process);
    }
    catch (error) {
        console.log(error, "Error is found");
    }
};
executeSequentially();
export {};
