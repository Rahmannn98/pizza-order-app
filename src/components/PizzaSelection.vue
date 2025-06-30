<template>
  <div class="pizza-selection">
    <h2 class="section-title">Choose your Pizza</h2>
    <div class="pizza-selection__list">
      <div v-for="pizza in pizzas" :key="pizza.id" class="pizza-card"
        :class="{ 'pizza-card--selected': selectedPizza?.id === pizza.id }" @click="$emit('select-pizza', pizza)">
        <div v-if="pizza.offer" class="pizza-card__offer-badge">
          <span>OFFER</span>
        </div>
        <img :src="pizza.image" :alt="pizza.name" class="pizza-card__image" />
        <div class="pizza-card__details">
          <div class="pizza-card__name">{{ pizza.name }}</div>
          <div class="pizza-card__price">
            <span v-if="pizza.offer" class="pizza-card__price-offer">${{ (pizza.price - 1.5).toFixed(2) }}</span>
            <span :class="{ 'has-offer': pizza.offer }">${{ pizza.price.toFixed(2) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { Pizza } from '@/types/index.ts';
defineProps({
  pizzas: Array as PropType<Pizza[]>,
  selectedPizza: Object as PropType<Pizza | null>
});
defineEmits(['select-pizza']);
</script>

<style scoped lang="scss">
$primary-color: #F97316;

.section-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: #eb7420;
}


.pizza-selection__list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.pizza-card {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 1.25rem;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  position: relative;
  overflow: hidden;

  &--selected {
    background-color: $primary-color;
    border-color: $primary-color;
    color: white;
    transform: translateY(-4px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);

    .pizza-card__price {
      color: white;

      .has-offer {
        color: #ffcbb6;
      }
    }

    .pizza-card__price-offer {
      color: white;
    }


  }

  &:hover:not(&--selected) {
    border-color: #f6ad83;
    transform: translateY(-2px);
  }

  &:hover .pizza-card__image {
    transform: rotate(15deg);
  }
}

.pizza-card__image {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  transition: transform 0.3s ease;
}

.pizza-card__details {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.pizza-card__name {
  font-weight: 600;
  font-size: 1.15rem;
}

.pizza-card__price {
  font-size: 0.95rem;
  font-weight: 500;
  display: flex;
  gap: 0.5rem;

  .has-offer {
    text-decoration: line-through;
    color: #f6ad83;
  }

  .pizza-card__price-offer {
    font-weight: 700;
    color: $primary-color;
  }

}

.pizza-card__offer-badge {
  position: absolute;
  top: 19px;
  right: -30px;
  width: 120px;
  padding: 4px 0;
  background-color: #1f2937;
  color: white;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 600;
  transform: rotate(45deg);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
</style>
