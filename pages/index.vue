<template>
  <div class="page-layout__main">
    <div class="search-wrapper">
      <div class="container search-container">
        <div class="search-surface">
          <app-search></app-search>
          <button class="button button--outlined">
            <span class="button__icon material-icons">filter_alt</span>
            <span class="button__label">Filters</span>
            <span class="badge badge--round badge--success">12</span>
          </button>
        </div>
        <div class="navbar__spacer"></div>
        <div class="navbar__toolbar">
          <button class="button button--outlined">
            <span class="button__icon material-icons">add</span>
            <span class="button__label">New Subject</span>
          </button>
        </div>
      </div>
    </div>
    <div class="page-layout__content">
      <div class="container">
        <div class="page-section">
          <h2 class="page-section__title">My Batches</h2>
          <div class="page-section__divider"></div>
        </div>
      </div>
      <div class="container">
        <div class="batch-card-wrapper">
          <app-batch-card
            v-for="(item, index) in filterBatches"
            :key="index"
            :batch-data="item"
          ></app-batch-card>
        </div>
        <div class="batch-card-show-more">
          <button class="button button--outlined" @click="toggleShowMore">
            {{ this.showMore ? 'Show Less' : 'Show More' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppSearch from '@/components/app/AppSearch'
import AppBatchCard from '@/components/app/AppBatchCard'

export default {
  components: { AppBatchCard, AppSearch },
  data() {
    return {
      batches: [],
      showMore: true
    }
  },
  computed: {
    filterBatches() {
      if (this.showMore) {
        return this.batches
      }
      return this.batches.slice(0, 6)
    }
  },
  created() {
    fetch('api.json')
      .then((r) => r.json())
      .then((json) => {
        this.batches = json
      })
  },
  methods: {
    toggleShowMore() {
      this.showMore = !this.showMore
    }
  }
}
</script>
