function editDistance(a, b) {
    // Calcula a distância de edição entre as strings a e b
    let m = a.length;
    let n = b.length;

    // Criando a matriz dp
    let dp = new Array(m + 1);
    for (let i = 0; i <= m; i++) {
        dp[i] = new Array(n + 1);
    }

    for (let i = 0; i <= m; i++) {
        dp[i][0] = i; // custo de remover todos os caracteres de a até i
    }
    for (let j = 0; j <= n; j++) {
        dp[0][j] = j; // custo de inserir todos os caracteres de b até j
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (a[i - 1] === b[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1]; // nenhum custo, caracteres iguais
            } else {
                dp[i][j] = Math.min(
                    dp[i - 1][j] + 1,    
                    dp[i][j - 1] + 1,   
                    dp[i - 1][j - 1] + 1 
                );
            }
        }
    }

    // A distância de edição final entre a e b
    return dp[m][n];
}

// Exemplo de uso
let a = "Inserir";
let b = "Inserção";
console.log(`A distância de edição entre '${a}' e '${b}' é ${editDistance(a, b)}.`);
