# zeromq nodejs node 
> p is a publisher
> w is a woker
## build
- build publisher
```bash
cd p 
docker build -t p .
```
- build woker
```bash
cd w 
docker build -t w .
```
## run 
- start publisher
```bash
docker run -d --name=p -p 3000:3000 p 
```
- start woker
```bash
docker run --name=w -d w
```
## watch logs 
```bash
docker logs -f p
docker logs -f w
```