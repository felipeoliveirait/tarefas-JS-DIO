class forma_de_bolo{
    constructor(sabor_da_massa, sabor_recheio){
        this.sabor_da_massa = sabor_da_massa
        this.sabor_recheio = sabor_recheio
    }
    escrever(){
        console.log(`Um delicioso bolo de ${this.sabor_da_massa} com recheio de ${this.sabor_recheio}` )
    }
    assar(){
        console.log("bolo assando de " + this.sabor_da_massa)
    }
}

let bolo_festa = new forma_de_bolo("chocolate", "nutella")
let bolo_premium = new forma_de_bolo("baunilha", "coco")

bolo_festa.escrever()
bolo_premium.escrever()
bolo_premium.assar()