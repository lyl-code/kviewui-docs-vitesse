<script>
import {
  getCurrentInstance,
  nextTick,
  reactive,
  toRefs,
} from 'vue'

import { timingFunctionMap } from '@/common/theme/animation'
import { useExpose } from '@/common/utils/expose'

export default {
  setup() {
    const { proxy } = getCurrentInstance()
    const theme = proxy.$theme

    const state = reactive({
      backgroundColor: theme.colors.light.primary[5],
      timingFunction: Object.keys(timingFunctionMap),
      timingFunctionIndex: 0,
      name: ['scale-up-center', 'scale-up-hor-center', 'rotate-center', 'rotate-scale-up', 'flip-horizontal-bottom'],
      nameIndex: 0,
      duration: [0.4, 0.8, 1, 1.2, 1.8, 2, 2.4],
      durationIndex: 0,
      durationUnit: ['s', 'ms'],
      durationUnitIndex: 0,
      delay: [0, 1, 2, 3, 4, 100, 200, 300, 400],
      delayIndex: 0,
      delayUnit: ['s', 'ms'],
      delayUnitIndex: 0,
      interationCount: [1, 2, 3, 4, 5, 10, 20, 30, 40, 50],
      interationCountIndex: 0,
      infinite: ['是', '否'],
      infiniteIndex: 1,
      direction: ['normal', 'reverse', 'alternate', 'alternate-reverse'],
      directionIndex: 0,
      fillMode: ['none', 'forwards', 'backwards', 'both'],
      fillModeIndex: 3,
      options: {
        timingFunction: '',
        name: '',
      },
    })

    const bindPickerChange = (key, e) => {
      console.log(key)
      uni.pageScrollTo({
        scrollTop: 0,
      })
      state[`${key}Index`] = e.detail.value
      // state.timingFunctionIndex = e.detail.value;
      // state.options.timingFunction = timingFunctionMap[e.detail.value];
      nextTick(() => {
        let value = state[key][e.detail.value]
        if (key == 'infinite')
          value = value == '是'

        console.log(value)
        proxy.$refs.KuiAnimation.changeState(key, value)
        // state.backgroundColor = theme.colors.light['blue'][5]
        setTimeout(() => {
          const name = key == 'name' ? '' : state.name[state.nameIndex] // 防止重复触发动画
          console.log(name)
          proxy.$refs.KuiAnimation.restart(name)
          // state.backgroundColor = theme.colors.light['primary'][5];
        }, 600)
      })
    }

    const play = () => {
      uni.pageScrollTo({
        scrollTop: 0,
      })
      nextTick(() => {
        setTimeout(() => {
          proxy.$refs.KuiAnimation.restart()
        }, 600)
      })
    }

    const restart = () => {
      uni.pageScrollTo({
        scrollTop: 0,
      })
      nextTick(() => {
        setTimeout(() => {
          proxy.$refs.KuiAnimation.restart()
        }, 600)
      })
    }

    const pause = () => {
      uni.pageScrollTo({
        scrollTop: 0,
      })
      nextTick(() => {
        proxy.$refs.KuiAnimation.changeState('runingState', 'paused')
      })
    }

    // 暴露方法给外部使用
    useExpose({
      restart,
    })

    return {
      theme,
      ...toRefs(state),
      bindPickerChange,
      play,
      restart,
      pause,
    }
  },
}
</script>

<template>
  <kui-page :custom-header="false">
    <template #body>
      <view class="kui-mt-3">
        <view class="kui-flex kui-justify-center">
          <kui-animation ref="KuiAnimation" name="scale-up-center" runing>
            <view
              class="kui-h-24 kui-w-24 kui-rounded-md" :style="{
                backgroundColor,
              }"
            />
          </kui-animation>
        </view>
        <view class="kui-mt-10 kui-w-full">
          <view class="kui-mb-3">
            <kui-space justify="center" :gap="[0, 30]">
              <kui-button type="primary" :margin-y="10" @click="play">
                <kui-text size="13px">
                  开始播放
                </kui-text>
              </kui-button>
              <kui-button type="danger" :margin-y="10" @click="pause">
                <kui-text size="13px">
                  暂停播放
                </kui-text>
              </kui-button>
              <kui-button type="warning" :margin-y="10" @click="restart">
                <kui-text size="13px">
                  重复播放
                </kui-text>
              </kui-button>
            </kui-space>
          </view>
          <kui-space direction="column" :gap="[30, 0]">
            <kui-cell-group title="Name 动画形式" class="kui-w-full">
              <kui-cell title="scale-up-center" center>
                <template #content>
                  <picker class="kui-w-full" mode="selector" :range="name" :value="nameIndex" @change="bindPickerChange('name', $event)">
                    <view>{{ name[nameIndex] }}</view>
                  </picker>
                </template>
              </kui-cell>
            </kui-cell-group>
            <kui-cell-group title="Duration 动画时间" class="kui-w-full">
              <kui-cell title="0.4" center>
                <template #content>
                  <picker class="kui-w-full" mode="selector" :range="duration" :value="durationIndex" @change="bindPickerChange('duration', $event)">
                    <view>{{ duration[durationIndex] }}</view>
                  </picker>
                </template>
              </kui-cell>
            </kui-cell-group>
            <kui-cell-group title="DurationUnit 动画时间单位" class="kui-w-full">
              <kui-cell title="0.4" center>
                <template #content>
                  <picker class="kui-w-full" mode="selector" :range="durationUnit" :value="durationUnitIndex" @change="bindPickerChange('durationUnit', $event)">
                    <view>{{ durationUnit[durationUnitIndex] }}</view>
                  </picker>
                </template>
              </kui-cell>
            </kui-cell-group>
            <kui-cell-group title="TimingFunction 动画缓动函数" class="kui-w-full">
              <kui-cell title="linear" center>
                <template #content>
                  <picker class="kui-w-full" mode="selector" :range="timingFunction" :value="timingFunctionIndex" @change="bindPickerChange('timingFunction', $event)">
                    <view>{{ timingFunction[timingFunctionIndex] }}</view>
                  </picker>
                </template>
              </kui-cell>
            </kui-cell-group>
            <kui-cell-group title="Delay 动画延迟时间" class="kui-w-full">
              <kui-cell title="1" center>
                <template #content>
                  <picker class="kui-w-full" mode="selector" :range="delay" :value="delayIndex" @change="bindPickerChange('delay', $event)">
                    <view>{{ delay[delayIndex] }}</view>
                  </picker>
                </template>
              </kui-cell>
            </kui-cell-group>
            <kui-cell-group title="DelayUnit 动画延迟时间单位" class="kui-w-full">
              <kui-cell title="1" center>
                <template #content>
                  <picker class="kui-w-full" mode="selector" :range="delayUnit" :value="delayUnitIndex" @change="bindPickerChange('delayUnit', $event)">
                    <view>{{ delayUnit[delayUnitIndex] }}</view>
                  </picker>
                </template>
              </kui-cell>
            </kui-cell-group>
            <kui-cell-group title="IterationCount 动画循环次数" class="kui-w-full">
              <kui-cell title="1" center>
                <template #content>
                  <picker class="kui-w-full" mode="selector" :range="interationCount" :value="interationCountIndex" @change="bindPickerChange('interationCount', $event)">
                    <view>{{ interationCount[interationCountIndex] }}</view>
                  </picker>
                </template>
              </kui-cell>
            </kui-cell-group>
            <kui-cell-group title="Infinite 动画无限循环" class="kui-w-full">
              <kui-cell title="否" center>
                <template #content>
                  <picker class="kui-w-full" mode="selector" :range="infinite" :value="infiniteIndex" @change="bindPickerChange('infinite', $event)">
                    <view>{{ infinite[infiniteIndex] }}</view>
                  </picker>
                </template>
              </kui-cell>
            </kui-cell-group>
            <kui-cell-group title="Direction 动画开始方向" class="kui-w-full">
              <kui-cell title="normal" center>
                <template #content>
                  <picker class="kui-w-full" mode="selector" :range="direction" :value="directionIndex" @change="bindPickerChange('direction', $event)">
                    <view>{{ direction[directionIndex] }}</view>
                  </picker>
                </template>
              </kui-cell>
            </kui-cell-group>
            <kui-cell-group title="FillMode 动画填充模式" class="kui-w-full">
              <kui-cell title="both" center>
                <template #content>
                  <picker class="kui-w-full" mode="selector" :range="fillMode" :value="fillModeIndex" @change="bindPickerChange('fillMode', $event)">
                    <view>{{ fillMode[fillModeIndex] }}</view>
                  </picker>
                </template>
              </kui-cell>
            </kui-cell-group>
            <kui-cell-group title="">
              <kui-text color="hsl(213,10.00%, 56.86%)">
                示例数据为组件支持的部分数据，详细支持数据请参考组件源码和https://animista.net/
              </kui-text>
            </kui-cell-group>
          </kui-space>
        </view>
      </view>
    </template>
  </kui-page>
</template>
