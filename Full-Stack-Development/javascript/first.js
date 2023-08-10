/*function details(){
    if (true){
        let name="Neeraja" 
        var age=20
        
    }
    console.log(name,age)  // output will be "name is not defined" because of let for block/local scope we can't use it out this block if
}
details();*/
/*var name; //Hosting -> it act as a global scope 
function details(){
    if (true){
        console.log(name) //output will be undefined because we are trying to access the name variable before assignment  
        name="Neeraja"
        var age=20
    }
    console.log(name,age)
}
details();*/
 const button = document.querySelector('button')
console.log(button)
function handleRemove() {
    
    if (lists.children.length > 0) {
        lists.removeChild(lists.lastChild);
    }
   
}
const lists=document.querySelector('.products')
console.log(lists)
button.addEventListener('click',handleRemove)

