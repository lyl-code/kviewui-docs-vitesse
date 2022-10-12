<script lang="ts">
import type { SetupContext } from 'vue'
import { getCurrentInstance, nextTick, reactive, toRefs } from 'vue'

export default {
  setup(props, context: SetupContext) {
    const { proxy } = getCurrentInstance()

    const data = reactive({
      vnode: `
          <div class="kui-h-20 kui-w-60 kui-bg-white kui-rounded kui-flex kui-justify-center kui-items-center">
						<span class="kui-text-red-600">红色富文本内容</span>
						<span class="kui-text-blue-600">蓝色富文本内容</span>
					</div>
          `,
    })

    const showOverlay = () => {
      nextTick(() => {
        proxy.$refs['overlay-richtext'].open()
      })
    }

    return {
      showOverlay,
      ...toRefs(data),
    }
  },
}
</script>

<template>
  <view class="kui-w-full kui-h-full">
    <kui-page :custom-header="false">
      <template #body>
        <kui-config-provider font-size="16px" color="#666">
          <view class="kui-mt-5">
            <kui-text>自定义富文本内容</kui-text>
            <kui-container radius="10px" background-color="#FFFFFF">
              <kui-button type="primary" block @click="showOverlay()">
                显示遮罩层
              </kui-button>
            </kui-container>
          </view>
        </kui-config-provider>
      </template>
    </kui-page>
    <kui-overlay ref="overlay-richtext" :vnode="vnode" vnode-center />
  </view>
</template>
