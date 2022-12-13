# Git branches workflow

*before we write even one line of new code, Let's create `a new get branch` for this testimonial section:*

-----------------------------------------------------------------------------
*we want to make sure that we currently have `a clean working directory`:*

> you can see if you have any files that haven't been committed yet

```js
git status 
```

> you can add everything to the staging area `in one step`

```js
git add -A
```

> or if you only need to stage `1 file` you can just type the path to that file.

```js
git add app/index.html
```

> if I wanted `to un-stage the index.html` file I can just type:

```js
git reset app/index.html
```

-----------------------------------------------------------------------
*create a new branch*  

> to `create a new branch and check it out` or switch to it in one move

```js
git checkout -b testimonials
```

> or if you `only want to create` the branch

```js
git branch testimonials
```

> to see a list of all of the branches:  
(the star(*) next to master indicates that it's the branch we are currently working with)

```js
git branch
```

> to checkout `between different branches`:

```js
git checkout master  /or/   git checkout testimonials
```


> always checkout the branch `you want to work` on

-----------------------------------------------------------------------  

*commit changes after working on a branch*

> you can actually stage and commit your files in one move

```js
git commit -am "worked on testimonial title"
```

```js
git status
```

> or you can stage and then commit

```js
git add -A 
```

```js
git status
```

> So this staging area looks good to me. `I'm ready to commit` 

```js
git commit -m "worked on testimonial title"
```

---------------------------------------------------------
*Once our feature is complete it's no longer a work in progress, We can merge it into our master branch.* 


> So to do that let's switch back to our master branch. 

```js
git checkout master
```

> So in the command line `while we have the master branch checked out` Let's run:  

```js
git merge testimonials 
```

> So we still have the master branch checked out. But if we check the browser there's the list completed

---------------------------------------------------------------------------

*push a master branch to github so we can see a visualization of all the comments.*

```js
git push origin master
```

> Once we merged git took the commit history of the testimonials branch and `added it to the master branch history`.

-------------------------------------------------------------------------
*Let's `keep the local copy of our repo clean` by deleting unnecessary branches.*

> So if we run the `git branch` command to list all of the branches
  
```js
git branch
```
> we see the testimonials branch  

> So let's go ahead and `delete that locally`.

```js
git branch -d testimonials
```
-------------------------------------------------------------------------

*Working on a team*

> We can actually `have github perform the merge for us`.

>we can actually push this individual branch up to github

```js
git push origin count-to-15
```

> now if I jump over to GitHub.com and check out the page for my travel site repo, We can `click on commits`

> we don't see our latest commit here `because we are currently looking at the master branch`. 

> switch it to the new `count-to-15` branch (in the github site) that we just pushed, there is our latest commit. 

> So this new `count-to-15` feature is complete, Which means it's ready to be merged into the master branch, `let's have GitHub handle the merging`.

> if we jump back to github and visit the home page for this repo we see that github added this row that reads `"your recently pushed branches:"`.

> and on the far right we see a `"compare and pull request"` button.

> Let's go ahead and click that, so on this screen we are creating a `pull request`, a pull request is basically a request to merge one branch into another. 

> So we are considering the `master` branch our base and the `count-to-15` branch is the branch that we want to merge in.

> Now often when you use github you will be working together with other developers on a team, so this is your chance to write a bit of a comment so you could say `"Hey team in this amazing branch I counted to 15."` 

> And you would usually `assign` this pull request to someone else on your team, That way they can do a bit of a `peer review` on your code and make sure that things truly look good before merging it in the master.

> So let's just go ahead and `assign this to ourselves`

>click "assignees" and then you can just click your own name

> and then click `Create pull request`

> here is the `review screen` for that poll request that we just created.

> we have the authority to scroll down and `click merge pull request.`

> We can go ahead and click this `confirm merge button`

>  and we see that the pull request was successfully merged and closed.  

> Once a branch has been merged in the master there's not much of a reason to keep that extra branch around. It's a good practice to keep your repo clean and `delete unnecessary branches`  (on github) 

> So let's go ahead and `click delete branch`. Perfect.

> So all we need to do is `pull in the latest copy of master from GitHub down to our machine`.

```js
git pull origin master
```

> and now our local copy of the master branch has the latest code.

------------------------------------------------------------------------
*We can include an option named "no fast forward" to merge branches*
------------------------------------------------------------------------
*Git Tips - How to Handle (and Avoid) Merge Conflicts*
---------------------------------------------------------