<template>
  <div class="container menu_container">
    <div class="top">
      <h2>Menu</h2>
    </div>
    <div class="buttons">
      <md-button
        v-for="(button,index) in buttons"
        :key="index"
        :class="button.active?'md-raised':''"
        @click="changeMenu(button.name)"
      >{{button.name}}</md-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttons: [
        { name: "pizza", active: true },
        { name: "burgers", active: false },
        { name: "salat", active: false },
        { name: "dessert", active: false }
      ]
    };
  },
  methods: {
    changeMenu(btnName) {
      this.buttons.forEach(button => {
        button.active = button.name == btnName;
      });
    }
  }
};
</script>
