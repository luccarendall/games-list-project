import React from 'react';

const FilterForm = ({ handleTitleFilter, clearBtn }) => {
  return (
    <form>
      <input type="search" onChange={handleTitleFilter} placeholder="Pesquisar" />
      <button type="button" onClick={clearBtn} className='clearBtn'>Limpar filtros</button>
    </form>
  );
};

export default FilterForm;
