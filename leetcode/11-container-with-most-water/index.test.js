const challenge = require('./index');

function test() {
  const testcases = [
    {
      input: [[1, 8, 6, 2, 5, 4, 8, 3, 7]],
      expected: 49,
    },
    {
      input: [[1, 5, 3, 2]],
      expected: 4,
    },
    {
      input: [[1, 2, 3, 4, 5, 6, 7, 8, 9]],
      expected: 20,
    },
    {
      input: [[1, 1]],
      expected: 1,
    },
  ];

  let pass = true;
  testcases.forEach((testcase) => {
    const result = challenge(...testcase.input);
    if (result !== testcase.expected) {
      console.error(
        `Input: ${testcase.input} - Expected: ${testcase.expected}, but got ${result}`
      );
      pass = false;
    }
  });

  if (pass) {
    console.log('pass');
  } else {
    console.error('fail');
  }
}

test();
