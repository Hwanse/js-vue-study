import SearchModel from './models/SearchModel.js'
import KeywordModel from './models/KeywordModel.js'
import HistoryModel from './models/HistoryModel.js'

new Vue({
    el: '#app',
    data: { // vue 인스턴스가 생성될 때 data 항목에 있는 속성값들만 반응형으로서 동작한다
        query: '',
        submitted: false,
        tabs: ['추천 검색어', '최근 검색어'],
        selectedTab: '',
        keywords: [],
        history: [],
        searchResult: []
    },
    created() { // vue 인스턴스 라이프 사이클의 생성에 관한 이벤트 처리
        this.selectedTab = this.tabs[0]
        this.fetchKeyword()
        this.fetchHistory()
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
            HistoryModel.add(this.query)
            this.fetchHistory()
        },
        resetForm() {
            this.query = ''
            this.submitted = false
            this.searchResult = []
        },
        onClickTab(tab) {
            this.selectedTab = tab
        },
        fetchKeyword() {
            KeywordModel.list().then(data => {
                this.keywords = data
            })
        },
        fetchHistory() {
            HistoryModel.list().then(data => {
                this.history = data
            })
        },
        onClickKeyword(keyword) {
            this.query = keyword
            this.search()
        },
        onClickRemoveHistory(keyword) {
            HistoryModel.remove(keyword)
            this.fetchHistory()
        }
    }
})