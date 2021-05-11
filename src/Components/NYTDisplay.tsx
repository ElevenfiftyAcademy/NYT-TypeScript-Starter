import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const NYTDisplay = () => {
  return (
    <Card style={{ margin: "2em", width: "30%" }}>
      <CardBody>
        <CardTitle>Headline</CardTitle>
        <CardImg alt="article" src={``} />
        <CardSubtitle>
          Snippet
          <br />
          Keywords
        </CardSubtitle>
        <CardText>keyword</CardText>
        <a href={``}>
          <Button>Read It</Button>
        </a>
      </CardBody>
    </Card>
  );
};

export default NYTDisplay;
