---
layout: post
title: "Tecnologias Web"
date: 2016-11-10 00:08:43
image: '/assets/img/resumo-web/main.png'
description: 'Resumo para a galera da disciplina!'
main-class: 'js'
color: '#EB7728'
tags: js
categories:
introduction: "Resumo para a galera da disciplina!"
---

## Índice

- [Introdução](#intro)
- [JavaScript](#)
    - [Introdução](#)
        - [Formas de Utilização](#)
        - [Console](#)
        - [Document Object Model (DOM)](#)
        - [Eventos](#)
    - [Questões Básicas](#)
            - [Gramática](#)
            - [Declarações de variáveis e constantes](#)
    - [Tipos e Estruturas de Dados](#)
    - [Fluxos](#)
    - [Funções](#)
- [Servidor e Linguagem PHP](#)
    - [Servidor de Aplicações](#)
        - [Ambiente](#)
        - [Autenticação](#)
        - [Comunicação HTTPS](#)
    - [PHP](#)
        - [Primeira página em PHP](#github)
        - [Sintáxe Básica](#github)
        - [Tipos de Dados](#github)
        - [Variáveis pré-definidas](#github)
        - [Estruturas](#github)
        - [Funções](#github)
        - [Exceções](#github)
        - [Extensões](#github)
        - [Controle de Sessão](#github)
- [Conclusão](#conclusao)

<h2 id="intro">Introdução</h2>
<h2 id="js">JavaScript</h2>

<h2 id="php">Servidor e linguagem PHP</h2>

![Ambiente Servidor](/assets/img/resumo-web/ambiente-servidor.png)
![Ambiente Servidor](/assets/img/resumo-web/ambiente-servidor2.png)

<h3 id="auth">Autenticação</h3>
Processo pelo qual se verifica a identidade do usuário de uma aplicação Web.
Existem alguns **Esquemas de Autenticação**, como exemplo, no caso de um **Usuário Anônimo + Forms da aplicação (Login)**
a situação é que o servidor não requer informação de autenticação do cliente, permitindo acesso irrestrito aos recursos de um site.

Nesta situação a aplicação Web recorre a páginas específicas para realizarem a coleta e validação das informações
de login e senha.

<h4 id="auth-basica">Autenticação Básica</h3>
No caso de uma **Autenticação Básica**, utiliza-se uma *string* codificada em Base64 com usuário e senha.
![Esquema de Autenticação Básica](/assets/img/resumo-web/auth-scheme.png)
![Esquema de Autenticação Básica](/assets/img/resumo-web/auth-scheme2.png)

<h4 id="auth-digest">Autenticação Digest</h3>
Já na **Autenticação Digest**, o Cliente e Servidor não trocam informações de senha, apenas o *hash*.
![Esquema de Autenticação Digest](/assets/img/resumo-web/auten-digest.png)

<h3 id="https">Comunicação HTTPS</h3>
HTTPS identifica a comunicação segura por meio do protocolo HTTP, na porta 443 (por padrão), utilizando os protocolos TSL ou SSL.
- Catacterísticas
  - Fornece uma conexão criptografada com identificação de Cliente e Servidor
  - Baseado em certificados digitais emitidos por autoridades certificadoras
  - Requer que servidores Web sejam configurados com certificados digitais
  - Requer que os navegadores reconheçam as autoridades certificadoras, emissoras dos certificados do servidor

![Exemplo de Certificado](/assets/img/resumo-web/certificado.png)
Um exemplo do **Fluxo de Comunicação** do HTTPS:
![Exemplo de Fluxo do HTTPS](/assets/img/resumo-web/https-scheme.png)

<h3 id="php">PHP</h3>
<h4 id="php-basica">Sintaxe Básica</h4>
{% highlight php %}
<!DOCTYPE html>
<html>
    <body>
        <?php     // Tag de abertura
            echo "<p>Olá Mundo!</p>";     //  <-- Comandos (exibe "Olá Mundo!")  //  <-- Comentário
        ?>        // Tag de fechamento
    </body>
</html>
{% endhighlight php %}

Há diversas maneiras de **inserir códigos PHP em páginas HTML** como:
{% highlight php %}
// Tag padrão do PHP
<?php echo 'Modo compatível com documentos XHTML ou XML'; ?>

// Tag de script
<script language="php">
    echo 'alguns editores (FrontPage) não gostam de tags padrão';
</script>

// Tag curta (Para trabalhas com elas, é necessário habilitar short_open_tag no arquivo php.ini.)
<? echo 'Forma mais simples, uma instrução de processamento SGML'; ?>
<?= expressão ?> #Isto é um atalho para "<? echo expressão ?>"

// Tag no estilo ASP (Para trabalhar com elas, é necessário habilitar asp_tags no arquivo php.ini)
<% echo 'Você pode opcionalmente usar tags no estilo ASP'; %>
<%= $variavel; # Isto é um atalho para "<% echo . . ." %>
{% endhighlight php %}

Quanto a codificação, é necessário observar algumas coisas básicas:
{% highlight php %}
// Ponto e virgula ao final dos comandos!
<?php 
    echo 'Olá mundo!!';   //  <--
?>

// Inclusão de outros scripts (Bibliotecas)
<?php
    include 'vars.php';   //  <--
    echo "Ola mundo!!";
    ....
?>

// Variáveis
// Elas são representadas por um $ (cifrão) seguido de um identificador
// e são case sensitive, ou sensível a maiúsculas e minúsculas ($a é diferente de $A).

<?php
    $var = 'Bob';         //  <--
    $Var = 'Joe';         //  <--
    echo "$var, $Var";    // exibe "Bob, Joe"
?>

// Constantes
// São declaradas por meio da função define() ou da palavra-chave const
// e aceitam apenas dados escalares como boolean, integer, float, e string.

<?php
    define("CONSTANT", "Hello world.");
    echo CONSTANT;   // exibe "Hello world."
    const VALOR = 50;
    echo VALOR;      // exibe “50"
?>

// Constantes mágicas
<?php
    echo "Linha: " . __LINE__;      // Linha atual no arquivo PHP
    echo "Arquivo: " . __FILE__;    // Caminho completo e nome do arquivo PHP
    echo "Diretório: " . __DIR__;   // Diretório do arquivo PHP
    // Existem outras como: __FUNCTION__, __CLASS__, __METHOD__ e __NAMESPACE__
?>
{% endhighlight php %}

<h4 id="php-tipos-dados">Tipos de Dados</h4>
![Tipos de Dados](/assets/img/resumo-web/php-tipos-dados.png)

Dentre os **Tipos de Dados**, no caso do *Boolean*, os valores que são considerados **FALSE** são:
- próprio booleano FALSE
- inteiro 0 (zero)
- ponto flutuante 0.0 (zero)
- uma string vazia e a string "0"
- um array sem elementos
- um objeto sem elementos membros (somente no PHP 4)
- tipo especial NULL (incluindo variáveis não definidas)
- objeto SimpleXML criado de tags vazias
