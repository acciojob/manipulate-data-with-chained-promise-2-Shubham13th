  const output = document.getElementById("output");

    function myFunction() {
      // Initial array immediately
      const myPromise = new Promise((resolve) => {
        resolve([1, 2, 3, 4]);
      });

      myPromise
        // First transformation after 1 second
        .then(arr => new Promise((resolve) => {
          setTimeout(() => {
            const evens = arr.filter(num => num % 2 === 0);
            output.textContent = evens; // show [2,4]
            resolve(evens);
          }, 1000);
        }))
        // Second transformation after 2 more seconds
        .then(evens => new Promise((resolve) => {
          setTimeout(() => {
            const doubled = evens.map(num => num * 2);
            output.textContent = doubled; // show [4,8]
            resolve(doubled);
          }, 2000);
        }))
        .catch(err => console.error(err));
    }

    myFunction();