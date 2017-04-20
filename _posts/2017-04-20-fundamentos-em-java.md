---
layout: post
title: "Fundamentos em Java"
date: 2017-04-20 00:11:00
image: '/assets/img/fundamentos-em-java/main.png'
description: ''
main-class: 'dev'
color: '#0000FF'
tags: java
categories:
introduction: ""
---
 
## O que é Java?
A primeira coisa que precisamos entender é exatamente o que é Java.
Quando alguém fala Java, do que eles estão falando?
Bom, Java é uma Linguagem de Programação mas também Java é um Ambiente de Execução.
No lado da linguagem de programação temos coisas como sintaxe, tipos de dados,
controle de fluxo (como loops e condições), orientação a objetos (herança e tal).
Já do lado do ambiente de execução temos coisas como configuração, segurança,
threading, input/output, coisas assim. Então quando alguém diz Java, eles podem
estar se referindo a linguagem de programação ou o ambiente de execução ou ambos.
Geralmente, quando alguem fala de Java no contexto de ambiente de execução, eles
estão se referindo ao Java SE ou Java Standard Edition (ambiente básico de Java)
mas existem outros ambientes que se derivaram deste, como o Java EE (Java Enterprise Edition),
Java ME (Java Micro Edition) e o JavaFX, todos sendo super conjuntos ou sub conjuntos
da versão standard (padrão). Java é tão flexível que existem ambientes de execução
que não são amarrados ao Java produzido pela Oracle, o exemplo mais conhecido é
o Android, o Android produz produz um ambiente de execução bem diferente que a versão
Standard da Oracle. A coisa é que todos esses ambientes suportam efetivamente a mesma
linguagem de programação, Java.

## JRE vs JDK
JRE e JDK são dois termos que pessoas se referem com frequência no mundo Java; e o
que eles são, são duas partes que precisamos para rodar e criar aplicações Java.
JRE (Java Runtime Environment) é o ambiente de execução Java enquanto JDK (Java
Development Kit) é o kit de desenvolvimento Java.


<<<Adicionar imagem>>>


    **Java Runtime Environment (JRE)**
        Necessário para executar aplicações Java
        Usuários finais normalmente só precisam do JRE

    *Java Development Kit (JDK)*
        Disponibiliza as ferramentas que precisamos para criar aplicativos Java
        Geralmente desenvolvedores instalam a JDK em suas máquinas
        A instalação da JDK já incluí a JRE

## Criando e Executando aplicações Java
Então como tudo isso funciona? Se nós, sentarmos e digitamos um arquivo fonte de Java
com o código de um programa que fizemos e queremos executar esse arquivo fonte em algum
ambiente hospedeiro (pode ser o browser, windows, linux, android ou mac) como fazemos isso?
Como, apartir daquele código fonte que digitamos podemos chegar em algo que pode ser
executado em outro computador? Isso é onde o Kit de Desenvolvimento Java (JDK) vem para nos
ajudar. Usando a JDK nós inferir nosso código nela e então ela vai produzir nossa aplicação Java.


<<<Adicionar imagem>>>


Mas Java não é uma linguagem de baixo nível igual C. Em C, quando compilamos algum programa,
produz uma aplicação que pode ser executada diretamente no computador hospedeiro, diferentemente
de Java, onde é utilizada uma abstração chamada byte code que é independente de plataforma. Isso
nos permite a não ficar tão amarrado a um ambiente hospedeiro específico e sim disponível para
executar em ambientes diferentes, e é ai que entra o Ambiente de Execução Java (JRE), nos fornecendo
o que precisamos para executar em qualquer ambiente hospedeiro (por isso que usuários finais instalam
o JRE, porque eles apenas precisam executar aquela aplicação enquanto os desenvolvedores precisam da JDK
para produzir aquela aplicação).



























