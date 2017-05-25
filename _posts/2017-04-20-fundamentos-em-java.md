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

## Collections

Vamos cobrir todas as coisas, o background, as caracteristicas comuns que as classes Colections tem. Primeiramente vamos cobrir **Coleçes de Coleções**, em outras palavras, quais os tipos de coleções que temos, porque existem diferentes tipos.. coisas assim. Logo depois vamos falar brevemente sobre a distinção entre **Interface e Implementação**, mas não é sobre os termos genéricos de programação orientada a objetos e sim, mais especificadamente, o como olhamos as coleções. Vamos reconhecer que uma Interface define o comportamento de uma determinada coleção e que há uma ou mais implementaçes daquela Interface e que cada uma dessas implementações possuem diferentes caracteristicas quanto a performance.

### Coleções de Coleções

Todas as interfaces das coleçes dentro da API Java extende de uma interface comum chamada *java.util.Collection* e na interface propriamente dita, existem alguns comportamentos comuns ou métodos comuns no qual quem os extende, os implementam.
O primeiro tipo de *Collection* que vamos encontrar é o tipo *List* (Lista), provavelmente o mais utilizado ou comum em Java, possuem ordem, indexação e uma série de implementaçes na biblioteca núcleo. O próximo tipo geral é o *Set* (Conjunto) e seu irmão mais próximo *Sorted Set* (o mesmo que set porém seus elementos são ordenados) que são um tipo de coleção que contém elementos distintos. Outros dois tipos relacionados são *Queue* e *Deque* (Fila), são tipos que possuem ordem, não só ordem de índice mas ordem de entrada e saida de elementos também do tipo FIFO (primeiro a entrar é o primeiro a sair) no caso da *Queue* pois o *Deque* (Fila dupla) se comporta tanto primeiro a entrar é o primeiro a sair como o primeiro a entrar é o ultimo a sair (dai podemos deduzir que isso é o comportamento da estrutura de dados pilha, se você precisa de alguma estrutura que se comporte como uma pilha, *Deque* é o que você precisa). Finalmente temos tipos baseado em chaves, sendo eles o *Map* e o *Sorted Map* (igual o Map porém temos uma ordem definida), são interfaces que defidem coleções que possuem chaves (únicas) e valores (associados a uma chave).

<!-- IMG -->

### Interfaces e Implementaçes

É bem crítico para entender o design geral da API Collections, é a dessegregação entre uma interface e sua implementação. Uma **interface** pode ter várias implementações, várias estruturas de dados, elas defidem as caracteristicas funcionas, o comportamento (se uma coleção é acessada de forma indexada ou por meio da ordem). Interfaces geralmente tem implementações bem populares, muitas vezes você vai ver a interface *List* sendo usada e frequentemente a implementação *ArrayList* sendo usada. Já a **implementação**, cada uma é uma estrutura de dado diferente, como exemplo, a interface *List* possúi tanto a implementação *ArrayList* como a de *LinkedList* na biblioteca padrão e isso quer dizer que você pode trocar fácilmente entre diferentes implementações. Mas porque você iria querer coisa do tipo? devido as diferenças de performance, adicionar um elemento em uma *LinkedList* é mais performático que em um *ArrayList* devido ao fato que a *LinkedList* não tem que se expandir para adicionar um elemento como também você pode acessar algum ponto na coleção mais rapidamente com o *ArrayList* do que em uma *LinkedList* que é uma lista encadeada.

## Bonus

### String, StringBuffer e StringBuilder

- Você deve usar *String* quando uma estrutura imutável é apropriada; obtendo uma nova sequência
de caracteres de uma *String* talvez possa tomar um baque de performance não apropriado, tanto em tempo de CPU
quanto de memória (obtendo substrings é eficiente em termos de CPU porque dados não são copiados, mas isso
significa um potencial grande em termos de quantidade de dados em que talvez continuem alocados).

- Você deve usar *StringBuilder* quando você precisa criar uma sequência de caracteres mutáveis, usualmente
concatenando uma série de caracteres em sequência, juntos.

- Você deve usar *StringBuffer* nas mesmas circunstâncias que você utilizaria *StringBuilder*, porém quando
mudanças na string devem ser síncronas (porque vários threads estão lendo/modificando o buffer de string).

**Diferença de Mutabilidade**

*String* é imutável, se você quer alterar seus valores, outro objeto é criado enquanto *StringBuffer*
e *StringBuilder* são mutáveis, então eles podem ter seus valores alterados. 

**Diferença em Thread-Safety**

A diferença entre *StringBuffer* e *StringBuilder* é que *StringBuffer* é thread-safe. Então quando a
aplicação precisa rodar em apenas um thread, é melhor usar *StringBuilder*. *StringBuilder é mais eficiente
que o *StringBuffer*.

**Situações**

- Se sua string não vai mudar, utilize a classe *String* porque objetos *String* são imutáveis.
- Se sua string vai mudar (por exemplo: muitas operações e lógica na construção da string) e vai
ser acessado apartir de um único thread, usar *StringBuilder* é bom o suficiente.
- Se sua string vai mudar e vai ser acessada por vários threads, utilize *StringBuffer* porque *StringBuffer*
é síncrono, sendo assim, você vai ter thead-safety.

**Detalhes**

Vale notar que *StringBuilder/Buffers* não são pura magia, eles apenas utilizam um Array como um objeto de apoio
e que esse Array tem que ser realocado sempre quando se torna cheio. Tenha certeza e crie o seu objeto *StringBuilder/Buffer* grande o suficiente para que eles não tenham que estar constantemente sendo modificados
de tamanho (isso é custoso) toda vez que o método *.append()* é chamado.

A modificação do tamanho pode se tornar bem degenerativa. Basicamente modifica o tamanho desse Array the apoio para
duas vezes o seu tamanho atual, toda vez que é necessário a expansão. Isso pode resultar em uma quantidade absurda
de memoria RAM sendo alocada e não utilizada quando *StringBuilder/Buffer* começam a crescer demais.

Em Java *String x = "A" + "B"; O que ocorre é que um *StringBuilder* é utlizado, escondido. Então, para casos simples assim, não há necessidade de declarar seu próprio *StringBuilder*. Mas... se você estiver construindo objetos *String* grandes (menos que 4k), declarar *StringBuilder sb = StringBuilder(4096);* é muito mais eficiente que concatenação ou usar o construtor padrão no qual é apenas 16 caracteres. Se sua *String* vai ser menor que 10k então inicialize-a com o construtor em 10k para garantir segurança. Mas se for igual a 10k, melhor escrever um caracter a mais que 10k, causando realocação e copia para um Array de tamanho 20k. De certa forma, inicializar com mais é melhor que com menos.

No caso de auto modificação de tamanho, no décimo sétimo caracter (construtor padrão são apenas 16 caracteres), o Array de apoio vai ser realocado e copiado para 32 caracteres e no trigésimo terceiro isso vai ocorrer denovo e você vai ter uma realocação e copia para 64 caracteres. Você pode ver como isso degenera para várias realocações e cópias no qual você precisa evitar utilizando *StringBuilder/Buffer* no inicio.

Esse é o código fonte retirado da JDK 6 para *AbstractStringBuilder*

{% highlight java %}
void expandCapacity(int minimumCapacity) {
    int newCapacity = (value.length + 1) * 2;
    if (newCapacity < 0) {
        newCapacity = Integer.MAX_VALUE;
    } else if (minimumCapacity > newCapacity) {
        newCapacity = minimumCapacity;
    }
    value = Arrays.copyOf(value, newCapacity);
}
{% endhighlight %}

A boa prática é inicializar o *StringBuilder/Buffer* um pouco maior do que você pensa que vai precisar, isso se você não tem uma ideia na hora, do tão grande a *String* vai ser. Uma alocação com um pouco mais de memória do que você precisa vai ser melhor que várias realocações e cópias.

Também tome cuidade de inicializar um *StringBuilder/Buffer* com uma *String*, porque vai acontecer de ser alocado o tamanho da *String* + 16 caracteres, no qual na maioria dos casos, vai apenas fazer com que o ciclo de realocação e cópia seja degenerado, coisa que você quer evitar.

Esse código é foi diretamente tirado como exemplo do código fonte do Java 6

{% highlight java %}
public StringBuilder(String str) {
    super(str.length() + 16);
    append(str);
}
{% endhighlight %}

Se porque alguma razão, você acabar ficando com uma instância de *StringBuilder/Buffer* que você não criou e
não pode controlar o construtor que é chamado, tem uma forma de evitar comportamentos degenerados com realocações e cópias. Chame o método *.ensureCapacity()* com o tamanho que você quer para assegurar que sua *String* resultante caiba.

*As alternativas*

Só pra constar, se você está fazendo bastante manipulação e construção de *String*, tem muitas outras melhores alternativas em questão de performance. Por exemplo, se você pode criar uma implementação de *StringList* herdando *ArrayList<String>* e adicionando contadores para rastrear o numero de caracteres em cada *.append()* e outras operações de mutação da lista, e então fazer um override (sobrescrita) do método *.toString()* para criar um *StringBuilder* do mesmo tamanho que você precisa e fazer um loop pela lista, construindo a saída, você pode até mesmo fazer o *StringBuilder* uma instância e 'cachiar' os resultados do *.toString()* e apenas ter que regenerar ela quando mudanças ocorrerem.

Não se esqueça sobre *String.format()* quando construindo saídas fixas e formatadas, no qual pode ser otimizado pelo compilador assim que eles o fazem cada vez melhor.

<sub>More [here.](http://stackoverflow.com/questions/2971315/string-stringbuffer-and-stringbuilder)</sub>

## Questões de Entrevista

### Básico

1. Qual a diferença entre JDK e JRE?
Bom, JDK significa Java Development Kit. O JDK contém as ferramentas e bibliotécas para o desenvolvimento
de aplicações Java. Ele também contém compiladores de ferramentas de debug necessários para compilar um programa Java.
Porém JRE significa Java Runtime Environment. E este é incluso na JDK. O JRE provê bibliotécas e a maquina virtual Java (JVM)
que é necessária para rodar um programa Java.

2. O que é a JVM?
A Java Virtual Machine ou máquina virtual Java, é uma máquina abstrata que execute bytecode Java. Existe uma JVM diferente
 para cada hardware ou software diferente. Dessa forma, a JVM depende de plataforma. Ela é responsável por carregar, verificar
  e executar bytecode Java em uma plataforma.

3. Quais os diferentes tipos de áreas de memória alocadas pela JVM?
Em Java a JVM aloca memória para diferentes processos, métodos e objetos. Algumas áreas alocadas pela JVM são:
- ClassLoader: Componente da JVM usado para carregar os arquivos de classes.
- Class (Method) Area: Armazena estruturas por classe como a Runtime Constant Pool (pool de tempo de execução constante), dados dos campos e métodos e
código dos métodos.
- Heap: A Heap é criada em runtime (tempo de execução) e contém a área de dados runtime no qual objetos são alocados.
- Stack: A Stack guarda variáveis locais e resultados parciais em tempo de execução. Ela também ajuda no invocamento de métodos e retorno de valor.
Cada thread cria uma stack da JVM no tempo de criação da thread.
- Program Counter Register (): Essa área de memória contém o endereço da instrução da JVM que está sendo executada.
- Native Method Stack (Pilha de Método Nativo): Essa área é reservada para todos os métodos nativos usados na aplicação.

4. O que é compilador JIT?
Just In Time Compiler também conhecido como JIT compiler é utilizado para a melhora de performance em Java. É
ativado por default. Sua compilação é feita em tempo de execução. Java popularizou a utilização do JIT incluindo-o na JVM.

5. Como a plataforma Java se difere de outras plataformas?
6. Porque pessoas falam que Java é uma linguagem que você 'escreve uma vez e roda em qualquer lugar'?
7. Como ClassLoader funciona em Java?
8. Você acha que *main* (utilizado para o método main) seja uma keyword em Java?
9. Podemos escrever o método *main* como *public void static* ao contrário de *public static void*?
10. Em java, se você não especificar qualquer valor para variaveis locais, qual vai ser o valor default dessas variaveis locais?
11. Vamos dizer que você executou uma class Java sem passar nenhum argumento. Qual o valor do array de String no método Main?
12. Qual a diferença entre os tipos de dados *byte* e *char* em Java?
13. Quais são os princípios mais importântes de Programação Orientada a Objetos?
14. Qual a diferença entre uma Linguagem de Programação Orientada a Objetos e uma Linguagem de Programação Baseada em Objetos?
15. Em Java, qual é o valor default de uma referência de objeto definido como uma instância de um *Object*?
16. Por que precisamos de construtor em Java?
17. Porque precisamos de construtor default em Java?
18. Qual é o valor retornado pelo construtor Java?
19. Podemos herdar de um construtor?
20. Porque construtores não podem ser *final*, *static* ou *abstract* em Java?
21. Qual o propósito da palavra-chave *this* em Java?
22. Herança
23. Qual classe em Java é super classe de todas as outras?
24. Por que Java não suporta herança multipla?
25. Em OOP, o que significa composição?
26. Como agregação e composição se diferem?
27. Por que não há ponteiros em Java?
28. Se não há ponteiros em Java, porque recebemos NullPointerException?
29. Qual o propósito da palavra-chave *super* em Java?
30. É possivel usar ambos *this()* e *super()* no mesmo construtor?
31. Qual o significado de clonagem de objetos (object cloning) em Java?
32. Em java, porque usamos variáveis *static*?
33. Porque não é uma boa prática criar variáveis estáticas (*static*) em Java?
34. Qual o propósito de métodos estáticos (*static*) em Java?
35. Porque marcamos o método *main* como estático (*static*) em Java?
36. Em qual cenário nos utilizamos um bloco estático?
37. É possível executar um programa sem definir um método *main*?
38. O que acontece quando o modificador *static* não é mencionado na assinatura do método *main*?
39. Qual a diferença entre um método estático *static* e um método de instância.
40. Qual é o outro nome de Method Overloading (sobrecarga de método)?
41. Como você vai implementar sobrecarga de método em Java?
42. Quais tipos de variações de argumentos são permitidos em sobregarga de método?
43. Porque não é possivel fazer sobrecarga de método mudando o tipo de retorno do método em Java?
44. É permitido sobrecarregar o método *main()* em Java?
45. Como se implementa sobrescrita (Overriding) de método em Java?
46. É permitido sobrescrever um método estático *static* em Java?
47. Porque Java não permite sobrescrita de um método estático?
48. É permitido sobrescrever um método sobrecarregado?
49. Qual a diferença entre sobrecarga de método e sobrescrita de método em Java?
50. Java permite funções virtuais?
51. O que quer dizer tipo de retorno covariante em Java?
























