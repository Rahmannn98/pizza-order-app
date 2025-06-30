<template>
  <section class="hero">
    <div class="hero__overlay"></div>
    <h1 class="hero__title">
      <span class="text-primary">Pizza order</span>
    </h1>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
$primary-color: #F97316;

.hero {
  position: relative;
  height: 60vh;
  border-radius: 0;
  margin-bottom: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('/img/pizza/hero.png');
  background-size: cover;
  background-position: center;
}

.hero__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.45);
}

.hero__title {
  color: white;
  font-size: 3.5rem;
  font-weight: 700;
  position: relative;
  z-index: 1;
  text-align: center;

  .text-primary {
    color: $primary-color;
  }
}
</style>
