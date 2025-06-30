<template>
  <Navbar />
  <main>
    <RouterView />
  </main>
  <Footer/>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background-color: #FFFFFF;
  color: #1F2937;
}
</style>
