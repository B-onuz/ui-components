import React from 'react'
import Alert from './Alert'

export default {
  title: 'Alert',
  component: Alert,
}

export const AlertExample = () => (
  <div>
    <Alert m={10} color={'success'} title={`Exemplo de título`} message={`Este texto é exemplo de uma message`} />
  </div>
)

export const AlertColors = () => (
  <div>
    <Alert m={10} color={'warning'} title={`Exemplo de título`} message={`Este texto é exemplo de uma message`} />
    <Alert m={10} color={'success'} title={`Exemplo de título`} message={`Este texto é exemplo de uma message`} />
    <Alert m={10} color={'info'} title={`Exemplo de título`} message={`Este texto é exemplo de uma message`} />
    <Alert m={10} color={'danger'} title={`Exemplo de título`} message={`Este texto é exemplo de uma message`} />
  </div>
)

export const AlertLongText = () => (
  <div>
    <Alert
      m={10}
      color={'success'}
      title={`Exemplo de título`}
      message={`Laboris consequat consequat voluptate qui nisi nostrud dolor. Velit adipisicing id in elit enim pariatur enim aliquip exercitation exercitation duis in qui. Sint exercitation aute enim deserunt. Non labore aute mollit cillum Lorem incididunt pariatur nostrud ut. Quis exercitation et culpa est. Consectetur consectetur fugiat nostrud in nostrud. Lorem consectetur culpa cillum nostrud adipisicing anim veniam id Lorem Lorem elit ad.

Nostrud fugiat exercitation tempor sunt amet nulla. Qui ipsum laborum ut deserunt esse sint pariatur labore ipsum pariatur. Culpa ipsum et cupidatat sit esse aliquip sunt. Sunt adipisicing veniam adipisicing nisi dolor dolor labore id officia Lorem laborum.

Ullamco eiusmod ipsum duis ad. Anim commodo sint voluptate fugiat ut ipsum nostrud mollit laboris consectetur laboris sit consectetur. Esse do velit pariatur cillum reprehenderit et elit ullamco cillum excepteur proident laborum pariatur.`}
    />
  </div>
)
