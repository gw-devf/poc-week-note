# WeekNote ⛪🗒️

POC do WeekNote um aplicativo para o cadastro da programação da semana nas igrejas. Focado como trabalho de extensão na minha graduação de Engenharia de Software da Estácio e futuramente, talvez dar continuação do projeto e ampliar o seu escopo.

O Projeto faz parte da Disciplina "Programação para dispositivos móveis e android" no curso Engenharia de Software na Estácio.

## Como executar o projeto

Tenha o Node.js baixado na sua máquina, o projeto foi construído na versão 22.20.0 LTS do Node.js.
<br>
JDK na versão 25.
Como foi desenvolvido em cima do Expo, não é necessariamente preciso baixar o Java, mas caso queira usar o Android Studio que é possível também inserindo o comando `npm run android` fica ao seu critério.
<br>
Clone o projeto na sua máquina.
<br>
Digite no terminal na raiz do projeto `npm install` .
<br>
Depois `npm run start`.
<br>
Baixe o Expo no seu celular e aponte a câmera no Qr Code ou digite a URL no aplicativo.

## Partes envolvidas

As partes envolvidas seria a paróquia nossa senhora Aparecida em Piraju, após a adesão do aplicativo e o seu sucesso iria ser expandido para as demais paróquias da cidade e região.

## Objetivo

O objetivo do aplicativo é muito simples, ser uma fonte organizada de informações para consulta dos interessados a participarem dos eventos que forem acontecendo na igreja. Acredito que todo mundo já passou pela mal experiência de sempre esquecer dos avisos depois da celebração da Santa Missa e mesmo com as redes sociais, não são todas as paróquias que tem uma organização e algo fixo para anexar e servir de consulta para qualquer momento do dia e da semana. Com o aplicativo, futuramente acredito que seja melhor a versão final do projeto ser um app web por questões financeiras, é fácil e rápido de consultar essa programação da semana.

## Desenvolvimento do projeto

Inicialmente, pensei em fazer uma API REST com o json-server, mas por questões de simplicidade deixei a manipulação dos dados com o uso da Context API do React para ter um desenvolvimento rápido do projeto e apresentar a funcionalidade principal para as partes interessadas, por ser uma POC é mais que o suficiente.

## Metodologia e ferramentas:

Foi utilizado o Kanban, com 3 blocos:

- Backlog
- Em desenvolvimento
- Concluído

Onde era organizado e quebrado os problemas em pequenas partes e de acordo com o desenvolvimento de cada tela e componente do aplicativo. Algo bem simples e que já supre o meu desenvolvimento.
Utilizei o Figma para prototipar e realizar as ideias iniciais do projeto, durante o desenvolvimento, por não ter experiência ao longo prazo sobre React Native e o mundo mobile, muita questão da estilização eu fui mudando e deixando numa maneira que fique fiel ao meu design minimalista e aplicar os conhecimentos que aprendi durante a disciplina.

### Tecnologias:

- React Native
- Expo
- JavaScript
- Figma

## Conslusão

Com esse projeto consegui aplicar os principais conceitos importantes sobre o React Native, os principais componentes nativos da tecnologia, criar sempre uma área segura para ter compatibilidade a grande maioria dos dispositivos e a forma como se comporta o gerenciamento da área da tela. Uso dos hooks do React, gerenciamento de estado, manipulação dos dados, navegação entre telas do aplicativo e a estilização que reaproveita muito dos conhecimentos e formas de se estilizar com CSS e o Flexbox para manipulação de layout. Eu desejaria fazer algo simples assim, mas que mostrasse a principal dor e ideia que pode se tornar um produto após as validações e aprovação da minha comunidade futuramente, vou seguir em frente com o projeto que inicialmente é esse POC, queria unir algo que estava faz um tempo ambiciando a fazer e usar esse trabalho de extensão da faculdade para dar um início. Como foi dito, sendo uma POC e para fins acadêmicos o projeto é um aplicativo, entretanto vou emigrar ele para o ambiente web e construir uma aplicação sólido com o React.js e talvez node.js ou python para desenvolver a API do projeto futuramente.
