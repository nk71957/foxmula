<template>
  <div class="sidebar">
    <div class="sidebar__header">
      <div class="sidebar__header-logo">
        <img src="/img/logo.png" alt="logo" width="40" height="40" />
      </div>
      <div class="sidebar__header-title">
        Institute's or schools really really long name
      </div>
    </div>
    <div class="sidebar__content">
      <div class="sidebar__divider"></div>
      <div class="sidebar__list">
        <a
          v-for="(item, index) in sidebarList"
          :key="index"
          href="#"
          :class="{ 'sidebar__list-item--active': item.active }"
          class="sidebar__list-item"
        >
          <div class="sidebar__list-icon">
            <i class="material-icons">{{ item.icon }}</i>
          </div>
          <div class="sidebar__list-title">{{ item.title }}</div>
        </a>
      </div>
      <div class="sidebar__divider"></div>
      <div class="sidebar__list">
        <a
          v-for="(item, index) in otherList"
          :key="index"
          href="#"
          class="sidebar__list-item"
        >
          <div class="sidebar__list-icon">
            <i class="material-icons">{{ item.icon }}</i>
          </div>
          <div class="sidebar__list-title">{{ item.title }}</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sidebarList: {
      type: Array,
      default() {
        return []
      }
    },
    otherList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  mounted() {}
}
</script>
