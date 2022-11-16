<template>
    <view class="kui-w-full kui-h-full">
        <kui-page :custom-header="false">
            <template v-slot:body>
                <view class="kui-w-full">
                    <kui-space :gap="[30, 0]" direction="column">
                        <kui-cell-group title="自定义间隔">
							<kui-rate v-model="gapValue" :gap="15"></kui-rate>
							<kui-rate v-model="gapValue" :gap="20"></kui-rate>
							<kui-rate v-model="gapValue" :gap="25"></kui-rate>
							<kui-rate v-model="gapValue" :gap="30"></kui-rate>
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
        const gapValue = ref(3);

        return {
            ...toRefs({
                gapValue,
            }),
        }
    }
}
</script>

<style>

</style>
