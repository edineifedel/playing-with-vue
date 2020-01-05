// Definindo novo componente (global) chamado tabela-aluno
Vue.component('tabela-aluno', {
  // parametros (props) recebidos pelo componente
  props: ['alunos'],
  data: function () {
    return {}
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
      this.alunos.splice(this.alunos.indexOf(aluno), 1);
    }
  }
})