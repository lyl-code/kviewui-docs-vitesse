<template>
    <view class="kui-w-full kui-h-full">
        <kui-page :custom-header="false">
            <template v-slot:body>
                <view class="kui-w-full">
                    <kui-space :gap="[30, 0]" direction="column">
                        <kui-cell-group title="字段校验" desc="错误提示支持插槽定制">
                            <kui-rate v-model="rulesValue.value.value" :rules="rulesValue.rules"></kui-rate>
                        </kui-cell-group>
                    </kui-space>
                </view>
            </template>
        </kui-page>
    </view>
</template>

<script lang="ts">
import {
    ref,
    toRefs
} from 'vue';

export default {
    setup() {
        const rulesValue = {
            value: ref(3),
            rules: {
                'validator': (score: number) => score > 2,
                'message': '评分必须大于2'
            }
        };
        return {
            ...toRefs({
                rulesValue,
            }),
        }
    }
}
</script>

<style>

</style>
