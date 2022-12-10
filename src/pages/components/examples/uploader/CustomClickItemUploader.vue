<script lang="ts">
import type { Ref } from 'vue'
import {
  reactive,
  ref,
  toRefs,
} from 'vue'

export default {
  setup() {
    const url = 'https://kviewui-api.vercel.app/file/upload/add'

    const videoOverlay = ref(null) as Ref

    const videoState = reactive({
      show: false,
      src: '',
    })

    const customItemClickValue = ref([
      {
        url: 'https://www.kviewui.com/images/dog.jpg',
        status: 'success',
      },
      {
        url: 'https://www.kviewui.com/images/dog1.png',
        status: 'success',
        onClickItem: () => {
          return new Promise((_res, _rej) => {
            nextTick(() => {
              videoOverlay.value.open()
              videoState.src = 'https://www.runoob.com/try/demo_source/mov_bbb.mp4'
              videoState.show = true
              const video = uni.createVideoContext('myVideo')
              video.play()
            })
            _res(true)
          })
        },
      },
    ])

    return {
      ...toRefs({
        videoState,
        customItemClickValue,
      }),
      url,
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
              <kui-cell-group title="自定义单个图片点击事件" desc="演示点击第二个图片播放视频(视频资源来源于varletui组件库演示)">
                <kui-uploader v-model="customItemClickValue" :url="url" xhr-code-name="errcode" xhr-code="0" :max-count="2" />
              </kui-cell-group>
            </view>
          </kui-space>
        </view>
      </template>
    </kui-page>
    <kui-overlay ref="videoOverlay">
      <template #content>
        <view class="kui-w-full kui-h-full kui-flex kui-items-center">
          <video v-if="videoState.show" id="myVideo" class="kui-absolute kui-inset-t-0 kui-inset-l-0 kui-h-full kui-w-full" :src="videoState.src" />
        </view>
      </template>
    </kui-overlay>
  </view>
</template>
