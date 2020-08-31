import React from 'react'
import Card from './Card'
import { Flex, Box } from 'reflexbox'
import { faArchive, faBoxes, faBoxOpen, faParachuteBox, faBan, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import logo_white from '../../assets/logo_white.svg'

export default {
  title: 'Card',
  component: Card,
}

export const CardExample = () => <Card title={'Demandas Pendentes'} count={99} color={'danger'} icon={faArchive} />

export const CardColors = () => (
  <Flex justifyContent={'flex-start'} p={3} flexWrap={'wrap'}>
    <Card title={'Demandas Pendentes'} count={99} color={'lightGrey'} icon={faBoxes} />
    <Card title={'Demandas Em Aberto'} count={99} color={'teal'} icon={faBoxOpen} />
    <Card title={'Demandas Concluídas'} count={13279} color={'green'} icon={faThumbsUp} />
    <Card title={'Demandas Canceladas'} count={99} cancel={true} color={'red'} icon={faBan} />
    <Card title={'Pacotes promocionais'} count={99} color={'blue'} icon={faParachuteBox} disclaimer={'últimos 7 dias'} disclaimerColor={'#138204'} />
  </Flex>
)

export const MultiColorsControl = () => (
  <Flex>
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
    <Card
      clickableCard
      color={'primary'}
      textColor={'#DDD'}
      iconColor={'#DDD'}
      title={'Demandas Pendentes'}
      icon={faParachuteBox}
      cardBackground={'primary'}
    />
  </Flex>
)

export const CardButton = () => (
  <Card
    clickableCard
    color={'primary'}
    textColor={'#DDD'}
    iconColor={'#DDD'}
    title={'Demandas Pendentes'}
    customIcon={logo_white}
    cardBackground={'primary'}
  />
)
