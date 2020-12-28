---
layout: post
title: "Dicas e Armadilhas em C#"
date: 2016-02-01 00:11:00
image: '/assets/img/dicas-e-armadilhas-em-c#d/main.png'
description: ''
main-class: 'dev'
color: '#0000FF'
tags: c#
categories:
introduction: ""
---
 
## O operador null-coalescing
<sub>A tradução de coalescing é coagular, aderir, amalgamar, juntar...etc</sub>

Provavelmente alguma vez você já fez algo parecido com esse código abaixo e
provavelmente você não sabia que podia ser feito com o operador null-coalescing:

```cs
// Código sem o operador null-coalescing
var nome = BuscarAlgumNomeEmAlgumLugar();
if (nome == null)
{
    resultado = "nenhum nome foi dado.";
}
else
{
    resultado = nome;
}

// Código com o operador null-coalescing
var nome = "Igor";
var resultado = nome ?? "nenhum nome foi dado.";
// Saída: Igor

nome = null;
resultado = nome ?? "nenhum nome foi dado.";
// Saída: nenhum nome foi dado.

// Também podemos usar com atributos que podem ser nulo
int? idade = null;
resultado = idade ?? 0
// Saída: 0

// E também encadear os operadores
int? idadeLocalPadrao = null;
int idadeGlobalPadrao = 99;

idade = null;
resultado = idade ?? idadeLocalPadrao ?? idadeGlobalPadrao;
// Saída: 99
```

Como podemos ver, o resultado é igual a *nome* se *nome* já possui algum valor atribuido.
Caso contrário, é resgatado o valor ao lado direito do perador **??**.

## O perigo de chamar métodos virtuais dentro de construtores

Quando estamos trabalhando com classes com membros virtuais que podem ser sobreescritos (*override*), 
é uma boa ideia não chamar esses membros dentro de construtores, pois isso pode ser um tanto perigoso.
O autor da sub classe  (numa situação de herança) talvez não saiba que o construtor dependa desse método
para implementar alguma coisa corretamente. Vamos ao exemplo do perigo que pode ocorrer:

```cs
public class ClasseBase
{
    private int comprimento;
    protected string nome;

    public BaseClass()
    {
        InitNome();

        comprimento = nome.Length;
    }

    protected virtual void InitNome()
    {
        nome = "Igor";
    }
}
```

Temos uma classe chamada *ClasseBase*, em seu construtor há uma chamada para o método protegido
*InitNome* definido logo abaixo, esse método atribui o nome *"Igor"* à variável nome. O contrutor continua e
artibui à variável comprimento o comprimento da variável tipo *string* *nome*.

Ok, então agora vamos adicionar mais coisa no jogo aqui. Uma classe herdeira de *ClasseBase* chamada *ClasseDerivada*:

```cs
public class ClasseDerivada : ClasseBase
{
    protected override void InitNome()
    {
        nome = null;
    }
}
```

Na classe derivada, foi sobrescrito o método virtual *InitNome*. O autor da *ClasseDerivada* decidiu que o valor
default para a variável *nome* deve ser *null* (tipo nulo).

Tente instânciar a classe derivada e ver o que acontece.. você vai receber uma exceção de referência nula, mas porque?
porque quando você instância a classe derivada, o construtor da classe base, mãe desta classe, vai chamar o método
vritual *InitNome* no qual foi sobrescrito nessa classe derivada, no qual agora o nome é igual a nulo. Sendo assim,
quando o construtor tentar pegar o comprimento da variável *nome*, logo após executar o método virtual *InitNome*, vai acontecer
que agora o nome é nulo e nulo não possui comprimento, nulo é nulo (não há referência nessa variável).

Então é por isso que não se deve ficar colocando chamadas de métodos virtuais em construtores.
 
## Métodos e tipos parciais

Tipos parciais nos permite dividir a definição de um tipo entre vários arquivos. Por exemplo: uma classe pode
ser especificada em mais de um arquivo *.cs*. 

Neste exemplo estou criando uma nova instância de um tipo parcial e estou chamando os métodos *AlgumMetodo* e *AlgumOutroMetodo*.
Nada diferente até então..

```cs
// Arquivo: TiposParciaisEMetodos.cs
public class TiposParciaisEMetodos
{
    public void Examplo()
    {
        var a = new UmTipoParcial();

        a.AlgumMetodo();
        a.AlgumOutroMetodo();
    }
}
```

Agora se olharmos para a definição de *UmTipoParcial*. Podemos ver que nós apenas temos o método *AlgumOutroMetodo* definido.

```cs
// Arquivo: UmTipoParcial.cs
partial class UmTipoParcial 
{
    public void AlgumOutroMetodo() { }

    partial void UmMetodoParcial()
    {
        // ...
    }
}
```

O método *AlgumMetodo* não está em lugar algum. (Vamos voltar a falar sobre esse método *UmMetodoParcial* em breve..)

```cs
// Arquivo: TiposParciaisEMetodos.cs
public class TiposParciaisEMetodos
{
    public void Exemplo()
    {
        var a = new UmTipoParcial();

        a.AlgumMetodo();
        a.AlgumOutroMetodo();
    }
}
```

Então fica a pergunta, a onde está esta definido esse método *AlgumMetodo*? 
Bom, neste exemplo, ela foi divido em outo arquivo, chamado *UmTipoParcial.generated.cs*.
Não estamos utilizando herança aqui, é simplesmente uma maneira de dividir a definição em multiplos arquivos.

```cs
// Arquivo: UmTipoParcial.generated.cs
partial class UmTipoParcial
{
    public void AlgumMetodo()
    {
        UmMetodoParcial();
    }
    
    partial void UmMetodoParcial();
}
```

Classes parcials trazem benefício quando estamos trabalhando com código gerado. O código gerado, pode fazer a classe parcial,
o que nos permite criar um arquivo *.cs* irmão e adicionar novos métodos. Desta forma, se o código gerado originalmente
for regenerado, não vamos perder os métodos adicionais nos adicionamos. Sendo que a parte daquela classe que foi dividida em que 
escrevemos o código na mão vai permanecer intacta.

Para dizermos que uma classe é do tipo parcial, a palavra-chave *partial*:
```cs
partial class NomeDaClasse  // Você pode aplicar partial em todas as partes que devem ser irmãs
{
  //...
}
```

Quando estamos tralhando com classes parcials, também podemos trabalhar com métodos parciais.
Podemos ver que em nosso arquivo gerado *UmTipoParcial.generated.cs* há um método parcial chamado *UmMetodoParcial*:

```cs
// Arquivo: UmTipoParcial.generated.cs
partial class UmTipoParcial
{
    public void AlgumMetodo()
    {
        UmMetodoParcial();
    }
    
    partial void UmMetodoParcial();
}
```

Métodos parcials devem retornar void e eles são implicitamente privados no escopo. Neste exemplo, é declarado
um método que é parcial, mas... repare que não há corpo neste método. Isso significa que o corpo deste método
pode ser fornecido em outro arquivo. Se voltarmos para o código em que escrevemos a mão:

```cs
// Arquivo: UmTipoParcial.cs
partial class UmTipoParcial 
{
    public void AlgumOutroMetodo() { }

    partial void UmMetodoParcial()
    {
        // ...
    }
}
```

Podemos ver que aqui nos fornecemos um copo ao método parcial *UmMetodoParcial*.
E voltando novamente para o nosso código gerado (parcial):

```cs
// Arquivo: UmTipoParcial.generated.cs
partial class UmTipoParcial
{
    public void AlgumMetodo()
    {
        UmMetodoParcial();
    }
    
    partial void UmMetodoParcial();
}
```

Estamos chamando o método parcial dentro do método *AlgumMetodo*, e quando essa chamada é feita,
lembra do corpo que implementamos a mão na nossa classe parcial não gerada? então, aquele corpo será executado.

Métodos parcials permitem os código gerados a prover maneiras da parte feita a mão, se enganchar nesses métodos.
Se comentarmos o corpo que fizemos para o método da classe gerada anteriomente, não irá causar erro algum. Quando não definimos a implementação para o método, o compilador efetivamente compila pra fora (remove) a declaração do método e onde ele foi chamado, por isso não recebemos nenhum tipo de erro quando executamos o código.

Então, de forma resumida, tipos parciais são uma maneira de dividir a definição de um tipo em entre vários arquivos.

## Conversões em tempo de execução com Convert.ChangeType
Tem vezes que queremos converter um tipo para outro em tempo de execução (Runtime) porém
não sabemos o tipo ainda, nessas situações, podemos usar o método *ChangeType* que recebe como parâmetro
o valor que vai ser convertido e o tipo que queremos que essa entrada seja convertida.

No exemplo abaixo declarei algumas variáveis.. O valor inicial é atributo o valor *"99"* em formato *string*.
Para primeira conversão, quero o tipo alvo *int*. Então, chamei o método *ChangeType* passando o valor inicial
juntamente com o tipo alvo em que quero converter (*int*).

```cs
public class ConversoesRuntime
{
    public void Exemplo()
    {
        Type tipoAlvo;
        Type tipoConvertido;
        object valorConvertido;
        object valorInicial;

        valorInicial = "99";
        tipoAlvo = typeof(int);

        valorConvertido = Convert.ChangeType(valorInicial, tipoAlvo);
        tipoConvertido = valorConvertido.GetType();

        tipoAlvo = typeof(double);

        valorConvertido = Convert.ChangeType(valorInicial, tipoAlvo);
        tipoConvertido = valorConvertido.GetType();
    }
}
```

Se debugarmos esse método, o valor vai ser convertido para o tipo inteiro, passando de *"99"* *string*
para *99* *int*. Se continuarmos a execução, quando a variável *tipoAlvo* for atributida para o tipo *double*
o mesmo vai acontecer, agora do tipo *int* para o tipo *double*, ou seja, *99* para *99.0*.

## Expondo tipos e membros internos (*internal*) para assemblies

Em cenários mais avançados, há momentos em que precisamos fazer com que alguns membros internos (*internal*) que são protegidos, estejam disponíveis para outras assemblies, embora seja uma técnica avançada, ela pode ser útil em alguns casos.

Vejamos o examplo:

```cs
public class ExemplosInternos
{
    public void Exemplo()
    {
        var p = new PessoaComCoisasInternas();
        
        p.Ola();
        p.Mundo();
        
        var pi = new PessoaInterna();
    }
}

public class PessoaComCoisasInternas
{
    public void Ola()
    {
        // ...
    }
    
    internal void Mundo()
    {
        // ...
    }
}

internal class PessoaInterna
{
    public void Adeus()
    {
        // ...
    }
}

```

Se você tentar rodar esse exemplo, vai perceber erros de compilação dizendo que não há definição do método *Mundo* e nenhum método de extensão *Mundo* para a classe *PessoaComCoisasInternas*... ou seja, não podemos acessar o método *Mundo* e também não podemos criar uma instância de uma *PessoaInterna*. Se você observar, vai ver que na classe PessoaComCoisasInternas há o método público *Ola* e o método *Mundo* está definido como *internal*. Mais abaixo, a classe interna *PessoaInterna*, temos o método público *Adeus*.

Se quisermos que o método interno *Mundo* e também a classe *PessoaInterna* sejam acessados fora da assembly atual, nos podemos
usar o atributo de visibilidade para os expor à determinadas assemblies. Mas como?

Bom, no projeto C# (quando gerado pelo Visual Studio) você tem um arquivo chamado *AssemblyInfo.cs* e dentro dele
você tem o atributo de visibilidade:

```cs
// Arquivo: AssemblyInfo.cs

// ...

[assembly: InternalsVisibleTo("Demos")]
// [assembly: InternalsVisibleTo("Demos, PublicKey=xxxx")]

// ...
```

No atributo, você coloca como primeiro parâmetro o projeto em que você quer compartilhar acesso de membros internos,
se você executar o exemplo anterior (considerando que os membros que são internos estejam em assemblies diferentes, neste caso seria um projeto chamado Demos querendo acessar o projeto proprietário do arquivo AssemblyInfo.cs) novamente com esse atributo já definido, você não vai receber erros como acontecia anteriormente. 

Caso a assembly seja de nome forte <sub> Um assembly com nome forte é gerado usando a chave particular que corresponde à chave pública distribuída com a montagem e a própria montagem. O assembly inclui o manifesto do assembly, que contém os nomes e hashes de todos os arquivos que compõem o assembly.</sub> você vai precisar de um atributo overload *[assembly: InternalsVisibleTo("Demos, PublicKey=xxxx")]*, que estava comentado no exemplo anterior, onde agora temos mais um parâmetro que é a chave pública.

O atributo de visibilidade interna pode ser usado em vários cenários, como por exemplo, quando queremos expor coisas internas para podermos testa-las.






