# Controle de Caixa App

Aplicação web para acompanhar despesas e receitas por mês, com visão anual, saldo consolidado e controle de status de pagamento.

## Funcionalidades

- Dashboard anual com cards de resumo:
  - total a receber
  - total a pagar
  - saldo consolidado
  - quantidade de lançamentos pendentes
- Detalhamento mensal com:
  - listagem de parcelas de débito e crédito
  - indicação visual de itens pagos e pendentes
  - totalizador mensal (pagar, receber e saldo)
- Cadastro de novo lançamento com:
  - descrição
  - valor total
  - quantidade de parcelas
  - primeiro vencimento
  - tipo (débito/crédito)
  - opção de criar como pago
- Ações por lançamento:
  - marcar/desmarcar pagamento
  - excluir lançamento com confirmação

## Stack técnica

- React 18
- Redux + Redux Thunk
- React Router DOM 6
- TypeScript
- React Scripts (Create React App)

## Pré-requisitos

- Node.js 18+
- npm
- API backend disponível localmente em `http://localhost:3003`

A URL da API está definida em `src/actions/index.ts`.

## Como executar

1. Instalar dependências:

```bash
npm install
```

2. Rodar em desenvolvimento:

```bash
npm start
```

A aplicação ficará disponível em `http://localhost:3000`.

3. Gerar build de produção:

```bash
npm run build
```

4. Executar testes:

```bash
npm test
```

5. Gerar cobertura:

```bash
npm run coverage
```

## Estrutura principal

- `src/components` componentes da interface
- `src/actions` ações assíncronas e integração com API
- `src/reducers` estado global Redux
- `src/types.ts` tipos de domínio da aplicação

## Licença

Projeto licenciado sob os termos definidos em `LICENSE.md`.
