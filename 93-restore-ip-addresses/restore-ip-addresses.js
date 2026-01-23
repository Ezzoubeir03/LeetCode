/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
 ///Restore IP Addresses:
 ///so this code is about returning the right IP address  
 /// there is some IP address are invalide if they have some different condition thatwe said in the description like @ or a number starting with zero dot......

let result =  [];
function backtrack(start,path){
    if(path.length === 4){
        if(start === s.length){
    result.push(path.join('.'));
        }
  return;
}
for(let len = 1 ; len <= 3; len++){
    if(start + len > s.length) break;
let seg = s.substring(start, start + len);
if(seg.length > 1 && seg[0] === '0') continue;

if(Number(seg) > 255) continue;
path.push(seg);
backtrack(start + len, path);
path.pop();
     }
   }
   backtrack(0, []);
   return result;
};