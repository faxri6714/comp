let doc = document



let btn_grey = doc.querySelector('.but2')
let btn_white = doc.querySelector('.but1')
let img = doc.querySelector('img')
let com_text=doc.querySelector('.p1')
let babki = doc.querySelector('.h22')
let b0 = doc.querySelector('.but3')
let b200 = doc.querySelector('.but4')
let b600 = doc.querySelector('.but5')
let b1200 = doc.querySelector('.but6')

let img3 = './img/mbp14-spacegray-select-202110 1 (4).jpg'
let img2 = "./img/mbp14-silver-select-202110 1.jpg"


let bac=(btn1 , btn2)=>{
    btn1.classList.remove('but2')
    btn1.classList.add('but1')
    btn2.classList.remove('but1')
    btn2.classList.add('but2')
}

let boc=(btn1 ,btn2 ,btn3 ,btn4 )=>{
    btn1.classList.remove('but4', 'but5', 'but6')
    btn1.classList.add('but3')
    btn2.classList.remove('but3', 'but5', 'but6')
    btn2.classList.add('but4')
    btn3.classList.remove('but3','but4','but6' )
    btn3.classList.add('but5')   
    btn4.classList.remove('but3','but4', 'but5')
    btn4.classList.add('but6')
}








btn_grey.onclick=('click',() =>{
    img.setAttribute('src',img2)
    bac(btn_grey ,btn_white)
    com_text.innerHTML = 'Space Gray'
    
})

btn_white.onclick=('click',() =>{
    img.src = img3
    com_text.textContent = 'White'
    bac(btn_white , btn_grey)
})

b0.onclick=('click',() =>{
    babki.innerHTML = '$1,999'
    boc(b0 , b200 ,b600, b1200)
})
b200.onclick=('click',() =>{
    babki.textContent = '$2,199'
    boc(b200 ,b0 ,b600, b1200)
})
b600.onclick=('click',() =>{
    babki.textContent = '$2,599'
    boc(b600 ,b0 ,b200, b1200)
})
b1200.onclick=('click',() =>{
    babki.textContent = '$3,299'
    boc(b1200 ,b0 ,b200, b600)
})





