new Vue({
	el: '#desafio',
	data: {
		c1: true,
		classe1: 'destaque',
		myBoolString: '',
		myClass: '',
		myBool: false,
		cor: 'red',
		progresso: 0,
		tamanho: {
			width: 100,
			height: 100
		},
		width: '0'
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.classe1 = this.classe1 == 'destaque' ? 'encolher' : 'destaque'
			}, 1000);
		},
		iniciarProgresso() {
			
			let valor = 0
			const temporizador = setInterval(() => {
				console.log(valor)
				valor +=5
				this.width = `${valor}%`
				if(valor == 100) {
					clearInterval(temporizador)
				}
			},1000)
		}
	},
	computed: {
		boolFunction () {
			if (this.myBoolString == 'true') {
				console.log("boolfunction")
				this.myBool = true
			}
			if (this.myBoolString == 'false') {
				console.log("boolfunction")
				this.myBool = false
			}
			return this.myBool
		}
	}
})
