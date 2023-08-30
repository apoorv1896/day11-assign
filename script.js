const btn = document.getElementById('btn');
let box = document.getElementById('box')
let para= document.createElement('p');
btn.addEventListener('click',()=>{
    let bill = document.getElementById('amount').value;
    let tax = document.getElementById('service').value;
    let pal = document.getElementById('people').value;
    para.innerText = "";
    parseInt(bill);parseInt(tax);parseInt(pal)
para.innerText =  `Tip Amount = ${bill*tax/pal}`

    box.appendChild(para);
    
})