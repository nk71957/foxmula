<template>
  <div class="navbar">
    <div class="navbar__title">
      {{ navConfig.title }}
    </div>
    <div class="navbar__spacer"></div>
    <div class="navbar__toolbar">
      <div class="navbar__toolbar-item">
        <i class="material-icons">event</i>
      </div>
      <div
        class="navbar__avatar navbar__toolbar-item"
        style="background-image: url('/img/avatar.jpeg')"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    navConfig: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>
