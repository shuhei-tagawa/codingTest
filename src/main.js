function Product(a, b){
    if (a * b % 2 === 0) {
        return 'Even'
    }

    return 'Odd'
}

console.log(Product(2, 5))