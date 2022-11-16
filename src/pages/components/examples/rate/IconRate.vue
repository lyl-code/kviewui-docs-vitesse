<template>
    <view class="kui-w-full kui-h-full">
        <kui-page :custom-header="false">
            <template v-slot:body>
                <view class="kui-w-full">
                    <kui-space :gap="[30, 0]" direction="column">
                        <kui-cell-group title="自定义图标" desc="建议激活图标和未激活图标样式一致">
							<kui-rate active-icon="heart" :iconSize="30" inactive-icon="heart-o" v-model="iconValue"></kui-rate>
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
        const iconValue = ref(3);

        return {
            ...toRefs({
                iconValue,
            }),
        }
    }
}
</script>

<style>

</style>
