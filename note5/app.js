var data = ['a','n','p','m']
data.sort() // js เรียงตามตัวอักษร
console.log(data)

//how to sort number
var num = [7,10,15,5]
num = num.sort(compare)

function compare(a,b){
    if(a<b) return -1
    if(a>b) return +1
    return 0
}
console.log(num)

//เรียงข้อมูลตามราคาสินค้าจากน้อยไปมาก
var coffee = [
    {name:'Latte', price: 60},
    {name:'Mch', price: 90},
    {name:'Am', price: 70}
]

coffee.sort(p)
console.log(coffee)
function p(a,b){
        if(a.price<b.price) return -1
        if(a.price>b.price) return +1
        return 0
} 


