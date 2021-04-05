import React from 'react';
import useFetch from './hooks/useFetch';
import Card from './components/Card';

const App = (): JSX.Element => {
  const data = useFetch('https://picsum.photos/v2/list?page=1&limit=10');

  return (
    <main>
      <section>
        <h1>Hello Richardo!</h1>
      </section>
      <section className="app-gallery">
        {data.map((props, index) => (
          <Card key={`item-${index}`} {...props} />
        ))}
      </section>
    </main>
  );
};

export default App;
