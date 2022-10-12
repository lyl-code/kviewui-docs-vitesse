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
