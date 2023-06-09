import { useState, useEffect } from 'react';
import ImgOverlay from './imgoverlays';
import { Container } from 'react-bootstrap';

function Headline() {
    const [headline, setHeadline] = useState([]);
    const [loading, setLoading] = useState(true)
    const url = "https://newsapi.org/v2/top-headlines?country=us&category=technology&pageSize=1&apiKey=d34fd160e643437f97d31ff2757c015c";
    
    useEffect(function() {
        async function getHeadLine() {
            const request = await fetch(url);
            const response = await request.json();
            setHeadline(response.articles);
            setLoading(false);
        }
        getHeadLine();
    }, []);

  return (
    <>
    <Container fluid className='mt-3'>
        <h1>Headline News</h1>
        {loading ? (<i>Loading data....</i>) : (
            headline.map((item, id) => {
                return(
                    <ImgOverlay key={id} img={item.urlToImage} author={item.author} description={item.description} content={item.content} time={item.publishedAt} title={item.title} /> )}
                )
        )}
    </Container>
    </>
  );
}

export default Headline;