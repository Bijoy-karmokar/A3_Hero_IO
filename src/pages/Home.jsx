import React, { Suspense } from 'react';
import Banner from '../components/Banner';
import Trending from '../components/Trending';
import axios from 'axios';

const fetchHeros = async()=>{
    const res = await axios.get('/heros.json');
    // console.log(res.data);
    return res.data;
    
}
const Home = () => {
    const promiseHeros = fetchHeros();
    return (
        <div>
           <Banner></Banner>
           <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
            <Trending promiseHeros={promiseHeros}></Trending>
           </Suspense>
        </div>
    );
};

export default Home;