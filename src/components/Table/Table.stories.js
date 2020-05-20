import React, { useState } from 'react'
import Table from './Table'

export default {
  title: 'Table',
  component: Table,
}

export const TableExample = () => {
  const [sort, setSort] = useState('nome')
  const [order, setOrder] = useState('asc')

  const handleChangeOrder = (item) => {
    if (item.key === sort) {
      setOrder(order === 'asc' ? 'desc' : 'asc')
    } else {
      setSort(item.key)
      setOrder('asc')
    }
  }

  return (
    <Table
      width={[2 / 3]}
      onChangeOrder={handleChangeOrder}
      pagination={{
        sort,
        order,
      }}
      headers={[
        {
          title: 'Advogados',
          key: 'nome',
          sort: true,
          align: 'left',
        },
        {
          title: 'Especialidades',
          key: 'especialidades',
          sort: true,
          align: 'left',
        },
        {
          title: 'Tarefas',
          key: 'tarefas',
          sort: true,
          align: 'center',
        },
        {
          title: 'Ações',
          key: 'actions',
          align: 'center',
        },
      ]}
      data={[
        { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
        { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
        { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
        { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
        { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
        { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
        { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
        { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
        { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
        { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
        { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
        { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
        { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
        { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
        { nome: 'Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
        { nome: 'Last Nome do advogado', especialidades: 'Comercial, Contratos', tarefas: 10 },
      ]}
    />
  )
}
