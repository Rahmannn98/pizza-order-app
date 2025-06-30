<template>
  <div class="page-wrapper">
    <HeroSection />
    <main class="order-section">
      <div class="order-form">
        <div v-if="!orderStore.isLoading">
          <PizzaSelection
            :pizzas="orderStore.pizzas"
            :selected-pizza="orderStore.selectedPizza"
            @select-pizza="orderStore.selectPizza"
          />
          <div v-if="orderStore.selectedPizza" class="custom-pizza-section">
            <h2 class="section-title">Custom Pizza</h2>

            <SizeSelection
              v-if="orderStore.sizes.length > 0"
              :sizes="orderStore.sizes"
              v-model:selectedSize="orderStore.selectedSize"
            />

            <ToppingsSelection
              v-if="orderStore.toppings.length > 0"
              :toppings="orderStore.toppings"
              :available-toppings="orderStore.availableToppings.map(t => t.name)"
              :selected-toppings="orderStore.selectedToppings"
              @update:selected-toppings="orderStore.updateSelectedToppings"
            />
          </div>
        </div>
        <div v-else class="loading-state">
          <p>Loading pizza options...</p>
          </div>
      </div>
      <PaymentSummary
        :selected-pizza="orderStore.selectedPizza"
        :final-pizza-price="orderStore.finalPizzaPrice"
        :selected-size="orderStore.selectedSize"
        :selected-toppings="orderStore.selectedToppings"
        :total-price="orderStore.totalPrice"
        @order-now="handleOrder"
      />
    </main>
    <OrderSuccessModal v-if="isModalVisible" @close="closeModal" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useOrderStore } from '@/stores/order';
import HeroSection from '@/components/HeroSection.vue';
import PizzaSelection from '@/components/PizzaSelection.vue';
import SizeSelection from '@/components/SizeSelection.vue';
import ToppingsSelection from '@/components/ToppingsSelection.vue';
import PaymentSummary from '@/components/PaymentSummary.vue';
import OrderSuccessModal from '@/components/OrderSuccsessModal.vue';

const orderStore = useOrderStore();

// State lokal hanya untuk modal
const isModalVisible = ref(false);

// Saat komponen dimuat, panggil action dari store untuk memuat data
onMounted(() => {
  orderStore.loadData();
});

const handleOrder = () => {
  isModalVisible.value = true;
};

const closeModal = () => {
  isModalVisible.value = false;
  if (orderStore.pizzas.length > 0) {
    orderStore.selectPizza(orderStore.pizzas[0]);
  }
  
  if (orderStore.sizes.length > 0) {
    orderStore.selectedSize = orderStore.sizes[0];
  }
  orderStore.selectedToppings = [];
};
</script>

<style lang="scss" scoped>
$primary-color: #F97316;

.page-wrapper {
  background-color: #f9fafb;
}
.order-section {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 3rem;
  padding: 4rem 2rem 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    padding-top: 3rem;
    padding-bottom: 4rem;
  }
}
.order-form {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}
.section-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: $primary-color;
  margin-bottom: 1.5rem;
}
.loading-state {
  text-align: center;
  padding: 50px 0;
  font-size: 1.2rem;
  color: #6B7280;
}
</style>
