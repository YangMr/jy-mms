import request from "../utils/request"

export default {
    //获取会员列表接口
    getMemberList(){
        return request({
            url : "/member/list",
            method : "get"
        })
    }
}   