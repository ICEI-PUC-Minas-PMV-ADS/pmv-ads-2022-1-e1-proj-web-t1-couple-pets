# Plano de Testes de Software

Requisitos para realização dos testes de software são:

- Site publicado na Internet

- Navegador da Internet – Chrome e Edge

-	Conectividade de Internet para acesso às plataformas (APISs)

Os testes funcionais a serem realizados no aplicativo são descritos a seguir.


|  **Caso de Teste**  |  **CT-01  - Visualizar Página Inicial**  |
|--|--|
|Requisitos Associados:  |RF-01 - O site deve apresentar na página principal o local para cadastro de novo usuário e para login dos usuários já cadastrados.  | 
|Objetivo do Teste:  | Acessar a página Inicial.  | 
|Passos:  | 1) Acessar o Navegador  
||2) Informar o endereço do Site  
||3) Visualizar a página principal  |
|Critérios de Êxito:  | o sistema se comportará como esperado acessando o endereço do site inserido e o usuario visualizará a home page do site.|

|  **Caso de Teste**  |  **CT-02 - Visualizar perfil do usuário**  |
|--|--|
|Requisitos Associados:	|RF-02 - O site deve permitir ao usuário visualizar seu perfil e o perfil do pet.  |
|Objetivo do Teste:	 |Verificar se os dados do perfil do usuário e do pet estão condizentes com as informações prestadas pelo usuário.  |
|Passos:	 |1) Acessar o Navegador
||2) Informar o endereço do Site
||3) Visualizar a página principal
||4) Inserir usuário e senha nos campos determinados
||5) Acessar perfil do usuário
||6) Acessar perfil do pet  |
|Critérios de Êxito:  |A página todos os dados fornecidos pelo usuário em seu perfil e no perfil de seu pet.|

|  **Caso de Teste**  |  **CT-03 – Enviar mensagem para perfil encontrado**  |
|--|--|
|Requisitos Associados:	|RF-03 - O site deve permitir ao usuário enviar mensagem para o perfil encontrado através de um link para o WhatsApp.  |
|Objetivo do Teste:	 |Verificar se o link de acesso de WhatsApp é funcional e remete o usuário para o aplicativo de WhatsApp possibilitando iniciar a conversa com o outro usuário do site.  |
|Passos:	 |1) Acessar o Navegador
||2) Informar o endereço do Site
||3) Visualizar a página principal
||4) Inserir usuário e senha nos campos determinados
||5) Acessar perfil do usuário
||6) Acessar perfil do pet
||7) realizar uma busca pelo pet desejado
||8) encontrar o perfil selecionado
||9) clicar no perfil selecionado e visualizar o perfil do pet
||10) visualizar link para o envio de mensagens
|Critérios de Êxito:  |A página de remeter para o aplicativo WhatsApp para o envio de mensagens|
