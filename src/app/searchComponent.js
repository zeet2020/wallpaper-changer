import React from "react";
import ReactDOM from "react-dom";
import { Row, Col, ListGroup, Form, Button } from "react-bootstrap";

function debounce(callback, delay) {
  var id;
  return function() {
    if (!id) {
      id = setTimeout(() => {
        callback.apply(this, argument);
        clearTimeout(id);
      }, delay);
    }
  };
}

export class SearchComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };

    this.Change = event => {
      this.setState({ text: event.target.value });
      this.props.search(event.target.value);
    };
  }

  render() {
    let data = this.props.data;

    return (
      <Row className="searchBar">
        <Col xs={4} md={4} />
        <Col xs={4} md={4} />
        <Col xs={4} md={4}>
          <Form>
            <Form.Group as={Row} controlId="formPlaintext">
              <Col sm="12">
                <Form.Control
                  onChange={this.Change}
                  value={this.state.text}
                  type="text"
                  placeholder="Search"
                />
              </Col>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    );
  }
}
