import React from 'react';

interface Props {
  id: string;
  author: string;
  url: string;
  download_url: string;
}

const Card = ({ id, author, url, download_url }: Props): JSX.Element => {
  return (
    <a className="card" href={url} target="_blank" data-id={id}>
      <img className="card-image" src={download_url} />
      <h4 className="card-title">{author}</h4>
    </a>
  );
};

export default Card;
