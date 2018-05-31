<template>
  <div class="container">

    <header class="jumbotron">
      <h1>Nome do projeto</h1>
      <nav-menu></nav-menu>
    </header>

    <router-view></router-view>

    <footer>&copy; Adriano Reis</footer>
  </div>
</template>

<script>
import NavMenu from 'comp/nav.component'

export default {
  name: 'App',
  components: {
    NavMenu
  }
}
</script>

<style lang="scss">
@import '../node_modules/bootstrap/scss/bootstrap.scss';
</style>
