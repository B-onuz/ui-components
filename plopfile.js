module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'Create a new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name please',
      },
      {
        type: 'input',
        name: 'baseTag',
        message: 'base tag please',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.js',
        templateFile: 'plop-templates/component.index.js.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.js',
        templateFile: 'plop-templates/component.js.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.stories.js',
        templateFile: 'plop-templates/component.stories.js.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.test.js',
        templateFile: 'plop-templates/component.test.js.hbs',
      },
      {
        type: 'add',
        path: 'docs/components/{{pascalCase name}}.md',
        templateFile: 'plop-templates/component.doc.md.hbs',
      },
      {
        type: 'append',
        path: 'src/index.js',
        template: `export {{pascalCase name}} from './components/{{pascalCase name}}'`,
      },
    ],
  })

  plop.setGenerator('component:doc', {
    description: 'Create a new component doc',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name please',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'docs/components/{{pascalCase name}}.md',
        templateFile: 'plop-templates/component.doc.md.hbs',
      },
    ],
  })
}
