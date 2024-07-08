// JSON - JavaScript Object Notation
// composto por chave e valor com objetivo de transferir dados

// Exemplo sem JSON

let nome = "Felipe"
let age = 28
let products = ["Mouse 2xwn", "teclado mecanico", "Monitor"]
let products_values = [29.90, 129.99, 899.99]

generate_invoice(nome, products, products_values, age);

function generate_invoice(nome, products, products_values, age){
    console.log("O comprador: " + nome)
    console.log("A idade: " + age)
    console.log("-------------------------------")
    console.log("O produto: " + products[0])
    console.log("O valor: " + products_values[0])
}