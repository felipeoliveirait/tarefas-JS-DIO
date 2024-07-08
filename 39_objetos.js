
class forma_de_bolo{
    constructor(sabor_da_massa, sabor_recheio){
        this.sabor_da_massa = sabor_da_massa
        this.sabor_recheio = sabor_recheio
    }
}

let bolo_festa = new forma_de_bolo("massa de chocolate", "recheio de nutella")

console.log(bolo_festa)