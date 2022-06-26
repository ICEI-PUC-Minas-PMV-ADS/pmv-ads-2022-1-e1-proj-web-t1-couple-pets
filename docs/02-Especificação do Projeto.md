# Especificações do Projeto

A definição exata do problema e os pontos mais relevantes a serem tratados neste projeto foi consolidada com a participação dos usuários em um trabalho de imersão feita pelos membros da equipe a partir da observação dos usuários em seu local natural e por meio de entrevistas. Os detalhes levantados nesse processo foram consolidados na forma d

## Personas

De acordo com pesquisas descobrimos as personas que se encontram com tal problema.

<table border="1" width="70%">
<tr>
    <th></th>
    <td></td>
</tr>
<tr>
    <th rowspan="2"><img src="./img/joaopedro.png" width="100%"></th>
    <td colspan="2" align="right"><b>João Pedro</b> </td>
</tr>
<tr>
    <td><b>Idade:</b> 33 <br><br> <b>Ocupação:</b> advogado, e investidor em cripto moedas. <br><br>
        <b>Nome do pet:</b> Fox <br> <img src="./img/foxpet.png" width="90%">
    </td> 
    <td><b>Objetivos:</b> Estou à procura de um par, para ter filhotes, na intenção de ficar com pelo
        menos um.
    </td>  
</tr>
</table>

<table border="1" width="70%">
<tr>
    <th></th>
    <td></td>
</tr>
<tr>
    <th rowspan="2"><img src="./img/laura.png" width="800"></th>
    <td colspan="2" align="right"><b>Laura</b></td>
</tr>
<tr>
    <td><b>Idade:</b> 28 <br><br> <b>Ocupação:</b> Engenheira de Software, funcionária da empresa Amazon. <br><br>
        <b>Nome do pet:</b> Lola <br> <img src="./img/lolapet.png" width="60%">
    </td> 
    <td> <b>Objetivos:</b> À procura de um par, para ter filhotes e vender na intenção de aumentar a renda.
    </td>  
</tr>
</table>

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|João Pedro | Quero encontrar um parceiro pet que seja extrovertido.         | Para ter maior chance de uma ninhada nesse mesmo traço de personalidade.           |
|João Pedro      | Encontrar um parceiro pet na mesma região que eu reside.                | Para não ter que se deslocar por grandes distancias. |
|Laura |Encontrar um parceiro pet da mesma raça.       | Para ter a mesma raça de seu pet.               |
|Laura  |Encontrar um parceiro pet com histórico médico bom e com todas as vacinas tomadas.          | Para ter ciencia da saúde do pet.              |
|João Pedro  | Quero encontrar perfis com no mínimo uma foto.          | Para confirmar as características do animal informadas no perfil.               |
|Laura  | Quero encontrar nos perfis, informações relevantes do dono do pet com foto.          | Para gerar confianca e credibilidade.             |
|Laura  | Gostaria que o site de alguma forma unissem as duas partes, por um meio de comunicação via mensagem de texto ex: WhatsApp        | Para melhorar, facilitar e ter um meio de comunicação popular.               |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O site deve oferecer um campo de preenchimento com os dados  do pet com as seguintes informações: Nome, sexo, personalidade, idade e foto. | MÉDIA | 
|RF-002| O site deve apresentar, obrigatoriamente, no mínimo uma foto.  | ALTA  |
|RF-003| O site deve possibilitar ao usuário visualizar detalhes do perfil tanto do pet, quanto informações do tutor.  | ALTA | 
|RF-004| O site deve oferecer um campo de preenchimento obrigatório para a inclusão da cidade que reside o usuário.    | ALTA |
|RF-005|O site deve oferecer uma funcionalidade de filtro/pesquisa da raça do pet.  | ALTA | 
|RF-006|O site deve oferecer uma funcionalidade de filtro/pesquisa da cidade onde reside. | ALTA |
|RF-007| O site deve oferecer um campo de informações médicas do pet.    | BAIXA |
|RF-008| O site deve oferecer um campo de preenchimento com os dados do dono do pet com as seguintes informações: Nome, e-mail, telefone e foto do dono (usuário). | ALTA | 
|RF-009| O site deve oferecer um meio de comunicação por mensagem de texto via whatsapp.    | ALTA |




### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O site deve ser publicado em um ambiente acessível publicamente na Internet (Repl.it, GitHub Pages, Heroku); | ALTA | 
|RNF-002| O site deverá ser responsivo permitindo a visualização em um celular de forma adequada |  ALTA | 
|RFN-003| O site deve ter bom nível de contraste entre os elementos da tela em conformidade. | MÉDIA |
|RFN-004| O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge). | ALTA|

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|RE-01| O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 03/07/2022.|
|RE-02| O site deve se restringir às tecnologias básicas da Web no Front-end.|
|RE-03|A equipe não pode subcontratar o desenvolvimento do trabalho.|
