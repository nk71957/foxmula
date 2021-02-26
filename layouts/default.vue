<template>
  <div>
    <app-sidebar
      :sidebar-list="sidebarList"
      :other-list="otherList"
    ></app-sidebar>
    <div class="page-layout">
      <app-navbar :nav-config="navConfig"></app-navbar>
      <nuxt class="main-layout" />
    </div>
  </div>
</template>
<script>
import AppSidebar from '~/components/app/AppSidebar'
import AppNavbar from '~/components/app/AppNavbar'
export default {
  components: { AppNavbar, AppSidebar },
  data() {
    return {
      sidebarList: [
        { title: 'Batches', icon: 'groups', active: true },
        { title: 'Manage Staff', icon: 'groups' },
        { title: 'Fee Summary', icon: 'groups' },
        { title: 'Institute Profile', icon: 'groups' }
      ],
      otherList: [
        { title: 'Direct Messages', icon: 'chat_bubble_outline' },
        { title: 'Mentions', icon: 'alternate_email' },
        { title: 'Bookmarked Items', icon: 'bookmark' }
      ],
      navConfig: {
        title: 'Batches'
      }
    }
  }
}
</script>
