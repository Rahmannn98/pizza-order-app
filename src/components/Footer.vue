<template>
  <footer class="footer">
    <div class="footer__main">
      <div class="footer__brand">
        <img src="/img/icons/logo-alt.svg" alt="Logo FoodNow" class="footer__logo" />
        <h4 class="footer__find-us">Find Us :</h4>
        <div class="footer__socials">
          <a href="#" class="footer__social-link" aria-label="Facebook">
            <img src="/img/icons/facebook.svg" alt="Facebook">
          </a>
          <a href="#" class="footer__social-link" aria-label="Instagram">
            <img src="/img/icons/instagram.svg" alt="Instagram">
          </a>
          <a href="#" class="footer__social-link" aria-label="Youtube">
            <img src="/img/icons/youtube.svg" alt="Youtube">
          </a>
        </div>
      </div>

      <div class="footer__nav">
        <h4>Navigation</h4>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Order</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Login</a></li>
          <li><a href="#">Register</a></li>
        </ul>
      </div>

      <div class="footer__contact">
        <h4>Contact</h4>
        <ul>
          <li>
            <img src="/img/icons/mail.svg" alt="" class="footer__icon">
            <span>food.now@mail.com</span>
          </li>
          <li>
            <img src="/img/icons/phone.svg" alt="" class="footer__icon">
            <span>+62848477102943</span>
          </li>
          <li>
            <img src="/img/icons/whatsapp.svg" alt="" class="footer__icon">
            <span>+628184938494</span>
          </li>
        </ul>
      </div>

      <div class="footer__location">
        <h4>Location</h4>
        <div class="footer__location-header">
          <img src="/img/icons/location.svg" alt="" class="footer__icon">
          <span class="footer__location-title">Kerobokan</span>
        </div>
        <p class="footer__address">
          Jl. Raya Kerobokan Br Taman, Kuta No.98, Kerobokan Kelod, Kec. Kuta Utara, Kabupaten Badung, Bali 80361
        </p>
      </div>
    </div>

    <div class="footer__bottom">
      <p>Copyright © 2022 Foodnow. All Rights Reserved. Powered by PT. Timedoor Indonesia. | Privacy Policy</p>
      <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineOptions({ name: 'AppFooter' });
</script>

<style scoped lang="scss">
$primary-color: #F97316;
$text-dark: #374151;
$text-light: #6B7280;
$border-light: #E5E7EB;

.footer {
  width: 100%;
  margin-top: auto;
  padding-top: 4rem;
  background-color: #ffffff;
  color: $text-dark;

  &__main {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem 3rem 2rem;
  }

  &__logo {
    height: 30px;
    margin-bottom: 1rem;
  }

  &__find-us {
    color: $primary-color;
    font-weight: 600;
    font-size: 1.1rem;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
  }

  &__socials {
    display: flex;
    gap: 1rem;
  }

  &__social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border: 1.5px solid $border-light;
    border-radius: 50%;
    transition: background-color 0.3s, border-color 0.3s;

    img {
      height: 18px;
      filter: invert(55%) sepia(93%) saturate(1312%) hue-rotate(352deg) brightness(100%) contrast(97%);
    }

    &:hover {
      background-color: rgba($primary-color, 0.1);
      border-color: rgba($primary-color, 0.5);
    }
  }

  &__nav,
  &__contact,
  &__location {
    h4 {
      color: $primary-color;
      font-size: 1.1rem;
      font-weight: 600;
      margin: 0 0 1.5rem 0;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    li,
    p {
      font-size: 0.95rem;
      color: $text-light;
      line-height: 1.6;
    }

    a {
      color: $text-light;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: $primary-color;
        text-decoration: underline;
      }
    }
  }

  &__nav ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem 0.5rem;
  }

  &__contact li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  &__location-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0;
  }

  &__location-title {
    font-weight: 600;
    color: $text-dark;
    font-size: 0.95rem;
    position: relative;
    top: -2px;
  }

  &__address {
    padding-left: calc(16px + 0.75rem);
  }

  &__icon {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    filter: invert(55%) sepia(93%) saturate(1312%) hue-rotate(352deg) brightness(100%) contrast(97%);
  }

  &__bottom {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1.5rem 2rem;
    border-top: 1px solid $border-light;
    text-align: center;
    font-size: 0.875rem;
    color: $text-light;

    p {
      margin: 0.25rem 0;
      font-size: inherit;
    }
  }

  // Media Queries untuk Responsivitas
  @media (max-width: 992px) {
    &__main {
      grid-template-columns: repeat(2, 1fr);
      gap: 3rem 2rem;
    }
  }

  @media (max-width: 576px) {
    &__main {
      grid-template-columns: 1fr;
      text-align: center;
    }

    &__brand,
    &__location {
      align-items: center;
      display: flex;
      flex-direction: column;
    }

    &__socials,
    &__contact ul,
    &__location-header {
      justify-content: center;
    }

    &__contact li {
      justify-content: center;
    }

    &__address {
      padding-left: 0;
    }

    &__nav ul {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>
