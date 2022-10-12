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
