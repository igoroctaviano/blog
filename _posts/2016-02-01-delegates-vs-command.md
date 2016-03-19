---
layout: post
title: "Delegates vs Command Pattern"
date: 2016-02-01 00:11:00
image: '/assets/img/delegates-vs-command/main.png'
description: 'Os delegates: um dos poucos aspectos exclusivos do .NET. Como eles são úteis?'
main-class: 'patterns'
color: '#EB7728'
tags: patterns c#
categories:
introduction: "Os delegates: um dos poucos aspectos exclusivos do .NET. Como eles são úteis?"
---

### Aqui está a declaração de um delegate. Pode levar algum tempo para se acostumar com a sintaxe.

Visando usar o delegate *Operation*, nós vamos precisar de alguns métodos que correspondem a forma *double (double, double)*.

{% highlight cs %}
private delegate double Operation(double a, double b);
{% endhighlight %}

{% highlight cs %}
public static double Add(double a, double b)
{
   return a + b;
}
  
public static double Subtract(double a, double b)
{
   return a - b;
}
 
public static double Multiply(double a, double b)
{
   return a * b;
}

public static double Divide(double a, double b)
{
   return a / b;
}
{% endhighlight %}

Não há nada de especial nisso. Agora para criar uma instância do delegate *Operation*.

{% highlight csharp %}
Operation math = new Operation(Add)
{% endhighlight %}

Novamente a sintaxe pode lhe deixar um pouco confuso. A linha representada, inicia uma instância de *Operation*
com o método *Add* e a armazena em uma variável chamada *math*. Para usar *math*, você ira chamar o método *math* como se estivesse
chamando um método qualquer.

{% highlight csharp %}
double result = math(1, 2);
Console.WriteLine("result: {0}", result);
>> 3
{% endhighlight %}

Chamando *math* com os parâmetros 1 e 2, cuja atualmente atuando como o método *Add*, com os mesmos parâmetros, produz o resultado 3.
O comportamento oposto pode ser conquistado utilizando o método *Subtract* ao invés de usar *Add*.

{% highlight csharp %}
Operation math = new Operation(Subtract);
double result = math(1, 2);
Console.WriteLine("result: {0}", result);
>> -1
{% endhighlight %}

*math* apenas delegou a chamada com os parâmetros 1 e 2 ao método *Subtract* então o resultado foi -1. Até agora isso não é lá muito útil. 

Nós podemos jogar os métodos para o delegate e chama-los por meio dele, mas isso é apenas um monte de trabalho extra.
A força dos Delegates aparecem na jogada quando você não faz idéia de qual método irá utilizar. **Neste caso
a decisão seria feita em tempo de execução e não em tempo de compilação**.

Assuma que o código abaixo foi usado em um sistema bancário. A ação mais frequente em um sistema bancário é ajustar
o balanceamento de contas.

{% highlight csharp %}
private double balance = 0;
public void AdjustBalanceBy(double adjustment, Operation operation)
{
     double newBalance = operation(balance, adjustment);
     LogAdjustment(balance, newBalance);
     balance = newBalance;
}
{% endhighlight %}

Note que *AdjustBalanceBy* recebe uma *Operation*, o que significa que poderia ser *Add*, *Subtract*, *Multiply* ou *Divide* a ser utilizado para ajustar o balancemento da conta.

Pode haver operações que nós não temos nem mesmo considerado ainda, operações ainda não requisitadas como *ApplyInterest*.
*AdjustBalanceBy* pode dar conta disso pra nós enquanto nós a dermos um delegate que irá chamar *ApplyInterest(double, double)*.

O código em *AdjustBalanceBy* nunca iria ter necessidade de ser modificado e isso é exatamente
como o princípio Open/Closed diz como deve ser. E como isso pode ser feito sem o uso dos delegates?
O Command Pattern funcionaria muito bem!

{% highlight csharp %}
public interface Operation
{
   double Run(double a, double b);
}
  
public class Add : Operation
{
   public double Run(double a, double b)
   {
       return a + b;
   }
}
 
public class Subtract: Operation
{
   public double Run(double a, double b)
    {
       return a - b;
   }
}
...
public void AdjustBalanceBy(double adjustment, Operation operation)
{
   double newBalance = operation.Run(balance, adjustment);
   LogAdjustment(balance, newBalance);
   balance = newBalance;
}
{% endhighlight %}

Tem um pouco mais de código sem o uso dos delegates, mas estamos a salvo daquela sintaxe excêntrica.
Considerando a extra complexidade de linguagem dos delegates, sinto que o Command Pattern
tem mais jeito pra coisa, neste caso. Ponto para o Command Pattern! 
Delegates 0 - Command Pattern 1.

### Que tal multicasting?
Os Delegates possuem essa habilidade chamada multicasting que o permite adicionar multiplas delegações. Por exemplo:

{% highlight csharp %}
Operator math = new Operator(Add);
math += new Operator(Subtract);
math += new Operator(Multiply);
math += new Operator(Divide);
math(1, 2);
{% endhighlight %}

Quando *math* é chamado ao final, todas as quatro operações são efetuadas. Neste caso, não é muito útil,
porém para algo tipo um botão, que quando pressionado, várias ações devem ocorrer, o multicasting é bastante conveniente.
Mas o que acontece com todos os valores retornados?

Cada um desses métodos combinados no delegate *math* acima, retorna um valor, porém *math* só pode retornar
um valor por vez. **As operações não vão transformando os mesmos numeros em uma sequência, simplesmente
são usados os mesmos valores colocados inicialmente nos parâmetros, sendo os retornos, individuais**.

{% highlight csharp %}
Operation math = new Operation(add);
double result = math(1, 2);
Console.WriteLine("result 1: {0}", result);
 
math += new Operation(subtract);
result = math(1, 2);
Console.WriteLine("result 2: {0}", result);
  
math += new Operation(multiply);
result = math(1, 2);
Console.WriteLine("result 3: {0}", result);
 
math += new Operation(divide);
result = math(1, 2);
Console.WriteLine("result 4: {0}", result);
 
OUTPUT
>>result 1: 3
>>result 2: -1
>>result 3: 2
>>result 4: 0.5
{% endhighlight %}

Interessante. Delegates que utilizam multicasting apenas retornam um valor da execução combinada. Isso sugere que 
multicasting deve apenas ser utilizada quando você não liga sobre qual o valor retornado.

O Command Pattern sozinho não compete com multicasting, porém junto com seu companheiro, o Composite Pattern,
a situação fica sob controle.

{% highlight csharp %}
public class Composite : Operation
{
      IList operations = new ArrayList();
  
      public double Run(double a, double b)
      {
          double result = 0;
          foreach(Operation o in operations)
              result = o.Run(a, b);
 
          return result;
     }
 
     public void AddOperation(Operation o)
     {
        operations.Add(o);
     }
}
{% endhighlight %}

Esta versão do Composite, imita o manuseio do delegate quanto aos valores de retorno, mas ele poderia facilmente média-los, 
armazená-los em uma lista, ou fazer qualquer outra coisa que poderia imaginar.

O Composite Pattern oferece muito mais controle sobre execuções combinadas, então posso dizer que o Command Pattern merece mais um ponto. Delegates 0 - Command Pattern 2.

### Events
Oh.. Dê uma boa olhada nessa sintaxe.

{% highlight csharp %}
button.Click += new System.EventHandler(SomeAction);
{% endhighlight %}

Uma interpretação intuitiva: *button.Click* - Dizer ao botão que ele foi pressionado *button.Click +=* - Adicionar alguma coisa
ao clique do botão..Heh? *new System.EventHandler(SomeAction)* - *SomeAction* deve ser algum método que se encaixa na forma do *EventHandler*.

Uma instância do *EventHandler* é criada juntamente com *SomeAction*. Logo após esses passos lógicos, um desenvolvedor chega
a conclusão que *Click* deve ser uma propriedade pública do Botão do *EventHandler*, cuja é um delegate.

E o desenvolvedor estaria errado! *Click* é atualmente um *Event*. A declaração parece algo do tipo:

{% highlight csharp %}
public event System.EventHandler Click;
{% endhighlight %}

Toda a construção do *Event* é um pouco boba, porque, tanto quanto posso dizer, poderia ser facilmente substituida
com um campo (ou propriedade) pública. 1 ponto a menos aos delegates por flagrante mal uso de sintaxe.

Pontuação final delegates: -1; Command Pattern: 2

* * *
Esse post é de autoria de **[Micah Martin](https://twitter.com/slagyr)** que é o cofundador da [8th Light](https://8thlight.com/) e é conhecido pelo seu trabalho na área de open source como [FitNesse](https://github.com/unclebob/fitnesse), [Limelight](https://blog.8thlight.com/micah-martin/2013/07/19/limelight-lives-clojure-tool-chain.html), [Joodo](https://github.com/slagyr/joodo) e [Speclj](https://github.com/slagyr/speclj). E de curiosidade, ele é filho do Robert Martin (conhecido como **[Uncle Bob](https://twitter.com/unclebobmartin)**) que é autor de vários livros conhecidos dos desenvolvedores, que altamente recomendo a todos que não deixem de dar uma boa olhada! Para mais informações, acesse [aqui](https://sites.google.com/site/unclebobconsultingllc/books).

Você também pode acessar a publicação original feita por Micah no blog do 8th Light acessando [aqui](https://blog.8thlight.com/micah-martin/2006/09/07/delegates-vs-command-pattern.html).

