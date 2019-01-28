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
      ],
      products: []
    };
  },
  methods: {
    changeMenu(btnName) {
      this.buttons.forEach(button => {
        button.active = button.name == btnName;
      });
    }
  },
  created() {
    // user VueResource (this.$http) to fetch products from our firebase db
    this.$http
      .get("products.json")
      .then(response => response.json())
      .then(data => {
        let list = [];

        for (let key in data) {
          list.push({
            ...data[key],
            id: key
          });
        }

        this.products = list;
      });
  }
};
</script>
