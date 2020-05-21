# Recuperacao de senha
**RF Requisitos funcionais**
-O usuario deve poder recuperar sua senha informando o seuu email;
-O usuario deve receber um email com as instrucoes de recuperacao de senha;
-O usuario deve poder resetar sua senha;

**RNF Requisitos nao funcionais**
- Utilizar Mailtrap para testar envios em desenvolvimento;

**RN Regras de negocios**
- O link enviado por email para resetar senha deve expirar em 2h;
- O usuario precisa confirmar a nova senha ao resetar sua senha;
- Utilizar o Amazon SES para envios em producao;
- O envio de e-mails deve acontecer em segundo plano (backgroud job);

# Atualizacao do perfil
**RF Requisitos funcionais**
-O usuario deve poder atualizar seu perfil, nome, email e senha;
**RNF Requisitos nao funcionais**

**RN Regras de negocios**
- O usuario nao pode alterar seu email para um email ja utilizado por outro usuario;
- Para atualizar sua senha o usuario deve informar a senha antiga;
- Para Atualizar sua senha o usuario precisa confirmar  nova senha;

# Painel do Prestador
**RF Requisitos funcionais**
- O usuario deve poder listar seus agendamento d de um dia especifico;
- O prestador deve re eber uma notificacao sempre que houver um novo agendamento;
-o prestador dever pode rvisualir as notificacoes nao lidas;
**RNF Requisitos nao funcionais**
- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificacoes de prestador devem ser armazendas no MongoDB;
- As notificacoes de prestador devem ser enviadas em tempo-real utilizando Socket.io;

**RN Regras de negocios**

- A notificao deve ter um status de lida ou nao lida para que o prestador possa controlar

# Agendamento de servicos
**RF Requisitos funcionais**
- O usuario deve poder listar todos prestadores de servico cadastrados;
- O usuario deve poder listar os dias disponiveis do prestador no mes;
- O susurio deve poder listar os horarios e=de um dia especifico do prestador;
- O usuario deve poder realizar um novo agendamento com um novo prestador;

**RNF Requisitos nao funcionais**
- a Listagem de prestadores deve ser armazenada em cache;

**RN Regras de negocios**

- Cada agendamento deve durar 1 hora exatamente;
- Os agendamentos devem estar disponiveis entre 8h as 18h; (Ultimo horario as 17h)
- O usuario nao pode agendar em um horario ja ocupado;
- O usuario nao pode agendar em um horario passado;
- O usuario nao pode agendar servi;o consigo mesmo,





