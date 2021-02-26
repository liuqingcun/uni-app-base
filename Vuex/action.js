// 他只能去操作mutations 并不能去直接改变state
// 调用方法 只能这么用this.$store.dispatch('handlerMutations', {type: '<mutationsName>', value: <value>})
export default {
  handlerMutations(context, data) {
    // data.type 是mutations里面的func
    // data.value 状态参数
    context.commit(data.type, data.value)
  },

}
