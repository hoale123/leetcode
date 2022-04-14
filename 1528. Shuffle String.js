// public class Solution {
// public string RestoreString(string s, int[] indices) {
// var dictionary = new Dictionary<int, char>(); // Declare a Dictionary
// string result = ""; //initize a string result
// for (int i =0; i < indices.Length; i++)
// {
// dictionary.Add(indices[i], s[i]); //add each character and number to a dictionary
// }
// for(int i =0; i <indices.Length; i++)
// {
// result = result + dictionary[i];
// }
// return result;
// }
// }

let restoreString = function(s, indices) {
    let f='';
    let final=[];
    final.length=s.length;
    for(let i=0;i<s.length;i++){
        let pos=indices[i];
        final[pos]=s.charAt(i);
    }
    for(let x of final){
        f=f+x;
    }
    return f;
};