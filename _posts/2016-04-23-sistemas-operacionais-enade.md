---
layout: post
title: "Sistemas Operacionais"
date: 2016-04-23 11:28:00
image: '/assets/img/sistemas-operacionais-enade/main.png'
description: 'Sistemas Operacionais: saiba como resolver alguns exercícios do ENADE!'
main-class: 'saiba'
color: '#3369e8'
tags: enade sistemas-operacionais
categories:
introduction: "Sistemas Operacionais: saiba como resolver alguns exercícios do ENADE!"
---

#### PARTE II: GERÊNCIA MEMÓRIA E MEMÓRIA VIRTUAL
##### Ex 1: (PROVA 3 SO SI-M/JOGOS de 2007 a 2013 e PAC 2011 a 2013)
Considerando um espaço de endereçamento virtual de **512 MiB** e uma memória física **8 MiB** e utilizando-se páginas de **2 Kbytes**.

- **1.1** Determinar o número de bits necessários para os endereços (lógicos e físicos) , o número de páginas de memória virtual e o número de "frames" ou molduras (páginas de memória física).

- **1.2** Determinar a quantidade de páginas endereçáveis na memória virtual desse sistema.

- **1.3** Supondo que esse sistema disponha de 16 páginas ou blocos físicos de memória, mostre a tabela de páginas deste sistema com os seguintes mapeamentos: 0 -> 5, 1 -> 2, 2 -> 10, 3 -> indisponível, 4 -> 8, 5 -> 3

- **1.4** Traduza os seguintes endereços lógicos em endereços físicos: 0x02C5, 0x2162, 0x3B34.

- **1.5** Qual seria o aproveitamento efetivo da memória alocada por este sistema, nos seguintes casos:

    a) programa que necessite alocar 3000 bytes
    b) programa que necessite alocar 10000 bytes
    
##### Resolução
**1.** O primeiro passo é encontrar quantas páginas há em Memória Virtual:

    Sendo
    MV (Memória Virtual)
    MP (Memória Principal ou Memória Fisica)

    Número de Páginas Virtuais = MV/P = 512MiB/2KiB = 2^9x2^20/2^11 = 2^29/2^11 = 2^18 = 4x65536 = 262144.
    
**2.** O segundo passo é encontrar quantos frames há de Memória Fisica:

    MF/P = 8MiB/2KiB = 2^3x2^20/2^11 = 2^12 = 4096.
    
***
