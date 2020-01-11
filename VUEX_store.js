var store = new Vuex.Store({
  state: {
    alunos: [
      {nome: 'João', sobrenome: 'Santos', idade: 14},
      {nome: 'Maria', sobrenome: 'Borges', idade: 16},
      {nome: 'Silvio', sobrenome: 'Alencar', idade: 15},
      {nome: 'Joaquim', sobrenome: 'Ferreira', idade: 14}
    ]
  },
  mutations: {
    remover_aluno: function(state, aluno) {
      state.alunos.splice(state.alunos.indexOf(aluno), 1);
    },
    inserir_aluno: function(state, aluno) {
      state.alunos.push(aluno);
    }
  }
})

window.STORE = store;