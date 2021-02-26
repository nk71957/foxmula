<template>
  <div class="interactive">
    <i class="material-icons interactive__icon">search</i>
    <div class="interactive__placeholder">Search everything</div>
    <input type="search" class="interactive__input" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      state: 'init'
    }
  }
}
</script>
