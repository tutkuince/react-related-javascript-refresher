// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise Resolved");
//   }, 2000);
// });

// myPromise.then((data) => {
//   console.log(data);
// });

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Promise Rejected");
//   }, 2000);
// });

// myPromise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((respose) => respose.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

const fetcData = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

fetcData();
