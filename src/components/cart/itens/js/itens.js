import SideBar  from '../../../../layout/SideBar';

export default {
    components: {SideBar},
    data() {
        return {
            itens: [],
            id: null,
            qtd: 1,
            item: {
                produto: '',
                categoria: '',
                valor: 0,
            }
        }
    },
    methods: {
        obterUsuarios() {
            this.$http.get('usuarios.json')
                .then(resp => {
                    this.usuarios = resp.data
                    console.log(this.usuarios)
                })
        },
        addProducts(item) {
            this.$store.state.itens.push(item)
        },
        addQtd() {
            this.item.push(this.qtd)
        }
    },
    created: function() {
        this.$http.get(`itens.json`)
            .then(resp => {
                this.itens = resp.data
                console.log(this.itens)
            })
    }

}