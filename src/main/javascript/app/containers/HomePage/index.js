/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import H2 from 'components/H2';
import ReposList from 'components/ReposList';
import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';

import {
  Button,
  Container,
  Jumbotron,
  Row,
  Col,
  Carousel
} from 'react-bootstrap';


// Components imports....
import NavbarComponent from '../../components/navbar/navbar.js';
import CarouselComponent from './components/carousel/carousel.js';
import JumbotronComponent from './components/jumbotron/jumbotron.js';
import CardComponent from './components/cards/cards.js';

import Footer from '../../components/Footer/Footer.jsx';
import DataTable from './components/data-table/DataTable';
const key = 'home';
export function HomePage({
  username,
  loading,
  error,
  repos,
  onSubmitForm,
  onChangeUsername,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const [animals, setAnimals] = React.useState([])

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (username && username.trim().length > 0) onSubmitForm();
    fetch('http://localhost:8086/api/v1/animals')
      .then(reponse => reponse.json())
      .then(data => setAnimals(data));
  }, []);

  const reposListProps = {
    loading,
    error,
    repos,
  };

  return (
    <React.Fragment>
      <NavbarComponent />
      <CarouselComponent />
      <JumbotronComponent />
      <CardComponent />
      <Jumbotron fluid>
        <Container>
          <h1>Adoptable Animals</h1>
          <p>
            Are you alone? Do you want a friend that is never leave you. Then adopt an animal!
              </p>
          {animals ? <DataTable data={animals} /> : null}
        </Container>
      </Jumbotron>
      <Footer />
    </React.Fragment>


  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
