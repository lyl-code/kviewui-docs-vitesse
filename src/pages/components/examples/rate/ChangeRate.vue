<template>
    <view class="kui-w-full kui-h-full">
        <kui-page :custom-header="false">
            <template v-slot:body>
                <view class="kui-w-full">
                    <kui-space :gap="[30, 0]" direction="column">
                        <kui-cell-group title="事件监听">
                            <kui-rate v-model="changeValue.state.value" @change="changeValue.methods.onChange">
                            </kui-rate>
                        </kui-cell-group>
                    </kui-space>
                </view>
            </template>
        </kui-page>
        <kui-toast :content="changeValue.state.toast.content" v-model:show="changeValue.state.toast.show"></kui-toast>
    </view>
</template>

<script lang="ts">
import {
    reactive,
    toRefs
} from 'vue';

export default {
    setup() {
        const changeValue = {
            state: reactive({
                value: 3,
                toast: {
                    show: false,
                    content: ''
                }
            }),
            methods: {
                onChange(e: any) {
                    console.log(e);
                    changeValue.state.toast.content = `当前评分：${e}`;
                    changeValue.state.toast.show = true;
                }
            }
        };

        return {
            ...toRefs({
                changeValue,
            }),
        }
    }
}
</script>

<style>

</style>
