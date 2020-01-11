// Definindo novo componente (global) chamado tabela-aluno
Vue.component('novo-aluno', {
  data: function () {
    return {
      nome: null,
      sobrenome: null,
      idade: null
    }
  },
  // Template strings `` para fazer templates de mais de uma linha mais legíveis. IE not supported
  template: `
      <div>
        <div class="form">
            <div>
              <label for="nome">Nome do Aluno</label>
              <input id="nome" v-model="nome" type="text">
            </div>
            <div>
              <label for="sobrenome">Sobrenome</label>
              <input id="sobrenome" v-model="sobrenome" type="text">
            </div>
            <div>
                <label for="idade">Idade</label>
                <input id="idade" @keyup.enter="inserir_aluno()" v-model="idade" type="text">
            </div>
        </div>
        <button @click="inserir_aluno()">Inserir aluno</button>
      </div>
  `,
  methods: {
    inserir_aluno: function() {
      var aluno = {nome: this.nome, sobrenome: this.sobrenome, idade: this.idade};
      this.$store.commit('inserir_aluno', aluno);
      this.nome = this.sobrenome = this.idade = null;
    }
  }
})