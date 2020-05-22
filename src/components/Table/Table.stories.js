import React, { useState } from 'react'
import Table from './Table'
import Button from '../Button'
import Input from '../Input'

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

export const TableExampleMaxHeight = () => {
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
      maxHeight={200}
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

export const TableLoadingWithData = () => {
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
      maxHeight={200}
      loading={true}
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
export const TableLoadingDynamicWithData = () => {
  const [sort, setSort] = useState('nome')
  const [order, setOrder] = useState('asc')
  const [loading, setLoading] = useState(false)
  const [loadingTime, setLoadingTime] = useState(300)

  const handleChangeOrder = (item) => {
    if (item.key === sort) {
      setOrder(order === 'asc' ? 'desc' : 'asc')
    } else {
      setSort(item.key)
      setOrder('asc')
    }
  }

  const handleLoadingButton = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }

  const handleChangeLoadingTime = (e) => {
    setLoadingTime(e.target.value)
  }

  return (
    <>
      <Input value={loadingTime} onChange={handleChangeLoadingTime} />
      <Button color={'primary'} onClick={handleLoadingButton}>
        Carregar
      </Button>
      <Table
        width={[2 / 3]}
        onChangeOrder={handleChangeOrder}
        maxHeight={200}
        loading={loading}
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
    </>
  )
}

export const TableEmpty = () => {
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
      maxHeight={200}
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
      data={[]}
    />
  )
}
export const LoadingWithEmpty = () => {
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
      maxHeight={200}
      loading={true}
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
      data={[]}
    />
  )
}
