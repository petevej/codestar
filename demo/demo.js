var info = [
    {
        title: 'bio',
        price: 150
    },
    {
        title: 'chem',
        price: 130
    },
    {
        title: 'math',
        price: 140
    }
]
console.log(info[0]);
// find the cheapest book
var min = 0;
for (var i in info) {
    if (info[min].price > info[i].price) {
        min = i;
    }
}
console.log(info[min].title);