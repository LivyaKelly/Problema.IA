function distanciaGulosa(a, b) {
    let edicoes = 0;
    let i = 0, j = 0;

    while (i < a.length && j < b.length) {
        if (a[i] !== b[j]) {
            if (i + 1 < a.length && a[i + 1] === b[j]) {
                edicoes++;
                console.log(`Substituir '${a[i]}' por '${b[j]}' em 'a' na posição ${i}`);
                i++;
            } else if (j + 1 < b.length && b[j + 1] === a[i]) {
                edicoes++;
                console.log(`Substituir '${b[j]}' por '${a[i]}' em 'b' na posição ${j}`);
                j++;
            } else {
                edicoes++;
                console.log(`Substituir '${a[i]}' por '${b[j]}' em 'a' na posição ${i}`);
                i++;
                j++;
            }
        } else {
            i++;
            j++;
        }
    }

    while (i < a.length) {
        edicoes++;
        console.log(`Remover '${a[i]}' de 'a'`);
        i++;
    }
    while (j < b.length) {
        edicoes++;
        console.log(`Inserir '${b[j]}' em 'a' no final`);
        j++;
    }

    return edicoes;
}

// Exemplo de uso
let a = "casar";
let b = "computador";
console.log(`A distância de edição entre '${a}' e '${b}' é: ${distanciaGulosa(a, b)}`);
