## Autenticação 
**importante!** inicialmente o nível de usuário (admin, gestor, candidato) será gerenciado apenas diretamente pelo banco de dados

A autenticação vai contar inicialmente com apenas duas telas, login e cadastro, seguindo o modelo seguinte:

![image](https://user-images.githubusercontent.com/34667580/170843837-c67f5749-fc86-4cc8-be22-63d61c62673d.png)

A tela de login deve autenticar as credenciais do usuário (Nome de usuário e senha) e manter o usuário logado.

Inicialmente não é necessária a geração de um token criptografado já que não haverá problemas de segurança na etapa de projeto acadêmico.
O redirecionamento à tela de cadastro é feito a partir do link/texto abaixo do card.

Ao ser feito o login o usuário é redirecionado à tela de desafios.

![image](https://user-images.githubusercontent.com/34667580/170843867-bac8304d-f7d6-4018-ac27-4ea2799db686.png)

O cadastro de usuário deve ser feito a partir das informações de Nome, Email e Senha (incluir campo para confirmação da senha).
Ao concluir o cadastro, o usuário é imediatamente redirecionado à página de desafios
