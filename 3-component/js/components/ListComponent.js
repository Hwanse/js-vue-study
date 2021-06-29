export default {
    template: '#list',
    props: ['data', 'type'],
    computed: { // vue 템플릿에서 일종의 함수처럼 쓰이는 부분
        keywordType() {
            return this.type === 'keyword'
        },
        historyType() {
            return this.type === 'history'
        }
    },
    methods: {
        onClickList(keyword) {
            this.$emit('@click', keyword)
        }, 
        onRemoveList(keyword) {
            this.$emit('@remove', keyword)
        }
    }
}