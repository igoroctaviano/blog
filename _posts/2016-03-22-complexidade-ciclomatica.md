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
