# Arquitetura da Solução

Nesta seção são apresentados os detalhes técnicos da solução criada pela equipe, tratando dos componentes que fazem parte da solução e do ambiente de hospedagem da solução.

## Diagrama de componentes

Diagrama que permite a modelagem física de um sistema, através da visão dos seus componentes e relacionamentos entre os mesmos.

Exemplo: 

Os componentes que fazem parte da solução são apresentados na Figura abaixo.

![Diagrama de Componentes](img/componentes.png)
<center>Arquitetura da Solução</center>

A solução implementada conta com os seguintes módulos:
- **Navegador** - Interface básica do sistema  
  - **Páginas Web** - Conjunto de arquivos HTML, CSS, JavaScript e imagens que implementam as funcionalidades do sistema.
   - **Local Storage** - armazenamento mantido no Navegador, onde são implementados bancos de dados baseados em JSON. São eles: 
     - **Perfil** - seção que mostra as informações do usuário.
     - **Cadastro** - registro de dados cadastrais de cada usuário.
     - **Contatos** - lista de perfis encontrados que despertaram interesse.
 - **WhatsApp API** - plataforma que permite o redirecionamento do usuário para troca de mensagens pelo WhatsApp.
 - **Hospedagem** - Heroku.


Inclua um diagrama da solução e descreva os módulos e as tecnologias que fazem parte da solução. Discorra sobre o diagrama.
## Tecnologias Utilizadas

Descreva aqui qual(is) tecnologias você vai usar para resolver o seu problema, ou seja, implementar a sua solução. Liste todas as tecnologias envolvidas, linguagens a serem utilizadas, serviços web, frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.

[TECNOLOGIA](img/tecnologias.PNG)


## Hospedagem


Hospedamos o site no GitHub Pages, o que facilita o desenvolvimento por conta da integração do GitHub Pages com nosso repositório.

