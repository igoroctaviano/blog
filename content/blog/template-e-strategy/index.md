---
layout: post
title: "Template Method e Strategy"
date: 2016-02-09 00:49:00
image: '/assets/img/template-pattern-e-strategy/main.png'
description: 'Herança ou delegação: capturando a essência dos algoritmos.'
main-class: 'patterns'
color: '#EB7728'
tags: patterns c#
categories:
introduction: "Herança ou delegação: capturando a essência dos algoritmos."
---

### Separar algoritmos dos detalhes de sua implementação, óh "REUTILIZAÇÃO".
*A melhor estratégia na vida é a diligência.  -Provérbio chines*

Acho super interessante quando o estudo é feito pela diferença, ou seja, quando se estuda algum campo utilizando heurísticas e até mesmo metáforas. Mas como assim? bom, podemos pensar que nós nos demos conta de alguma coisa pela noção de uma variação da mesma, como a própria temperatura, em que sabemos que existe, porque afinal, existem variações dela, mas que se fosse uma constante, como é que a teríamos percebido? Então, acho interessante estudar comparando, é mais fácil e interessante também. Mas como tudo tem outro lado, nem TUDO é possível estudar assim, mas neste caso, ficou bem mais produtivo e esclarecedor.

Ambos **Template Method** e **Strategy** [(padrões de projeto)](https://en.wikipedia.org/wiki/Design_Patterns) resolvem o problema de separar um algoritmo genérico de um contexto detalhado. Nós frequentemente vemos a necessidade disso no design do software. Nós temos um algoritmo que é genéricamente aplicável. Em ordem para conformar com o Dependency-Inversion Principle (DIP), nós queremos
nos assegurar que o algoritmo genérico não dependa dos detalhes de sua implementação. Ainda mais,
nós queremos que este algoritmo genérico e os seus detalhes de implementação dependam em abstrações.

## TEMPLATE METHOD

Considere todos os programas em que você já tenha escrevido. Vários provavelmente tem essa estrutura *main loop* fundamental:
```cs
1  Initialize();
2  While (!Done()) // main loop
3  {
4    Idle(); // do something useful.
5  }
6  Cleanup();
```

Antes de mais nada, nós inicializamos a aplicação. Então nós entramos no *main loop*, onde nós fazemos o
que quer que o programa necessite fazer. Nós talvez processamos eventos de interface de usuário ou talvez algumas
gravações no banco de dados. Finalmente, uma vez que terminamos, saimos do *main loop* e limpamos tudo antes de sair.

Essa estrutura é tão comum que podemos a capturar em uma classe que vamos chamar de *Application*. Então vamos poder reutilizar essa classe para qualquer novo programa que possamos criar. Pense só! Nunca mais vamos ter que escrever esse *loop* denovo!¹

<sub>1. Eu te vendo o meu loop.</sub>

Por exemplo, considere o código abaixo:
```cs
1  public class FtoCRaw
2  {
4    public static void Main(string[] args)
5    {
6      bool done = false;
7      while (!done)
8      {
9        string fahrString = Console.ReadLine();
10       if (fahrString == null || fahrString.Length == 0)
11         done = true;
12       else
13       {
14         double fahr = Double.Parse(fahrString);
15         double celsius = 5.0/9.0*(fahr - 32);
16         Console.WriteLine("F={0}, C={1}", fahr, celsius);
17       }
18     }
19     Console.WriteLine("ftoc exit");
20   }
21 }
```

Esse programa tem todos os elementos da estrutura *main loop* anterior. Faz uma leve inicialização, faz o seu trabalho em um *main loop* (loop principal) e então limpa e sai.

Nós podemos separar essa estrutura fundamental do programa *ftoc* (FahrenheitToCelsius) utilizando o **Template Method**. Esse padrão aloca todo o código genérico em um método implementado em uma classe base abstrata. O método implementado captura o algoritmo genérico, mas, adia todos os detalhes a métodos abstratos da classe base.

Então, como exemplo, vamos capturar a estrutura *main loop* em uma classe base abstrata chamada *Application*. Observe o código:

```cs
1  public abstract class Application
2  {
3    private bool isDone = false;
4    
5    protected abstract void Init();
6    protected abstract void Idle();
7    protected abstract void Cleanup();
8    
9    protected void SetDone()
10   {
11     isDone = true;
12   }
13   
14   protected bool Done()
15   {
16     return isDone;
17   }
18   
19   public void Run()
20   {
21     Init();
22     While (!Done())
23       Idle();
24     Cleanup();
25   }
26 }
```

Essa classe descreve uma aplicação de uma estrutura de *main loop* genérica. Podemos ver o *main loop*
na função implamentada *Run*. Nós também podemos ver que todo o trabalho esta sendo colocado aos métodos abstratos
*Init*, *Idle* e *Cleanup*. O método Init cuida de qualquer inicialização, *Idle* faz a principal parte do trabalho e será chamado
repetidamente até que o trabalho esteja feito. O *Cleanup* faz qualquer necessidade antes que saia do método.

Nós podemos reescrever a classe *ftoc* simplesmente herdando de *Application* e implementando os métodos abstrados. Exemplo:

```cs
1  public class FtoCTemplateMethod : Application
2  {
3    private TextReader input;
4    private TextWriter output;
5   
7    public static void Main(string[] args)
8    {
9      new FtoCTemplateMethod().Run();
10   }
11  
12   protected override void Init()
13   {
14     input = Console.In;
15     output = Console.Out;
16   }
17  
18   protected override void Idle()
19   {
20     string fahrString = Console.ReadLine();
21     if (fahrString == null || fahrString.Length == 0)
22        SetDone();
23      else
24      {
25        double fahr = Double.Parse(fahrString);
26        double celsius = 5.0/9.0*(fahr - 32);
27        Console.WriteLine("F={0}, C={1}", fahr, celsius);
28      }
29   }
30  
31   protected override void Cleanup()
32   {
33     output.WriteLine("ftoc exit");
34   }
35 }
```

É fácil ver como a antiga aplicação *ftoc* (Fahrenheit to Celsius) foi encaixada ao padrão **Template Method**.

### Abuso de padrões

Até então, você deve estar pensando "Sério? Esse cara realmente me espera usar a classe *Application* para todos os novos aplicativos? Isso não me trouxe nenhuma vantagem significativa, e complicou ainda mais o problema."

Er...Sim.. :^(

O exemplo foi escolhido porque ele era simples e demonstrou ser uma boa plataforma para mostrar os mecanismos do padrão de projeto **Template Method**.
Mas do outro lado, eu realmente não recomendo construir a aplicação *ftoc* como foi feita.

Este é um bom exemplo de abuso de padrões. Utilizando o padrão **Template Method** para essa aplicação em particular é ridículo. Isso complica o programa e faz ele ficar maior. Encapsular o *main loop* de toda aplicação do universo meio que pareceu algo lindo e maravilhoso de se fazer quando nós começamos a falar sobre isso, mas em uma aplicação real isso não é produtivo.

Padrões de Projeto são coisas maravilhosas. Eles podem lhe ajudar com vários problemas de design. Mas o fato que eles existem não
significa que eles devem sempre ser utilizados. Neste caso, o **Template Method** foi aplicável ao problema mas seu uso não foi recomendado. **O custo do padrão foi maior que o benefício que ele trouxe**.

### Bubble Sort

Então, vamos olhar para um exemplo um pouco mais útil. Observe que como *Application*, uma aplicação com o algoritmo *Bubble Sort* é um exemplo fácil de entender, e então, se faz uma ferramenta poderosa de ensino. Embora, nenhuma pessoa em sua sanidade iria utilizar o algoritmo *Bubble Sort* se ela tiver que fazer um número significante de ordenações. Existem *muitos* outros algoritmos melhores pra isso.

```cs
1  public class BubbleSorter
2  {
3    static int operations = 0;
4    public static int Sort(int[] array)
5    {
6      operations = 0;
7      if (array.Length <= 1)
8        return operations;
9        
10    for (int nextToLast = array.Length-2; nextToLast >= 0; nextToLast--)
11       for (int index = 0; index <= nextToLast; index++)
12         CompareAndSwap(array, index);
13         
14     return operations;
15   }
16   
17   private static void Swap(int[] array, int index)
18   {
19     int temp = array[index];
20     array[index] = array[index + 1];
21     array[index + 1] = temp;
22   }
23   
24   private static void CompareAndSwap(int[] array, int index)
25   {
26     if (array[index] > array[index + 1])
27       Swap(array, index);
28     operations++;
29   }
30 }
```

A classe *BubbleSorter* sabe como ordenar um vetor de inteiros, utilizando o algoritmo *Bubble Sort*. O método *Sort*
da classe, contém o algoritmo que sabe como fazer um *Bubble Sort*. Os dois métodos auxiliares -*Swap* e *CompareAndSwap* -Lidam
com os detalhes de inteiros, etores e também manipula a mecânica que o algoritmo dentro de *Sort* precisa.

Utilizando o padrão **Template Method**, nós podemos separar o algorito *Bubble Sort* para dentro de uma classe base abstrata chamada
*BubbleSorter*. A classe *BubbleSorter* contém uma implementação de função chamada *Sort* que chama um método abstrato chamado *OutOfOrder* e outro chamado *Swap*. O método *OutOfOrder* compara dois elementos adjacentes no vetor e retorna *true* se os elementos estão fora de ordem. O método *Swap* troca as duas celulas adjacentes no vetor que estejam fora de ordem.

O método *Sort* não sabe nada sobre o vetor; nem ele liga sobre qual o tipo do objeto que está sendo armazenado no vetor. Ele simplesmente chama *OutOfOrder* para vários índices do vetor e determina quando esses índices devem ser trocados. Observe:

```cs
1  public abstract class BubbleSorter
2  {
3    private int operations = 0;
4    protected int length = 0;
5  
6    protected int DoSort()
7    {
8      operations = 0;
9      if (length <= 1)
10       return operations;
11
12     for (int nextToLast = length-2; nextToLast >= 0; nextToLast--)
13       for (int index = 0; index <= nextToLast; index++)
14       {
15         if (OutOfOrder(index))
16           Swap(index);
17         operations++;
18       }
19      
20     return operations;
21   }
22  
23   protected abstract void Swap(int index);
24   protected abstract bool OutOfOrder(int index);
25 }
```

Dado *BubbleSorter*, nós podemos criar simples derivações que podem ordenar vários outros tipos de objeto. Por exemplo, podemos
criar *IntBubbleSorter*, no qual ordena um vetor de inteiros e *DoubleBubbleSorter*, que faz ordenação de objetos de ponto flutuante. Por exemplo:

```cs
1  public class IntBubbleSorter : BubbleSorter
2  {
3    private int[] array = null;
4   
5    public int Sort(int[] theArray)
6    {
7      array = theArray;
8      length = array.Length;
9      return DoSort();
10   }
11  
12   protected override void Swap(int index)
13   {
14     int temp = array[index];
15     array[index] = array[index + 1];
16     array[index + 1] = temp;
17   }
18  
19   protected override bool OutOfOrder(int index)
20   {
21     return (array[index] > array[index + 1]);
22   }
23 }
```

```cs
1  public class DoubleBubbleSorter : BubbleSorter
2  {
3    private double[] array = null;
4   
5    public int Sort(double[] theArray)
6    {
7      array = theArray;
8      length = array.Length;
9      return DoSort();
10   }
11  
12   protected override void Swap(int index)
13   {
14     double temp = array[index];
15     array[index] = array[index + 1];
16     array[index + 1] = temp;
17   }
18  
19   protected override bool OutOfOrder(int index)
20   {
21     return (array[index] > array[index + 1]);
22   }
23 }
```

O padrão **Template Method** mostra uma das formas classicas de reutilização em Programação Orientada a Objetos. Algoritmos genéricos são colocamos em uma classe base e herdados para diferentes contextos. Mas essa técnica tem seus custos. **Herança** é uma relação muito forte. Derivações estão muito amarradas a suas classes base (classes mãe).

Como podemos observar, os métodos *OutOfOrder* e *Swap* de *IntBubbleSorter* são exatamente o que outros tipos de algoritmos de ordenação precisam. Mas não tem nenhuma forma de reutilizar *OutOfOrder* e *Swap* em outros algoritmos de ordenação. Herdando de *BubbleSorter* nós condenamos *IntBubbleSorter* a ser eternamente amarrado ao *BubbleSorter*. O padrão **Strategy** dispõe de outra opção.

## STRATEGY

O padrão **Strategy** resolve o problema da inversão de dependência do algoritmo genérico e os detalhes de implementação em uma maneira bem diferente. Considere novamente o abuso de padrão do exemplo *Application* apresentado anteriormente.

Ao invés de colocarmos a aplicação do algoritmo genérico em uma classe base abstrata, nós vamos a transportar para uma classe *concreta* chamada *ApplicationRunner*. Nós definimos os métodos abstratos que o algoritmo genérico deve chamar dentro da *interface* chamada *Application*. Nós derivamos *FtoCStrategy* dessa interface e passamos ela para a *ApplicationRunner*. *ApplicationRunner* então delega para essa interface.

```cs
1  public class ApplicationRunner
2  {
3    private Application itsApplication = null;
4   
5    public ApplicationRunner(Application app)
6    {
7      itsApplication = app;
8    }
9  
10   public void run()
11   {
12     itsApplication.Init();
13     while (!itsApplication.Done())
14       itsApplication.Idle();
15     itsApplication.Cleanup();
16   }
17 }
```

```cs
1  public interface Application
2  {
3    void Init();
4    void Idle();
5    void Cleanup();
6    bool Done();
7  }
```

```cs
1  public class FtoCStrategy : Application
2  {
3    private TextReader input;
4    private TextWriter output;
5    private bool isDone = false;
6    
7    public static void Main(string[] args)
8    {
9      (new ApplicationRunner(new FtoCStrategy())).run();
10   }
11  
12   public void Init()
13   {
14     input = Console.In;
15     output = Console.Out;
16   }
17  
18   public void Idle()
19   {
20     string fahrString = input.ReadLine();
21     if (fahrString == null || fahrString.Length == 0)
22       isDone = true;
23     else
24     {
25       double fahr = Double.Parse(fahrString);
26       double celcius = 5.0/9.0*(fahr - 32);
27       output.WriteLine("F={0}, C={1}", fahr, celcius);
28     }
29   }
30    
31   public void Cleanup()
32   {
33     output.WriteLine("ftoc exit");
34   }
35    
36   public bool Done()
37   {
38     return isDone;
39   }
40 }
```

Deve estar bem claro que essa estrutura tem ambos benefícios e custos sobre a estrutura do **Template Method**. **Strategy**
envolve mais classes e mais indirecionamento que o **Template Method**. O ponteiro de delegação dentro de *ApplicationRunner* fica sujeito a um custo um pouco maior em termos de *tempo de execução* e *espaço* do que ficaria a herança. Mas pelo outro lado, se tivermos várias aplicações diferentes a serem executadas, nós podemos reutilizar a instância de *ApplicationRunner* e a passar para várias implementações de *Application*, reduzindo o overhead de espaço de código.

Nenhum desses custos e benefícios estão decidindo a substituição. Na maioria dos casos, nenhum deles importa, na minoria. No caso típico, o que é mais preocupante é a extra classe que é exigida pelo **Strategy**. Embora, há outras coisas a serem consideradas.

Considere uma implementação do *Bubble Sort* que utiliza o padrão **Strategy**:

```cs
1  public class BubbleSorter
2  {
3    private int operations = 0;
4    private int length = 0;
5    private SortHandler itsSortHandler = null;

6    public BubbleSorter(SortHandler handler)
7    {
8      itsSortHandler = handler;
9    }
10   
11   public int Sort(object array)
12   {
13     itsSortHandler.SetArray(array);
14     length = itsSortHandler.Length();
15     operations = 0;
16     
17     if (length <= 1)
18       return operations;
19       
20     for (int nextToLast = length - 2; nextToLast >= 0; nextToLast--)
21       for (int index = 0; index <= nextToLast; index++)
22       {
23         if (itsSortHandler.OutOfOrder(index))
24           itsSortHandler.Swap(index);
25         operations++;
26       }
27       
28     return operations;
29   }
```

```cs
1  public interface SortHandler
2  {
3    void Swap(int index);
4    bool OutOfOrder(int index);
5    int Length();
6    void SetArray(object array);
7  }
```

```cs
1  public class IntSortHandler : SortHandler
2  {
3    private int[] array = null;
4    
5    public void Swap(int index)
6    {
7      int temp = array[index];
8      array[index] = array[index + 1];
9      array[index + 1] = temp;
10   }
11
12   public void SetArray(object array)
13   {
14     this.array = (int[]) array;
15   }
16
17   public int Length()
18   {
19     return array.Length;
20   }
21
22   public bool OutOfOrder(int index)
23   {
24     return (array[index] > array[index + 1]);
25   }
26 }
```

Note que a classe *IntSortHandler* não sabe nada sobre o *BubbleSorter*, sendo assim, não há dependência nenhuma sobre a implementação do algoritmo *Bubble Sort*. Este não é o caso quando utilizamos o **Template Method**. Olhando para trás, você pode ver que *IntBubbleSorter* depende diretamente do *BubbleSorter*, a classe que contém o algoritmo do *Bubble Sort*.

A técnica do **Template Method** parcialmente não cumpre um dos princípios [SOLID](https://en.wikipedia.org/wiki/SOLID_%28object-oriented_design%29) chamado Dependency-Inversion Principle (DIP). A implementação dos métodos *Swap* e *OutOfOrder* depende diretamente no *Bubble Sort*. A técnica do **Strategy** não há essa dependência. Dessa maneira, nós podemos usar *IntSortHandler* com a implementações *Sorter*, e outras além de *BubbleSorter*.

Por exemplo, nós podemos criar uma variação do *Bubble Sort* que termina sua execuçã mais cedo se em uma passagem do vetor, o encontra em ordem. Abaixo, o *QuickBubbleSorter* pode também utilizar *IntSortHandler* ou qualquer outra classe implementadora da interface *SortHandler*.

```cs
1  public class QuickBubbleSorter
2  {
3    private int operations = 0;
4    private int length = 0;
5    private SortHandler itsSortHandler = null;
6    
7    public QuickBubbleSorter(SortHandler handler)
8    {
9      itsSortHandler = handler;
10   }
11   
12   public int Sort(object array)
13   {
14     itsSortHandler.SetArray(array);
15     length = itsSortHandler.Length();
16     operations = 0;
17     
18     if (length <= 1)
19       return operations;
20
21     bool thisPassInOrder = false;
22     for (int nextToLast = length-2; nextToLast >= 0 && !thisPassInOrder;
23     nextToLast--) {
24       thisPassInOrder = true; //potenially.
25       for (int index = 0; index <= nextToLast; index++)
26       {
27         if (itsSortHandler.OutOfOrder(index))
28         {
29           itsSortHandler.Swap(index);
30           thisPassInOrder = false;
31         }
32         operations++;
33       }
34     }
35    
36     return operations;
37   }
38 }
```

Assim, o **Strategy** dispõe de um benefício extra sobre o **Template Method**. Enquanto o **Template Method** permite que um algoritmo genérico manipule várias implementações detalhadas possíveis, o **Strategy**, por totalmente se conformar com o (DIP), permite que cada implementação detalhada manipule vários algoritmos genéricos diferentes.

## Conclusão

O padrão **Template Method** é simples de se escrever e simples de usar mas é um tanto inflexível. **Strategy** é flexível mas você tem que criar uma classe a mais, instânciar um objeto a mais e amarrar o objeto extra ao sistema. Então a escolha entre eles depende em quando você precisa da flexibilidade do **Strategy** ou quando pode viver com a simplicidade do **Template**. Várias vezes optei pelo **Template Method** simplesmente porque ele é mais fácil de implementar e usar. Por exemplo, eu iria utilizar a solução pelo **Template Method** para o *Bubble Sort* a menos que eu realmente precisse de diferentes algoritmos de ordenação para o meu problema.

* * *
Bom, interessante né?

Este conteúdo foi baseado no livro [Agile Principles, Patterns, and Practices in C#](http://www.barnesandnoble.com/w/agile-principles-patterns-and-practices-in-c-robert-c-martin/1101636951?ean=9780131857254) de Robert Martin (conhecido como **[Uncle Bob](https://twitter.com/unclebobmartin)**) e seu filho **[Micah Martin](https://twitter.com/slagyr)**.

<sub>Recomendo a leitura e estudo deste livro.</sub>
