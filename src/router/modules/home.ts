export default {
    path: '/',
    name: 'Layout',
    redirect: '/',
    component: ()=> import('@/layout/index.vue'),
    meta: {},
    children: [
        {
        path: '/',
        name: 'HomePage',
        component: ()=> import('@/views/home/index.vue'),
        meta: {
            title: '默认首页',
            isShow : true,
            parentRouter:'Layout',
        },

        },
        {
            path: '/p',
            name: 'ParentPage',
            meta:{
                isShow : true,
                title:'父菜单',
                parentRouter:'Layout',
            },
            children:[
                {
                path:'/p/child1',
                name:'ChildPage1',
                meta:{
                    title:'子菜单1',
                    isShow : true,
                    parentRouter:'ParentPage',
                    }
                },
                {
                    path:'/p/child2',
                    name:'ChildPage2',
                    meta:{
                        title:'子菜单2',
                        isShow : true,
                        parentRouter:'ParentPage',
                    }
                },
                {
                    path:'/p/child3',
                    name:'ChildPage3',
                    meta:{
                         title:'子菜单3',
                          isShow : true,
                          parentRouter:'ParentPage',
                }
            },
         ]
        },
        {
            path: '/project',
            name: 'projectPage',
            component: ()=> import('@/views/project/index.vue'),
            meta: {
                title: '项目模块',
                isShow : true,
                parentRouter:'Layout',
            },
  
            },
        {
            path: '/user',
            name: 'UserPage',
            component: ()=> import('@/views/user/index.vue'),
            meta: {
                title: '用户模块',
                isShow: true,
                parentRouter:'Layout',
            },

        },
        {
            path: '/role',
            name: 'RolePage',
            component: ()=> import('@/views/role/index.vue'),
            meta: {
                title: '角色',
                isShow: true,
                parentRouter:'Layout',
            },
 
        },
        {
            path: '/auth',
            name: 'AuthPage',
            component: ()=> import('@/views/auth/index.vue'),
            meta: {
                title: '权限',
                isShow: true,
                parentRouter:'Layout',
            }    
        },

],
}; 