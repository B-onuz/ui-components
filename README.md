# B-onuz ui-components

Biblioteca de Componentes de User Interface para projetos da **B-onuz**.

## Stack
- nwb (https://github.com/insin/nwb)
- Styled System (https://styled-system.com/)
- PlopJS (https://plopjs.com/)
- jest (https://jestjs.io/)
- Storybook (https://storybook.js.org/)

## Instalação via package.json

Adicione `ui-components` em dependencies dentro do arquivo `package.json`

```
  ...
    "dependencies": {
        ...,
        "ui-components": "git+ssh://git@github.com:B-onuz/ui-components.git#feat/initial-structure"
    }
  ...
```

Lembre-se que temos como dependência `"styled-components":"^5.1.0"`. Caso não tenha instalado no seu projeto utilize o comando:

```
  yarn add styled-components
```

Configure o tema no arquivo index.js do seu projeto, exemplo:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from 'styled-components'; // linha adicionada
import theme from 'ui-components/lib/theme' // linha adicionada

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}> {/* linha adicionada */}
    <App />
    </ThemeProvider> {/* linha adicionada */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

```

**Tipografia**

Importe no `index.js` do seu projeto a fonte `typeface-roboto`. https://www.npmjs.com/package/typeface-roboto

```
  yarn add typeface-roboto;
```

```js
  import 'typeface-roboto';
```

## Como importar componentes

Os componentes estão dentro de `ui-components/lib/components`, podem ser importados de algumas formas diferentes.

```js
import { Button } from 'ui-components/lib'
```

```js
import Button from 'ui-components/lib/components/Button'
```
