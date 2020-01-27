new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alertaClick() {
            alert("clickou")
        },
        armazenarValor(event) {
            this.valor = event.target.value
        }
    }
})