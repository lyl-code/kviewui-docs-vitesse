<script lang="ts">
import type {
  Ref,
} from 'vue'
import {
  ref,
  toRefs,
} from 'vue'

export default {
  setup() {
    const url = 'https://kviewui-api.vercel.app/file/upload/add'

    const customUploadValue = ref([])

    const uploader = ref(null) as Ref

    const customUploadEvent = () => {
      uploader.value.submit()
    }

    return {
      ...toRefs({
        customUploadValue,
      }),
      url,
      customUploadEvent,
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
              <kui-cell-group title="手动上传">
                <kui-uploader ref="uploader" v-model="customUploadValue" :url="url" xhr-code-name="errcode" xhr-code="0" :auto-upload="false" />
                <view class="kui-mt-1">
                  <kui-button type="primary" @click="customUploadEvent">
                    点击上传
                  </kui-button>
                </view>
              </kui-cell-group>
            </view>
          </kui-space>
        </view>
      </template>
    </kui-page>
  </view>
</template>
