alert('Author : Ayush Kushwaha (fraxard@gmail.com). There is a problem with this calculator - You should not enter the numbers larger than the calc. screen otherwise you cant see the whole number .... I am working on this , so stay tuned.')

let string = "";
let buttons = document.querySelectorAll('button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='DEL'){
            string = string.substring(0, string.length-1); //deleting the last number fromm the input
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML== '='){
            string = eval(string);
            document.querySelector('input').value=string;
        }
        
        else if(e.target.innerHTML== 'AC'){
            string = "";
            document.querySelector('input').value=string;
        }
        else{
        console.log(e.target)
        string = string + e.target.innerHTML;
        document.querySelector('input').value=string;
        }
    })
})