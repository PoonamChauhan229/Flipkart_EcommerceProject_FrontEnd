var coupon=document.getElementById('coupon')

function loadCoupon(){
coupon.style.visibility="visible"
document.getElementById('mainDarkMode').classList.add('overlay')

}

function closeCoupon(){
coupon.style.visibility="hidden"
document.getElementById('mainDarkMode').classList.remove('overlay')
}

function changeMode(){
    document.body.classList.toggle('mydark')
    
    document.getElementById('darkmode').classList.toggle('mydark')
    document.getElementById('mainDarkMode').classList.toggle('mydark')


    document.getElementsByClassName('marginContainer').classList.toggle('mydark')

}

window.onload=loadCoupon();