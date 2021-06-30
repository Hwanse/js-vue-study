<template>
    <form v-on:submit.prevent="onSubmit">
        <input type="text" v-model="inputValue" v-on:keyup="onKeyup" placeholder="검색어를 입력하세요" autofocus>
        <button v-show="inputValue.length" v-on:click="onReset" type="reset" class="btn-reset"></button>
    </form>
</template>

<script>
export default {
    props: ['value'],
    data() {
        return {
            inputValue: this.value
        }
    },
    watch: { // 특정 뷰 모델의 변화를 감시하는 기능
        value(newVal, oldVal) { // 함수명은 감시할 속성값과 동일하게 맞춰준다
            this.inputValue = newVal
        }
    },
    methods: {
        onSubmit() {
            this.$emit('@submit', this.inputValue.trim())
        },
        onKeyup() {
            if (!this.inputValue.length) this.onReset()
        },
        onReset() {
            this.inputValue = ''
            this.$emit('@reset')
        }
    }
}
</script>