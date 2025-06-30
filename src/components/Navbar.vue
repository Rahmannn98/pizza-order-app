<template>
  <header class="navbar">
    <div class="navbar__container">
      <a href="#" class="navbar__logo">
        Food<span class="text-primary">now</span>
      </a>

      <nav class="navbar__nav" :class="{ 'is-open': isMobileMenuOpen }">
        <ul>
          <li><a href="#">Home</a></li>
          <li class="active"><a href="#">Order</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact us</a></li>
        </ul>

        <div class="navbar__actions">
          <a href="#" class="navbar__login-link">Login</a>
          <button class="btn btn--primary">Register</button>
        </div>
      </nav>

      <button class="navbar__hamburger" @click="toggleMobileMenu">
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>

    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineOptions({
  name: 'AppNavbar'
});

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<style scoped lang="scss">
$primary-color: #F97316;
$text-light: #FFFFFF;
$text-dark: #1F2937;
$breakpoint-mobile: 768px;

.navbar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background-color: transparent;

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 1.5rem 2rem;
    position: relative;
  }

  &__logo {
    font-size: 2.25rem;
    font-weight: 700;
    color: $text-light;
    text-decoration: none;
    z-index: 1;

    .text-primary {
      color: $primary-color;
    }
  }

  &__nav {
    display: flex;
    align-items: center;

    @media (min-width: ($breakpoint-mobile + 1px)) {
      gap: 2.5rem;
    }

    @media (max-width: $breakpoint-mobile) {
      position: fixed;
      top: 0;
      right: -100%;
      width: 70%;
      height: 100vh;
      background-color: $text-dark;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      padding: 2rem;
      transition: right 0.4s ease-in-out;

      &.is-open {
        right: 0;
      }
    }

    ul {
      display: flex;
      list-style: none;
      gap: 2.5rem;
      margin: 0;
      padding: 0;

      @media (min-width: ($breakpoint-mobile + 1px)) {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }

      @media (max-width: $breakpoint-mobile) {
        flex-direction: column;
        gap: 1.5rem;
        text-align: center;
        position: static;
        transform: none;
      }
    }

    a {
      text-decoration: none;
      color: $text-light;
      font-weight: 500;
      transition: color 0.3s ease;

      &:hover {
        color: $primary-color;
      }
    }

    li.active a {
      color: $primary-color;
      font-weight: 600;
    }
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    z-index: 1;

    @media (max-width: $breakpoint-mobile) {
      flex-direction: column;
      gap: 1.25rem;
      margin-top: 2rem;
      width: 100%;

      .btn {
        width: 100%;
        text-align: center;
      }
    }
  }

  &__hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    width: 30px;
    height: 25px;
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 101;

    @media (max-width: $breakpoint-mobile) {
      display: flex;
    }

    .hamburger-line {
      width: 100%;
      height: 3px;
      background-color: $text-light;
      border-radius: 3px;
    }
  }

  &__login-link {
    color: $text-light;
    font-weight: 500;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: $primary-color;
    }
  }
}

.btn {
  padding: 0.65rem 1.75rem;
  border: none;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &--primary {
    background-color: $primary-color;
    color: $text-light;
    border-radius: 50px;

    &:hover {
      opacity: 0.9;
    }
  }
}
</style>
