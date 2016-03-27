---
layout: post
title: "Programação Imperativa vs Funcional"
date: 2016-03-27 15:51:00
image: ''
description: 'Paradigmas de Programação: Imperativa ou Funcional?'
main-class: '' 
color: ''
tags: concepts
categories:
introduction: "Paradigmas de Programação: Imperativa ou Funcional?"
---

A alguns dias venho pesquisando sobre paradigmas para um seminário na disciplina de Frameworks, sinceramente,
existe muito conteúdo a respeito deles, mas não custa nada escrever mais um pouco e com certeza também há que precise
e goste de alguns resumos como eu.

### Programação Imperativa vs Programação Funcional

Bom, a idéa desse post é clarear um pouco a mente (no sentido de introdução) quanto aos paradigmas imperativos e funcionais.
No final da publicação há referências para um estudo mais amplo sobre os paradigmas (dica: o bom estudo em paradigmas de
programação é a prória programação em linguagens de paradigmas distintos e "botar a mão na massa"), aqui, cabe uma concatenação
de boas explicações que encontrei, juntamente a algumas colocações que eu venho trabalhando.

### Programação Imperativa

A **Programação Imperativa** é o que a maioria dos programadores profissionais usam em seus trabalhos do dia-a-dia.
É o nome dado a linguagens como C, C++, Java, COBOL, etc. Na programação imperativa, você vai dizer ao computador o que fazer.
"Computador, adicione x e y", ou "Computador, mostre uma caixa de diálogo na tela." E (geralmente) o computador vai realizar a terefa.
Este é o lugar onde a maioria de nós gastamos nossas vidas, em estruturas de loop e declarações if-then-else e afins.

### Programação Funcional

A Programação funcional, tanto quanto eu entendo, procura **descrever o que você quer fazer, em vez de especificar como você quer que seja
feito**. É provavelmente melhor entendida em contraste com a programação imperativa.
Por exemplo, se você tem uma lista em C e você quer retirar todos os enésimos elementos, você tem que apontar para o primeiro elemento, 
definir um contador em um, passar para o próximo elemento, incrementar o contador, verificar para ver se você está no enésimo 
elemento e assim por diante. O equivalente funcional seria escrever uma função que reconhece quando o tamanho de uma lista é
um múltiplo de N, em seguida, passar essa função para a lista, possivelmente com um outro trecho de código para devolver a cabeça 
da lista (sentinela) se o enésimo reconhecedor for avaliado como verdadeiro e descartá-lo se for avaliado como falso.
As duas funções recursam através da lista, e finalmente, devolve uma lista que consiste em todos os enésimos elementos.

O último método pode parecer o caminho mais confuso de fazer as coisas, e isso é porque é. A programação funcional pode ser
um mind-bender (frita sua cabeça), que é uma razão pela qual as linguagens funcionais Lisp, Scheme, e Haskell nunca realmente
superaram C, C++, Java e COBOL em popularidade comercial. Mas há benefícios para a forma funcional. Por um lado, 
se você pode obter a lógica correta, **a programação funcional requer ordens de magnitude em menos código que programação imperativa**.
Isso significa menos pontos de falha, menos código para testar, e uma mais produtiva (e, muitos diriam, mais feliz) vida de programação.
Como os sistemas ficam maiores, esta tornou-se cada vez mais importante.

## Resumo
Em linguagens imperativas você vai dizer ao computador como alterar os bits, bytes e palavras em sua memória e em que ordem.
Em linguagens funcionais, você vai dizer ao computador, o que as coisas, ações etc, são. Por exemplo, podemos dizer que o fatorial
de 0 é 1, e o fatorial de qualquer outro número natural é o produto desse número e o fatorial de seu antecessor. Nós não dizemos: 
Para calcular o fatorial de n, reservar uma região de memória e armazenar 1 lá, em seguida, multiplicar o número naquela região 
de memória com os números 2 a N e armazenar o resultado no mesmo lugar, e no final, a região da memória conterá o fatorial.

***
<sub>*Pois é, conteúdo é o que não falta, então segue*</sub>

- [K&R](https://pt.wikipedia.org/wiki/The_C_Programming_Language)
- [Wizard Book - SICP](https://mitpress.mit.edu/sicp/)
- [What is functional declarative and imperative programming language](http://stackoverflow.com/questions/602444/what-is-functional-declarative-and-imperative-programming)
- [Robert C Martin - Functional Programming; What? Why? When?](https://www.youtube.com/watch?v=7Zlp9rKHGD4)
