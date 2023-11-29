import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ContentBox from './ContentBox';
import React, {useState} from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';

function ButtonBar() {
  const [type, setType] = React.useState("lab");
  
  return (
    <div class="d-flex flex-column mt-2 ">
      <ButtonGroup size="lg" aria-label="Basic example">
        <Button active={type == "lab" ? true : false} onClick={() => setType("lab")} variant="primary">Labs</Button>{' '}
        <Button active={type == "resources" ? true : false} onClick={() => setType("resources")} variant="primary">Resources</Button>
        <Button active={type == "challenges" ? true : false} onClick={() => setType("challenges")} variant="primary">Challenges</Button>
        <Button active={type == "projects" ? true : false} onClick={() => setType("projects")} variant="primary">Projects</Button>
      </ButtonGroup>
      <div class="row">
        <div class="col-3">
          <div class="container shadow border mt-4">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Duration</Accordion.Header>
                <Accordion.Body>
                  <Form>
                    {['checkbox'].map((type) => (
                      <div key="{`default-${type}`}" className="mb-3">
                        <Form.Check type={type} id={`default-${type}`} label="Less than 2 hours"/>
                        <Form.Check type={type} id={`default-${type}`} label="2 - 4 hours"/>
                        <Form.Check type={type} id={`default-${type}`} label="4 - 8 hours"/>
                        <Form.Check type={type} id={`default-${type}`} label="1 -2 days"/>
                        <Form.Check type={type} id={`default-${type}`} label="3 - 5 days"/>
                        <Form.Check type={type} id={`default-${type}`} label="5+ days"/>
                      </div>
                    ))}
                  </Form>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Level</Accordion.Header>
                <Accordion.Body>
                  <Form>
                    {['checkbox'].map((type) => (
                      <div key="{`default-${type}`}" className="mb-3">
                        <Form.Check type={type} id={`default-${type}`} label="Beginner"/>
                        <Form.Check type={type} id={`default-${type}`} label="Intermediate"/>
                        <Form.Check type={type} id={`default-${type}`} label="Advanced"/>
                        <Form.Check type={type} id={`default-${type}`} label="Mixed"/>
                      </div>
                    ))}
                  </Form>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Organizations</Accordion.Header>
                <Accordion.Body>
                  <Form>
                    {['checkbox'].map((type) => (
                      <div key="{`default-${type}`}" className="mb-3">
                        <Form.Check type={type} id={`default-${type}`} label="Prepr"/>
                        <Form.Check type={type} id={`default-${type}`} label="Linux Foundation"/>
                        <Form.Check type={type} id={`default-${type}`} label="Magnet"/>
                        <Form.Check type={type} id={`default-${type}`} label="CertNexus"/>
                        <Form.Check type={type} id={`default-${type}`} label="Ontario Chamber of Commerce"/>
                        <Form.Check type={type} id={`default-${type}`} label="Youth Boost"/>
                      </div>
                    ))}
                  </Form>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Skills</Accordion.Header>
                <Accordion.Body>
                  <Form>
                    <form class="form-inline my-2 my-lg-0">
                      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    </form>
                  </Form>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        <div class="col-9">
          { type == "lab" ? <ContentBox img={"gettingstarted.png"} /> : null }
          { type == "lab" ? <ContentBox img={"uxlab.png"} /> : null }
          { type == "resources" ? <ContentBox img={"buildalab.png"} /> : null }
          { type == "resources" ? <ContentBox img={"skillsforsuccess.png"} /> : null }
          { type == "challenges" ? <ContentBox img={"dtp.png"} /> : null }
          { type == "projects" ? <ContentBox img={"housebuild.jpg"} /> : null }
          { type == "projects" ? <ContentBox img={"software.jpg"} /> : null }
        </div>
      </div>
    </div>
  );
}

export default ButtonBar;