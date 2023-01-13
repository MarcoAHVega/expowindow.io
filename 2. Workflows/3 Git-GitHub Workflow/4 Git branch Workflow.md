### create a new get branch for for every new feature or section:

- > make sure that we currently have a clean working directory:

  - you can see if you have any files that haven't been committed yet

  ```
  git status
  ```

- > staging

  - you can add `everything` to the staging area in one step

  ```
  git add -A
  ```

  or if you only need to stage `1 file` you can just type the path to that file.

  ```
  git add app/index.html
  ```

- > un-staging

  - if I wanted `to un-stage the index.html` file I can just type:

  ```
  git reset app/index.html
  ```

- > create a new branch

  - to create a new branch and check it out or switch to it in one move

  ```
  git checkout -b testimonials
  ```

  - or if you only want to create the branch

  ```
  git branch testimonials
  ```

  - > always checkout the branch you want to work on

  - to see a list of all of the branches:
    (the star next to master indicates that it's the branch we are currently working with)

  ```
  git branch
  ```

  - to checkout between different branches:

  ```
  git checkout master

  /or/

  git checkout testimonials
  ```

- > commit changes after working on a branch

  - you can actually stage and commit your files in one move:

  ```
  git commit -am "worked on testimonial title"
  ```

  - or you can stage and then commit

  ```
  git status


  git add -A


  git status

  ```

  - So this staging area looks good to me. `I'm ready to commit`

  ```
  git commit -m "worked on testimonial title"
  ```

- > merge it into our master branch

  - Once our feature is complete it's no longer a work in progress, We can merge it into our master branch.

  - So to do that let's switch back to our master branch.

  ```
  git checkout master
  ```

  - So in the command line while we have the master branch checked out Let's run:

  ```
  git merge testimonials
  ```

- > push the master branch to github

  - so we can see a visualization of all the comments.

  ```
  git push origin master
  ```

  Once we merged git took the commit history of the testimonials branch and added it to the master branch history.

- > deleting unnecessary branches

Let's `keep the local copy of our repo clean` by deleting unnecessary branches.

- So if we run the `git branch` command to list all of the branches

```
git branch
```

- we see the testimonials branch

- So let's go ahead and `delete that locally`.

```
git branch -d testimonials
```

### Working on a team

- > We can actually have github perform the merge

- push the individual branch up to github

```
git push origin count-to-15
```

- in the GitHub repo,click on commits

we don't see our latest commit here because we are currently looking at the master branch.

- switch it to the new count-to-15 branch`that we just pushed, there is our latest commit.

todo> So this new count to 15 feature is complete, Which means it's ready to be `merged into the master branch, let's have GitHub handle the merging.

- if we jump back to github and visit the home page for this repo we see that github added this row that reads "your recently pushed branches:".

- and on the far right we see a "compare and pull request" button.

todo> Let's go ahead and click that, so on this screen we are creating a `pull request`, a pull request is basically a request to merge one branch into another.

- So we are considering the master branch our base and the count to 15 branch is the branch that we want to merge in.

- Now often when you use github you will be working together with other developers on a team, so this is your chance to write a bit of a comment so you could say "Hey team in this amazing branch I counted to 15."

- And you would usually `assign this pull request to someone else on your team, That way they can do a bit of a peer review on your code and make sure that things truly look good before merging it in the master.

- So let's just go ahead and `assign this to ourselves`

click "assignees" and then you can just click your own name

- and then click `Create pull request`

- here is the `review screen` for that poll request that we just created.

- we have the authority to scroll down and `click merge pull request.`

- We can go ahead and click this `confirm merge button`

? and we see that the pull request was successfully merged and closed.

todo> Once a branch has been merged in the master there's not much of a reason to keep that extra branch around. It's a good practice to keep your repo clean and `delete unnecessary branches` (on github)

- So let's go ahead and `click delete branch`. Perfect.

todo> So all we need to do is `pull in the latest copy of master from GitHub down to our machine`.
^
git pull origin master

? and now our local copy of the master branch has the latest code.
(31.4)
& 10 We can include an option named "no fast forward" to merge branches
& 11 Git Tips - How to Handle (and Avoid) Merge Conflicts
