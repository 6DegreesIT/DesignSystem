import React from "react";
import "./App.scss";
import Button from "./components/ui-components/Button";
import Row from "./components/ui-components/Row";
import Col from "./components/ui-components/Col";
import Input from "./components/ui-components/Input";
import Textarea from "./components/ui-components/Textarea";
import Container from "./components/ui-components/Container";
import Card from "./components/ui-components/Card";
import Form from "./components/ui-components/Form";
import Label from "./components/ui-components/Label";
import Checkbox from "./components/ui-components/Checkbox";
import Radio from "./components/ui-components/Radio";

function App() {
  return (
    <div className="App">
      <Container className="mt-3">
        <Row className="mt-3">
          <Col className="xl-6">
            <Card className="mt-2 radius">
              <div className="card-head">
                <h5 className="card-title">Card title</h5>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Button className="btn btn-outline outline-primary">
                  Go somewhere
                </Button>
              </div>
            </Card>
            <Card>
              <div className="card-cover">
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Button href="#" className="btn btn-outline outline-primary">
                  Button
                </Button>
              </div>
            </Card>
            <Input placeholder="Basic usage" className="mt-2" />
            <Textarea rows="5" className="mt-2"></Textarea>
            <Button className="btn-link">Button</Button>
            <hr></hr>
            <Form>
              <div class="form-group">
                <Label for="exampleInputEmail1">Email address</Label>
                <Input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="email"
                />
                <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div class="form-group">
                <Label for="exampleInputPassword1">Password</Label>
                <Input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="form-group">
                <Checkbox
                  type="checkbox"
                  class="styled-checkbox"
                  id="exampleCheck1"
                />
                <Label class="form-check-Label" for="exampleCheck1">
                  Check me out
                </Label>
              </div>

              <div class="form-group">
                <div>
                  <Radio
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios1"
                    value="option1"
                    checked
                  />
                  <Label class="form-check-Label" for="exampleRadios1">
                    Default radio
                  </Label>
                </div>
                <div>
                  <Radio
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios2"
                    value="option2"
                  />
                  <Label class="form-check-Label" for="exampleRadios2">
                    Second default radio
                  </Label>
                </div>
              </div>
              <Button type="submit" class="btn btn-primary">
                Submit
              </Button>
            </Form>
          </Col>
          <Col>
            <h1>Hello</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
