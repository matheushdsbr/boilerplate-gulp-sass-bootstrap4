# Boilerplate - Matheus Henrique

Boilerplate using Gulp, Sass, Bootstrap 4

## Installation

#### 1 - Install Yarn

```
https://classic.yarnpkg.com/en/docs/install
```

#### 2 - Clone Repository

```
git clone https://github.com/matheushenrique1/boilerplate-gulp-sass-bootstrap4.git

```

## How it works

It uses Gulp as a task manager.

Some tasks are {
  copyjs: copy bootstrap, jquery, popper.js to the js folder.
  copystyle: copy style bootstrap to the folder css.
  watch: to monitor changes to the scss and js files.
}

## Install Dependencies

```
yarn install
```

#### To initializes the localhost server. http://localhost:3000/

```
yarn start
```

## How to use

1- check the _variables.scss file and configure the best way for your project.

2- in the site folder, check what you will need for your project, if you don't need something delete it and if you need something, you create a file with the same naming pattern. Don't forget to import your new files (or delete the import of any scss files you deleted) into the style.scss file.
