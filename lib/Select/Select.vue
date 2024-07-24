<script setup lang="ts">
import { css } from '@emotion/css';
import { color } from '@lib/Color/config';
import Icon from '@lib/Icon/Icon.vue';
import { onMounted, ref } from 'vue';

const isOpen = ref(false);
const optionElementList = ref<HTMLElement[]>();
const selectedElement = ref<HTMLElement>();


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
const toggleSelect = () => {
    isOpen.value = !isOpen.value;
    if (isOpen.value) {
        addEventListener('mousedown', onClick);
        const i = props.optionList.findIndex(option => option === model.value);
        if (!optionElementList?.value) return;
        console.log(1)
        console.log(optionElementList.value[i])
        optionElementList.value[i].scrollIntoView(true);
    }
    else removeEventListener('mousedown', onClick);
}
const onClick = (e: MouseEvent) => {
    const isLi = optionElementList.value?.find((el) => el === e.target);
    if (!isLi) toggleSelect();
}
onMounted(() => {
    return { optionElementList }
});

const onClickOption = (option: string) => {
    model.value = option;
    toggleSelect();
}
const isSelected = (option: string) => {
    const isSelected = option === model.value;
    return isSelected;
}
const selectedClassName = css({
    backgroundColor: color.blue300
});

const model = defineModel<string>();
</script>
<template>
    <div :class="baseClassName">
        <div @click="toggleSelect">
            <span :class="modelValueClassName">
                {{ model }}
            </span>
            <Icon icon="arrowBottom" width="24px" height="24px" color="black"></Icon>
        </div>
        <div
            v-show="isOpen"
            :class="optionListClassName"
            >
            <ul>
                <li
                    v-for="(option) in optionList"
                    ref="optionElementList"
                    :class="isSelected(option) ? selectedClassName : ''"
                    @click="onClickOption(option)"
                    >
                    {{ option }}
                </li>
            </ul>
        </div>
    </div>
    
</template>