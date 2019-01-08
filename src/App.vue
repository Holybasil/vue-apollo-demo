<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
     {{user}}

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import gql from 'graphql-tag'
export default {
  name: 'app',
  data(){
    return {
      id: "1",
      user: ''
    }
  },
  apollo: {
  // 简单的查询，将更新 'hello' 这个 vue 属性
  user: {
    // gql 查询
    query: gql`query UserMessage($id: String!) {
      user(id: $id){
        name
      }
    }`,
    // 静态参数
    variables: {
      id: '1',
    },
  },
},
  components: {
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
