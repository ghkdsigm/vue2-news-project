import { fetchNewsList,fetchAskList,fetchJobsList,fetchUserInfo, fetchItemInfo, fetchList} from '../api/index.js'
export default{
    FETCH_NEWS(context){
        fetchNewsList()
        .then(res => {
            context.commit('SET_NEWS', res.data);
            return res;
        })
        .catch(err => {
            console.log(err)
        })
    },
    FETCH_ASK(context){
        fetchAskList()
        .then(res=>{
            context.commit('SET_ASK',res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },
    FETCH_JOBS(context){
        fetchJobsList()
        .then(res=>{
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
    FETCH_LIST({commit}, pageName){
        fetchList(pageName)
        .then(({data})=> commit('SET_LIST', data))
        .catch(error => console.log(error))
    }
}