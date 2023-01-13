- > to clone an existing repo (for example webpackBoilerPlate)

      - copy the repo's url from the [< > code] button

      - then run the git clone command

      ```
      git clone https://github.com/MarcoAHVega/webpackBoilerPlate.git

      ```

- > change the folder's name to the new project and navigate to the folder in the terminal

      for example from webpackBoilerPlate to the new project's name

- > `install` all the dependencies and `test` project

      ```
      npm install

      npm run dev
      ```

- > Create a new remote repo on Github

  - The first step is to `choose a name`. (most be same as project folder)

  - we see an option named initialize this repository with a `read me`...

  - `skip this step (if) because you are importing an existing repository`

  - click `Create repository`

- > when you clone a repo and want to push it to a different github repo you have to set a new url

        ```
        git remote set-url origin https://github.com/..new url
        ```

      this will show where git thinks the remote repo is...

        ```
        git remote -v`
        ```

- > push repo to Github

  ```
  git push -u origin master
  ```

  (Technically, the `-u flag` adds a tracking reference to the upstream server you are pushing to.
  What is important here is that this `lets you do a git pull without supplying any more arguments`. For example, once you do a git push -u origin master, `you can later call git pull and git will know that you actually meant git pull origin master.` Otherwise, you'd have to type in the whole command.)

- > `git pull origin master` (to pull in the latest changes into local repo)
