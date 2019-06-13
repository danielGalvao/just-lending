// TODO: Criar um input que filtre a listagem conforme for digitando, seja por titulo ou autor
import React from 'react';
import { TextInput, Row, Col } from 'react-materialize';

const SearchCards = () => {
  return (
    <Row>
      <Col s={12}>
        <TextInput placeholder='Encontre o livro' xl='12'/>
      </Col>
    </Row>
  );
};

export default SearchCards;
