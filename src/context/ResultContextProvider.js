import React, {createContext, useContext, useState} from 'react';
import axios from 'axios';

const ResultContext = createContext();

const baseUrl = 'https://youtube-v31.p.rapidapi.com'

let options = {
  params: {
    relatedToVideoId: '7ghhRHRP6t4',
    part: 'id,snippet',
    type: 'video',
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '19eaf1272bmsh8c470f27610e5aap132b3ajsn26693f2c4816',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

function ResultContextProvider({children}) {

  const [result, setResult] = useState([]);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchResult = async(url, id)=>{
    setSearchTerm('')
    setLoading(true);

    if(url === `/search/videos/${id}`){
      url = '/videos'
      options = {
        method: 'GET',
        url: 'https://youtube-v31.p.rapidapi.com/videos',
        params: {part: 'contentDetails,snippet,statistics', id: id},
        headers: {
          'X-RapidAPI-Key': '19eaf1272bmsh8c470f27610e5aap132b3ajsn26693f2c4816',
          'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
      }

      const { data } = await axios.get(`${baseUrl}${url}`, options)
      setResult(data.items)
      setLoading(false);

    } else {
      setSearchTerm('')
      options = {
        params: {
          relatedToVideoId: '7ghhRHRP6t4',
          part: 'id,snippet',
          type: 'video',
          maxResults: '50'
        },
        headers: {
          'X-RapidAPI-Key': '19eaf1272bmsh8c470f27610e5aap132b3ajsn26693f2c4816',
          'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
      }

      setLoading(true);
      const { data } = await axios.get(`${baseUrl}${url}`, options)
      
      !searchTerm && setResult(data.items);
      setLoading(false);
    }

  }

  const fetchSearchedVideo = async (term)=> {
    setLoading(true)
    const options = {
      method: 'GET',
      url: 'https://youtube-v31.p.rapidapi.com/search',
      params: {
        q: term,
        part: 'snippet,id',
        regionCode: 'US',
        maxResults: '50',
        order: 'date'
      },
      headers: {
        'X-RapidAPI-Key': '19eaf1272bmsh8c470f27610e5aap132b3ajsn26693f2c4816',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      }
    }

    const { data } = await axios.get(`${baseUrl}/search`, options)
    
    searchTerm && setResult(data.items)
    setLoading(false)

  }

  const fetchComments = async (id)=> {
    const options = {
      method: 'GET',
      url: 'https://youtube-v31.p.rapidapi.com/commentThreads',
      params: {part: 'snippet', videoId: id, maxResults: '100'},
      headers: {
        'X-RapidAPI-Key': '19eaf1272bmsh8c470f27610e5aap132b3ajsn26693f2c4816',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      }
    }

    const { data } = await axios.get(`${baseUrl}/commentThreads`, options)
    setComments(data.items)

  }

  return <ResultContext.Provider value={{
    fetchResult,
    fetchComments,
    result,
    comments,
    loading,
    searchTerm,
    setSearchTerm,
    fetchSearchedVideo
  }}>
    {children}
  </ResultContext.Provider>

}

export default ResultContextProvider

export const useGlobalContext = ()=> useContext(ResultContext)