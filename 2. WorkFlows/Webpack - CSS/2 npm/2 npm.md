# npm

*use `npm` to create a `package.json` file to keep track of all of the packages that our project uses*

      
   ```js 
   npm init -y
   ```

      (-y to say yes to all the options)
      
  > You will want to create one of these `package.Jason` files `for each one of your projects` or for each one of your git repos. 


*use `npm` to download `Lodash` into your project*
      
   ```js  
   npm install lodash
   ```

      (A modern JavaScript utility library delivering modularity, performance & extras. https://lodash.com/ )

  > installing this first package will create a `node_modules` folder to hold all project's packages, and  also creates a `package-lock.json` file


*download `normalize.css`*
      
   ```js  
   npm install normalize.css
   ```

      (Normalize.css makes browsers render all elements more consistently and in line with modern standards. It precisely targets only the styles that need normalizing. https://necolas.github.io/normalize.css/ )


  > by having a package.json file in our project `we can recover` , if needed our packages using:*
      
   ```js
   npm install
   ```