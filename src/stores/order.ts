import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Pizza, Size, Topping } from '@/types'

export const useOrderStore = defineStore('order', () => {
  const pizzas = ref<Pizza[]>([])
  const sizes = ref<Size[]>([])
  const toppings = ref<Topping[]>([])
  const isLoading = ref(true)

  const selectedPizza = ref<Pizza | null>(null)
  const selectedSize = ref<Size | null>(null)
  const selectedToppings = ref<Topping[]>([])

  async function loadData() {
    isLoading.value = true
    try {
      const [pizzaRes, sizeRes, toppingRes] = await Promise.all([
        fetch('/pizza.json'),
        fetch('/size.json'),
        fetch('/topping.json')
      ])

      pizzas.value = await pizzaRes.json()
      sizes.value = await sizeRes.json()
      toppings.value = await toppingRes.json()

      if (pizzas.value.length > 0) selectedPizza.value = pizzas.value[0]
      if (sizes.value.length > 0) selectedSize.value = sizes.value[0]
    } catch (error) {
      console.error('Failed to load data', error)
    } finally {
      isLoading.value = false
    }
  }

  const finalPizzaPrice = computed(() => {
    if (!selectedPizza.value) return 0
    return selectedPizza.value.offer
      ? selectedPizza.value.price - 1.5
      : selectedPizza.value.price
  })

  const availableToppings = computed(() => {
    if (!selectedPizza.value) return []
    return toppings.value.filter(t => selectedPizza.value!.allowedToppings.includes(t.id))
  })

  const totalPrice = computed(() => {
    if (!selectedPizza.value || !selectedSize.value) return 0
    const toppingsPrice = selectedToppings.value.reduce((sum, t) => sum + t.price, 0)
    return finalPizzaPrice.value + selectedSize.value.priceModifier + toppingsPrice
  })

  function selectPizza(pizza: Pizza) {
    selectedPizza.value = pizza
    selectedToppings.value = selectedToppings.value.filter(t => pizza.allowedToppings.includes(t.id))
  }

  function updateSelectedToppings(newToppings: Topping[]) {
    selectedToppings.value = newToppings
  }

  return {
    pizzas, sizes, toppings, isLoading,
    selectedPizza, selectedSize, selectedToppings,
    finalPizzaPrice, availableToppings, totalPrice,
    loadData, selectPizza, updateSelectedToppings
  }
})
