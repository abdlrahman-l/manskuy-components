module.exports = function(plop) {
  plop.setGenerator('package', {
    description: 'Create new package inside this monorepo',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the package?'
      },
      {
        type: 'input',
        name: 'componentTypes',
        message: 'What is the component types? (atom/molecule/organism)'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'packages/{{componentTypes}}/{{name}}/package.json',
        templateFile: './templates/package.json.hbs'
      },
      {
        type: 'add',
        path: 'packages/{{componentTypes}}/{{name}}/README.md',
        templateFile: './templates/README.md.hbs'
      },
      {
        type: 'add',
        path: 'packages/{{componentTypes}}/{{name}}/LICENSE',
        templateFile: './templates/LICENSE.hbs'
      },
      {
        type: 'add',
        path: 'packages/{{componentTypes}}/{{name}}/{{name}}.stories.js',
        templateFile: './templates/stories.js.hbs'
      },
      {
        type: 'add',
        path: 'packages/{{componentTypes}}/{{name}}/src/index.js',
        templateFile: './templates/src.index.js.hbs'
      },
      {
        type: 'add',
        path: 'packages/{{componentTypes}}/{{name}}/rollup.config.js',
        templateFile: './templates/rollup.config.js.hbs'
      }
    ]
  })
}