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

## Calculando a complexidade ciclomática
Um exemplo:
Supondo que você esteja desenvolvendo um programa que lhe retorne o maior divisor comum entre dois números. Uma fórmula
simples é o [Algoritmo de Euclides](https://pt.wikipedia.org/wiki/Algoritmo_de_Euclides) que pode ser descrito da seguinte forma:
| Dados dois números naturais a e b, verifique se b é zero. Se sim, a é o maior divisor comum entre os mesmos; caso contrário, repita o | processo usando b e o resto da divisão de a por b.

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
