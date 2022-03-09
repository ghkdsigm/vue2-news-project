import { fetchNewsList,fetchAskList,fetchJobsList,fetchUserInfo, fetchItemInfo, fetchList} from '../api/index.js'
export default{
    //FETCH_NEWS promise 형식
    // FETCH_NEWS(context){
    //     return fetchNewsList()
    //     .then(res => {
    //         context.commit('SET_NEWS', res.data);
    //         return res;
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // },
    
    //FETCH_NEWS async 형식
    async FETCH_NEWS(context){
        try {
            const res = await fetchNewsList()        
            context.commit('SET_NEWS', res.data);
            return res;      
        } catch (error) {
            console.log(error)
        }
    },

    FETCH_ASK(context){
        return fetchAskList()
        .then(res=>{
            context.commit('SET_ASK',res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },
    FETCH_JOBS(context){
        return fetchJobsList()
        .then(res=>{
            context.commit('SET_JOBS',res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },        
    FETCH_USER({commit}, name){
        return fetchUserInfo(name)
        .then(({data}) => {
            commit('SET_USER', data)
        })
        .catch(error => {
            console.log(error);
        })
    },
    FETCH_ITEM({commit}, id){
        return fetchItemInfo(id)
        .then(({data}) => {
            commit('SET_ITEM', data)
        })
        .catch(error => {
            console.log(error);
        })
    },


    //FETCH_LIST promise형식
    // FETCH_LIST({commit}, pageName){
    //     return fetchList(pageName)
    //     .then(({data})=> commit('SET_LIST', data))
    //     .catch(error => console.log(error))
    // }

    //FETCH_LIST async형식
    async FETCH_LIST({commit}, pageName){
        const res = await fetchList(pageName)
        commit('SET_LIST', res.data)
        return res
    }
}