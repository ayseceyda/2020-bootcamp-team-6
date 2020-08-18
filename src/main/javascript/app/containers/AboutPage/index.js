import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer.jsx';
import {
	Container,
    Table,
    Card,
	
} from 'react-bootstrap';
import './style/style.css';
import NavbarComponent from '../../components/navbar/navbar.js';
export default class AboutPage extends Component{

    render(){


        return(
            <React.Fragment>
                <NavbarComponent/>
                <div className = "about-page-shadow">
            <div className = "about-page">
                <Table>
                    <tr><th><h2 className = "h2-textstyle">
                    We Are Their Voice</h2></th></tr>
                        <th>
                            <td><p className = "p-style">Fluffy Paws Shelter is a animal shelter that founded at 2010 in New York. Our mission is to serve animals of Central New York by providing safe, permanently shelter and care for abandoned or otherwise homeless cats and dogs, and to reduce
                                 pet overpopulation by means of spay and neuter and community outreach.
                                 
                                 Our measurable impact is demonstrated by the fact that over 93% of clients who graduate from the shelter, receive Rapid Re-Housing funding, 
                                 and continue on with our community case management program remain in permanent housing during their first year out of the shelter, which is a very vulnerable time.</p>

                                <p className = "p-style">Fluffy Paws Shelter, we believe that every person has a right to shelter. No one shall be denied shelter or services on the grounds of race, color, national origin, creed, religion, gender, age, sexual orientation, or any characteristic protected by law. </p>
                                
                                <p className="p-style">Our organization was founded on the belief that animals are entitled to kind and respectful treatment at the hands of humans and must be protected under the law. Headquartered in New York City, the ASPCA maintains a strong local presence, and with programs that extend our anti-cruelty mission across the country, we are recognized as a national animal welfare organization. We are a privately funded 501(c)(3) not-for-profit corporation, and are proud to boast more than 2 million supporters across the country.
                                   </p>
                                   
                                   <p> TO LEARN MORE CONTACT WITH US.</p>
                            </td>
                        </th>
                        <th><td><img src = "https://i.hizliresim.com/tjbDd0.jpg"></img></td></th>
                </Table>
            </div>
 </div>

 <Footer/>

            </React.Fragment>
        );
    }
}
