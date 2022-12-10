<script lang="ts">
import {
  reactive,
  ref,
  toRefs,
} from 'vue'

export default {
  setup() {
    const url = 'https://kviewui-api.vercel.app/file/upload/add'

    const maxSizeValue = ref([])

    const toastState = reactive({
      show: false,
      content: '',
    })

    const onOversize = (e) => {
      console.log(e)
      toastState.content = '图片大小不能超过50k'
      toastState.show = true
    }

    return {
      ...toRefs({
        maxSizeValue,
      }),
      url,
      toastState,
      onOversize,
    }
  },
}
</script>

<template>
  <view class="kui-w-full kui-h-full">
    <kui-page bg-color="white" :custom-header="false">
      <template #body>
        <view class="kui-w-full">
          <kui-space :gap="[20, 0]">
            <view class="kui-w-full">
              <kui-cell-group title="限制上传大小(限制50k)" desc="oversize事件回调">
                <kui-uploader v-model="maxSizeValue" :url="url" xhr-code-name="errcode" xhr-code="0" :max-size="50 * 1024" @oversize="onOversize" />
              </kui-cell-group>
            </view>
            <view class="kui-w-full">
              <kui-cell-group title="">
                <kui-text color="hsl(213,10.00%, 56.86%)">
                  示例数据为组件支持的部分数据，详细支持数据请参考组件源码和组件文档
                </kui-text>
              </kui-cell-group>
            </view>
          </kui-space>
        </view>
      </template>
    </kui-page>
    <kui-toast v-model:show="toastState.show" :content="toastState.content" />
  </view>
</template>
