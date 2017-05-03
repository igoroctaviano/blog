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

Bom, Java é uma Linguagem de Programação.. mas também, Java é um Ambiente de Execução.
No lado da linguagem de programação temos coisas como sintaxe, tipos de dados,
controle de fluxo (como loops e condições), orientação a objetos (herança e tal).
Já do lado do ambiente de execução, temos coisas como configuração, segurança,
threading, input/output, coisas assim. Então quando alguém diz Java, eles podem
estar se referindo a linguagem de programação ou o ambiente de execução ou os dois.

Geralmente, quando alguem fala de Java no contexto de ambiente de execução, eles
estão se referindo ao Java SE ou Java Standard Edition (ambiente básico de Java),
mas existem outros ambientes que se derivaram deste, como o Java EE (Java Enterprise Edition),
Java ME (Java Micro Edition) e o [JavaFX](https://docs.oracle.com/javaf){:target="_blank"}, todos eles sendo super conjuntos ou sub conjuntos
da versão standard (padrão). Java é tão flexível que existem ambientes de execução
que não são amarrados ao Java produzido pela [Oracle](https://www.oracle.com/br/){:target="_blank"}, 
o exemplo mais conhecido é o [Android](https://www.google.com.br/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwjpr9v4yb3TAhUGkJAKHR0iAFgQFgglMAA&url=https%3A%2F%2Fwww.android.com%2Fintl%2Fpt-BR_br%2F&usg=AFQjCNGLx65qg4JE5zi0juTlAnyY5oTvpQ&sig2=Kj9oy8F4Bs8x4LgI4UoCYg){:target="_blank"}, 
o Android produz produz um ambiente de execução bem diferente que a versão Standard da Oracle. 
A coisa é que todos esses ambientes suportam efetivamente a mesma linguagem de programação, **Java!**.

## JRE vs JDK
JRE e JDK são dois termos que as pessoas se referem com frequência no mundo Java; esses termos
são duas partes que precisamos para rodar e criar aplicações Java. JRE (Java Runtime Environment)
é o ambiente de execução Java enquanto JDK (Java Development Kit) é o kit de desenvolvimento Java.

<!-- Adicionar imagem -->

**Java Runtime Environment (JRE)**
- [x] Necessário para executar aplicações Java
- [x] Usuários finais normalmente só precisam do JRE

**Java Development Kit (JDK)**
- [x] Disponibiliza as ferramentas que precisamos para criar aplicativos Java
- [x] Geralmente desenvolvedores instalam a JDK em suas máquinas
- [x] A instalação da JDK já incluí a JRE

De acordo com a documentação Java versão 8 SE, a JDK 8 é um superset (super conjunto) da JRE 8, a JDK contém tudo que existe dentro da JRE 8 mais compiladores e debuggers (debugadores existe no PT-BR? =D) necessarios para desenvolver applets e aplicações! Opera, perai, o que são Applets? Apples são pequenos programas que são feitos para serem embutidos ou embarcados dentro de aplicações. Em Java, a classe Applet deve ser uma superclasse de qualquer applet que deve ser embarcada em uma página web ou vista por um Java Applet Viewer (é um programa autônomo de linha de comando feito pela Sun para rodar os Java Applets, o Applet Viewer é geralmente usado por desenvolvedores para testar suas applets antes de realizarem o deploy delas para um website). A classe Applet fornece uma interface padrão entre os applets e seu ambiente.

[Aqui](http://docs.oracle.com/javase/8/docs/){:target="_blank"} voce vai encontrar o diagrama conceitual de tudo isso e muito mais (todos os componentes menores que pertencem a JDK e a JRE). 

## Criando e Executando aplicações Java
Então como tudo isso funciona? Se nós sentarmos e digitarmos um arquivo fonte de Java
com o código de um programa que fizemos e queremos executar esse arquivo fonte em algum
ambiente hospedeiro (pode ser o browser, windows, linux, android ou mac), como podemos fazer isso?
Como podemos, partindo daquele código fonte que digitamos, chegar em algo que pode ser
executado em outro computador? Isso é onde o Kit de Desenvolvimento Java (JDK) vem para nos
ajudar. Usando a JDK, nós inferimos o código e então, a JDK vai produzir nossa aplicação Java.

<!-- Adicionar imagem -->

Mas Java não é uma linguagem de baixo nível igual C. Na linguagem C, quando compilamos algum programa,
é produzido uma aplicação que pode ser executada diretamente no computador hospedeiro, diferentemente
de Java, onde é utilizada uma abstração chamada *bytecode* que é independente de plataforma. Isso
nos permite a não ficar tão amarrado a um ambiente hospedeiro específico e sim disponível para
executar em ambientes diferentes, e é ai que entra o Ambiente de Execução Java (JRE), nos fornecendo
o que precisamos para executar em qualquer ambiente hospedeiro (por isso que usuários finais instalam
o JRE, porque eles apenas precisam executar aquela aplicação enquanto os desenvolvedores precisam da JDK
para produzir aquela aplicação).

## Pacotes
Pacotes é um conceito bem importante em Java, vamos cobrir algumas coisas básicas porém importântes sobre pacotes.

Se você observar alguns códigos Java por ai, vai ver que no topo do arquivo do código fonte, tem a palavra *package*
declarada com algum nome em seguida. E o que isso faz, quando adicionamos o conceito de pacotes?

{% highlight java %}
package com.fundamentosemjava.exemplo;

public class Main {
  public static void main(Strings[] args) {

  }
}
{% endhighlight %}

Isso nos provê de organização dentro de uma aplicação Java. Existem muitos aspectos em torno desse conceito
mais vamos cobrir só o basico para entendermos melhor. Uma coisa é que esses pacotes seguem uma convenção
em sua nomenclatura e de fato afeta nossa estrutura de código fonte.

Em torno da convenção de como um pacote deve ser nomeado, uma regra simples é tudo minusculo, com nome de
domínio reverso para assegurar unicidade global. Exemplo: tenho um domínio https://igoroctaviano.com.br,
meu nome de pacote junto a declaração será **br.com.igoroctaviano**, isso é apenas uma convenção pra não acontecer colisão de nomes. E ainda mais, nessa regra simples, vamos adicionar ainda mais qualificadores para garantir que o nome do pacote
será único dentro de um grupo ou organização. COmo por exemplo: dentro da minha empresa posso ter um projeto
chamado blog então a declaração junto ao nome do meu pacote vai ficar **package br.com.igoroctaviano.blog;**.

Essa é a convenção mais simples que tem, mas se você tem uma organização grande, provavelmente isso não será suficiente.
No caso de vários grupos de desenvolvedores, você pode adicionar a categoria dentro do nome do pacote: **package br.com.igoroctavaiano.contabilidade;** para todos os desenvolvedores do grupo de contabilidade. Neste caso, podemos
criar projetos com o mesmo nome, não vai causar colisões devido ao grupo especificado, garantindo unicidade. São
apenas convenções, nada está forçando ninguem a fazer nada aqui.

### Membros se tornam parte do pacote
Neste caso, temos uma classe chamada Main, mas uma vez que colocamos essa classe dentro de um pacote, 
a classe já não é mais conhecida como Main, mas sim, como **com.fundamentosemjava.Main**. Agora ela
tem um nome único, devido as nossas convenções.

{% highlight java %}
package com.fundamentosemjava.Main;

public class Main {
  public static void main(Strings[] args) {

  }
}
{% endhighlight %}

### Nomes de pacotes e estrutura dos arquivos fonte
Nomes de pacotes afetam a estrutura dos arquivos fonte. O que é interessante, Java por sí, não exige
correlação entre nome de pacotes e a estrutura de código fonte, Java não quer saber como você nomeou seus pacotes. 
Porém! a maioria dos Ambientes Integrados de Desenvolvimento Java (IDEs) exigem uma sub pasta para cada parte
do nome do pacote. A maoria das ferramentas que você vai utilizar para programar Java vai te exigir isso.

{% highlight java %}
package com.fundamentosemjava.Main;
{% endhighlight %}

Vai mapear para a seguinte estrutura de arquivos fonte:

**src**
   |--**com**
      |--**fundamentosemjava**
         |--**Main.java**
         
### Execução de aplicações fora das IDEs
Podemos executar programas pela linha de comando com o comando *java* no nosso terminal.
Você pode fazer isso, caminhando até a pasta onde está a classe candidata a execução e
utilizar o comando *java* logo em seguida o nome da classe. Não se esqueça de colocar o nome completo da classe
incluindo o nome do pacote em que ela pertence. *Quando em ambiente Windows, você precisa incluir
o diretorio bin da JRE nas variaveis de ambiente.*

### Statements (afirmações)!
Em Java, programas são feitos de afirmações (algum código, como o exemplo do hello world) e essas afirmações possuem ou não declarações. Em Java, as afirmações terminam com ponto e virgula no final, coisa de sintaxe. Pra alguns conhecedores
de outras linguagens que não exigem podem achar meio chato, mas é necessário no mundo Java.



























