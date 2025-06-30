<template>
  <header class="navbar">
    <div class="navbar__container">
      <a href="#" class="navbar__logo">
        Food<span class="text-primary">now</span>
      </a>

      <nav class="navbar__nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li class="active"><a href="#">Order</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact us</a></li>
        </ul>
      </nav>

      <div class="navbar__actions">
        <a href="#" class="navbar__login-link">Login</a>
        <button class="btn btn--primary">Register</button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
defineOptions({
  name: 'AppNavbar'
});
</script>

<style scoped lang="scss">
$primary-color: #F97316;
$text-light: #FFFFFF;
$text-dark: #1F2937;

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
  }

  &__logo {
    font-size: 2.25rem;
    font-weight: 700;
    color: $text-light;
    text-decoration: none;

    .text-primary {
      color: $primary-color;
    }
  }

  &__nav {
    @media (max-width: 768px) {
      display: none;
    }

    ul {
      display: flex;
      list-style: none;
      gap: 2.5rem;
      margin: 0;
      padding: 0;
    }

    a {
      text-decoration: none;
      color: $text-light;
      font-weight: 500;
      transition: color 0.3s ease;
      padding-bottom: 0;
      border-bottom: none;

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
