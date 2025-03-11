const sideDiv = document.getElementById('sideDiv')
const izleyin = document.getElementById('izleyin')
const price1 = document.getElementById('price1')
const price2 = document.getElementById('price2')
const price3 = document.getElementById('price3')
const pricet1 = document.getElementById('pricet1')
const pricet2 = document.getElementById('pricet2')
const pricet3 = document.getElementById('pricet3')
const second = document.getElementById('second')
const third = document.getElementById('third')
const adds = document.getElementById('adds')
const inp1 = document.getElementById('inp1')
const inp2 = document.getElementById('inp2')
const inp3 = document.getElementById('inp3')
const page = document.getElementById('page')
const checks1 = document.getElementById('checks1')
const checks2 = document.getElementById('checks2')
const checks3 = document.getElementById('checks3')
const logo = document.getElementById('logo')
const totalSt = document.getElementById('totalSt')
const totalElave = document.getElementById('totalElave')
const totalSeo = document.getElementById('totalSeo')
const totalEticaret = document.getElementById('totalEticaret')
const totalLogo = document.getElementById('totalLogo')
const total = document.getElementById('total')
let flag = true
function sideBar() {
    sideDiv.style.right = flag ? '0%' : '-100%'
    flag = !flag
}
function down() {
    scrollTo({
        top: izleyin.offsetTop - 96,
        behavior: "smooth"
    })
}
function change(x, y) {
    const btn = document.querySelectorAll('#btns button')
    btn.forEach(item => {
        item.style.color = '#94a3c8'
        item.style.background = 'white'
        item.style.fontWeight = 'normal'
    })
    x.style.background = '#a271f2'
    x.style.color = '#fff'
    x.style.fontWeight = '500'
    if (y == 1) {
        price1.innerHTML = '₼5'
        price2.innerHTML = '₼10'
        price3.innerHTML = '₼20'
        pricet1.innerHTML = '/ay'
        pricet2.innerHTML = '/ay'
        pricet3.innerHTML = '/ay'
    } else {
        price1.innerHTML = '₼60'
        price2.innerHTML = '₼120'
        price3.innerHTML = '₼240'
        pricet1.innerHTML = '/il'
        pricet2.innerHTML = '/il'
        pricet3.innerHTML = '/il'
    }
}
function kank1() {
    rangeData.forEach(item => {
        second.innerHTML +=
            `<div class="flex justify-between ">
    <p class="font-medium text-gray-900 text-sm">${item.name}</p>
    <input type="checkbox" id="${item.id}" onchange="checkPrice(this,${item.price})" >
    </div>`
    })
    checkData.forEach(item => {
        third.innerHTML +=
            `<div style="width:220px; display:flex; gap:8px; padding:10px ">
            <input type="checkbox"  id="${item.id}" onchange="eccomercePrice1(this,${item.price})">
                    <p >${item.name}</p>
            </div>`
    })
    eccomerceData.forEach(item => {
        adds.innerHTML +=
            `<div class="flex justify-between">
    <p class="font-medium text-gray-900 text-sm my-3">${item.name}</p>
    <input type="checkbox" id="${item.id}" onchange="eccomercePrice2(this,${item.price})">
    </div>`
    })

}
kank1()
let sumRange = 0
let sumEcommer1 = 0
let sumEcommer2 = 0
let sumLogo = 0
let pageCount = 0
function rangeChange() {
    pageCount = (inp1.value * 100) * inp2.value
    page.innerHTML = inp1.value + ' səhifə / ' + ' ₼ ' + (inp1.value * 100) * inp2.value
    totalSt.innerHTML = pageCount
    result()
}
rangeChange()
function checkPrice(x, price) {
    if (x.checked) sumRange += price
    else sumRange -= price
    checks1.innerHTML = sumRange
    totalElave.innerHTML = sumRange
    result()
}
function eccomercePrice1(x, price) {
    if (x.checked) sumEcommer1 += price
    else sumEcommer1 -= price
    checks2.innerHTML = sumEcommer1
    totalSeo.innerHTML = sumEcommer1
    result()
}
function eccomercePrice2(x, price) {
    if (x.checked) sumEcommer2 += price
    else sumEcommer2 -= price
    checks3.innerHTML = sumEcommer2
    totalEticaret.innerHTML = sumEcommer2
    result()
}
function logoChange() {
    sumLogo = inp3.value * 100
    logo.innerHTML = sumLogo
    totalLogo.innerHTML = sumLogo
    result()
}
function result() {
    let totalPrice = sumRange + sumEcommer1 + sumEcommer2 + sumLogo + pageCount
    total.innerHTML = totalPrice > 450 ? totalPrice : 450
}

