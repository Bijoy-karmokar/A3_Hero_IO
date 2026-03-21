import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Trending from '../components/Trending';
import axios from 'axios';
import Lottie from 'lottie-react';
import LoadingSpiner from '../assets/loadingSpiner.json';

const Home = () => {
    const [heros, setHeros] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('/heros.json')
            .then(res => {
                setHeros(res.data);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <Banner />

            {
                loading ? (
                    
                        <Lottie className='w-80 mx-auto' animationData={LoadingSpiner} />
                
                ) : (
                    <Trending heros={heros} />
                )
            }
        </div>
    );
};

export default Home;