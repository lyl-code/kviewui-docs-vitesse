<template>
    <view class="kui-w-full kui-h-full">
        <kui-page :custom-header="false">
            <template v-slot:body>
                <view class="kui-w-full">
                    <kui-space :gap="[30, 0]" direction="column">
                        <view class="kui-w-full">
                            <kui-cell-group title="双滑块">
                                <kui-slider v-model="rangeValue" range />
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
        const rangeValue = ref([20, 60]);

        return {
            ...toRefs({
                rangeValue,
            }),
        }
    }
}
</script>

<style>

</style>
