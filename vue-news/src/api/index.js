import axios from 'axios';

// HTTP Reques & Response 관련 기본 설정
const config = {
    baseUrl:'https://api.hnpwa.com/v0/',
    user: 'https://api.hnpwa.com/v0/user/',
    item: 'https://api.hnpwa.com/v0/item/'
  };
  
  //2. API 함수 정리
  function fetchNewsList() {
    try {
      const res = axios.get(`${config.baseUrl}news/1.json`);
      return res
    } catch (error) {
      console.log(error)
    }
  }
  
  function fetchAskList() {
    return axios.get(`${config.baseUrl}ask/1.json`);
  }
  
  function fetchJobsList() {
    return axios.get(`${config.baseUrl}jobs/1.json`);
  }
  
  function fetchUserInfo(id) {
    const url = `${config.user}${id}.json`;
    return axios.get(url);
  }
  
  function fetchItemInfo(id) {
    const url = `${config.item}${id}.json`;
    return axios.get(url);
  }
  
  //try catch문
  function fetchList(pageName) {
    try {
      const res =  axios.get(`${config.baseUrl}${pageName}/1.json`);
      return res
    } catch (error) {
      console.log(error)
    }
  }

export {
    fetchNewsList,
    fetchAskList,
    fetchJobsList,
    fetchUserInfo,
    fetchItemInfo,
    fetchList
}