let user_name = get_first_name("Felipe-Souza-Oliveira" , "-")
console.log("Seja bem vindo " + user_name)

user_name = get_first_name("Carlos maneiro borges" , " ")
console.log("Seja bem vindo " + user_name)

function get_first_name(name, splitChar){
    let first_name = name.split(splitChar)[0] // split é uma funcao quebra algo
    return first_name
}