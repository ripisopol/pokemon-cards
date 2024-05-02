import React, { useState } from 'react';
import Card from '../../components/Card';
import Header from '../../components/Header';
import MobileWrapper from '../../components/MobileWrapper';
import usePokemonList from '../../hooks/usePokemonList';
import ColumnViewButtons from './ColumnViewButtons';

const ListPage: React.FC = () => {
  const { pokemonList, loading, error, searchQuery } = usePokemonList();
  const [columnView, setColumnView] = useState<number>(2); // Initial column view is 2
  console.log(searchQuery)
  if (error) return <div>Something is wrong :(</div>;

  const handleColumnViewChange = (columns: number) => {
    setColumnView(columns);
  };

  return (
    <MobileWrapper>
      <Header withSearch />
      <ColumnViewButtons columnView={columnView} onColumnViewChange={handleColumnViewChange} />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className={`px-5 py-4 grid grid-cols-${columnView} gap-5`}>
          {pokemonList.map((each, index) => (
            <Card key={index} name={each.name} />
          ))}
        </div>
      )}
    </MobileWrapper>
  );
};

export default ListPage;
