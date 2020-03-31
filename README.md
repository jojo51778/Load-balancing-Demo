# 负载均衡（加权轮询）demo

### 启动
npm run start

// 暂停 Nginx 服务
sudo nginx -s stop
// 启动 Nginx 服务
nginx

### 修改 nginx.conf 文件中的端口
```js
server {
  # listen       8080;
  listen       8086;
  server_name  localhost;
}
```
### 轮询的服务器，写在 http 中的 upstream 对象里：
```js
upstream testServer {
  server localhost:8087 weight=10;
  server localhost:8088 weight=8;
  server localhost:8089;
}
```
### 代理地址，写在 http 中的 server 对象里：
```js
location / {
  root   html;
  index  index.html index.htm;
  proxy_pass http://testServer; // testServer 为自己定义的服务器集群
}
```
### 视频
<video controls>
  <source src="/demo.mp4" type="video/mp4">
</video>
