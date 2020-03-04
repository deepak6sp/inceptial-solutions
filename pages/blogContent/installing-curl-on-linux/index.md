There are times when apt-get and yum commands are not available on linux platform or while using a docker container running linux. So to install curl, ssh into the container and run the below command.

To get a shell into the running container, run
```
docker exec -it {container_name} /bin/sh
```
and to install curl, run
```
apk --no-cache add curl
```