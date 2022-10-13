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
      id: 0,
    })

    const openPopup = (p = '', r = '') => {
      nextTick(() => {
        data.position = p || ''
        if (p === 'top') {
          console.log(p)
          proxy.$refs.popupTop.open()
        }
        else if (p === 'bottom') {
          proxy.$refs.popupBottom.open()
        }
        else if (p === 'left') {
          proxy.$refs.popupLeft.open()
        }
        else if (p === 'right') {
          proxy.$refs.popupRight.open()
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
        <kui-cell-group title="弹出位置">
          <kui-cell title="顶部弹出" @click="openPopup('top')" />
          <kui-cell title="底部弹出" @click="openPopup('bottom')" />
          <kui-cell title="左侧弹出" @click="openPopup('left')" />
          <kui-cell title="右侧弹出" @click="openPopup('right')" />
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
  <kui-popup ref="popupLeft" width="200px" position="left">
    <kui-container :margin-y="0" height="100%" background-color="transparent">
      <view class="kui-mx-3 kui-my-10 kui-flex kui-justify-center">
        <kui-button type="primary">
          点击关闭
        </kui-button>
      </view>
    </kui-container>
  </kui-popup>
  <kui-popup ref="popupRight" width="200px" position="right">
    <kui-container :margin-y="0" height="auto" background-color="transparent">
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
