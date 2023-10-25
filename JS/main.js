var elForm = document.querySelector('.form')
var elList = document.querySelector('.list')


var arr = []
elForm.addEventListener('submit', (e) => {
    e.preventDefault()
    var obj = {
        phone: e.target.phone.value,
        model: e.target.model.value,
        price: e.target.price.value

    }
    arr.push(obj)
    fm(arr)

})

function fm(arr) {
    elList.innerHTML = ''
    for (var i = 0; i < arr.length; i++) {
        let newLi = document.createElement('li')
        newLi.innerHTML = `<img class="imgg" src="${arr[i].model}" alt=""> <h2 class="title__h2">${arr[i].phone}</h2>  <i class="price__i">${arr[i].price}</i>`
        var newh6 = document.createElement('h6')
        var newh4 = document.createElement('h4')
        var newDiv = document.createElement('div')
        var newSpan = document.createElement('span')
        var newSpan1 = document.createElement('span')
        var newSpan2 = document.createElement('span')
        var newSpan3 = document.createElement('span')
        var newDiW = document.createElement('div')
        var newh5 = document.createElement('button')
        var newh51 = document.createElement('button')
        var newh52 = document.createElement('button')
        var newhBUTT = document.createElement('button')
        newh6.setAttribute('class', 'title__h6')
        newh4.setAttribute('class', 'title__h4')
        newDiv.setAttribute('class', 'divv')
        newSpan.setAttribute('class', 'span')
        newSpan1.setAttribute('class', 'span1')
        newSpan2.setAttribute('class', 'span2')
        newSpan3.setAttribute('class', 'span3')
        newDiW.setAttribute('class', 'diw')
        newh5.setAttribute('class', 'title5')
        newh51.setAttribute('class', 'title51')
        newh52.setAttribute('class', 'title52')
        newLi.setAttribute('class', 'itemli')
        newhBUTT.setAttribute('class', 'butt')
         newh6.textContent = 'SM - S918BZEGSKZ'
         newh4.textContent = 'RANG'
         newh5.textContent = '256GB'
         newh51.textContent = '512GB'
         newh52.textContent = '1TB'
         newhBUTT.textContent = 'Sotuv nuqtalari'
        newDiv.appendChild(newSpan)
        newDiv.appendChild(newSpan1)
        newDiv.appendChild(newSpan2)
        newDiv.appendChild(newSpan3)
        newDiW.appendChild(newh5)
        newDiW.appendChild(newh51)
        newDiW.appendChild(newh52)
        newLi.appendChild(newh6)
        newLi.appendChild(newh4)
        newLi.appendChild(newDiv)
        newLi.appendChild(newDiW)
        newLi.appendChild(newhBUTT)
        elList.appendChild(newLi)
    }
}

 var elWrapper = document.querySelector('.wrapper')
function openModal() {
    elWrapper.classList.add('openmodal')
}


function closeModal() {
    elWrapper.classList.remove('openmodal')
}

var elTitle = document.querySelector('.title')


var a = new Date()
var b = new Date()
var c = new Date()

 console.log(a.getDate(),b.getMonth()+1,c.getFullYear());














