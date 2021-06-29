import SearchModel from './models/SearchModel.js'

new Vue({
    el: '#app',
    data: {
        query: '',
        submitted: false,
        tabs: ['추천 검색어', '최근 검색어'],
        searchResult: []
    },
    created() { // vue 인스턴스 라이프 사이클의 생성에 관한 이벤트 처리
        this.selectedTab = this.tabs[0]
    },
    methods: {
        onSubmit(e) {
            this.search()
        },
        onReset(e) {
            this.resetForm()
        },
        onKeyup() {
            if (!this.query.length) this.resetForm()
        },
        search() {
            SearchModel.list().then(data => {
                this.submitted = true
                this.searchResult = data
            })
        },
        resetForm() {
            this.query = ''
            this.submitted = false
            this.searchResult = []
        }
    }
})