<template>
    <view class="kui-w-full kui-h-full">
        <kui-page :custom-header="false">
            <template v-slot:body>
                <view class="kui-w-full">
                    <kui-space :gap="[30, 0]" direction="column">
                        <kui-cell-group title="半选">
							<kui-rate v-model="halfValue" allow-half></kui-rate>
							<kui-rate active-icon="heart" inactive-icon="heart-o" v-model="halfValue" allow-half></kui-rate>
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
        const halfValue = ref(2.5);

        return {
            ...toRefs({
                halfValue,
            }),
        }
    }
}
</script>

<style>

</style>
