const String = {
    name: "Bangladesh",
    districts: 64,
    slice: function() {},
    subString: function() {},
    subStr: function() {},
};

const x = "      My name Is Biswajit sikdar         ";
//Slice(start position , end Position)
console.log(x.slice(0, 15));
//subString
console.log(x.substring(0, 16));
// Replace_value
let text = "Please Visit the Microofoft";
let newTxt = text.replace("Microofoft", "W3school");
console.log(newTxt);
//Text concat
let y = "Biswajit";
let z = "sikdar";
const result = z.concat(",", y);
console.log(result);
//Trim remove the white unnessery spaces
console.log(x.trim());