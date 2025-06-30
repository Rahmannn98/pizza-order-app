<template>
  <div class="toppings-selection">
    <h3 class="section-title--sm">Toppings</h3>
    <div class="toppings-selection__grid">
      <label v-for="topping in toppings" :key="topping.id" class="topping-item"
        :class="{ 'topping-item--disabled': !isToppingAvailable(topping) }">
        <input type="checkbox" :checked="isToppingSelected(topping)" @change="toggleTopping(topping)"
          :disabled="!isToppingAvailable(topping)" />
        <span>{{ topping.name }}</span>
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { Topping } from '@/types';

const props = defineProps({
  toppings: Array as PropType<Topping[]>,
  availableToppings: Array as PropType<string[]>,
  selectedToppings: Array as PropType<Topping[]>
});
const emit = defineEmits(['update:selectedToppings']);


const isToppingAvailable = (topping: Topping) => props.availableToppings?.includes(topping.name);
const isToppingSelected = (topping: Topping) => props.selectedToppings?.some(t => t.id === topping.id);

const toggleTopping = (topping: Topping) => {
  if (!props.selectedToppings) return;
  const newSelection = [...props.selectedToppings];
  const index = newSelection.findIndex(t => t.id === topping.id);
  if (index === -1) {
    newSelection.push(topping);
  } else {
    newSelection.splice(index, 1);
  }
  emit('update:selectedToppings', newSelection);
};
</script>

<style scoped lang="scss">
$primary-color: #F97316;
$text-dark: #374151;
$border-light: #d1d5db;

.section-title--sm {
  font-size: 1.25rem;
  font-weight: 600;
  color: $primary-color;
  margin-bottom: 1rem;
}

.toppings-selection__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
  gap: 0.75rem;
}

.topping-item {
  display: inline-block;
  padding: 0.6rem 1rem;
  border-radius: 50px;
  text-align: center;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  background-color: #f3f4f6;
  color: #4b5563;
  border: 2px solid transparent;

  input {
    display: none;
  }

  &:has(input:checked) {
    background-color: white;
    color: $text-dark;
    border-color: $primary-color;
  }

  &--disabled {
    background-color: #f3f4f6;
    color: #d1d5db;
    cursor: not-allowed;
    opacity: 0.7;
  }

  &:not(&--disabled):not(:has(input:checked)):hover {
    border-color: $border-light;
  }
}
</style>
