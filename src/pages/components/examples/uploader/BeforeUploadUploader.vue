<template>
  <view class="kui-w-full kui-h-full">
    <kui-page bg-color="white" :custom-header="false">
      <template #body>
        <view class="kui-w-full">
          <kui-space :gap="[20, 0]">
            <!-- #ifdef H5 -->
            <view class="kui-w-full">
              <kui-cell-group title="上传前置处理(before-upload回调)" desc="演示上传前图片压缩">
                <kui-uploader v-model="beforeUploadValue" :url="url" xhr-code-name="errcode" xhr-code="0" :upload-icon-size="160" :max-count="2" :before-upload="onBeforeUpload" />
              </kui-cell-group>
            </view>
            <!-- #endif -->
            <!-- #ifndef H5 -->
            <view class="kui-w-full">
              <kui-cell-group title="上传前置处理(before-upload回调)" desc="演示上传前图片格式校验(可上传svg文件测试)">
                <kui-uploader v-model="beforeUploadValue" :url="url" xhr-code-name="errcode" xhr-code="0" :max-count="2" :before-upload="onBeforeUpload" />
              </kui-cell-group>
            </view>
            <!-- #endif -->
          </kui-space>
        </view>
      </template>
    </kui-page>
    <kui-toast v-model:show="toastState.show" :content="toastState.content" />
  </view>
</template>
