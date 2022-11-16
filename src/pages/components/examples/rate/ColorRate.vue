<template>
    <view class="kui-w-full kui-h-full">
        <kui-page :custom-header="false">
            <template v-slot:body>
                <view class="kui-w-full">
                    <kui-space :gap="[30, 0]" direction="column">
                        <kui-cell-group title="自定义颜色" desc="支持色阶调整">
                            <kui-rate v-model="colorValue"></kui-rate>
                            <kui-rate active-color="orange" v-model="colorValue"></kui-rate>
                            <kui-rate active-color="danger" v-model="colorValue"></kui-rate>
                            <kui-rate active-color="info" v-model="colorValue"></kui-rate>
                            <kui-rate active-color="cyan" v-model="colorValue"></kui-rate>
                            <kui-rate active-color="primary" :active-color-level="8" v-model="colorValue"></kui-rate>
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
        const colorValue = ref(3);

        return {
            ...toRefs({
                colorValue,
            }),
        }
    }
}
</script>

<style>

</style>
