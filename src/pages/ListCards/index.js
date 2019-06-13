// TODO: Criar uma listargem em forma de cards para exibir todos os livros da biblioteca
import React, { Fragment } from 'react';
import SearchCards from './SearchCards';

const ListCards = () => {
  return (
    <Fragment>
      <h1>Biblioteca VAGAS.com</h1>
      <SearchCards />
    </Fragment>
  );
};

export default ListCards;
