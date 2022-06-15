// var coupon=document.getElementById('coupon')

// function loadCoupon(){
// coupon.style.visibility="visible"

// }

// function closeCoupon(){
// coupon.style.visibility="hidden"
// }

function changeMode(){
    document.body.classList.toggle('mydark')
    
    document.getElementById('darkmode').classList.toggle('mydark')


    document.getElementsByClassName('marginContainer').classList.toggle('mydark')
}

window.onload=loadCoupon();