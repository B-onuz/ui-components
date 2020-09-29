import React from 'react'
import DemandDetailing from './DemandDetailing'
import { Box, Flex } from 'reflexbox'
import Button from '../Button'
import Typography from '../Typography'

export default {
  title: 'DemandDetailing',
  component: DemandDetailing,
}

const data = [
  {
    interactionResponsibleName: 'Advogado Bonuz',
    isLawyer: true,
    createdAt: '22/08/2020 08:45',
    comment:
      'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ',
  },
  {
    interactionResponsibleName: 'Cliente',
    isLawyer: false,
    createdAt: '22/08/2020 08:45',
    comment:
      'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ',
  },
  {
    interactionResponsibleName: 'Advogado Bonuz',
    isLawyer: true,
    createdAt: '22/08/2020 08:45',
    comment:
      'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ',
    documents: [
      {
        fileURL: 'https://lorempixel.com/50/50',
        fileName: 'contrato_nda_v1.pdf',
        name: 'arquivo_final.png',
      },
      {
        fileURL: 'https://lorempixel.com/50/50',
        fileName: 'contrato_nda_v2.pdf',
        name: 'arquivo_semifinal.png',
      },
    ],
  },
]

export const DemandDetailingExample = () => <DemandDetailing reportTitle="Conclusão" reportKind="Histórico" detailingData={data} />

export const DemandDetailingWithChild = () => (
  <DemandDetailing reportTitle="Conclusão" reportKind="Histórico" detailingData={data}>
    <Flex justifyContent="space-between" my={2}>
      <Typography>Here comes any children content</Typography>
      <Box>
        <Button color="primary" m={2}>
          Button 1
        </Button>
        <Button outline color="primary" m={2}>
          Button 2
        </Button>
      </Box>
    </Flex>
  </DemandDetailing>
)
