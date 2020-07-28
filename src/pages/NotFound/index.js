import React from 'react'
import PageDefault from '../../../src/components/PageDefault'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'

function NotFound () {
  return (
    <PageDefault>
      <h1>404 - Page Not Found</h1>
      <Button as={Link} to='/'>
        Voltar para home
      </Button>
    </PageDefault>
  )
}

export default NotFound
