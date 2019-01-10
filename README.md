# vue-apollo-graphql-pure

## Project setup

```bash
// for client
npm install
npm run serve

// for server
cd server
npm install
npm run dev
```

## Iteration

### 0.0.1

- client 采用在 Vue 组件中注入 apollo 选项进行查询
- server 讲 type 定义在单独的.gql 文件中 方便查看与修改
- 使用 mongoose 来连接[mongoDB 的云服务](https://docs.mlab.com/)

### 0.0.2

...

## TODO

- [ ] 单表扩为多表 进行多表查询
- [ ] 确定 client 端最适合使用 gql 查询的方式
- [ ] 确定 types 和 resolves 最好的文件结构
- [ ] ...
