import React from "react";
import classnames from "classnames";

// reactstrap components
import {
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iconTabs: 1,
      textTabs: 4,
    };
  }
  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index,
    });
  };
  render() {
    return (
      <div className="section section-tabs">
        <Container>
          <div className="title">
            <h3 className="mb-3">Navigation Tabs</h3>
          </div>
          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <div className="mb-3">
                <small className="text-uppercase font-weight-bold">
                  With icons
                </small>
              </div>
              <Card>
                <CardHeader>
                  <Nav className="nav-tabs-info" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.iconTabs === 1,
                        })}
                        onClick={(e) => this.toggleTabs(e, "iconTabs", 1)}
                        href="#pablo"
                      >
                        <i className="tim-icons icon-spaceship" />
                        Profile
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.iconTabs === 2,
                        })}
                        onClick={(e) => this.toggleTabs(e, "iconTabs", 2)}
                        href="#pablo"
                      >
                        <i className="tim-icons icon-settings-gear-63" />
                        Settings
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.iconTabs === 3,
                        })}
                        onClick={(e) => this.toggleTabs(e, "iconTabs", 3)}
                        href="#pablo"
                      >
                        <i className="tim-icons icon-bag-16" />
                        Options
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="tab-space"
                    activeTab={"link" + this.state.iconTabs}
                  >
                    <TabPane tabId="link1">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Vitae elementum curabitur vitae nunc.
                        Pharetra vel turpis nunc eget lorem dolor sed viverra.{" "}
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </TabPane>
                    <TabPane tabId="link2">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Vitae elementum curabitur vitae nunc.
                        Pharetra vel turpis nunc eget lorem dolor sed viverra.{" "}
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </TabPane>
                    <TabPane tabId="link3">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Vitae elementum curabitur vitae nunc.
                        Pharetra vel turpis nunc eget lorem dolor sed viverra.{" "}
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <div className="mb-3">
                <small className="text-uppercase font-weight-bold">
                  With text
                </small>
              </div>
              <Card>
                <CardHeader>
                  <Nav className="nav-tabs-info" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.textTabs === 4,
                        })}
                        onClick={(e) => this.toggleTabs(e, "textTabs", 4)}
                        href="#pablo"
                      >
                        Profile
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.textTabs === 5,
                        })}
                        onClick={(e) => this.toggleTabs(e, "textTabs", 5)}
                        href="#pablo"
                      >
                        Settings
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.textTabs === 6,
                        })}
                        onClick={(e) => this.toggleTabs(e, "textTabs", 6)}
                        href="#pablo"
                      >
                        Options
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="tab-space"
                    activeTab={"link" + this.state.textTabs}
                  >
                    <TabPane tabId="link4">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Vitae elementum curabitur vitae nunc.
                        Pharetra vel turpis nunc eget lorem dolor sed viverra.
                        Elementum curabitur vitae nunc sed. Sed tempus urna et
                        pharetra pharetra massa massa ultricies. Aliquam ut
                        porttitor leo a. <br /> Sit amet consectetur adipiscing
                        elit pellentesque habitant morbi tristique. Nisl pretium
                        fusce id velit ut tortor pretium viverra. A lacus
                        vestibulum sed arcu non. Sed velit dignissim sodales ut
                        eu sem.
                      </p>
                    </TabPane>
                    <TabPane tabId="link5">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Vitae elementum curabitur vitae nunc.
                        Pharetra vel turpis nunc eget lorem dolor sed viverra.
                        Elementum curabitur vitae nunc sed. Sed tempus urna et
                        pharetra pharetra massa massa ultricies. Aliquam ut
                        porttitor leo a. Sit amet consectetur adipiscing elit
                        pellentesque habitant morbi tristique. Nisl pretium
                        fusce id velit ut tortor pretium viverra. A lacus
                        vestibulum sed arcu non. Sed velit dignissim sodales ut
                        eu sem.
                      </p>
                    </TabPane>
                    <TabPane tabId="link6">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Vitae elementum curabitur vitae nunc.
                        Pharetra vel turpis nunc eget lorem dolor sed viverra.
                        Elementum curabitur vitae nunc sed. Sed tempus urna et
                        pharetra pharetra massa massa ultricies. Aliquam ut
                        porttitor leo a. Sit amet consectetur adipiscing elit
                        pellentesque habitant morbi tristique. Nisl pretium
                        fusce id velit ut tortor pretium viverra. A lacus
                        vestibulum sed arcu non. Sed velit dignissim sodales ut
                        eu sem.
                      </p>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Tabs;
