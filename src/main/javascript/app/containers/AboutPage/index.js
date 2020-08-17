import React, { Component } from 'react';
import {
    Form,
    Container,
    Row,
    Col,
    Table
    } from 'react-bootstrap';

import NavbarComponent from '../../components/navbar/navbar.js';
import './style/style.css';

export default class AboutPage extends Component{

    render(){


        return(
            <React.Fragment>
                <NavbarComponent/>
                <div className = "about-page-shadow">
            <div className = "about-page">
                <Table>
                    <tr><th><h2 className = "h2-textstyle">
                        ABOUT US!</h2></th></tr>
                        <th>
                            <td><p className = "p-style">Fluffy Paws Shelter is a animal shelter that founded at 2010 in New York. Our mission is to serve animals of Central New York by providing safe, permanently shelter and care for abandoned or otherwise homeless cats and dogs, and to reduce
                                 pet overpopulation by means of spay and neuter and community outreach.
                                 
                                 Our measurable impact is demonstrated by the fact that over 93% of clients who graduate from the shelter, receive Rapid Re-Housing funding, 
                                 and continue on with our community case management program remain in permanent housing during their first year out of the shelter, which is a very vulnerable time.</p>

                                <p className = "p-style">Fluffy Paws Shelter, we believe that every person has a right to shelter. No one shall be denied shelter or services on the grounds of race, color, national origin, creed, religion, gender, age, sexual orientation, or any characteristic protected by law. </p>
                                
                                <p className="p-style">Since our inception, Fluddy Paws Shelter has evolved from a small group of concerned citizens providing little more than bedding on cold nights in Alexandria churches and warehouses into a leader in finding solutions that permanently end and prevent homelessness.
                                     We are open 365 days a year, 24 hours a day, and we served more than 840 men, women and children in fiscal year 2020. 
                                    Today, we offer a 60-bed emergency shelter with rigorous case management, education, employment and housing services; a day shelter (David’s Place) that addresses the basic needs of chronically homeless individuals; the City of Alexandria Winter Shelter run from November to April; and a Community Case Management (CCM) program that continues to support clients who have graduated from the shelter for a minimum of one year. 
                                   </p>
                                   
                                   <p> TO LEARN MORE CONTACT WITH US.</p></td>
                            
                        </th>
                        <th><td><img src = "https://i.hizliresim.com/tjbDd0.jpg"></img></td></th>
                </Table>
            </div>
 </div>

            </React.Fragment>
        );
    }
}
