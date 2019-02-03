<template>
  <div class="anim_container">
    <transition v-on:before-enter="beforeEnter" v-on:enter="enter" appear>
      <div class="icon icon_phone" delay="0" left="100"></div>
    </transition>
  </div>
</template>

<style>
.anim_container {
  position: relative;
  height: 200px;
}
.icon {
  background-size: cover !important;
  position: absolute;
}
.icon_phone {
  background: url("../../assets/images/icons/icon-phone.png");
  width: 130px;
  height: 130px;
  top: 30px;
}
</style>

<script>
export default {
  methods: {
    beforeEnter(el) {
      el.style.left = "-200px";
      el.style.opacity = 0;
    },
    enter(el, done) {
      let delay = parseInt(el.getAttribute("delay"));
      let left = parseInt(el.getAttribute("left"));

      // added VelocityJS cdn url reference inside index.html
      Velocity(
        el,
        { opacity: 1, left: left },
        { delay: delay, duration: 2000, complete: done }
      );
    }
  }
};
</script>
