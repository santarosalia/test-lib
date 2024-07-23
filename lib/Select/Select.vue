<script setup lang="ts">
import { css } from '@emotion/css';
import { color } from '@lib/Color/config';
import Icon from '@lib/Icon/Icon.vue';
import { ref } from 'vue';

const isOpen = ref(false);
const props = defineProps<{optionList: string[]}>();
const baseClassName = css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px',
    height: '36px',
    gap: '10px',
    border: `1px solid ${color.gray400}`,
    backgroundColor: color.white,
    borderRadius: '4px',
    
});
const modelValueClassName = css({
    cursor: 'default'
});
const optionListClassName = css({
    border: `1px solid ${color.gray400}`,
    borderRadius: '6px',
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.10)',
    '& ul': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        flex: '1 0 0',
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        overflowX: 'hidden',
        overflowY: 'scroll',
        height: '128px',
        '& li': {
            // 개당 높이 48px = height + padding * 2
            display: 'flex',
            width: '100%',
            height: '24px',
            alignItems: 'center',
            padding: '12px',
            ':hover': {
                backgroundColor: color.blue300
            }
        }
    },
    
});
const onClickSelect = () => {
    isOpen.value = !isOpen.value;
}
const onClickOption = (option: string) => {
    model.value = option;
    isOpen.value = false;
}
const isSelected = (option: string) => {
    return option === model.value
}
const selectedClassName = css({
    backgroundColor: color.blue300
});

const model = defineModel<string>();
</script>
<template>
    <div :class="baseClassName" @click="onClickSelect">
        <span :class="modelValueClassName">
            {{ model }}
        </span>
        <Icon icon="arrowBottom" width="24px" height="24px" color="black"></Icon>
        
    </div>
    <div
        v-if="isOpen"
        :class="optionListClassName"
        >
        <ul>
            <li
                v-for="option in optionList"
                :class="isSelected(option) ? selectedClassName : ''"
                @click="onClickOption(option)"
                >
                {{ option }}
            </li>
        </ul>
    </div>
</template>