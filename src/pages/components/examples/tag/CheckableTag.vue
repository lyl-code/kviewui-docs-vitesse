<script lang="ts">
import {
  getCurrentInstance,
  nextTick,
  reactive,
  toRefs,
} from 'vue'

const modal = (title = '', content = '', showCancel = false, cancelText = '取消', confirmText = '确定', success: any = () => { }, fail: any = () => { }, complete: any = () => { }) => {
  uni.showModal({
    title,
    content,
    showCancel,
    cancelText,
    confirmText,
    success,
    fail,
    complete,
  })
}

export default {
  setup() {
    const {
      proxy,
    }: any = getCurrentInstance()
    const theme = proxy.$theme

    const state = reactive({
      checked1: false,
      checked2: false,
      autoChecked: false,
      mode: 'light',
      modeChecked: false,
    })

    const onCheck1 = (e) => {
      nextTick(() => {
        state.checked1 = !state.checked1
        setTimeout(() => {
          console.log(proxy.$refs.checkableTag1.getState())
        }, 0)
      })
    }

    const onCheck2 = (e) => {
      nextTick(() => {
        state.autoChecked = false
        if (!state.checked2) {
          modal('提示', '是否选中', true, '否', '是', (res) => {
            if (res.confirm) {
              state.autoChecked = true
              state.checked2 = true
              setTimeout(() => {
                console.log(proxy.$refs.checkableTag2.getState())
              }, 0)
            }
          })
        }
        else {
          modal('提示', '是否取消选中', true, '否', '是', (res) => {
            if (res.confirm) {
              state.autoChecked = true
              state.checked2 = false
              setTimeout(() => {
                console.log(proxy.$refs.checkableTag2.getState())
              }, 0)
            }
          })
        }
        console.log(proxy.$refs.checkableTag2.getState())
      })
    }

    return {
      ...toRefs(state),
      onCheck1,
      onCheck2,
    }
  },
}
</script>

<template>
  <kui-cell-group title="可选中标签" desc="(控制台可查看组件选中结果)">
    <kui-space :gap="[30, 20]">
      <kui-tag type="primary" checkable>
        默认未选中
      </kui-tag>
      <kui-tag type="primary" checkable :default-checked="true">
        默认选中
      </kui-tag>
      <kui-tag ref="checkableTag1" type="info" checkable :default-checked="checked1" @click="onCheck1">
        点击选中
      </kui-tag>
      <kui-tag ref="checkableTag2" type="info" checkable :default-checked="checked2" :auto-checked="autoChecked" @click="onCheck2">
        点击手动选中
      </kui-tag>
    </kui-space>
  </kui-cell-group>
</template>
