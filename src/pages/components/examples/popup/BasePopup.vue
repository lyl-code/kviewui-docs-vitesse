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

    const openPopup = (p = '', r = '') => {
      nextTick(() => {
        proxy.$refs.popup.open()
      })
    }

    return {
      openPopup,
    }
  },
}
</script>

<template>
  <kui-page :custom-header="false">
    <template #body>
      <view class="kui-mt-3">
        <kui-cell-group title="基本用法">
          <kui-cell title="打开弹出层" @click="openPopup('center')" />
        </kui-cell-group>
      </view>
    </template>
  </kui-page>
  <kui-popup ref="popup" radius-size="sm">
    <kui-container width="300px" background-color="#FFFFFF">
      <view class="kui-h-full kui-box-border kui-flex kui-justify-center kui-items-center kui-leading-5 kui-py-0">
        <kui-text size="18px" decode>
          金尊清酒斗十千，<br>玉盘珍羞直万钱。<br>停杯投箸不能食，<br>拔剑四顾心茫然。
        </kui-text>
      </view>
    </kui-container>
  </kui-popup>
</template>
