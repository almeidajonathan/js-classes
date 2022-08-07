const alunos = [
    {
        nome: 'João',
        nota: 5,
        curso: 'bcc',
    },
    {
        nome: 'Amanda',
        nota: 8,
        curso: 'bee',
    },
    {
        nome: 'Eduardo',
        nota: 9.6,
        curso: 'bcc'
    },
    {
        nome: 'Karen',
        nota: 7.4,
        curso: 'bcc'
    },
    {
        nome: 'Thiago',
        nota: 4.8,
        curso: 'bee',
    },
    { 
        nome: 'Marcela',
        nota: 4.2,
        curso: 'bee',
    }
]

function alunosAprovados(arr, media) {
    let aprovados = [];

    for(let i = 0; i < arr.length; i++) {
       const { nome, nota} = arr[i];

       if(nota >= media) {
        aprovados.push(
            {
                nome, 
                status: 'aprovado(a)'
            }
        )
       }
    }

    return aprovados;
}

console.log(alunosAprovados(alunos, 6));