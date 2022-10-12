<script lang="ts">
import {
  onReady,
  onUnload,
} from '@dcloudio/uni-app'

import type { SetupContext } from 'vue'
import { getCurrentInstance, ref } from 'vue'
import { useKviewuiRect } from '~/common/utils/element'

export default {
  setup(context: SetupContext) {
    const container = ref(null)
    const {
      proxy,
    }: any = getCurrentInstance()

    const observerStart = uni.createIntersectionObserver(proxy)
    const observerEnd = uni.createIntersectionObserver(proxy)

    onReady(() => {
      // 获取节点信息
      useKviewuiRect(container, 'container').then((res) => {
        observerStart.relativeToViewport({ top: -res.height }).observe('#container', (res) => {
          proxy.$refs.sticky.observerStart(res)
        })
        observerEnd.relativeToViewport({ top: -120 }).observe('#container', (res) => {
          proxy.$refs.sticky.observerEnd(res)
        })
      })
      // observer.disconnect();
    })

    onUnload(() => {
      // 停止节点监听
      observerStart.disconnect()
      observerEnd.disconnect()
    })

    return {
      container,
      proxy,
    }
  },
}
</script>

<template>
  <view id="page-app">
    <kui-page :custom-header="false" :padding-y="0">
      <view class="body kui-w-full kui-h-full kui-box-border kui-absolute kui-inset-t-0 kui-inset-l-0 kui-p-3">
        <kui-cell-group title="指定容器">
          <view class="kui-h-full">
            <view id="container" ref="container" class="kui-bg-white kui-h-96 kui-p-3 kui-rounded-md">
              <kui-sticky ref="sticky" :top="100" :container="container" :proxy="proxy" container-id="container">
                <kui-button type="warning">
                  指定容器
                </kui-button>
              </kui-sticky>
            </view>
          </view>
        </kui-cell-group>
      </view>
    </kui-page>
  </view>
</template>

<style lang="less">
	page {
		background-color: #F8F8F8;
	}
	.body {
		min-height: 200vh;
	}
</style>
