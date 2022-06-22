var coupon=document.getElementById('coupon')

function loadCoupon(){
coupon.style.visibility="visible"
document.getElementById('mainDarkMode0').classList.add('overlay')

}

function closeCoupon(){
coupon.style.visibility="hidden"
document.getElementById('mainDarkMode0').classList.remove('overlay')


}

function changeMode(){
    document.body.classList.toggle('mydark')    
    document.getElementById('darkmode').classList.toggle('mydark')
    document.getElementById('mainDarkMode0').classList.toggle('mydark')
    document.getElementById('mainDarkMode1').classList.toggle('mydark')
    document.getElementById('mainDarkMode2').classList.toggle('mydark')
    document.getElementById('mainDarkMode3').classList.toggle('mydark')
    document.getElementById('mainDarkMode4').classList.toggle('mydark')
    document.getElementById('mainDarkMode5').classList.toggle('mydark')
    document.getElementById('mainDarkMode6').classList.toggle('mydark')
    document.getElementById('mainDarkMode7').classList.toggle('mydark')
}

window.onload=loadCoupon();