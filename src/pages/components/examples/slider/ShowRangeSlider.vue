<template>
    <view class="kui-w-full kui-h-full">
        <kui-page :custom-header="false">
            <template v-slot:body>
                <view class="kui-w-full">
                    <kui-space :gap="[30, 0]" direction="column">
                        <view class="kui-w-full">
                            <kui-cell-group title="指定范围">
                                <kui-slider v-model="customRangeValue" show-range :min="-5" :max="5" />
                            </kui-cell-group>
                        </view>
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
        const customRangeValue = ref(0);

        return {
            ...toRefs({
                customRangeValue,
            }),
        }
    }
}
</script>
