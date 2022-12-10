<script lang="ts">
import {
  ref,
  toRefs,
} from 'vue'

export default {
  setup() {
    const url = 'https://kviewui-api.vercel.app/file/upload/add'

    const disablePreviewImageValue = ref([
      {
        url: 'https://www.kviewui.com/images/dog.jpg',
        status: 'success',
      },
      {
        url: 'https://www.kviewui.com/images/dog1.png',
        status: 'success',
      },
    ])

    const toastState = reactive({
      show: false,
      content: '',
    })

    const onItemClick = (item: File, e: Event) => {
      console.log(item)
      console.log(e)
      toastState.content = '请查看控制台事件回调'
      toastState.show = true
    }

    return {
      ...toRefs({
        disablePreviewImageValue,
        toastState,
      }),
      url,
      onItemClick,
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
              <kui-cell-group title="禁用点击查看大图" desc="可通过item-click事件回调自定义业务逻辑">
                <kui-uploader v-model="disablePreviewImageValue" :url="url" xhr-code-name="errcode" xhr-code="0" :max-count="2" :preview-full-image="false" @item-click="onItemClick" />
              </kui-cell-group>
            </view>
          </kui-space>
        </view>
      </template>
    </kui-page>
    <kui-toast v-model:show="toastState.show" :content="toastState.content" />
  </view>
</template>
