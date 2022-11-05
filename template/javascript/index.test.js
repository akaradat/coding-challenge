const challenge = require('./index');

function test() {
  const testcases = [
    {
      input: [],
      expected: null,
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
