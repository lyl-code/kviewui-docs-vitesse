<template>
    <view class="kui-w-full kui-h-full">
        <kui-page :custom-header="false">
            <template v-slot:body>
                <view class="kui-w-full">
                    <kui-space :gap="[30, 0]" direction="column">
                        <kui-cell-group title="自定义总数">
							<kui-rate v-model="countValue" :count="8"></kui-rate>
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
        const countValue = ref(5);

        return {
            ...toRefs({
                countValue,
            }),
        }
    }
}
</script>

<style>

</style>
