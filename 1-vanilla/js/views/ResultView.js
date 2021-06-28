import View from './View.js'

const tag = '[ResultView]'

const ResultView = Object.create(View)

ResultView.messages = {
    NO_RESULT : '검색 결과가 없습니다'
}

ResultView.setup = function (el) {
    this.init(el)
}

ResultView.render = function (data = []) {
    this.el.innerHTML = data.length ? this.getSearchResultsHtml(data) : this.messages.NO_RESULT
    ResultView.show()
}

ResultView.getSearchResultsHtml = function (data) {
    return data.reduce((html, item) => {
        html += this.getSearchItemHtml(item)
        return html
    }, '<ul>') + '</ul>'
}

ResultView.getSearchItemHtml = function (item) {
    // es6 template literal 사용 시 싱글 쿼트(')가 아니라 노멀 쿼트(숫자 1버튼 왼쪽 키)를 사용해야 한다.
    return `<li>
        <img src="${item.image}">
        <p>${item.name}</p>
    </li>`
}

export default ResultView

