const sentence = "hello there from lighthouse labs \n";

const printLetters = (sentence) => {
  let time = 0
  for (const char of sentence) {
    setTimeout(() => process.stdout.write(char), time);
    time += 50;
  };
};

printLetters(sentence);