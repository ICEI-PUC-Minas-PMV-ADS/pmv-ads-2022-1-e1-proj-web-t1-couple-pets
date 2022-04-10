# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

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
    <td><b>Idade:</b> 33 <br><br> <b>Ocupação:</b> Engenheira de Software, funcionária da empresa Amazon. <br><br>
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
|João Pedro      | Encontrar um parceiro pet na mesma região que reside.                | Para não ter que se deslocar por grandes distancias. |
|Laura |Encontrar um parceiro pet da mesma raça e de até 8 anos.       | Para ter a mesma idade e raça de seu pet.               |
|Laura  |Encontrar um parceiro pet com histórico médico bom e com todas as vacinas tomadas.          | Para ter ciencia da saúde do pet.              |
|João Pedro  | Quero encontrar perfis com galería de fotos do animal.          | Para confirmar as características do animal informadas no perfil.               |
|Laura  | Quero encontrar nos perfis, informações relevantes do dono de pets com foto.          | Para gerar confianca e credibilidade.             |
|Laura  | Gostaria que o site de alguma forma unissem as duas partes, por um meio de comunicação via mensagem de texto ex: WhatsApp        | Para melhorar, facilitar e ter um meio de comunicação popular.               |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O site deve oferecer um campo de preenchimento para o tipo de personalidade do animal. | MÉDIA | 
|RF-002| O site deve apresentar, obrigatoriamente, 3 fotos do pet no cadastro.  | ALTA  |
|RF-003| O site deve possibilitar ao usuário visualizar detalhes do perfil tanto do pet, quanto informações do tutor.  | ALTA | 
|RF-004| O site deve oferecer um campo de preenchimento obrigatório para a inclusão da cidade que reside o usuário.    | ALTA |
|RF-005|O site deve oferecer uma funcionalidade de filtro/pesquisa da raça do pet.  | ALTA | 
|RF-006|O site deve oferecer uma funcionalidade de filtro/pesquisa da idade do pet. 
   | ALTA |
|RF-007| O site deve oferecer um campo de informações médicas do pet.    | BAIXA |
|RF-008| O site deve oferecer um campo de preenchimento com os dados do dono do pet com as seguintes informações: Nome, e-mail, telefone e foto do dono (usuário). | ALTA | 
|RF-009| O site deve oferecer um meio de comunicação por mensagem de texto via whatsapp.    | ALTA |




### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
