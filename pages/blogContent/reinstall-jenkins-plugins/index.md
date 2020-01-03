Jenkins is one of the widely used and popular CI/CD software. When I started using Jenkins, I found that uninstalling a plugin was a tedious task. So, if you are having hard time to reinstall an unwanted plugin from Jenkins, follow these simple steps.

</br>

Go to the jenkins plugin directory, located at
```
cd <jenkinsHome>/plugins/
```

Delete the plugin directory. You have successfully uninstalled the plugin.

</br>

To reinstall the plugin,

Go to, <a href="https://updates.jenkins-ci.org/download/plugins/" target="_blank">https://updates.jenkins-ci.org/download/plugins</a> and download .hpi file.


</br>

On Jenkins, go to 

a) Manage Jenkins -> Manage plugins

b) Under upload plugin section, click advanced tab.

c) Choose file and click upload button.

d) Restart Jenkins to see the changes.