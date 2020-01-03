To demonstrate basic docker commands, I will be using nginx container from docker hub.

To start, run
```
docker pull nginx
```
<h6>Check Docker version</h6>

```
docker version
```

<h6>Stop / remove all Docker containers</h6>

```
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
```

<h6>Container commands</h6>

```
docker container run nginx
docker container run --publish 3000:80 nginx
docker container run —publish 3000:80 —detach —name <container-name> nginx
```

<h6>Start, stop, remove and log</h6>

```
docker start nginx
docker stop nginx
docker rm nginx
docker rm -f nginx
docker container logs nginx
```

<h6>Start a container interactively</h6>

```
docker container run -it nginx bash
```

<h6>Start an exisiting container</h6>

```
docker container start ai nginx
```

<h6> To run commands inside running container</h6>

```
docker container exec -it
```

<h6>Get ip address of a container</h6>

```
docker container inspect --format  '{{.NetworkSettings.IPAddress}}' server
```

<h6>Network</h6>

```
docker network ls
```

<h6>Create new network</h6>

```
docker network create {my_app_net}
docket network inpect {my_app_net}
```

<h6>Connect and disconnect from network</h6>

```
docker network connect {my_app_net} container_name
docker network disconnect {my_app_net} container_name
```

<h6>Dockerfile</h6>

```
docker image build -t {imageName} .
```

<h6>Docker Compose start and stop</h6>

```
docker-compose up
docker-compose down
```

<h6>Docker Compose remove volume</h6>

```
docker-compose down -v
```