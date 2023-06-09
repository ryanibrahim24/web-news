import Card from 'react-bootstrap/Card';

function ImgOverlay(props) {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src={props.img} alt="Card image" />
      <Card.ImgOverlay className="bg-secondary bg-opacity-25">
        <Card.Title>{props.title}</Card.Title>
        <Card.Text className=".d-sm-none .d-md-block">{props.description}</Card.Text>
        <Card.Text>{props.author}</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default ImgOverlay;