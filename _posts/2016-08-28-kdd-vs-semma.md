---
layout: post
title: "KDD vs SEMMA"
date: 2016-08-28 00:11:00
image: '/assets/img/kdd-vs-semma/main.png'
description: ''
main-class: 'saiba'
color: '#3369e8'
tags: patterns
categories:
introduction: ""
---

## Knowledge Discovery in Databases

'Processo não trivial, de extração de informações implícitas, previamente desconhecidas e potencialmente úteis,
a partir dos dados armazenados em um banco de dados.'

O processo é não trivial já que alguma técnica de busca ou inferência é envolvida, ou seja, não é apenas um processo
de computação direta. Os padrões descobertos devem ser válidos com algum grau de certeza, novos (para o sistema e de
preferência também para o usuário), potencialmente úteis e compreensíveis.

O processo **KDD**, como foi apresentado por Fayyad, é o processo de usar métodos de **Data Mining** para extrair o que é 
considerado conhecimento em acordo com a especificação de metricas e limiares. São considerados **5 estágios**:

1. **Seleção**
  * Esse estágio consiste em criar uma coleção de dados alvo, ou focar em um sub conjunto de variáveis ou dados simples, nos quais a descoberta e feita.

2. **Pre processamento**
  * Esse estágio consiste na limpeza dos dados alvo e o seu pre processamento visando obter dados consistentes.

3. **Transformação**
  * Esse estágio consiste na transofrmação dos dados reduzindo as suas dimensões ou métodos de transformação.

4. **Data Mining**
  * Esse estágio consiste na busca por padrões de interesse numa particular forma representacional, dependendo do objetivo do data mining.

5. **Interpretação/Avaliação**
  * Esse estágio consiste na interpretação e avaliação dos padrões mineirados.

O processo **KDD** é interativo e iterativo, envolvendo vários passos com várias decisões sendo feitas pelo usuário.
Adicionalmente, o processo **KDD** deve proceder pelo desenvolvimento do conhecimento do dominio da aplicação, o conhecimento
relevante pŕevio e os objetivos do usuário final. Também deve ser continuada pela consolidação de conhecimento encorporando
esse conhecimento no sistema.
  
## SEMMA
SEMMA desenvolvido pela SAS Institute, refere-se ao processo de conduzir um projeto de **Data Mining**. A SAS Institute considera um ciclo com **5 estágios** para o processo:

1. **Amostragem**
  * Esse estágio consiste na amostragem dos dados extraindo uma porção de uma grande coleção de dados, suficientemente grande para conter a informação significante, pequeno o suficiente para manipular rapidamente. Esse estágio é apontado como sendo opcional.

2. **Explorar**
  * Esse estágio consiste na exploração dos dados, buscando por tendencias não antecipadas e anomalias, de forma a ganhar entendimento e ideias.

3. **Modificar**
  * Esse estágio consiste na modificação dos dados, criando, selecionando e transformando as variáveis para focar no processso de seleção do modelo.

4. **Modelo**
  * Esse estágio consiste na modelagem dos dados permitindo o software a buscar automaticamente por uma combinação de dados que fielmente prevê um resultado.

5. **Avaliar**
  * Esse estágio consiste na avaliação dos dados, avaliando a usabilidade e confiabilidade dos resultados do processod e **Data Mining** e a estimativa de quão bem é executado.

Embora o processo **SEMMA** seja independente da ferramente de **Data Mining** escolhida, o **SEMMA** e relacionado ao software SAS Enterprise Minere pretende guiar o usuário na implementação de aplicações de **Data Mining**. 
**SEMMA** oferece uma forma fácil de entender processo, permitindo o desenvolvimento e a manutenção de forma organizada e adequada em projetos de **Data Mining**.

## KDD vs SEMMA

Comparando os estágios do KDD com os do SEMMA, em primeira instância, afirmamos que são equivalentes:
* Sample (Amostra) pode ser identificada com Selection (Seleção)
* Explore (Explorar) pode ser identificado com Pre processing (Pré processamento)
* Modify (Modificar) pode ser identificado com Transformation (Transformação)
* Model (Modelo) pode ser identificado com Data Mining (Mineração de Dados)
* Assess (Avaliação) pode ser identificado com Interpretation/Evaluation (Interpretação/Avaliação)

Examinando como um todo, podemos afirmar que os cinco estágios do processo SEMMA podem ser vistos como uma implementação pratica dos cinco estágios do processo KDD, desde que o SEMMA é diretamente ligado ao software SAS Enterprise Miner.

|            KDD            |   SEMMA    |
|---------------------------|------------|
|         Selection         |   Sample   |
|       Pre-processing      |  Explore   |
|       Transformation      |   Modify   |
|        Data mining        |    Model   |
| Interpretation/Evaluation | Assessment |

## Referências

<sub>Fayyad, U. M. et al. 1996. From data mining to knowledge discovery: an overview. In Fayyad, U. M.et al (Eds.),
Advances in knowledge discovery and data mining. AAAI Press / The MIT Press.</sub>

<sub>Benoît, G., 2002. Data Mining. Annual Review of Information Science and Technology, Vol. 36, No. 1, pp 265-310.</sub>

<sub>Brachman, R. J. & Anand, T., 1996. The process of knowledge discovery in databases. In Fayyad, U. M. et al. (Eds.),
Advances in knowledge discovery and data mining. AAAI Press / The MIT Press.</sub>

<sub>Chen, M. et al, 1996. Data Mining: An Overview from a Database Perspective. IEEE Transactions on Knowledge and
Data Engineering, Vol. 8, No. 6, pp 866-883.</sub>

<sub>Simoudis, E., 1996. Reality check for data mining. IEEE Expert, Vol. 11, No. 5, pp 26-33.</sub>

<sub>Fayyad, U. M., 1996. Data mining and knowledge discovery: making sense out of data. IEEE Expert, Vol. 11 No. 5, pp
20-25.</sub>

<sub>Dzeroski, S., 2006. Towards a General Framework for Data Mining.. In Dzeroski, S and Struyf, J (Eds.), Knowledge
Discovery in Inductive Databases. LNCS 47474. Springer-Verlag.</sub>

<sub>Han, J. et al, 1996. DMQL: A Data Mining Query Language for Relational Databases. In proceedings of DMKD-96
(SIGMOD-96 Workshop on KDD). Montreal. Canada.</sub>

<sub>Meo, R. e tal, 1998. An Extension to SQL for Mining Association Rules. Data Mining and Knowledge Discovery Vol. 2,
pp 195-224. Kluwer Academic Publishers.</sub>

<sub>Imielinski, T.; Virmani, A., 1999. MSQL: A Query Language for Database Mining. Data Mining and Knowledge
Discovery Vol. 3, pp 373-408. Kluwer Academic Publishers.</sub>

<sub>Sarawagi, S. et al, 2000. Integrating Association Rule Mining with Relational Database Systems: Alternatives and
Implications. Data Mining and Knowledge Discovery, Vol. 4, pp 89–125.</sub>

<sub>Botta, Marco, et al, 2004. Query Languages Supporting Descriptive Rule Mining: A Comparative Study. Database
Support for Data Mining Applications. LNAI 2682, pp 24-51.</sub>

<sub>SAS Enterprise Miner – SEMMA. SAS Institute.</sub>

<sub>Accessed from http://www.sas.com/technologies/analytics/datamining/miner/semma.html, on May 2008
Santos, M & Azevedo, C (2005). Data Mining – Descoberta de Conhecimento em Bases de Dados. FCA Publisher.</sub>

<sub>Chapman, P. et al, 2000. CRISP-DM 1.0 - Step-by-step data mining guide.</sub>
