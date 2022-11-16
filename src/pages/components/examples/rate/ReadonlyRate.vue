<template>
    <view class="kui-w-full kui-h-full">
        <kui-page :custom-header="false">
            <template v-slot:body>
                <view class="kui-w-full">
                    <kui-space :gap="[30, 0]" direction="column">
                        <kui-cell-group title="只读">
							<kui-rate v-model="readonlyValue" readonly></kui-rate>
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
        const readonlyValue = ref(3);

        return {
            ...toRefs({
                readonlyValue,
            }),
        }
    }
}
</script>

<style>

</style>
