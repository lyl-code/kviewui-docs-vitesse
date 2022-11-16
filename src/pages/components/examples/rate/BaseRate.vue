<template>
    <view class="kui-w-full kui-h-full">
        <kui-page :custom-header="false">
            <template v-slot:body>
                <view class="kui-w-full">
                    <kui-space :gap="[30, 0]" direction="column">
                        <kui-cell-group title="基本用法">
                            <kui-rate v-model="baseValue"></kui-rate>
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
        const baseValue = ref(3);

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
