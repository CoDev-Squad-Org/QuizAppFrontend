import React from 'react'
import { Loading } from '../../components/Loading/Loading'
import { useContx } from '../../components/hooks/useContx';

const HomePage = () => {
  const { algo } = useContx();
  console.log(algo)
  return (
    <div><Loading/></div>
  )
}

export default HomePage