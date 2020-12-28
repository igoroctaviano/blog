---
layout: post
title: Um exemplo sobre MVC
date: 2016-02-01 00:11:00
image: '/assets/img/um-exemplo-sobre-mvc/main.png'
description: 'O padrão MVC: uma analogia a respeito deste padrão de arquitetura de software.'
main-class: 'patterns'
color: '#EB7728'
tags: patterns mvc
categories:
introduction: "Respostas sobre MVC, uma publicação bem interessante que encontrei no Stack Overflow a algum tempo atrás."
---

### Um acervo dentro do mundo de perguntas e respostas do Stack Overflow
Pesquisar no [Stack](https://stackoverflow.com) já virou parte da minha rotina de pesquisa em determinados assuntos..
E isso porque, pra mim, o mais interessante é que várias vezes, certas respostas são tão simples que economizam tempo de pesquisa. Os livros não deixam de ser essenciais fontes de conhecimento, mas.. no caso do Stack, a resposta é desenvolvida de forma resumida e sem rodeios, apartir da análise de quem pergunta, deterimina-se a complexidade da respota, ainda mais, é de fácil a complementação do conteúdo, sua atualização, por diversas pessoas do mundo, centralizando na chave da pergunta, um rico acervo de repostas "avaliáveis".

Segue abaixo uma analogia publicada em novembro de 2012 no Stack Overflow pelo usuário [JW01](http://programmers.stackexchange.com/users/6720/jw01), publicação posteriormente atualizada
sobre o padrão de arquitetura MVC.

### Analogia

Eu expliquei MVC para meu Pai assim:

MVC (Model, View, Controller) é um padrão para organizar o código em uma aplicação para aprimorar sua mantenabilidade.

Imagine um fotógrafo com sua câmera em um estúdio. A cliente o solicita que ele tire uma foto de uma caixa.

A caixa é o *model*, o fotógrafo é o *controller* e a câmera é o *view*.

Desde que a caixa não sabe sobre a câmera ou do fotógrafo, são completamente independentes. Essa separação permite o fotógrafo
andar em torno da caixa e posicionar a câmera a qualquer angulo e tirar qualquer foto/*view* que ele queira.

Arquiteturas que não seguem o padrão MCV, tendem de certa forma, a serem altamente interligadas (acopladas). Se a caixa, o fotógrafo e a câmera fossem um mesmo objeto, então, nós teriamos que separá-los, e então, reconstruir caixa e a câmera, toda vez que nós fossemos tirar uma foto. **Também, tirando a foto seria sempre como tirar uma selfie - e isso não é sempre fácil**.

***

### Uma explicação detalhada

MVC é tudo sobre seperação de conceitos.

O *model* é responsável pela gestão de dados do programa (tanto privada quanto dados do cliente). O *View/Controller* é responsável por fornecer o mundo exterior, com os meios para interagir com dados dos clientes do programa.

O *model* fornece uma interface interna (API) para permitir que outras partes do programa possa interagir com ela. O *View/Controller* fornece uma interface externa (GUI/CLI/web form/high-level IPC/etc.) para habilitar tudo que esteja fora do programa, se comunicar com ela.

O *model* é responsável por manter a integridade dos dados do programa, porque, se tal ficar corrompido, então é game over para todos. O *View/Controller* é responsável em manter a integridade da interface de usuário, se certificando-se de que todos os pontos de vista de texto *"views"* estão sendo visualizadas com valores atuais, desabilitando itens do menu que não se aplicam ao foco atual, etc.

O *model* não contém nenhum código de *View/Controller*; não há classes de widgets da GUI, nenhum código para colocar para fora as
caixas de diálogo ou receber entrada do usuário. O *View/Controller* não contém nenhum código do *model*; nenhum código de validação de URLs ou de realização de consultas SQL, e nenhum estado original se quer: todos os dados na posse de widgets é para fins de exibição, apenas, simplesmente um reflexo dos verdadeiros dados armazenados no *model*.

Agora, aqui está a prova de um verdadeiro projeto MVC: o programa deve, em essência, ser totalmente funcional, mesmo sem um *View/Controller* ligado a ele. Ok, o mundo externo irá ter problemas ao interagir com ele sob essa forma, mas, enquanto se sabe os encantamentos da API do *model* apropriado, o programa conseguirá segurar e manipular os dados normalmente.

Por que isso é possivel? Bom, a resposta é simples, é tudo graças ao baixo acoplamento entre a camada do *model* e a camada View/Controller. Embora, não seja a história completa. A chave para todo o Padrão MVC é a direção em que aquelas conexões de relação vão: TODAS as instruções seguem do *View/Controller* para o *model*. O *model* NUNCA diz o *View/Controller* o que fazer.

Porque? porque no MVC, enquanto o *View/Controller* é permitido a saber um pouco sobre o *model* (especificamente, a API do *model*), o *model* não é permitido saber nada sobre o *View/Controller*.

Porque? porque MCV é tudo sobre criar uma separação clara de conceitos.

Por quê? Para ajudar a evitar a complexidade do programa ir fora de controle em uma espiral, e enterrar o desenvolvedor, sob ela. Quanto maior for o programa, maior o número de componentes no programa. E quanto mais existem conexões entre esses componentes, mais difícil para os desenvolvedores manter/ampliar/substituir, componentes individuais, ou mesmo apenas, seguir como funciona todo o sistema. Pergunte a você mesmo: quando se olha para um diagrama da estrutura do programa, você preferiria ver uma árvore ou uma cama de gato? O padrão MVC evita o último, desativando relações circulares: B pode se conectar a A, mas A não pode se conectar a B. Neste caso, A é o *model* e B é o *View/Controller*.

A propósito, se você esta afiado, vai notar um problema com a restrição 'one-way' ou (uma direção) que acabamos de descrever: como pode o *model* informar o *View/Controller* de alterações nos dados do usuário do *model*, quando o *model* não é nem mesmo, permitido a saber, que o *View/Controller* nunca pense enviar menssagems a ele? Mas não se preocupe: há uma solução para isso, e é bastante limpa, mesmo que pareça um rodeio no início. Nos vamos voltar a isso em um momento.

Em termos práticos, então, um objeto *View/Controller* pode, via API do *model*, 1. dizer o *model* a fazer as coisas (executar comandos), e 2. dizer o *model* para dar-lhe as coisas (retornar dados). A camada *View/Controller* empurra instruções para a camada do *model* e puxa informações.

E é aí que o seu primeiro exemplo *MinhaListaDeControleManeira* dá errado, porque a API para essa classe requer que a informação seja empurradas para dentro, então você está de volta a ter um acoplamento de duas vias entre as camadas, violando as regras MVC e lhe despejando de volta para a arquitetura de cama de gato que você estava [presumivelmente] tentando evitar, em primeiro lugar.

Em vez disso, a classe *MinhaListaDeControleManeira* deve ir com o fluxo, puxando os dados de que necessita a partir da camada abaixo, quando ela precisar. No caso de um widget de lista, geralmente significa perguntar quantos valores existem e, em seguida, pedir para cada um desses itens, por sua vez, porque isso é sobre a mais simples e folgada maneira de fazê-lo e, portanto, mantém o acoplamento existente, a um mínimo. E se o widget quer, digamos, apresentar esses valores para o usuário em ordem alfabética, bom, então isso é sua prerrogativa; e sua responsabilidade, é clara.

Agora, uma última charada, como sugerido anteriormente: como é que você poderá manter a tela de interface do usuário sincronizada com o estado do *model* em um sistema baseado no MVC?

Aqui está o problema: muitos objetos *view* podem mudar de estado (stateful), por exemplo, uma caixa de seleção pode ser marcada ou desmarcada, um campo de texto pode conter algum texto editável. No entanto, MVC determina que todos os dados do usuário sejam armazenados na camada *model*, assim, todos os dados na posse das outras camadas, para fins de exibição (o estado caixa de seleção, o texto atual do campo de texto) devem, portanto, ser uma cópia subsidiária dos dados do *model* primário. Mas se ocorrer mudanças de estado do *model*, a cópia do *view* daquele estado, não será mais preciso, precisará ser atualizada.

Mas como? O padrão MVC impede que o *model* empurre uma nova cópia dessas informações para a camada *view*. Complementando, ele nem mesmo permite que o *model* envie ao *view* uma mensagem dizendo que o seu estado mudou.

Bem, quase lá. Ok, a camada do *model* não tem permissão para falar diretamente com outras camadas, uma vez que isso exigiria que ele saiba de alguma coisa sobre essas camadas, e as regras MVC impede isso. No entanto, se uma árvore cai em uma floresta e ninguém está por perto para ouvi-la, então fará algum som?

A resposta, você vê, é a criação de um sistema de notificações, fornecendo a camada do *model* com um lugar que poderá anunciar, de forma a ninguém em particular, algo interessante que acabou de fazer. Outras camadas podem adicionar ouvintes com o sistema de notificação para ouvir esses anúncios, que eles estão de fato, realmente interessados. A camada do *model* não precisa saber nada sobre quem está ouvindo (Ou mesmo se alguém está escutando alguma coisa!); ela simplesmente envia um anúncio e depois o esquece. E se alguém ouvir o anúncio e se sente que deve fazer algo depois - como pedir o *model* novos dados para que ele possa atualizar sua exibição na tela - então ótimo. O *model* apenas lista as notificações que envia, como parte de sua definição API; e o que ninguem mais faz com aquele conhecimento, é sabido a eles.

MVC é preservado, e todo mundo está feliz. Sua estrutura de aplicativo pode muito bem proporcionar um sistema de notificações built-in, ou você pode escrever seu próprio, se não (ver o "Observer Pattern").

...
De qualquer forma, espero ter ajudado. Uma vez que você entenda as motivações por trás do MVC, as razões porque as coisas são feitas, começa tudo a fazer sentido, mesmo quando - à primeira vista - elas aparentam mais complexas que necessário.

Felicidades,

has

### Afinal, interessante?

***
Você pode acessar a publicação original no site do Stack acessando [aqui](http://programmers.stackexchange.com/questions/127624/what-is-mvc-really).

