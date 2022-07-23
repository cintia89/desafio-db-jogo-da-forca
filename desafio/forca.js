class Forca {
  palavra = ['_', '_', '_', '_', '_', '_', '_']
  letrasChutadas = []
  vidas = 6

  constructor(nome) {
    this.nome = nome
  }

  validaLetraChutada (letra){
    let contador = 0
    for (let i = 0; i < this.nome.length; i++) {
      if (letra === this.nome[i]) {
        contador++
        this.palavra.splice(i, 1, letra)
      }
    }
    return contador
  }

  chutar(letra) {
    this.letrasChutadas.push(letra)
    const letrasCertas = this.validaLetraChutada(letra)
    if (letrasCertas === 0) {
      this.vidas--
    }

  }

  buscarEstado() {
    if (this.palavra.join('').includes(this.nome)) {
      let estado = 'ganhou'
      return estado
    }
    let estado = this.vidas <= 0 ? 'perdeu' : 'aguardando chute'
    return estado; } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
    return {
      letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
      vidas: this.vidas, // Quantidade de vidas restantes
      palavra: this.palavra.join(' ') // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
    }
  }
}

module.exports = Forca;
