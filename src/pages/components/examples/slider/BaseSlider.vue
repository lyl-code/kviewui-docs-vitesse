<template>
    <view class="kui-w-full kui-h-full">
        <kui-page :custom-header="false">
            <template v-slot:body>
                <view class="kui-w-full">
                    <kui-space :gap="[30, 0]" direction="column">
                        <view class="kui-w-full">
                            <kui-cell-group title="基本用法">
                                <kui-slider v-model="baseValue" />
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
        const baseValue = ref(0);

        return {
            ...toRefs({
                baseValue,
            }),
        }
    }
}
</script>

<style>

</style>
