import request from "../utils/request"

export default {
    getUserList(){
        return request({
            url : "https://elm.cangdu.org/v1/users/list",
            method : "get",
            params : {
                offset : 0,
                limit : 20
            }
        })
    }
}