---
layout: post
title: "Complexidade Ciclomática"
date: 2016-03-22 21:23:00
image: '/assets/img/complexidade-ciclomaticay/main.png'
description: 'Uma métrica de software usada para indicar a complexidade de um programa de computador.'
main-class: 'testing'
color: '#5FBF5F'
tags: testing concepts
categories:
introduction: "Também conhecida como complexidade condicional."
---

### Obra de Thomas J. McCabe,
*..reflete diretamente o número de caminhos independentes que um programa pode tomar durante a sua execução.*

Esse post é dedicado aos colegas da disciplina de *Introdução a Testes de Software*, mas
qualquer desenvolvedor que já trabalhou com testes, tem conhecimento de que a quantidade
de casos de testes necessários para exercitar um determinado trecho de código é diretamente
proporcional à [árvore decisória](https://pt.wikipedia.org/wiki/%C3%81rvore_de_decis%C3%A3o).
O que em outras palavras, quanto mais caminhos de código puder tomar (seja por meios de condicionais ou loops),
maior a quantidade de testes necessários. Abaixo veremos que há uma relação direta entre a **complexidade ciclomática**
e a cobertura de um código.

### Calculando a complexidade ciclomática
Um exemplo:
Supondo que você esteja desenvolvendo um programa que lhe retorne o maior divisor comum entre dois números. Uma fórmula
simples é o [Algoritmo de Euclides](https://pt.wikipedia.org/wiki/Algoritmo_de_Euclides) que pode ser descrito da seguinte forma:

> Dados dois números naturais a e b, verifique se b é zero. Se sim, a é o maior divisor comum entre os mesmos; caso contrário, repita o processo usando b e o resto da divisão de a por b.

Esse algoritmo pode ser expresso pelo seguinte programa em Ruby (note que ele não está em Ruby idiomático):
{% highlight ruby %}
require "test/unit"

def euclid(m, n)
  if n > m
    r = m
    m = n
    n = r
  end
  r = m % n
  while r != 0
    m = n
    n = r
    r = m % n
  end
  n
end

class EuclidTest < Test::Unit::TestCase
  
  SETS = [[5, 10,  5], [2,  6,  2], [11,  7,  1], 
    [80, 64, 16], [2, 2, 2]]
  
  def test_euclid
    SETS.each do |set|
      assert_equal set[2], euclid(set[0], set[1])
    end
  end
  
end
{% endhighlight ruby %}

Se o programa acima for executado, ele rodará o caso de teste logo abaixo da função que verificará se a mesma está correta. Você pode adicionar mais casos ao conjunto SETS se desejar.

A função euclid pode ser descrita por um grafo simples que conecta os caminhos entre as várias declarações que a mesma contém. Esse grafo é o mostrado abaixo (clique para expandir):

![Grafo](/assets/img/complexidade-ciclomatica/grafo1.png)

Com base nesse grafo, podemos definir a complexidade ciclomática de um programa da seguinte forma:

{% highlight ruby %}
CC = A - N + 2C
{% endhighlight ruby %}

Nessa fórmula:
- CC é a complexidade ciclomática
- A é o número de arestas do grafo
- N é o número de nós do grafo
- C é o número de componentes conectados
 
Como se trata de uma função simples com um único ponto de entrada e saída, o número de componentes é 1 e a fórmula pode ser reduzida para:

{% highlight ruby %}
CC = A - N + 2
{% endhighlight ruby %}

Se a função possuísse múltiplos pontos de saída, entretanto, a complexidade ciclomática seria definida como:

{% highlight ruby %}
CC = A - N + C + R
{% endhighlight ruby %}

Nessa fórmula, R é o número de declarações de saída (em Ruby, o número de returns).

Voltando ao grafo mostra na figura, vemos que o mesmo possui 11 nós e 12 arestas, o que nós dá uma complexidade ciclomática de **12 - 11 + 2**, ou seja, **3**.

Uma outra maneira bem simples de descobrir a complexidade ciclomática é contar o número de loops fechados no grafo (que são formados por condicionais e loops) e somar ao número de pontos de saída. No grafo acima, temos 2 loops fechados (os if e while) e um ponto de saída, resultando no mesmo valor **3** para a complexidade da função.

### Decomposição

![Grafo](/assets/img/complexidade-ciclomatica/grafo2.png)

Uma segunda simplificação do cálculo de **A - N + 2C** reduz o cálculo de inspeção visual
do grafo de controle. Nós vamos precisar da formula de Euler na qual:

> Se G é um grafo plano conexo com N vértices, A arestas e R regiões, então **N - A + R = 2**.

Apenas mudando a ordem dos termos, logo temos **R = A - N + 2**, então **o numero de regiões
ou (faces do grafo) = complexidade ciclomática**.

***

A complexidade permanece a mesma quando a sintaxe de uma linguagem é levada em questão sem alterar a semântica do programa. Tome por exemplo a versão idiomática do algoritmo em Ruby:

{% highlight ruby %}
def euclid(m, n)
  m, n = n, m if n > m
  m, n = n, m % n while m % n != 0
  n
end
{% endhighlight ruby %}

O grafo gerado nesse caso é (clique para expandir):

![Grafo](/assets/img/complexidade-ciclomatica/grafo2.png)

<sub>*Note que embora o número de nós e arestas tenha mudado, a relação entre eles não mudou e a complexidade permanece a mesma.*</sub>

### Testando

De uma forma geral, o valor da complexidade ciclomática define um limite superior para a quantidade de testes necessários para cobrir todos os caminhos decisórios no código em questão. Esse é um limite superior já que nem todos os caminhos são necessariamente realizáveis.

Disso se infere que quanto menor a complexidade, menor a quantidade de testes necessários **para o método em questão**. Esse fato implica em outro curioso: quebra um método em vários reduz a complexidade dos métodos mas aumenta a complexidade geral do código e, de forma geral, mantém a testabilidade do programa completo no mesmo nível.

### Mas há um referêncial?

Já que a complexidade é um valor específico, é possível ter uma referência. Baseado no trabalho de McCabe, esses valores de referência são:

- 1-10, métodos simples, sem muito risco
- 11-20, métodos medianamente complexos, com risco moderado
- 21-50, métodos complexos, com risco alto
- 51 ou mais, métodos instáveis de altíssimo risco

### Conclusão
Essa foi uma pequena introdução ao assunto com o objetivo de abrir o caminho para artigos posteriores mostrando ferramentas de apoio ao cálculo e monitoramento da complexidade ciclomática. Como de usual, sugestões e correções são bem vindos.

***
Você pode saber mais sobre Complexidade Ciclomática no artigo de McCabe pela IEEE TRANSACTIONS ON SOFTWARE ENGINEERING, VOL. SE-2, NO.4, em dezembro de 1976, [aqui](http://www.literateprogramming.com/mccabe.pdf).

