<script lang="ts">
import { reactive } from 'vue'

export default {
  setup() {
    const modeState = {
      state: reactive({
        mode: 'light',
        modeChecked: false,
      }),
      methods: {
        onChange(e) {
          modeState.state.mode = e ? 'dark' : 'light'
          uni.$emit('changeMode', modeState.state.mode)
        },
      },
    }

    const typeState = {
      state: reactive({
        text: '',
        password: '',
        number: '',
        integer: '',
        tel: '',
        nickname: '',
        idcard: '',
        safePassword: '',
        readonly: '只读',
        code: '',
      }),
      methods: {
        onChange(e) {
          console.log(typeState.state.integer)
        },
      },
    }

    return {
      modeState,
      typeState,
    }
  },
}
</script>

<template>
  <view class="kui-w-full kui-h-full">
    <kui-page :padding-x="0" :custom-header="false">
      <template #body>
        <view class="kui-w-full kui-h-full">
          <view class="kui-my-3 kui-px-5 kui-h-full kui-flex kui-items-center">
            <kui-text>暗黑模式：</kui-text>
            <kui-switch
              v-model="modeState.state.modeChecked"
              @change="modeState.methods.onChange"
            />
          </view>
          <view class="kui-my-3">
            <kui-space :gap="[30, 0]" direction="column">
              <view class="kui-w-full">
                <view class="kui-px-5">
                  <kui-cell-group title="按钮插槽" />
                </view>
                <kui-input
                  v-model="typeState.state.code"
                  label="验证码"
                  placeholder="请输入短信验证码"
                >
                  <template #button>
                    <view class="kui-ml-3">
                      <kui-button type="primary" size="small">
                        发送验证码
                      </kui-button>
                    </view>
                  </template>
                </kui-input>
                <kui-input
                  v-model="typeState.state.code"
                  label="验证码"
                  placeholder="请输入验证码"
                >
                  <template #button>
                    <view class="kui-ml-3">
                      <kui-image
                        src="https://wwcdn.weixin.qq.com/node/wework/images/202010241547.ac6876be9c.png"
                        width="160rpx"
                        height="40rpx"
                      />
                    </view>
                  </template>
                </kui-input>
                <kui-input
                  v-model="typeState.state.code"
                  label="验证码"
                  placeholder="请输入短信验证码"
                >
                  <template #button>
                    <view class="kui-ml-3">
                      <kui-text color="primary">
                        发送验证码
                      </kui-text>
                    </view>
                  </template>
                </kui-input>
              </view>
            </kui-space>
          </view>
        </view>
      </template>
    </kui-page>
  </view>
</template>
