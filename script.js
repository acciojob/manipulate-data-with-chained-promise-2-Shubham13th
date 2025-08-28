 const output = document.getElementById('output');
    let arr = [1, 2, 3, 4];

    function myFunction() {
      // Initial promise resolves the array after 3s
      const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(arr);
        }, 3000);
      });

      myPromise
        // Step 1: Filter out odd numbers
        .then((data) => {
          return new Promise((resolve) => {
            setTimeout(() => {
              const evens = data.filter(num => num % 2 === 0);
              output.innerHTML = evens.join(", "); // display [2,4]
              resolve(evens);
            }, 1000);
          });
        })
        // Step 2: Multiply evens by 2
        .then((evenNumbers) => {
          return new Promise((resolve) => {
            setTimeout(() => {
              const doubled = evenNumbers.map(num => num * 2);
              output.innerHTML = doubled.join(", "); // display [4,8]
              resolve(doubled);
            }, 2000);
          });
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }

    myFunction()
