import React from 'react'

type Props = {
  title: string
  url: string
}

export default ({ title, url }: Props) => {
  return (
    <div className='card'>
      <img src={url} alt={title}></img>
      <p>{title}</p>
    </div>
  )
}
