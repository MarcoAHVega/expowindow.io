# Create a Project folder

- > in the root folder

  ```
  app/
  .gitignore
  webpack.config.js
  ```

- in the .gitignore file

  ```
  # Numerous always-ignore extensions
  *.diff
  *.err
  *.orig
  *.log
  *.rej
  *.swo
  *.swp
  *.vi
  *~
  *.sass-cache
  node_modules/
  .tmp/

  # OS or Editor folders
  .DS_Store
  Thumbs.db
  .cache
  .project
  .settings
  .tmproj
  *.esproj
  nbproject
  *.sublime-project
  *.sublime-workspace
  *.komodoproject
  .komodotools
  _notes
  dwsync.xml
  ```

- in the webpack.config.js file

  ```

  ```

- > in the app folder

  ```
  app/
     assets/
     index.html
  ```

- in the index.html file

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
      <h1>This is a test!</h1>
    </body>
  </html>
  ```

- > in the assets folder

  ```
  assets/
     scripts/
     styles/
     images/
        icons/
  ```

- > in the scripts folder

  ```json
  scripts/
     App.js
  ```

- in the App.js file

  ```js
  alert('Hello, this is just a test.')
  ```

- > in the styles folder

  ```
  styles/
     styles.css
     modules/
     base/

  ```

- > CSS folder structure for the 7-1 pattern

  ```
  styles/
     abstract/
     base/
     components/
     layout/
     pages/
     themes/
     vendors/
  ```
