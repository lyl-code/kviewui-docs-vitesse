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
