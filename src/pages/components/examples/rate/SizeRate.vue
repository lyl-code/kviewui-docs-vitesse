<template>
    <view class="kui-w-full kui-h-full">
        <kui-page :custom-header="false">
            <template v-slot:body>
                <view class="kui-w-full">
                    <kui-space :gap="[30, 0]" direction="column">
                        <kui-cell-group title="自定义大小">
							<kui-rate v-model="sizeValue" :iconSize="26" allow-half></kui-rate>
							<kui-rate v-model="sizeValue" :iconSize="36" allow-half></kui-rate>
							<kui-rate v-model="sizeValue" :iconSize="46" allow-half></kui-rate>
							<kui-rate v-model="sizeValue" :iconSize="56" allow-half></kui-rate>
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
        const sizeValue = ref(3);

        return {
            ...toRefs({
                sizeValue,
            }),
        }
    }
}
</script>

<style>

</style>
