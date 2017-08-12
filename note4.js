// 9/8/17
//iterative in Javascript >> while, do, for, for in, for of
//array variable

var x =7
var a =[3,5,1]
//console.log(a)
console.log(a[0])

//for in used for array >> result: index
for(var i in a)
{
    console.log(i)
}

//for of used for array >> result: value
for(var i of a)
{
    console.log(i)
}

/*there're singers who are given the score 9,8,10,9,10 respectively.Find the total score */
t=0
var score =[9,8,10,9,10]
for(var i of score)
    {
        t=t+i // t+=i
    }
    console.log(t)

/*from the previous question, there're biases in the max score and min score (delete them) */
var max=score[0]
var min=score[0]//assume 
var total=0
for(var i  of score)
    {
    total+=i
      if(max<i){
        max=i
      }
      if(min>i){ // มีตัวอื่นน้อยกว่า
        min=i
      }
    }
    console.log(total-max-min)

    //string array
    var mocha=0
    var latte=0
    var data=['Latte','Mocha', 'Latte', 'Mocha', 'Mocha', 'Espresso']
    for(var i of data)
        {
        if(i=='Mocha'){
            mocha++
        }
        if(i=='Latte'){
            latte++
        }
    }
    console.log('there are Mocha '+mocha+' cups')
    console.log('there are Latte '+latte+' cups')

    //How to insert data in empty array
    var data=[]
    data.push('Latte')
    data.push('Americano')
    data.push('Mocha')
    data.sort() // sort data, can be used in number array
    console.log(data)

    var query='Latte'
    var found= false
    for(var i of data)
        {
            if(query==i){
                found = true
                break
            }
        }
        if(found) {
            console.log('available')
        }else{
            console.log('not available')
        }

    //How to change alphabet in array
    var a =['l','o','v','e']
    var s='love'
        a[0]='m' //can edit
        s[0]='m' //read only 
    console.log(a)
    console.log(s)

    //How to print text in vertical
    for(var i=0;i<s.length;i++){
        console.log(s[i])
    }

    //Calculate the displacement 'NNEES'
    var s='NNEES'
    var x=0
    var y=0
    for(var i=0;i<s.length;i++){
        if(s[i]=='N') {y++} 
        if(s[i]=='S') {y--}
        if(s[i]=='E') {x++}
        if(s[i]=='W') {x--}
    }
    var d=Math.sqrt(x*x+y*y)
    console.log(d)

    var o={}
    var a=[]
    var s=''
    var n=5
    var x=2.5
    console.log(typeof o)
    console.log(typeof a)//object and array is the same type
    console.log(typeof s)
    console.log(typeof n)
    console.log(typeof x) //float and integer is the same type

    //Object
    var o={} //empty object
    o.title='Biology'
    o.price=150
    console.log(o) //code in each parts
    var b = {title:'Math', price:220}
    console.log(b) //code in 1 statement

    var add = [
        {area:'Bandruk', code:'10500'},
        {area:'Dusit', code:'10300'},
        {area:'SP', code:'10280'},]

    for(var i of add){
        console.log(i.area)
    }

    //found the address
    var query='Bangna'
    var foundadd= 'Unknown'
    for(var i of add){
        if(i.area==query)
            {foundadd= i.code
        break
            }
    }
    if(foundadd){
        console.log(foundadd)
    }

    //find the cheapest book cost
    var info = [
        {title:'bio', price: 150},
        {title:'chem', price: 130},
        {title:'math', price: 140}
    ]
    console.log(info[0])
    
    var min = 0
    for(var i in info){                     //for(var i=0;i<info.length;i++)
       if(info[min].price>info[i].price){
           min=i
       } 
    }
    console.log(info[min].title)