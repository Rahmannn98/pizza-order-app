<template>
  <div class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <div class="modal-icon-wrapper">
        <img src="/img/icons/success.svg" alt="Success" />
      </div>
      <h2 class="modal-title">Order Success</h2>
      <p class="modal-message">
        Thank you, we have received your order successfully.
      </p>
      <button class="btn-close" @click="closeModal">Close</button>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['close']);
const closeModal = () => {
  emit('close');
};
</script>

<style scoped lang="scss">
$primary-color: #F97316;

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(25, 33, 47, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(3px);
}

.modal-content {
  background-color: white;
  padding: 2.5rem;
  border-radius: 16px;
  text-align: center;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  transform: scale(0.95);
  opacity: 0;
  animation: scaleUp 0.3s forwards ease-out;
}

@keyframes scaleUp {
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.modal-icon-wrapper {
  width: 80px;
  height: 80px;
  background-color: #FFF7ED;
  border-radius: 50%;
  margin: 0 auto 1.5rem auto;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 40px;
    height: 40px;
  }
}

.modal-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.modal-message {
  color: #4b5563;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.btn-close {
  width: 100%;
  background-color: $primary-color;
  color: white;
  padding: 0.85rem 1rem;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #dd6814;
  }
}
</style>
