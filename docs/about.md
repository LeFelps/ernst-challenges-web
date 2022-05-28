
# Visão Geral e introdução

![image](https://user-images.githubusercontent.com/34667580/170843637-de3b04fb-bc53-4b69-9e68-0bb72e55fa81.png)

## Objetivo

Aplicação web com desafios e vagas de emprego.

Os desafios serão separados em categorias e divididos em checkpoints, pequenos desenvolvimentos que cumulam em um projeto final.

Será possível visualizar vagas abertas cadastrar novas e se candidatar.
Haverá também um perfil onde as informações do usuário podem ser customizadas e disponibilizadas como “procurando vagas”

## Ferramentas
- Front-end desenvolvido com ReactJs
- Back-end desenvolvido com ExpressJs
- Banco oracle MySQL

## Funcionalidades (MVP)
- Cadastro/Login de usuário
- Cadastro de desafio
- Cadastro de Vaga de emprego
- Cadastro de informações de usuário
- Visualização de desafios ( lista / descrição )
- “Entrega” de checkpoint de desafio ( link )
- Visualização de vagas abertas ( lista / descrição )
- Se candidatar para vaga de emprego
- Visualização de usuários disponíveis / candidaturas

## Protótipo navegável atualizado
https://www.figma.com/file/dNc0GqF0CS8IjsWvV4A6OC/Ernest-Challenges?node-id=0%3A1

# Telas e requisitos

Obs.: seria interessante reformular as telas levando em consideração a experiência do usuário
Atualmente foram mapeadas 14 telas (desconsiderando modais), que podem ser divididas em:

1. Autenticação
    1. Login
    2. Cadastro
2. Desafios
    1. Lista
    2. Detalhes
    3. Cadastro
3. Vagas
    1. Lista
    2. Detalhes
    3. Cadastro
4. Oponentes
    1. Lista
    2. Detalhes
    3. Cadastro
5. Candidatos
    1. Lista
    2. Betalhes (perfil)
6. Questionário
    1. Batalha

## Autenticação 
A autenticação vai contar inicialmente com apenas duas telas, login e cadastro, seguindo o modelo seguinte:

![image](https://user-images.githubusercontent.com/34667580/170843837-c67f5749-fc86-4cc8-be22-63d61c62673d.png)

A tela de login deve autenticar as credenciais do usuário e manter o usuário logado.

Inicialmente não é necessária a geração de um token criptografado já que não haverá problemas de segurança na etapa de projeto acadêmico.
O redirecionamento à tela de cadastro é feito a partir do link/texto abaixo do card.

Ao ser feito o login o usuário é redirecionado à tela de desafios.

![image](https://user-images.githubusercontent.com/34667580/170843867-bac8304d-f7d6-4018-ac27-4ea2799db686.png)




