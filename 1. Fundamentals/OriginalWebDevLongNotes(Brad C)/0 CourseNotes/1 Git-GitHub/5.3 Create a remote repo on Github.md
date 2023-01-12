<!-- 
(7.1)
~ Step 2
todo> Create a remote repo on Github
   - The first step is to `choose a name`. (most be same as project folder)
   - we see an option named initialize this repository with a `read me`.
   -`skip this step (if) because you are importing an existing repository`
   - click `Create repository`

(7.2)
~ Step 3
todo> `Add origin repo` to Github repo.
      -$ git remote add origin https://github.com/MarcoAHV/ChatApp-site.git

(7.3)
~ Step 4 last
todo> `push repo to Github`
      -$ git push -u origin master

   (Technically, the `-u flag` adds a tracking reference to the upstream server you are pushing to.
   What is important here is that this `lets you do a git pull without supplying any more arguments`. For example, once you do a git push -u origin master, `you can later call git pull and git will know that you actually meant git pull origin master.` Otherwise, you'd have to type in the whole command.)

(7.4)
* `git pull origin master` (to pull in the latest changes into local repo) 
 -->