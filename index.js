/* 1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
Imprimir(SOMA);
Ao final do processamento, qual será o valor da variável SOMA? */

// Resposta
const INDICE = 13
let SOMA = 0
let K = 0

const calculateSum = () => {
    while (K < INDICE) {
        K += 1
        SOMA += K
    }
    return SOMA
};

console.log(calculateSum()) // 91

/* 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor 
sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), 
escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de 
Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.*/

// Resposta

const isFibonacci = (number) => {
    let first = 0
    let second = 1
    let next = 0
    while (next < number) {
        next = first + second
        first = second
        second = next
    }
    return next === number
}

console.log(isFibonacci(5)) // true

/* 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.*/

// Resposta

const dailyBilling = [
	{
		dia: 1,
		valor: 22174.1664
	},
	{
		dia: 2,
		valor: 24537.6698
	},
	{
		dia: 3,
		valor: 26139.6134
	},
	{
		dia: 4,
		valor: 0.0
	},
	{
		dia: 5,
		valor: 0.0
	},
	{
		dia: 6,
		valor: 26742.6612
	},
	{
		dia: 7,
		valor: 0.0
	},
	{
		dia: 8,
		valor: 42889.2258
	},
	{
		dia: 9,
		valor: 46251.174
	},
	{
		dia: 10,
		valor: 11191.4722
	},
	{
		dia: 11,
		valor: 0.0
	},
	{
		dia: 12,
		valor: 0.0
	},
	{
		dia: 13,
		valor: 3847.4823
	},
	{
		dia: 14,
		valor: 373.7838
	},
	{
		dia: 15,
		valor: 2659.7563
	},
	{
		dia: 16,
		valor: 48924.2448
	},
	{
		dia: 17,
		valor: 18419.2614
	},
	{
		dia: 18,
		valor: 0.0
	},
	{
		dia: 19,
		valor: 0.0
	},
	{
		dia: 20,
		valor: 35240.1826
	},
	{
		dia: 21,
		valor: 43829.1667
	},
	{
		dia: 22,
		valor: 18235.6852
	},
	{
		dia: 23,
		valor: 4355.0662
	},
	{
		dia: 24,
		valor: 13327.1025
	},
	{
		dia: 25,
		valor: 0.0
	},
	{
		dia: 26,
		valor: 0.0
	},
	{
		dia: 27,
		valor: 25681.8318
	},
	{
		dia: 28,
		valor: 1718.1221
	},
	{
		dia: 29,
		valor: 13220.495
	},
	{
		dia: 30,
		valor: 8414.61
	}
]

// O menor valor de faturamento ocorrido em um dia do mês
const minBilling = Math.min(...dailyBilling.map((billing) => billing.valor))
console.log(minBilling) // 0

// O maior valor de faturamento ocorrido em um dia do mês
const maxBilling = Math.max(...dailyBilling.map((billing) => billing.valor))
console.log(maxBilling) // 48924.2448

// Número de dias no mês em que o valor de faturamento diário foi superior à média mensal
const averageBilling = dailyBilling
    .filter((billing) => billing.valor > 0)
    .reduce((acc, billing) => acc + billing.valor, 0) / dailyBilling.length

const aboveAverageBilling = dailyBilling
    .filter((billing) => billing.valor > 0)
    .filter((billing) => billing.valor > averageBilling)
    .length
console.log(aboveAverageBilling) // 12

/* 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
• SP – R$67.836,43
• RJ – R$36.678,66
• MG – R$29.229,88
• ES – R$27.165,48
• Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado 
teve dentro do valor total mensal da distribuidora. */

// Resposta

const statesBillings = [
    {
        state: 'SP',
        billing: 67836.43
    },
    {
        state: 'RJ',
        billing: 36678.66
    },
    {
        state: 'MG',
        billing: 29229.88
    },
    {
        state: 'ES',
        billing: 27165.48
    },
    {
        state: 'Outros',
        billing: 19849.53
    }
]

const totalBillings = statesBillings
    .reduce((acc, { billing }) => acc + billing, 0)

const percentages = statesBillings
    .map(({ state, billing }) => ({
        state,
        percentage: ((billing / totalBillings) * 100).toFixed(2)
    }))
    .map(({ state, percentage }) => `${state} - ${percentage}%`)
console.log(percentages) // 'SP - 37.53%', 'RJ - 20.29%', 'MG - 16.17%', 'ES - 15.03%', 'Outros - 10.98%'

/* 5) Escreva um programa que inverta os caracteres de um string. */

// Resposta

const string = 'world'

const invertString = (string) => {
    let invertedString = ''
    for (let i = string.length - 1; i >= 0; i--) {
        invertedString += string[i]
    }

    return invertedString
}

console.log(invertString(string)) // dlrow