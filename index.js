
let titleCount = 1;
let totalPrice = 0;
const cards = document.querySelectorAll('.card');
for (let index = 0; index < cards.length; index++) {
    const card = cards[index];
    card.addEventListener('click' , function (){
        
        // get the title 
        const title = card.querySelector('h3').innerHTML;
        const price = parseFloat(card.querySelector('span').innerHTML.split(' ')[1]);
        // console.log(typeof price)

        
        const titleContainer = document.getElementById('title-container');
        const newElement = document.createElement('p');
        newElement.innerText = titleCount + '.' + ' ' + title;
        titleContainer.appendChild(newElement);
        titleCount++;
        // console.log(newElement);

        // Total Price Calculate ..
        totalPrice += price;
        // console.log(totalPrice);

        // get total Price ...
        const NetTotalPrice = document.getElementById('totalPrice').innerText = totalPrice.toFixed(2);
        
    })
    
}

const btn = document.getElementById('apply-btn');
btn.addEventListener('click' , function(){
    const inputFiled = document.getElementById('input-field').value;
    const couponCode = inputFiled.split(" ").join("").toUpperCase();
    console.log(couponCode)
    if(totalPrice >= 200){
        if(couponCode === 'SELL200'){
            const discountFiled = document.getElementById('discountPrice');
            const discountPrice = totalPrice * 20 / 100;
            discountFiled.innerText = discountPrice.toFixed(2);
            
            // total Price calculation ....
            const netPrice = document.getElementById('total');
            const deductionTotal = totalPrice - discountPrice;
            netPrice.innerText = deductionTotal.toFixed(2);
            const inputFiled = document.getElementById('input-field').value = '';
            
            console.log(netPrice);
        }
        else{
            alert('Invalid Coupon Code')
        }

    }
    else {
        alert('Please at least spend 200$')
    }
    
})

