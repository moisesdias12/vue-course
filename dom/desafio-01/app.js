new Vue({
    el: '#desafio',
    data: {
        nome: "moises",
        idade:"27",
        linkImg: "https://www.correiodoestado.com.br/upload/dn_noticia/2019/08/the-matrix-4-director-cast-keanu-reeves-carrie.jpg"
    },
    methods: {
        mult: function() {
            return this.idade * 3
        },
        randomNumber: function() {
            return Math.random()
        }
        
    }
})
