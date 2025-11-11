// You can work here or download the template!
let temp = 15;

if (temp >= 25) {
  console.log("its warm, no sweater or jacket needed, tshirt is enough");
} else if (temp >= 15 && temp < 25) {
  console.log("its chill, better wear a sweater");
} else {
  console.log("its cold, better wear a jacket");
}

switch (true) {
  case temp >= 25:
    console.log("It's warm, no sweater or jacket needed, t-shirt is enough");
    break;

  case temp >= 15:
    console.log("It's chill, better wear a sweater");
    break;

  default:
    console.log("It's cold, better wear a jacket");
}
