import React from "react";

// The Core Components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import PageHeader from "components/PageHeader/PageHeader.js";
import Footer from "components/Footer/Footer.js";

// Import all of the sections for the Page
import JavaScript from "views/IndexSections/JavaScript.js";
class Index extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("index-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("index-page");
  }
  // This is the Entire Site
  // Render All the Seperate Components
  render() {
    return (
      <>
        <IndexNavbar />
        <div className="wrapper">
          <PageHeader />
          <div className="main">
            <JavaScript />
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default Index;
