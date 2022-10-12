<script lang="ts">
export default {
  setup() {
    const data = [
      'square-turn',
      'chase-dot',
      'double-bounce',
      'rect',
      'cube1',
      'spinner',
      'dot',
      'bounce',
      'circle-dot',
      'cube2',
      'circle-dot2',
      'cube3',
      'circle-dot3',
      'square-dot',
      'square-dot2',
    ]

    return {
      data,
    }
  },
}
</script>

<template>
  <kui-cell-group title="基础用法">
    <view class="kui-mt-3 kui-flex kui-w-full kui-flex-wrap kui-box-border">
      <template v-for="item in data">
        <view class="kui-w-1-3 kui-h-28">
          <view
            class="kui-bg-white kui-mr-1 kui-pb-1 kui-flex kui-flex-col kui-justify-center kui-items-center kui-h-24 kui-rounded-md"
          >
            <kui-spin :type="item" />
            <view class="kui-pt-3">
              <kui-text selectable>
                {{ item }}
              </kui-text>
            </view>
          </view>
        </view>
      </template>
    </view>
  </kui-cell-group>
</template>
