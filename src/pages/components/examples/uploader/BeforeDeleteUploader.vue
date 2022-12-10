<script lang="ts">
import type { Ref } from 'vue'
import {
  ref,
  toRefs,
} from 'vue'

import type { ImageFile } from '@/components/global/d.uniapp/chooseImage'

export default {
  setup() {
    const url = 'https://kviewui-api.vercel.app/file/upload/add'

    const beforeDeleteValue = ref([
      {
        url: 'https://www.kviewui.com/images/dog.jpg',
        status: 'success',
      },
    ])

    const dialogState = reactive({
      show: false,
      content: '',
      title: '提示',
    })

    const beforeDeleteIndex = ref(0) as Ref

    /**
			 * @zh 删除前置处理，返回false则表示禁用组件默认删除逻辑，
			 * 可以通过组件内置手动删除方法在前置处理后执行图片删除
			 * @param {number} index 组件回传的图片索引
			 * @param {ImageFile} fileList 组件回传的图片列表
			 * @return {boolean} false
			 */
    const onBeforeDelete = (index: number, fileList: ImageFile[]) => {
      dialogState.content = '是否删除该图片？'
      dialogState.show = true
      beforeDeleteIndex.value = index
      return false
    }

    const beforeDeleteUploader = ref(null) as Ref

    const confirmDelete = () => {
      // 手动调用组件图片删除方法
      beforeDeleteUploader.value.del(beforeDeleteIndex)
    }

    return {
      ...toRefs({
        beforeDeleteValue,
        dialogState,
      }),
      url,
      onBeforeDelete,
      confirmDelete,
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
              <kui-cell-group title="删除前置处理(before-delete回调)" desc="演示删除前二次确认场景">
                <kui-uploader ref="beforeDeleteUploader" v-model="beforeDeleteValue" :url="url" xhr-code-name="errcode" xhr-code="0" :max-count="2" :before-delete="onBeforeDelete" />
              </kui-cell-group>
            </view>
          </kui-space>
        </view>
      </template>
    </kui-page>
    <kui-dialog v-model:show="dialogState.show" :title="dialogState.title" :content="dialogState.content" @confirm="confirmDelete" />
  </view>
</template>
