
<h1 align="center">Sistema de Controle de Ponto Simplificado</h1>


---

## Briefing

O **Sistema de Controle de Ponto Simplificado (SCPS)** foi desenvolvido para substituir o processo manual de marcação de ponto do escritório fictício **DevSolutions**.  
O sistema permite registrar **entrada e saída**, gerar **relatórios automáticos** e calcular **horas trabalhadas** de forma ágil e digital.

---

## Objetivo do Projeto

- Automatizar o registro de ponto dos funcionários.  
- Exibir histórico de marcações diárias e mensais.  
- Facilitar o cálculo das horas trabalhadas.  
- Reduzir o tempo gasto pelo RH nos cálculos manuais.

---

## Público-Alvo

- **Administrador / RH:** Gerencia os funcionários e gera relatórios.  
- **Funcionário:** Registra ponto e visualiza o próprio histórico.

---

##  Requisitos do Sistema

###  Requisitos Funcionais
- CRUD de funcionários (Admin)  
- Login e autenticação (Admin / Funcionário)  
- Registro de ponto (Entrada / Saída)  
- Histórico de pontos por funcionário  
- Cálculo automático de horas trabalhadas  


### Requisitos Não Funcionais
- Banco de dados **MongoDB**  
- Interface responsiva (TailwindCSS)  
- Tempo de resposta < 300ms  
- Timezone padrão: `America/Sao_Paulo`

---

## Tecnologias Utilizadas

| Tecnologia | Descrição |
|-------------|------------|
| **Next.js** | Framework React para front e back-end |
| **TailwindCSS** | Estilização moderna e responsiva |
| **MongoDB / Mongoose** | Banco de dados NoSQL |
| **NextAuth** | Autenticação e controle de sessão |
| **TypeScript** | Tipagem estática e robustez |

- ### Pessoal
 - Julya Estrela
---


🧩 Diagrama de Classes
```mermaid
classDiagram
    class Usuario {
        +String id
        +String nome
        +String email
        +String senha
        +Enum tipoUsuario
        +login()
        +logout()
        +CRUD()
    }

    class RegistroPonto {
        +String id
        +Date dataHora
        +Enum tipoRegistro
        +Double horasTrabalhadas
        +calcularHoras()
    }

    class Relatorio {
        +String id
        +Date dataInicio
        +Date dataFim
        +Double totalHoras
        +gerarRelatorio()
    }

    Usuario "1" -- "0..*" RegistroPonto : realiza
    RegistroPonto "1..*" -- "1" Relatorio : compõe
```


## Diagrama de Caso de Uso

O diagrama abaixo ilustra as interações dos diferentes tipos de usuários com as funcionalidades do **Sistema de Controle de Ponto Simplificado (SCPS)**.

```mermaid
graph TD

    %% ===== Atores =====
    Funcionario([👤 Funcionário])
    RH([🧑‍💼 Administrador / RH])

    %% ===== Casos de Uso =====
    subgraph "Sistema de Controle de Ponto Simplificado"
      UC1([Fazer Login])
      UC2([Registrar Entrada])
      UC3([Registrar Saída])
      UC4([Visualizar Histórico de Pontos])
      UC5([Calcular Horas Trabalhadas])
      UC6([Gerar Relatório de Horas])
      UC7([Cadastrar Funcionário])
      UC8([Editar Funcionário])
      UC9([Excluir Funcionário])
      UC10([Listar Funcionários])
      UC11([Visualizar Relatórios])
    end

    %% ===== Relacionamentos =====
    Funcionario --> UC1
    Funcionario --> UC2
    Funcionario --> UC3
    Funcionario --> UC4
    Funcionario --> UC5

    RH --> UC1
    RH --> UC6
    RH --> UC7
    RH --> UC8
    RH --> UC9
    RH --> UC10
    RH --> UC11
```

##  Fluxo d

O diagrama abaixo mostra o **fluxo geral de funcionamento** do sistema, desde o login até o registro de ponto e geração de relatórios.

```mermaid
flowchart TD

%% ===== Início =====
A[ Início] --> B[ Login]

B --> C{Tipo de Usuário?}

%% ===== Fluxo Funcionário =====
C --> |👤 Funcionário| D[Acessa Painel do Funcionário]
D --> E[ Registrar Ponto]
E --> F{Último Registro foi Entrada?}
F --> |Sim| G[Registrar Saída]
F --> |Não| H[Registrar Entrada]
G --> I[Salvar Registro de Saída no Banco de Dados]
H --> J[Salvar Registro de Entrada no Banco de Dados]
I --> K[Calcular Total de Horas Trabalhadas do Dia]
J --> K
K --> L[ Visualizar Histórico de Pontos]
L --> M[Logout]
M --> Z[Fim]

%% ===== Fluxo Administrador =====
C --> |🧑‍💼 Administrador (RH)| N[Acessa Painel Administrativo]
N --> O[ Gerenciar Funcionários]
O --> P{Ação?}
P --> |Cadastrar| Q[Adicionar Funcionário]
P --> |Editar| R[Atualizar Dados]
P --> |Excluir| S[Remover Funcionário]
Q --> T[ Salvar no Banco de Dados]
R --> T
S --> T
T --> U[ Gerar Relatório de Horas Trabalhadas]
U --> V[Exportar Relatório (PDF/Excel)]
V --> W[ Logout]
W --> Z
```

## Prototipos

## Codificação do Projeto