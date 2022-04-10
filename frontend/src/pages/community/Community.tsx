import React from 'react'
import CardCommunity from '../../components/CardCommunity'

function Community(props: string) {
  return (
    <>
      <h1 className="title-principal">Community</h1>
      <CardCommunity 
        name="Gabriel Rio"
        local="Rio de Janeiro"
        image="https://github.com/gabrielrioo.png"
        description="Componente de botão criado por Gabriel Rio"
      />
      <CardCommunity 
        name="Gabriel Rio"
        local="Rio de Janeiro"
        image="https://github.com/gabrielrioo.png"
        description="Componente de botão criado por Gabriel Rio"
      />
    </>
  )
}

export default Community