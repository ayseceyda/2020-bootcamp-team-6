import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";

const FooterPagePro = () => {

    const liststyle = {
        backgroundColor: "#e9ecef",
        opacity: "0.9",
      }

  return (
    
    <div style = {liststyle}>
    <MDBFooter color="unique-color-dark" className="page-footer font-small pt-0">
      <div style={{ backgroundColor: "#e0a961" }}>
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow className="py-4 d-flex align-items-center">
            <MDBCol md="6" lg="5" className="text-center text-md-left mb-4 mb-md-0">
              <h6 className="mb-0 white-text">
                Get connected with us on social networks!
              </h6>
            </MDBCol>
            <MDBCol md="6" lg="7" className="text-center text-md-right">
            <a className="fb-ic ml-0">
              <i className="fab fa-facebook-f white-text mr-lg-4"></i>
              </a>
              <a className="tw-ic">
                <i className="fab fa-twitter white-text mr-lg-4"> </i>
              </a>
              <a className="gplus-ic">
                <i className="fab fa-google-plus-g white-text mr-lg-4"> </i>
              </a>
              <a className="li-ic">
                <i className="fab fa-linkedin-in white-text mr-lg-4"> </i>
              </a>
              <a className="ins-ic">
                <i className="fab fa-instagram white-text mr-lg-4"> </i>
              </a>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <MDBContainer className="mt-5 mb-4 text-center text-md-left">
        <MDBRow className="mt-3">
          <MDBCol md="3" lg="4" xl="3" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Fluffy Paws Shelter</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              Fluffy Paws Shelter is a animal shelter that founded at 2010 in New York. Our mission is to serve animals of Central New York by providing safe, 
              permanently shelter and care for abandoned or otherwise homeless cats and dogs,
               and to reduce pet overpopulation by means of spay and neuter and community outreach.
            </p>
          </MDBCol>
          <MDBCol md="2" lg="2" xl="2" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Awards</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
               2019 Charity Retail Awards
            </p>
            <p>
              2015 Best Animal Shelter
            </p>
            <p>
              2018 Outstanding Animal Shelter Winner
            </p>
          </MDBCol>
          <MDBCol md="3" lg="2" xl="2" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Useful links</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <a href="http://localhost:3000/register">Your Account</a>
            </p>
            <p>
              <a href="http://localhost:3000/">Adopt an Animal</a>
            </p>
            <p>
              <a href="http://localhost:3000/">Search Animals</a>
            </p>
            <p>
              <a href="http://localhost:3000/">Find Your Friend!</a>
            </p>
          </MDBCol>
          <MDBCol md="4" lg="3" xl="3" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Contact</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <i className="fa fa-home mr-3" /> New York, NY 10012, US
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> info@fluffypawsshelter.com
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> + 400 234 567 88
            </p>
            <p>
              <i className="fa fa-print mr-3" /> + 90 234 567 89
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: Flufffy Paws Shelter
        </MDBContainer>
      </div>
    </MDBFooter>

    </div>
  );
}

export default FooterPagePro;
