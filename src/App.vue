<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    {{user}}
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import gql from "graphql-tag";
export default {
  name: "app",
  data() {
    return {
      id: "1",
      user: ""
    };
  },
  apollo: {
    user: {
      // gql 查询
      query: gql`
        query UserMessage($id: String!) {
          user(id: $id) {
            name
          }
        }
      `,
      // 静态参数
      variables: {
        id: "1"
      }
    }
  },
  components: {
    // HelloWorld
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
