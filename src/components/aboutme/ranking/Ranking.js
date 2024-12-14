import React from "react";
import { FaHackerrank } from "react-icons/fa";
import Zoom from "react-reveal/Zoom";
import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

export default function Ranking() {
  return (
    <div className="mt-4">
      <Zoom left cascade>
        <h1>See my rank</h1>
      </Zoom>
      <Container className="mt-5">
        <Row className="g-5">
          <Col md={12}>
            <a
              href="https://www.hackerrank.com/profile/preethi522002"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <Zoom cascade>
                <FaHackerrank />
              </Zoom>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
