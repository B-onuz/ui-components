# Button (Component)

Componente de botão, pode ser usados em formulários e para outros tipos de ação.

## Importação

```js
import Button from 'ui-components/lib/components/Button'
```

## Como usar

```jsx
<Button>Enviar</Button>
```

## Variações

### Colors

```jsx
<Button color={'primary'}>Enviar</Button>
```

Escala no tema: `theme.colors`

### Size

```jsx
<Button size={'small'}>Enviar</Button>
```

Valores: `small` `medium` `big` `huge`

### Outras props

```jsx
<Button color={'primary'} type={'submit'}>
  Salvar
</Button>
```

Este componente recebe outras propriedades da tag button, como a propriedade `type`.

## Styled-system props

- space https://styled-system.com/table#space
