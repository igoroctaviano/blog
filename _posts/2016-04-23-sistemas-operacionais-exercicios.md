---
layout: post
title: "Sistemas Operacionais"
date: 2016-04-23 11:28:00
image: '/assets/img/sistemas-operacionais-exercicios/main.png'
description: 'Sistemas Operacionais: resolução de exercícios pra quem está enfrentando a disciplina!'
main-class: 'saiba'
color: '#3369e8'
tags: exercicios sistemas-operacionais
categories:
introduction: "Sistemas Operacionais: resolução de exercícios pra quem está enfrentando a disciplina!"
---

## Sistemas Operacionais
> Programa ou um conjunto de programas cuja função é gerenciar os recursos do sistema (definir qual programa recebe atenção do processador, gerenciar memória, criar um sistema de arquivos, etc.), fornecendo uma interface entre o computador e o usuário.

<sub>*Dedico esse post a todos os alunos da disciplina de SO e a mim :D, numa forma de fixar o conteúdo.*</sub>

### GERÊNCIA MEMÓRIA E MEMÓRIA VIRTUAL
**Ex 1: (PROVA 3 SO SI-M/JOGOS de 2007 a 2013 e PAC 2011 a 2013)**
Considerando um espaço de endereçamento virtual de **512 MiB** e uma 
memória física **8 MiB** e utilizando-se páginas de **2 Kbytes**.

**1.1** Determinar o número de bits necessários para os endereços
 (lógicos e físicos), o número de páginas de memória virtual
  e o número de "frames" ou molduras (páginas de memória física).

**1.2** Determinar a quantidade de páginas endereçáveis na memória 
virtual desse sistema.

**1.3** Supondo que esse sistema disponha de 16 páginas ou 
blocos físicos de memória, mostre a tabela de páginas deste 
sistema com os seguintes mapeamentos: 0 -> 5, 1 -> 2, 2 -> 10,
 3 -> indisponível, 4 -> 8, 5 -> 3.

 **1.4** Traduza os seguintes endereços lógicos em endereços físicos: 0x02C5, 0x2162, 0x3B34.
    
#### Resolução
**1.1.1** Encontrar o número de bits endereçáveis
para os endereços lógicos e físicos (ou MV e MF):

    Sendo NbEMV o número de bits endereçáveis da memória virtual
    e NbEMP o número de bits endereçáveis da memória física, temos:
    
    NbEMV = 2^NbEMV = MV = 512MiB = 2^9 x 2^20 = 2^29 = 29.
    Então temos 29 bits endereçaveis da memória virtual.

    NbEMP = 2^NbEMP = MP = 8MiB = 2^3 x 2^20 = 2^23 = 23.
    Então temos 23 bits endereçaveis da memória física.

**1.1.2** Depois calculamos o número de páginas de memória virtual:

<sub>MV (Memória Virtual)</sub><br>
<sub>MP (Memória Principal ou Memória Física)</sub>

    Número de Páginas Virtuais = MV/P = 512MiB / 2KiB = (2^9 x 2^20) / 2^11 = 
    (2^29 / 2^11) = 2^18 = (4 x 65536) = 262144.
    Então temos 262144 páginas virtuais.

**1.1.3** O segundo passo é encontrar quantos frames há de memória física:

    MF/P = (8MiB / 2KiB) = (2^3 x 2^20) / 2^11 = 2^12 = 4096.
    Então temos 4096 páginas físicas.

**1.2** Como foi colocado o exercício, estamos utilizando utilizando páginas
 de **2 Kbytes**. Então o número de bits de página endereçáveis:
 
 <sub>Sendo P a página e NbEP os números de bits endereçáveis da página.

     2^NbEP = P = 2Kbytes = 2^11 = 11 bits endereçaveis.

**1.4 a)** Para determinar o endereço físico ao endereço virtual 0:

<sub>Sendo EV o endereço físico e PF a página física,</sub><br>
<sub>Verificamos que a PF correspondende de 0 é 5 de acordo com o mapeamento.</sub>

    EV = 0
    PF = 5

       PF binário  | Deslocamento = 11      
    _______________|_____________
    0...0000 0010 1|000 0000 0000
         Ox   2    8     0    0
      
    R = EV = 0 -> EF = 0x2800.
    O endereço físico da pagina virtual é Ox2800.
  
***
Recomendo a leitura dos livros do [Tanenbaum](https://pt.wikipedia.org/wiki/Andrew_Stuart_Tanenbaum), ele é o autor do [MINIX](https://pt.wikipedia.org/wiki/MINIX), um sistema operacional baseado no Unix com propósito educacional, e é bastante conhecido por seus livros sobre ciência da computação. *O cara é professor de muitos, fato*.

[Sistemas Operacionais Modernos – 26 nov 2009 por Andrew S. Tanenbaum](https://www.amazon.com.br/gp/product/8576052377/ref=s9_acsd_simh_se_c_x_2?pf_rd_m=A1ZZFT5FULY4LN&pf_rd_s=search-desktop-advertising-no-results-center-1&pf_rd_r=M1PHC98PBWX53VCQ1KF3&pf_rd_t=301&pf_rd_p=1962514502&pf_rd_i=operating%20systems%20tanenbum)

Achou o assunto interessante? tem tem um livro legal do Silberschatz em Java [aqui](https://www.amazon.com.br/Sistemas-Operacionais-Java-Greg-Gagne/dp/8535224068), e caso.. você tiver sem tempo pra estudar e quer uma boa introdução no assunto, vai com o conhecido¹ "Livro dos Dinossauros" [aqui.](https://www.amazon.com.br/Fundamentos-Sistemas-Operacionais-Princ%C3%ADpios-B%C3%A1sicos/dp/8521622058/ref=sr_1_4?s=books&ie=UTF8&qid=1461595743&sr=1-4)

<sub>1. por mim</sub>
