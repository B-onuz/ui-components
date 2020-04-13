## Instalação via package.json

Adicione `ui-components` em `dependencies` dentro do arquivo `package.json`. (é obrigatório que seja o caminho ssh e não https)

```
  ...
    "dependencies": {
        ...,
        "ui-components": "git+ssh://git@github.com:B-onuz/ui-components.git#feat/"
    }
  ...
```

Lembre-se que temos como dependência `"styled-components":"^5.1.0"`. Caso não tenha instalado no seu projeto utilize o comando:

```
  yarn add styled-components
```

Configure o tema no arquivo index.js do seu projeto, exemplo:

```js
/* ... */
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

/* ... */

```

**Tipografia**

Importe no `index.js` do seu projeto a fonte `typeface-roboto`. https://www.npmjs.com/package/typeface-roboto

```
  yarn add typeface-roboto
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
