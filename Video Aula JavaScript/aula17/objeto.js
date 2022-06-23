let amigo = {nome:'Tales',
sexo:'M',
peso: 90,
engorda(p=0){
    console.log('Engordou')
    this.peso += p
}}
amigo.engorda(7)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)
//esse codigo esta escrito em forma de objeto sendo uma maneira mais proficional de escrever,
// tendo mais possibilidade de escre do que o array

console.log(8)
