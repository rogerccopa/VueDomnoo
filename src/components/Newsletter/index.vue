<template>
  <div class="container newsl_container">
    <h2>Join to our newsletter</h2>
    <div class="form">
      <input type="text" v-model="email">
      <button @click="submitHandler">Subscribe</button>
    </div>
    <div class="error_label">
      <div>{{error}}</div>
    </div>
    <div class="success_label">
      <div>{{success}}</div>
    </div>
    <div
      class="small"
    >This is some test text for a disclaimer. Read the fine letters very carefully etc. This is some test text for a disclaimer. Read the fine letters very carefully etc.</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      error: "",
      success: ""
    };
  },
  methods: {
    validate(email) {
      let valid = [true, ""];

      const validEmailRegex = /\S+@\S+\.\S+/;
      if (email === "") {
        valid = [false, "It is empty"];
      } else if (!validEmailRegex.test(email)) {
        valid = [false, "Enter a valid email"];
      }

      return valid;
    },
    submitHandler() {
      let valid = this.validate(this.email);

      if (valid[0]) {
        this.error = "";
        this.addEmail(this.email);
      } else {
        this.error = valid[1];
      }
    },
    addEmail(email) {
      this.$http
        .get(`users.json?orderBy=\"email\"&&equalTo=\"${email}\"`)
        .then(response => {
          if (Object.getOwnPropertyNames(response.data).length === 0) {
            this.$http
              .post("users.json", { email: this.email })
              .then(response => {
                this.success = "Thank You";
              });
          } else {
            this.success = "Already on the list";
          }
        });

      this.clearSuccess();
    },
    clearSuccess() {
      setTimeout(() => {
        this.email = "";
        this.success = "";
      }, 3000);
    }
  }
};
</script>