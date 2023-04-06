//No 1
//Write a function that accepts an array of strings and console.
//logs each element using a for loop

let x=["Nairobi","Nakuru","Mombasa","Kisumu","Eldoret","Nyeri"];
array(x)
function array(x){
  for( i=0;i<x.length;i++){

  console.log(x[i]);

  }
}


//No 2
//Write a function that accepts an array of numbers 
//and uses the forEach() method to console.log each number multiplied by 2.
function arr(x){
    console.log(x*2);
   
}
let numbers=[10,20,4,5,15,21,4]
numbers.forEach(arr)

//No 3
//Write a function that takes in an array of numbers and
// consoles the first four items multiplied by 8 and the last two added by 5. 
//Console the array with the new value
let numberss=[23,12,43,2,43,13,15,7,9];
emptyArray=[];
array(numberss);
function array(numberss){
    for(i=0;i<numberss.length;i++){
        if(i<4){
           console.log("numberss",numberss[i]*8);
           emptyArray.push(numberss[i]*8);
        
        }else if(i>=numberss.length-2 && i<=numberss.length-1){
            console.log("numberss",numberss[i]+5)
            emptyArray.push(numberss[i]+5)
        }
        
    }
    console.log(emptyArray)


}

//No 4
//Write a function that takes in the following array and
// use a while loop to iterate and break when the item is equal to the fourth index
let arrNum = [1,2,3,4,5,6,7,8,9];
nums(arrNum);
function nums(arrNum){
    i=0;
    while(i<arrNum.length){
        if(i===4){
            break;  
        }
        console.log({i});
        i++;
       
     }
}

//No 5
//Write a function that takes in a an array of strings and
// use a continue statement when the item is at the second index
let fruits= ['apple','plum','banana','strawberries','kiwi']
fruit(fruits)
function fruit(fruits){
    for(i =0;i<fruits.length;i++){
   
        if(i===2){
            continue;  
        }
        console.log({"continue":i});
     }
    
}

