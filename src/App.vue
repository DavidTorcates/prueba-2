
<template>
   <!--
     <img src="assets/logo.png" alt="..." width="500px" height="500px">
   <div id="nav">
    
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> 
  </div>
  -->
  <router-view/>
</template>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #A3FF15;
}

#nav {
  padding: 30px;
  background: #033949;
}

#nav a {
  font-weight: bold;
  color: #D1D7C7;
}

#nav a.router-link-exact-active {
  color: #A3FF15;
}
</style>
