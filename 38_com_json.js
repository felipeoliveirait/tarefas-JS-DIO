// JSON - JavaScript Object Notation
// composto por chave e valor com objetivo de transferir dados

// Exemplo com JSON

let invoice = {
    nome: "Felipe",
    age: 28,
    products: [
        ["Mouse 2xnm", 29.90],
        ["Teclado mecanico", 129.99],
        ["Monitor", 899.99],
        ["Tv 100 polegadas", 1000.90] 
    ]
}

generate_invoice(invoice);

function generate_invoice(invoice){
    console.log(`O comprador:  ${invoice.nome}`)
    console.log(`A idade:  ${invoice.age}`)
    console.log("-----------------------------------")

    for(let index in invoice.products){
        let [product_name, product_price] = invoice.products[index]
        console.log(`- ${product_name}: R$${product_price}`)
    }

}