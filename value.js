//
function describeValue(value) {
  let type = typeof value;
  let truthStatus;
  if (value) {
    truthStatus = "truthy";
  } else {
    truthStatus = "falsy";
  }
  return type + " | " + truthStatus;
}
console.log(describeValue("hello"));
console.log(describeValue(""));
console.log(describeValue(25));
console.log(describeValue(0));
console.log(describeValue(true));
console.log(describeValue(null));
console.log(describeValue(undefined));
console.log(describeValue("0"));
console.log(describeValue(NaN));
