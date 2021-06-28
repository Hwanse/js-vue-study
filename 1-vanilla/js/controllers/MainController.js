import FormView from '../views/FormView.js'
import ResultView from '../views/ResultView.js'
import TabView from '../views/TabView.js'
import KeywordView from '../views/KeywordView.js'

import SearchMopdel from '../models/SearchModel.js'
import KeywordMopdel from '../models/KeywordModel.js'

const tag = '[MainController]'

export default {
  init() {
    FormView.setup(document.querySelector('form'))
        .on('@submit', e => this.onSubmit(e.detail.input))
        .on('@reset', e => this.onResetForm())

    TabView.setup(document.querySelector('#tabs'))
        .on('@change', e => this.onChangeTab(e.detail.tabName))

    KeywordView.setup(document.querySelector('#search-keyword'))
    ResultView.setup(document.querySelector('#search-result'))

    this.selectedTab = '추천 검색어'
    this.renderView()
  },

  renderView() {
    console.log(tag, 'renderView()')
    TabView.setActiveTab(this.selectedTab)
    
    if (this.selectedTab === '추천 검색어') {
      this.fetchSearchKeyword()
    } else {

    }
    
    ResultView.hide()
  },

  fetchSearchKeyword() {
    KeywordMopdel.list().then(data => {
      KeywordView.render(data)
    })
  },

  search(query) {
    console.log(tag, 'search()', query)
    // search api
    SearchMopdel.list(query).then(data => {
      this.onSearchResult(data)
    })
  },

  onSubmit(input) {
    console.log(tag, 'onSubmit()', input)
    this.search(input)
    ResultView.show()
  },

  onResetForm() {
    console.log(tag, 'onResetForm()')
    ResultView.hide()
  },

  onSearchResult(data) {
    ResultView.render(data)
  },

  onChangeTab(tabName) {
    console.log(tag, 'onChangeTab()', tabName)
    // debugger
  }

}