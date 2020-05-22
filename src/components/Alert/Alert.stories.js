import React from 'react'
import Alert from './Alert'

export default {
  title: 'Alert',
  component: Alert,
}

export const AlertExample = () => (
  <div>
    <Alert m={10} color={'warning'} title={`Exemplo de título`} message={`Este texto é exemplo de uma message`} />
    <Alert m={10} color={'success'} title={`Exemplo de título`} message={`Este texto é exemplo de uma message`} />
    <Alert m={10} color={'info'} title={`Exemplo de título`} message={`Este texto é exemplo de uma message`} />
    <Alert m={10} color={'danger'} title={`Exemplo de título`} message={`Este texto é exemplo de uma message`} />
  </div>
)
