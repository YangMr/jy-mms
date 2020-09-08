/*

*/

import router from "./router"

import loginApi from "./api/login"

router.beforeEach((to,from,next)=>{
    if(to.meta.oAuth){
        const token = localStorage.getItem("yy_token");
        if(!token){
            next("/login")
        }else{
            const info = localStorage.getItem("jy_info");
            if(info){
                next();
            }else{
                loginApi.wxInfo().then(res=>{
                    if(res.code == 200){
                        localStorage.setItem("jy_info",JSON.stringify(res.data.rows));
                        next();
                    }else{
                        next("/login")
                    }
                })
            }
        }
    }else{
        next();
    }
})