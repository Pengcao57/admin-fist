import {ref} from 'vue';

export function useComRef<T extends abstract new (...args: any) => any>(){
    return ref<InstanceType<T>>();
}