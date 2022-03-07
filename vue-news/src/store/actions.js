import { fetchNewsList,fetchAskList,fetchJobsList,fetchUserInfo, fetchItemInfo} from '../api/index.js'
export default{
    FETCH_NEWS(context){
        fetchNewsList()
        .then(res => {
            console.log(res);
            context.commit('SET_NEWS', res.data);
        })
        .catch(err => {
            console.log(err)
        })
    },
    FETCH_ASK(context){
        fetchAskList()
        .then(res=>{
            console.log(res)
            context.commit('SET_ASK',res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },
    FETCH_JOBS(context){
        fetchJobsList()
        .then(res=>{
            console.log(res)
            context.commit('SET_JOBS',res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },        
    FETCH_USER({commit}, name){
        fetchUserInfo(name)
        .then(({data}) => {
            commit('SET_USER', data)
        })
        .catch(error => {
            console.log(error);
        })
    },
    FETCH_ITEM({commit}, id){
        fetchItemInfo(id)
        .then(({data}) => {
            commit('SET_ITEM', data)
        })
        .catch(error => {
            console.log(error);
        })
    },
}