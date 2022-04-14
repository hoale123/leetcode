var sortSentence = function(s) {
    return s.split(' ') // split sentence by words "is2" sentence4" This1" "a3"
    .sort((a,b) => a[a.length-1] - b[b.length-1])// sort the number from least to greatest
    .map((word) => word.slice(0, word.length-1)) // remove the last index (word.length-1)
    .join(' ');
    console.log(s)
    };



    // 0,0 = which is greater
    // 0,1= which is greater= 1,0 = 0,1
    // 0,2 = which is greater
    // a = is2
    // a[is2] =[i,s,2] number goes Then captial then Lowercase