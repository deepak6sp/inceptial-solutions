By default, command prompt does not display git branch names. You would generally see this.
```
deepak@deepak ~ $
```

In the terminal, type
```
touch ~/.bash_profile
vi ~/.bash_profile
```

Now, in .bash_profile, copy the code below
```
parse_git_branch() {
  git branch 2&gt; /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ (\1)/'
}
export PS1="\u@\h \W\[\033[32m\]\$(parse_git_branch)\[\033[00m\] $ "
```

Reopen terminal, and you will see, git branch showing
```
deepak@deepak ~ (master) $
```