import { useState, useEffect } from "react";
import ModalList from "./modal";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';

function ListContent() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true)
  const url =
    "https://newsapi.org/v2/everything?domains=engadget.com&sortBy=popularity&pageSize=6&apiKey=d34fd160e643437f97d31ff2757c015c";

  useEffect(function () {
    async function getNews() {
      const request = await fetch(url);
      const response = await request.json();
      setNews(response.articles);
      setLoading(false)
      console.log(response);
    }
    getNews();
  }, []);

  return (
    <Container fluid className="mt-3">
        <h1>Engadget News</h1>
        {loading ? (<i>Loading data...</i>) : (
            <Row xs={1} md={2} lg={3} className="g-4">
                {news.map((item, idx) => (
                <Col key={idx}>
                    <Card >
                    <Card.Img variant="top" src={item.urlToImage} />
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>{item.description}</Card.Text>
                        <ModalList
                            key={idx}
                            img={item.urlToImage}
                            author={item.author}
                            content={item.content}
                            time={item.publishedAt}
                            title={item.title}
                            description={item.description}
                            source={item.source.name}
                            url={item.url}
                        />
                    </Card.Body>
                    </Card>
                </Col>
                ))}
            </Row>
        )}
    </Container>
  );
}

export default ListContent;
