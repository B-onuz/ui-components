import React from 'react'
import Card from './Card'
import { faArchive } from '@fortawesome/free-solid-svg-icons'
import logo_white from '../../assets/logo_white.svg'

export default {
  title: 'Card',
  component: Card,
}

export const CardExample = () => <Card title={'Demandas Pendentes'} count={99} color={'danger'} icon={faArchive} />

export const CardColors = () => (
  <div>
    <Card title={'Demandas Pendentes'} count={99} color={'yellow'} icon={faArchive} />
    <Card title={'Demandas Em Aberto'} count={99} color={'teal'} icon={faArchive} />
    <Card title={'Demandas Concluídas'} count={99} color={'blue'} icon={faArchive} />
    <Card title={'Demandas Canceladas'} count={99} cancel={true} color={'red'} icon={faArchive} />
  </div>
)

export const MultiColorsControl = () => (
  <Card
    color={'primary'}
    textColor={'#DDD'}
    iconColor={'success'}
    counterColor={'warning'}
    title={'Demandas Pendentes'}
    count={99}
    customIcon={logo_white}
    imgBackground={'primary'}
  />
)
