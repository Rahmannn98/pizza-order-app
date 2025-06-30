<template>
  <div class="size-selection">
    <h3 class="section-title--sm">Size</h3>
    <div class="size-selection__options">
      <label v-for="size in sizes" :key="size.id" class="size-selection__label">
        <input type="radio" :value="size" :checked="selectedSize?.id === size.id"
          @change="$emit('update:selectedSize', size)" name="pizza-size" />
        <span class="radio-custom"></span>
        <span>{{ size.name }} <span v-if="size.priceModifier > 0">(+${{ size.priceModifier.toFixed(2) }})</span></span>
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { Size } from '@/types';

defineProps({
  sizes: Array as PropType<Size[]>,
  selectedSize: Object as PropType<Size | null>
});
defineEmits(['update:selectedSize']);
</script>

<style scoped lang="scss">
$primary-color: #F97316;

.section-title--sm {
  font-size: 1.25rem;
  font-weight: 600;
  color: $primary-color;
  margin-bottom: 1rem;
}

.size-selection__options {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

.size-selection__label {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 1rem;

  input {
    display: none;
  }
}

.radio-custom {
  width: 20px;
  height: 20px;
  border: 2px solid #E5E7EB;
  border-radius: 50%;
  margin-right: 0.75rem;
  position: relative;
  transition: border-color 0.3s;
}

.size-selection__label input:checked+.radio-custom {
  border-color: $primary-color;
}

.size-selection__label input:checked+.radio-custom::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  background-color: $primary-color;
  border-radius: 50%;
}
</style>
