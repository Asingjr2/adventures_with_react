// **********  Action Types(JSON) and CREATORS (actual function) Defined  **********
// console.clear();
console.log('Samus is starting')
let COUNT = 0;
// Pretend submission of creation form
const createPolicy = (name, amount) => {
  return {
    type: "CREATE_POLICY",
    payload: {
      Name: name,
      amount: amount
    }
  };
};
 
// Pretend claim form submission.
const createClaim = (name, amount) => {
  return {
    type: "CREATE_CLAIM",
    payload: {
      Name: name,
      amount: amount
    }
  };
};

// Pretend delete policy submission
const deletePolicy = () => {
  return {
    type: "DELETE_POLICY",
    payload: {
      name: name
    }
  };
};

// ********** Reducers Defined **********
/** REDUCERS...pretend depts. */
// Get determent to help track claims.  If form is for new claim, the name is added to list, if not nothing happens and the same list is returned.  If its first call the list is returned empty.
console.log('***creating reducers')

const claimsHistoryDept = (oldList = [], action) => {
  if (action.type === 'CREATE_CLAIM') {
    // its relevant
    // below code creates new array and adds second variable.
    return [...oldList, action.payload]
  }
  
  console.log("running claims reducer from in store");
  COUNT++;
   console.log('printing reducer count', COUNT)
  // if not relevant return orginal arguement.  if first time, create array
  return oldList
}

// Gets form to determine if money should be subtracted from total amount in state wiht additioanl funtionality.  If not, return same amount.
 const accountingDept = (money = 100, action) => {
   if (action.type === 'CREATE_CLAIM') {
     return money - action.payload.amount;
   } else if (action.type === 'CREATE_POLICY') {
     return money + action.payload.amount;
   } 
   
   console.log("running accounting reducer from in store");
   COUNT++;
   console.log('printing reducer count', COUNT)
   return money;
 }
 
 // Get form.  If form is for craete policy then add name to array of policy holders.
 // If form is for delete, then remove name from list using the filter method which returns new array object...
 const policyDept = (allPolicyHolders = [], action ) => {
   if (action.type === 'CREATE_POLICY') {
     return [...allPolicyHolders, action.payload.name];
   } else if (action.type === 'DELETE_POLICY') {
     return allPolicyHolders.filer( name => name !== action.payload.name);
   }
    
   console.log("running policy reducer from in store");
   COUNT++;
   console.log('printing reducer count', COUNT)
   return allPolicyHolders;
 }
 
// CombineReducers is a built-in function in react.
const { createStore, combineReducers } = Redux;

console.log('***creating combined reducers to be passed in store')
// Combining reducers into sigular object.

const ourDepartments = combineReducers({
accounting: accountingDept,
policy: policyDept,
claims: claimsHistoryDept
});

console.log('***starting store..which run every reducer')
// Entire redux application in below code.
const store = createStore(ourDepartments);
console.log(store.getState());

console.log('***creating a actions')
// Dispatch functions like store receiver.
const firstAction = createPolicy('Alexandria', 25);
const secondAction = createClaim('Susan', 75);

console.log('dispatching action to all reducers in store')
// Dispatch sends action to all reducers.
store.dispatch(firstAction);    // Will add money to accounting state
store.dispatch(secondAction);   // Will subtract money from accounting state..pays claim

console.log(store.getState());

// Take-aways
// Cannot modify states in store other than with the reducers.



