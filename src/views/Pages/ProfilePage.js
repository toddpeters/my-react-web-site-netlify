import React from "react";
import classnames from "classnames";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  Form,
  Input,
  FormText,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCarousel,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";

const carouselItems = [
  {
    src: require("assets/img/denys.jpg"),
    altText: "Slide 1",
    caption: "Big City Life, United States",
  },
  {
    src: require("assets/img/fabien-bazanegue.jpg"),
    altText: "Slide 2",
    caption: "Somewhere Beyond, United States",
  },
  {
    src: require("assets/img/mark-finn.jpg"),
    altText: "Slide 3",
    caption: "Stocks, United States",
  },
];

let ps = null;

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: 1,
    };
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.body.classList.toggle("profile-page");
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
      document.documentElement.className += " perfect-scrollbar-off";
      document.documentElement.classList.remove("perfect-scrollbar-on");
    }
    document.body.classList.toggle("profile-page");
  }
  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index,
    });
  };
  render() {
    return (
      <>
        <ExamplesNavbar />
        <div className="wrapper">
          <div className="page-header">
            <img
              alt="..."
              className="dots"
              src={require("assets/img/dots.png")}
            />
            <img
              alt="..."
              className="path"
              src={require("assets/img/path4.png")}
            />
            <Container className="align-items-center">
              <Row>
                <Col lg="6" md="6">
                  <h1 className="profile-title text-left">Davey Jones</h1>
                  <h5 className="text-on-back">01</h5>
                  <p className="profile-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Vitae elementum curabitur vitae nunc. Pharetra vel
                    turpis nunc eget lorem dolor sed viverra. Elementum
                    curabitur vitae nunc sed. Sed tempus urna et pharetra
                    pharetra massa massa ultricies. Aliquam ut porttitor leo a.
                    Sit amet consectetur adipiscing elit pellentesque habitant
                    morbi tristique. Nisl pretium fusce id velit ut tortor
                    pretium viverra. A lacus vestibulum sed arcu non. Sed velit
                    dignissim sodales ut eu sem.
                  </p>
                  <div className="btn-wrapper profile pt-3">
                    <Button
                      className="btn-icon btn-round"
                      color="twitter"
                      href="https://twitter.com/"
                      id="tooltip639225725"
                      target="_blank"
                    >
                      <i className="fab fa-twitter" />
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip639225725">
                      Follow
                    </UncontrolledTooltip>
                    <Button
                      className="btn-icon btn-round"
                      color="facebook"
                      href="https://www.facebook.com/"
                      id="tooltip982846143"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-square" />
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip982846143">
                      Like
                    </UncontrolledTooltip>
                    <Button
                      className="btn-icon btn-round"
                      color="dribbble"
                      href="https://dribbble.com/"
                      id="tooltip951161185"
                      target="_blank"
                    >
                      <i className="fab fa-dribbble" />
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip951161185">
                      Follow
                    </UncontrolledTooltip>
                  </div>
                </Col>
                <Col className="ml-auto mr-auto" lg="4" md="6">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid rounded-circle"
                        src={require("assets/img/mike.jpg")}
                      />
                      <h4 className="title">Transactions</h4>
                    </CardHeader>
                    <CardBody>
                      <Nav
                        className="nav-tabs-primary justify-content-center"
                        tabs
                      >
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.tabs === 1,
                            })}
                            onClick={(e) => this.toggleTabs(e, "tabs", 1)}
                            href="#pablo"
                          >
                            Wallet
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.tabs === 2,
                            })}
                            onClick={(e) => this.toggleTabs(e, "tabs", 2)}
                            href="#pablo"
                          >
                            Send
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.tabs === 3,
                            })}
                            onClick={(e) => this.toggleTabs(e, "tabs", 3)}
                            href="#pablo"
                          >
                            News
                          </NavLink>
                        </NavItem>
                      </Nav>
                      <TabContent
                        className="tab-subcategories"
                        activeTab={"tab" + this.state.tabs}
                      >
                        <TabPane tabId="tab1">
                          <Table className="tablesorter" responsive>
                            <thead className="text-primary">
                              <tr>
                                <th className="header">COIN</th>
                                <th className="header">AMOUNT</th>
                                <th className="header">VALUE</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>BTC</td>
                                <td>7.342</td>
                                <td>48,870.75 USD</td>
                              </tr>
                              <tr>
                                <td>ETH</td>
                                <td>30.737</td>
                                <td>64,53.30 USD</td>
                              </tr>
                              <tr>
                                <td>XRP</td>
                                <td>19.242</td>
                                <td>18,354.96 USD</td>
                              </tr>
                            </tbody>
                          </Table>
                        </TabPane>
                        <TabPane tabId="tab2">
                          <Row>
                            <Label sm="3">Pay to</Label>
                            <Col sm="9">
                              <FormGroup>
                                <Input
                                  placeholder="e.g. 1Nasd92348hU984353hfid"
                                  type="text"
                                />
                                <FormText color="default" tag="span">
                                  Please Enter a Valid Address.
                                </FormText>
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Label sm="3">Amount</Label>
                            <Col sm="9">
                              <FormGroup>
                                <Input placeholder="1.587" type="text" />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Button
                            className="btn-simple btn-icon btn-round float-right"
                            color="primary"
                            type="submit"
                          >
                            <i className="tim-icons icon-send" />
                          </Button>
                        </TabPane>
                        <TabPane tabId="tab3">
                          <Table className="tablesorter" responsive>
                            <thead className="text-primary">
                              <tr>
                                <th className="header">Latest Crypto News</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>The Daily: Some Stuff...</td>
                              </tr>
                              <tr>
                                <td>
                                  Premier Salvador del Solar, just under a month
                                  since he was sworn in to replace Cesar
                                  Villanueva...
                                </td>
                              </tr>
                              <tr>
                                <td>Some more Stuff...</td>
                              </tr>
                            </tbody>
                          </Table>
                        </TabPane>
                      </TabContent>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="section">
            <Container>
              <Row className="justify-content-between">
                <Col md="6">
                  <Row className="justify-content-between align-items-center">
                    <UncontrolledCarousel items={carouselItems} />
                  </Row>
                </Col>
                <Col md="5">
                  <h1 className="profile-title text-left">Projects</h1>
                  <h5 className="text-on-back">02</h5>
                  <p className="profile-description text-left">
                    Stephen's father, Simon, is inept with money, and the family
                    sinks deeper and deeper into debt. After a summer spent in
                    the company of his Uncle Charles, Stephen learns that the
                    family cannot afford to send him back to Clongowes, and that
                    they will instead move to Dublin. Stephen starts attending a
                    prestigious day school called Belvedere, where he grows to
                    excel as a writer and as an actor in the student theater.
                  </p>
                  <div className="btn-wrapper pt-3">
                    <Button
                      className="btn-simple"
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="tim-icons icon-book-bookmark" /> Bookmark
                    </Button>
                    <Button
                      className="btn-simple"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="tim-icons icon-bulb-63" /> Check
                    </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <section className="section">
            <Container>
              <Row>
                <Col md="6">
                  <Card className="card-plain">
                    <CardHeader>
                      <h1 className="profile-title text-left">Contact</h1>
                      <h5 className="text-on-back">03</h5>
                    </CardHeader>
                    <CardBody>
                      <Form>
                        <Row>
                          <Col md="6">
                            <FormGroup>
                              <label>Your Name</label>
                              <Input defaultValue="Some Guy" type="text" />
                            </FormGroup>
                          </Col>
                          <Col md="6">
                            <FormGroup>
                              <label>Email Address</label>
                              <Input placeholder="sguy@tcel.net" type="email" />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col md="6">
                            <FormGroup>
                              <label>Phone</label>
                              <Input defaultValue="001-12321345" type="text" />
                            </FormGroup>
                          </Col>
                          <Col md="6">
                            <FormGroup>
                              <label>Company</label>
                              <Input defaultValue="Quadrito" type="text" />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col md="12">
                            <FormGroup>
                              <label>Message</label>
                              <Input placeholder="Hola Como Estas?" type="text" />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Button
                          className="btn-round float-right"
                          color="primary"
                          data-placement="right"
                          id="tooltip341148792"
                          type="button"
                        >
                          Send Text
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          placement="right"
                          target="tooltip341148792"
                        >
                          Drop Me a Line...
                        </UncontrolledTooltip>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
                <Col className="ml-auto" md="4">
                  <div className="info info-horizontal">
                    <div className="icon icon-primary">
                      <i className="tim-icons icon-square-pin" />
                    </div>
                    <div className="description">
                      <h4 className="info-title">Call the Office</h4>
                      <p>
                        123 Any St SW, <br />
                        city, AB T5K 3K9 <br />
                        Canada
                      </p>
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <div className="icon icon-primary">
                      <i className="tim-icons icon-mobile" />
                    </div>
                    <div className="description">
                      <h4 className="info-title">Call</h4>
                      <p>
                        Some Guy <br />
                        +1 (604) 762-4321 <br />
                        Mon - Fri  8:00-4:30
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <Footer />
        </div>
      </>
    );
  }
}

export default ProfilePage;
