<template>
  <div class="container menu_container">
    <div class="top" v-scroll-reveal>
      <h2>Menu</h2>
    </div>
    <!-- override default animation delay with: {delay:250} -->
    <div class="buttons" v-scroll-reveal="{delay:250}">
      <md-button
        v-for="(button,index) in buttons"
        :key="index"
        :class="button.active?'md-raised':''"
        @click="changeMenu(button.name)"
      >{{button.name}}</md-button>
    </div>
    <div class="products_items" v-scroll-reveal="{delay:500}">
      <md-card
        v-for="(product,index) in products"
        :key="index"
        v-show="product.type === activeProduct"
      >
        <md-card-media md-ratio="16:9">
          <!-- using webpack syntax, load image -->
          <img :src="require(`../../assets/images/products/${product.img}`)">
        </md-card-media>

        <md-card-header>
          <h2 class="md-tittle">{{product.name}}</h2>
          <div class="md-subhead">
            <span>$ {{product.price}}</span>
          </div>
        </md-card-header>
        <md-card-content>{{product.desc}}</md-card-content>
      </md-card>
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
      activeProduct: "pizza",
      products: []
    };
  },
  methods: {
    changeMenu(btnName) {
      this.buttons.forEach(button => {
        button.active = button.name == btnName;
        this.activeProduct = btnName;
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

<style scoped>
.md-card {
  width: 32%;
  margin-bottom: 20px;
}
.products_items {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>