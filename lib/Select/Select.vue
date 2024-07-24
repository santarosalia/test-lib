<script setup lang="ts">
import { css } from '@emotion/css';
import { color } from '@lib/Color/config';
import Icon from '@lib/Icon/Icon.vue';
import { nextTick, onMounted, ref, } from 'vue';

const isOpen = ref(false);
const optionElementList = ref<HTMLElement[]>();

const props = defineProps<{optionList: string[]}>();
const baseClassName = css({
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    width: '100%',
    padding: '8px',
    boxSizing: 'border-box',
    height: '36px',
    gap: '10px',
    border: `1px solid ${color.gray400}`,
    backgroundColor: color.white,
    borderRadius: '4px',
    '& div:first-child': {
        display: 'flex',
        justifyContent: 'space-between'
    }
});
const modelValueClassName = css({
    cursor: 'default'
});
const optionListClassName = css({
    position: 'absolute',
    top: '36px',
    width: '100%',
    left: 0,
    display: 'flex',
    boxSizing: 'border-box',
    overflowX: 'hidden',
    border: `1px solid ${color.gray400}`,
    borderRadius: '6px',
    backgroundColor: color.white,
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.10)',
    // '@keyframes dropdown' : {
    //     '0%': {
    //         transform: 'translateY(-100%)',
    //     },
    //     '100%': {
    //         transform: 'translateY(0)',
    //     },
    // },
    animation: '0.5s ease',
    '& ul': {
        flexDirection: 'column',
        alignItems: 'flex-start',
        flex: '1 0 0',
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        overflowX: 'hidden',
        overflowY: 'scroll',
        maxHeight: '220px',
        '::-webkit-scrollbar': {
            width: '4px',
            height: '4px',
            backgroundColor: 'gray'
        },
        '::-webkit-scrollbar-thumb': {
            backgroundColor: 'black',
            borderRadius: '5px'
        },
        '& li': {
            boxSizing: 'border-box',
            display: 'flex',
            height: '48px',
            alignItems: 'center',
            padding: '12px',
            ':hover': {
                backgroundColor: color.blue300
            }
        }
    },
    
});
const toggleSelect = (e: MouseEvent) => {
    isOpen.value = !isOpen.value;
    if (isOpen.value) {
        addEventListener('mousedown', onMousedown);
        const i = props.optionList.findIndex(option => option === model.value);
        nextTick(() => {
            if (!optionElementList?.value) return;
            optionElementList.value[i].scrollIntoView(true);
        });
    }
    else removeEventListener('mousedown', onMousedown);
}
const onMousedown = (e: MouseEvent) => {
    const isLi = optionElementList.value?.find((el) => el === e.target);
    if (!isLi) toggleSelect(e);
}
onMounted(() => {
    return { optionElementList }
});

const onClickOption = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    model.value = target.textContent!;
    toggleSelect(e);
}
const isSelected = (option: string) => {
    const isSelected = option === model.value;
    return isSelected;
}
const selectedClassName = css({
    backgroundColor: color.blue300
});

const model = defineModel<string>();
const rotate = css({
    transform: 'rotate(0.5turn)'
});

</script>
<template>
    <div :class="baseClassName">
        <div @mousedown.stop="toggleSelect">
            <span :class="modelValueClassName">
                {{ model }}
            </span>
            <Icon icon="arrowBottom" width="24px" height="24px" :class="isOpen ? rotate : ''" color="black"></Icon>
        </div>
        <div
            v-if="isOpen"
            :class="optionListClassName"
            >
            <ul>
                <li
                    v-for="(option) in optionList"
                    ref="optionElementList"
                    :class="isSelected(option) ? selectedClassName : null"
                    @click="onClickOption"
                    >
                    {{ option }}
                </li>
            </ul>
        </div>
    </div>
    
</template>