<script lang="ts">
import type { SetupContext } from 'vue'
import {
  getCurrentInstance,
  nextTick,
  reactive,
  toRefs,
} from 'vue'

export default {
  setup(props, context: SetupContext) {
    const {
      proxy,
    } = getCurrentInstance()

    const data = reactive({
      position: '',
      radiusSize: '',
      id: 0,
    })

    const openPopup = (p = '', r = '') => {
      nextTick(() => {
        data.position = p || ''
        data.radiusSize = r || 'none'
        if (p === 'top') {
          console.log(p)
          proxy.$refs.popupTop.changeRadiusSize(data.radiusSize)
          proxy.$refs.popupTop.open()
        }
        else if (p === 'bottom') {
          proxy.$refs.popupBottom.changeRadiusSize(data.radiusSize)
          proxy.$refs.popupBottom.open()
        }
      })
    }

    return {
      openPopup,
      ...toRefs(data),
    }
  },
}
</script>

<template>
  <kui-page :custom-header="false">
    <template #body>
      <view class="kui-mt-3">
        <kui-cell-group title="圆角弹窗">
          <kui-cell title="顶部弹出" @click="openPopup('top', 'lg')" />
          <kui-cell title="底部弹出" @click="openPopup('bottom', 'lg')" />
        </kui-cell-group>
      </view>
    </template>
  </kui-page>
  <kui-popup :id="id" ref="popupTop" height="200rpx" position="top">
    <kui-container :margin-y="0" height="auto" background-color="white">
      <view class="kui-mx-3 kui-my-10 kui-flex kui-justify-center">
        <kui-button type="primary">
          点击关闭
        </kui-button>
      </view>
    </kui-container>
  </kui-popup>
  <kui-popup ref="popupBottom" height="200rpx" position="bottom">
    <kui-container :margin-y="0" height="100%" background-color="transparent">
      <view class="kui-mx-3 kui-my-10 kui-flex kui-justify-center">
        <kui-button type="primary">
          点击关闭
        </kui-button>
      </view>
    </kui-container>
  </kui-popup>
</template>
