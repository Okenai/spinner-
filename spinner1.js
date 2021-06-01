let input = "| / - \\ | / - \\ |"
const spinner1 = function (input) {
  time = 100;
  for( let item of input.split(' ')) {
    time += 200;
    setTimeout(()=> { process.stdout.write(`\r${item} `)}, time);
  }
  setTimeout(()=> {console.log()}, time);
}

spinner1(input);