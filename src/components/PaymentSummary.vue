<template>
  <div class="payment-summary">
    <h3 class="summary-title">Payment Summary</h3>

    <div v-if="!selectedPizza" class="payment-summary__placeholder">
      <p>Select a pizza to see the summary.</p>
    </div>

    <div v-else class="summary-content">
      <div class="payment-summary__items">
        <div class="summary-item">
          <span>{{ selectedPizza.name }}</span>
          <span>${{ finalPizzaPrice.toFixed(2) }}</span>
        </div>
        <div v-if="selectedSize && selectedSize.priceModifier > 0" class="summary-item">
          <span>Size - {{ selectedSize.name }}</span>
          <span>+${{ selectedSize.priceModifier.toFixed(2) }}</span>
        </div>
        <div v-for="topping in selectedToppings" :key="topping.id" class="summary-item">
          <span>{{ topping.name }}</span>
          <span>+${{ topping.price.toFixed(2) }}</span>
        </div>
      </div>

      <div class="payment-summary__total">
        <span>Total Price</span>
        <span class="total-price">${{ totalPrice.toFixed(2) }}</span>
      </div>
      <button class="btn-order" @click="$emit('order-now')">Order Now</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { Pizza, Size, Topping } from '@/types';

defineProps({
  selectedPizza: Object as PropType<Pizza | null>,
  finalPizzaPrice: { type: Number, default: 0 },
  selectedSize: Object as PropType<Size | null>,
  selectedToppings: Array as PropType<Topping[]>,
  totalPrice: { type: Number, required: true }
});
defineEmits(['order-now']);
</script>

<style scoped lang="scss">
$primary-color: #F97316;

.payment-summary {
  background-color: white;
  padding: 1.5rem;
  border-radius: 20px;
  height: fit-content;
  border: 1px solid #f3f4f6;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
}

.summary-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: $primary-color;
  margin-top: 0;
  margin-bottom: 1.5rem;
}

.payment-summary__placeholder {
  color: #6B7280;
  text-align: center;
  padding: 3rem 0;
  min-height: 200px;
}

.payment-summary__items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
  min-height: 100px;
}

.summary-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.payment-summary__total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  font-size: 1.2rem;
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
  margin-top: 1rem;
  margin-bottom: 1.5rem;

  .total-price {
    color: $primary-color;
    font-size: 1.5rem;
    font-weight: 700;
  }
}

.btn-order {
  width: 100%;
  background-color: $primary-color;
  color: white;
  padding: 0.85rem 1rem;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.2s;

  &:hover {
    background-color: #dd6814;
    transform: scale(1.02);
  }
}
</style>
