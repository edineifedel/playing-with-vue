// Definindo novo componente (global) chamado tabela-aluno
Vue.component('tabela-aluno', {
  data: function () {
    return {}
  },
  computed: {
    alunos: function() {
      return this.$store.state.alunos;
    }
  },
  // Template strings `` para fazer templates de mais de uma linha mais legíveis. IE not supported
  template: `
      <table>
          <tr>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>Idade</th>
            <th></th>
          </tr>
          <tr v-for="aluno in alunos">
            <td>{{aluno.nome}}</td>
            <td>{{aluno.sobrenome}}</td>
            <td>{{aluno.idade}}</td>
            <td><button @click="remover_aluno(aluno)">Remover</button></td>
          </tr>
      </table>
  `,
  methods: {
    remover_aluno: function(aluno) {
      this.$store.commit('remover_aluno', aluno);
    }
  }
})