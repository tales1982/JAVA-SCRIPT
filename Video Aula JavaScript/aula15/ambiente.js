let num = [5,8,2,9,3]// meu array.
/*num[5]=1//maneira altomatizada de adcionar um elemento.
num.push(7)//usando o .push deixo o jscript adsionar o elemento por ele mesmo automaticamente.
num.length//E usado para saber o complimento, lembrando q length nao e um metodo, e sim um atributo.
num.sort()//E usado para ordena meuzs vetores colocando todos em ordem, lebrando que e um metodo interno do vetor em usso
console.log(`Nosso vetor e ${num}`)// codigo pra ser exibido no console.*/
num.push(1)
num.sort()
console.log(num)
console.log(`meu vetor tem ${num.length} possicoes`)
console.log(`O primeiro valor do vetor e ${num[0]}`)
let pos = num.indexOf(8)
if(pos == -1) {
    console.log(`O valor nao foi encontrado`)
}else {
    console.log(`O valor esta na possicao ${pos}`)
}