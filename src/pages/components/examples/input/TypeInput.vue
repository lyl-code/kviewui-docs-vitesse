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
                  <kui-cell-group title="输入框类型" />
                </view>
                <kui-input
                  v-model="typeState.state.text"
                  label="文本"
                  placeholder="请输入文本"
                />
                <kui-input
                  v-model="typeState.state.password"
                  label="密码"
                  type="password"
                  placeholder="请输入密码"
                />
                <kui-input
                  v-model="typeState.state.number"
                  label="数字"
                  type="number"
                  placeholder="请输入数字"
                />
                <!-- <kui-input v-model="typeState.state.integer" label="整数" type="integer" placeholder="请输入整数" @change="typeState.methods.onChange" /> -->
                <!-- <kui-input v-model="typeState.state.tel" label="手机号" type="tel" placeholder="请输入手机号" @change="typeState.methods.onChange" /> -->
                <!-- #ifdef MP -->
                <kui-input
                  v-model="typeState.state.idcard"
                  label="身份证"
                  type="idcard"
                  placeholder="请输入身份证号"
                  @change="typeState.methods.onChange"
                />
                <!-- #endif -->
                <!-- #ifdef MP-WEIXIN -->
                <kui-input
                  v-model="typeState.state.idcard"
                  label="安全键盘"
                  type="nickname"
                  placeholder="密码安全输入键盘"
                  @change="typeState.methods.onChange"
                />
                <!-- #endif -->
              </view>
            </kui-space>
          </view>
        </view>
      </template>
    </kui-page>
  </view>
</template>
