const accountId="6016"
var accountName="Kunal"
/*Prefer not to use Var 
because of issue on block scope and functional scope.*/
let accountPassword="1212"
/*always prefer Let to declare variable in js */
accountCity ="Delhi"
//will work but not advicable.
let accountState ;
console.log(accountState);
console.table([accountId,accountName,accountPassword,accountCity,accountState]);