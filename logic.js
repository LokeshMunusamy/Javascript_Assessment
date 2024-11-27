//Question 1 palindrome


/*
let str=prompt("Enter the word");

let arr=str.split("");

let reverseStr=arr.reverse()
let str1=arr.join("");
console.log(str1);
console.log(str)

if(str===str1){
    console.log("true");
     
}else{
    console.log("false");
}


*/





// //Question 2 prime number

/*
let userInput=Number(prompt("Enter the number"));
let count=0;
let count1=0
let arr=[];
for(let j=2;j<=userInput;j++){
    for(let i=1;i<=j;i++){
        if(j%i==0){
            count++;  
        }    
    }
    if(count==2){
        arr.push(j);
        count1++ 

    }
        
count=0  
}
console.log("The Prime Number Count is: "+count1);
console.log(arr);
*/









//Question 3 sum of even numbers

/*
let arr=[];
let userChose = Number(prompt("1 push element in Array \n 2 exit"));
while(true){
    
    if(userChose==1){
        let userInput = Number(prompt("Enter the Number: ")); 
        arr.push(userInput);  
        userChose=Number(prompt("1 push element in Array \n 2 exit"));
    }
      
    else{
        if(userChose==2){
            break;
        }else{
            userChose=Number(prompt("1 push element in Array \n 2 exit"));
        }
    }
}
console.log(arr);
let total= 0;
for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        total+=arr[i];
    }
}
console.log(total);

*/






//Question 4 Sorting array

let arr=[1,5,6,"ba","aa","ac","bb",]
let memory;
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[j] < arr[i]){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        } 
    }
}
console.log(arr);




//Question 5 Student Marksheet System
/*
let storage=[];
let studMarks=[];
let studSubjects=[];
let updateStudMark=[];
let updateStudSubject=[];

let userInput=Number(prompt(" Enter 1 to Add Student\n Enter 2 to Display Students:\n Enter 3 to Update Student:\n Enter 4 to Delete Student: "));
while(true){
    if(userInput===1){
        let studId=Math.floor(Math.random()*9000)+1000;
        let studName= prompt("Enter your name");
        
        
        while(true){
            let choice=Number(prompt("  Enter 1 to Add marks\n  Enter 2 to Exit"));
            if(choice==1){
                let marks = Number(prompt("Enter marks:"));
                studMarks.push(marks);
                let subjects=prompt("Enter Subject Name:");
                studSubjects.push(subjects);
            }   
            else{
                if(choice==2){
                    break;
                }   
            } 
        } 
        storage.push({studId,studName,studMarks,studSubjects})
        userInput=Number(prompt(" Enter 1 to Add Student\n Enter 2 to Display Students:\n Enter 3 to Update Student:\n Enter 4 to Delete Student: ")); 
    }else if(userInput==2){
        console.log("Display: ")
        storage.forEach((element)=>console.log(element));
        userInput=Number(prompt(" Enter 1 to Add Student\n Enter 2 to Display Students:\n Enter 3 to Update Student:\n Enter 4 to Delete Student: ")); 
    }
    else if(userInput==3){
        console.log("Update: ")
        let updateId=Number(prompt("Enter the Student Id: "))

        for(let i=0;i<storage.length;i++){
            if(updateId==storage[i].studId){
                let markLenth=storage[i].length;
                let subLength=storage[i].length;
                while(true){
                    let updateChoice=Number(prompt("  Enter 1 Update  to marks\n  Enter 2 Update to Subject\n  Enter 3 Exit"));
                    if(choice==1){
                        let updateMark = Number(prompt("Enter Updated marks:"));
                        updateStudMark.push(updateMark);
                        let updateChoice=Number(prompt("  Enter 1 Update  to marks\n  Enter 2 Update to Subject\n  Enter 3 Exit"));
                    }el
               
                }
            }
        }
        userInput=Number(prompt(" Enter 1 to Add Student\n Enter 2 to Display Students:\n Enter 3 to Update Student:\n Enter 4 to Delete Student: ")); 
    }
    else if(userInput==4){
        let removeId=Number(prompt("Enter the Student Id for Removing: "));
        for(let i=0;i<storage.length;i++){
            if(removeId==storage[i].studId){
                storage.splice(i,1);
                alert(`Student Id ${removeId} details is removed`)

            }
        }
        userInput=Number(prompt(" Enter 1 to Add Student\n Enter 2 to Display Students:\n Enter 3 to Update Student:\n Enter 4 to Delete Student: "));
    }
    else{
        break;
    }
}
}

console.log(storage);

*/





