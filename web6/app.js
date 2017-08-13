var data = ['a', 'n', 'p', 'm']
data.sort();    // sort alphabetically
console.log(data);

// number sorting
var num = [7, 10, 15, 5];
num = num.sort(compare)

function compare(a, b) {
    if ( a < b ) {
        return -i;
    }
    if ( a > b ) {
        return +i;
    }
    return 0;
}
console.log(num);

// sort data by merchandise price from lowest to highest
var coffee = [
    {
        name: 'Latte',
        price: 60
    },
    {
        name: 'Mocha',
        price: 90
    },
    {
        name: 'Americano',
        price: 70
    }
];
coffee.sort(p);
console.log(coffee);
function p (a, b) {
    if ( a.price < b.price ) {
        return -i;
    }
    if ( a.price > b.price ) {
        return +i;
    }
    return 0;
}