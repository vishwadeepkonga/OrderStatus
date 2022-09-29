const ManageOrder=()=>{



let orderId=document.getElementById('orderid').value

document.getElementById('orderstatus').innerText= `See below for Order Status of :${orderId}`

document.getElementById('orderstatus').style.display='block'

const OrderPlaced=()=>new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve()
    }, 2000);

})

const chiefrecieved=()=>new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve()
        }, 2000);
    })
    const PizzaSauceAdded=()=>new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve()
        }, 2000);
    })

    const FirstLayerAdded=()=>new Promise((resolve,reject)=>
    {
        setTimeout(() => {
            resolve()
        },4000);
    })

    const Toppings=()=>new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve()
        }, 3000);
    })

    const secondLayer=()=>new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve()
        }, 3000);
    })

    const pizzabaked=()=>new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve()
        }, 2000);
    })

    const PackageReceived=()=>new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve()
        }, 3000);
    })

    
    OrderPlaced().then(()=>{
    document.getElementsByClassName('order-status')[0].classList.replace('btn-light','btn-success')
    return chiefrecieved()
}).then(()=>{
    document.getElementsByClassName('order-status')[1].classList.replace('btn-light','btn-success')
    return PizzaSauceAdded()
}).then(()=>{
    document.getElementsByClassName('order-status')[2].classList.replace('btn-light','btn-success')
    return FirstLayerAdded()

}).then(()=>{
    document.getElementsByClassName('order-status')[3].classList.replace('btn-light','btn-success')
    return Toppings()
    

}).then(()=>{
    document.getElementsByClassName('order-status')[4].classList.replace('btn-light','btn-success')
return secondLayer()
}).then(()=>{
    document.getElementsByClassName('order-status')[5].classList.replace('btn-light','btn-success')
    return pizzabaked()

}).then(()=>{
    document.getElementsByClassName('order-status')[6].classList.replace('btn-light','btn-success')
return PackageReceived()
}).then(()=>{
    document.getElementsByClassName('order-status')[7].classList.replace('btn-light','btn-success')
    document.getElementsByClassName('order-status')[8].classList.replace('btn-light','btn-success')

})

}

