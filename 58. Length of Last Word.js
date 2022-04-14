// var lengthOfLastWord = function(s) {
//     return s.trim().split(" ").pop().length;
// };



var lengthOfLastWord = function(s= "hello world   ") {
    // let s = "hello world   "
    const arr = s.trim().split(' ');
    return arr[arr.length - 1].length;
    console.log(s)
};

// var lengthOfLastWord = function(s ="hello world   ") {
//     let len = 0;
//     let hasStarted = false;
//     for (let i = s.length - 1; i >= 0; i--) {
//         if (s[i] !== ' ') hasStarted = true; // counts for no space and return last word length
//         debugger
//         if (hasStarted) {
//             if (s[i] === ' ') break;
//             len++;
//         }
//     }
//     return len;
// };
// console.log(lengthOfLastWord)