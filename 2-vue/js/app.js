import SearchModel from './models/SearchModel.js'

new Vue({
    el: '#app',
    data: {
        query: '',
        submitted: false,
        searchResult: []
    },
    methods: {
        onSubmit(e) {
            this.search()
        },
        onReset() {
            this.query = ''
            // TO-DO 검색결과 삭제
            debugger
        },
        onKeyup() {
            if (!this.query.length) this.onReset()
        },
        search() {
            SearchModel.list().then(data => {
                this.submitted = true
                this.searchResult = data
            })
        }
    }
})