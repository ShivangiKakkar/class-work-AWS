<script setup lang="ts">
import Nav from './components/Nav.vue';
//import Messages from './pages/Messages.vue';
</script>

<template>
  
  <Nav />
  <div class="container">
    <router-view />
    <!-- <section class="section">
      <h1 class="title">Praying for Ukraine</h1>
      <Messages />
    </section> -->
  </div>
</template>

<style>

</style>