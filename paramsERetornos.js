function area (largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log (`valor acima do permitido: ${area}m2.`)
    } else {
        return area
    }
}

console.log(area(2, 11))
console.log(area(2, 10))