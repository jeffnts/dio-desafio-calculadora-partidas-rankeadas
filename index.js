const calculaNivel = (vitorias, derrotas) => {
    const resultado  = vitorias - derrotas
    let nivel = 'Ferro'

    if(resultado < 10 ) nivel = 'Ferro'
    if(resultado > 10 && resultado <= 20 ) nivel = 'Bronze'
    if(resultado > 20 && resultado <= 50 ) nivel = 'Prata'
    if(resultado > 50 && resultado <= 70 ) nivel = 'Ouro'
    if(resultado > 70 && resultado <= 80 ) nivel = 'Platina'
    if(resultado > 8000 && resultado <= 90 ) nivel = 'Ascendente'
    if(resultado > 90 && resultado <= 100 ) nivel = 'Imortal'
    if(resultado > 100 ) nivel = 'Radiante'

    return {
        vitorias: resultado,
        nivel
    }
}

const { vitorias, nivel } = calculaNivel(30, 10)

console.log(`O Herói tem de saldo de ${vitorias} está no nível de ${nivel}`)