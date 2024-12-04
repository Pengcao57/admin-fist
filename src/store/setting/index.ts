import  {defineStore} from 'pinia';
import pinia from '@/store';
//你可以对‘defienStore()’ 的返回值进行任意命名,但最好使用store 的名字,同时以‘use’开头且以 ‘store’ 结尾.( 比如‘’useAlertStore’’)
// 第一个参数是你的应用中Store 的唯一 ID
 export const useSettingStoreHook = defineStore('SettingStore', {
    state: () => ({
        title: [] as string[]
    }),
       actions:{
        setTitle( title:string ){
            this.title = title;
        }
     }
});
export function useSettingStore() {
    return useSettingStoreHook(pinia);
}
