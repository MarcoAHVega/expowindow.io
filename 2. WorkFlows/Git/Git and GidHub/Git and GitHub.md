# Git and GidHub

_Note: If you are starting form a webpack boilerplate make sure you `rename the project` and `change the title` in the HTML_

_step 1_

> `Create a new Git repo` from within the new project folder:

```js
git init
```

```js
git add -A // or
```

```js
git add "file.name" // to add this to the staging area
```

```js
git status
```

```js
git commit -m 'initial commit'
```

```js
git status
```

```js
git checkout -- // (to recover)
```

> `or` clone an existing repo

```js
git clone https://github.com/.. // (git clone + repo's Url)
```

Setup Your GitHub

> when you clone a repo and want to push it to a different github repo `you have to set a new url`

```js
git remote set-url origin https://github.com/..
```

```js
git remote -v // this will show where git thinks the remote repo is
```

_Step 2_

> Create a remote repo on Github

- The first step is to `choose a name`. (most be same as project folder)
- we see an option named initialize this repository with a `read me`. -`skip this step (if) because you are importing an existing repository`
- click `Create repository`

_Step 3_

> `Add origin repo` to Github repo.

```js
-$ git remote add origin https://github.com/MarcoAHV/ChatApp-site.git
```

_Step 4 last_

> `push repo to Github`

```js
-$ git push -u origin master
```

(Technically, the `-u flag` adds a tracking reference to the upstream server you are pushing to.
What is important here is that this `lets you do a git pull without supplying any more arguments`. For example, once you do a git push -u origin master, `you can later call git pull and git will know that you actually meant git pull origin master.` Otherwise, you'd have to type in the whole command.)

> `git pull origin master` (to pull in the latest changes into local repo)
