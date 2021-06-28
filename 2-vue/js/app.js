new Vue({
    el: '#app',
    data: {
        query: ''
    },
    methods: {
        onSubmit(e) {
            
        },
        onReset() {
            this.query = ''
            // TO-DO 검색결과 삭제
            debugger
        },
        onKeyup() {
            if (!this.query.length) this.onReset()
        }
    }
})