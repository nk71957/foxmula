<template>
  <div class="batch-card">
    <div class="batch-card__title">{{ batchData.title }}</div>
    <div
      v-for="(item, index) in batchData.subject_list"
      :index="index"
      class="batch-card__subject"
    >
      <div class="batch-card__subject-icon">
        <i class="material-icons">{{ item.icon }}</i>
      </div>
      <div class="batch-card__subject-title">{{ item.title }}</div>
      <div class="batch-card__subject-action">
        <button class="icon-button icon-button--dense">
          <i class="material-icons icon-button__icon">{{ item.action_icon }}</i>
        </button>
      </div>
    </div>
    <div class="batch-card__meta-text">
      <div class="batch-card__meta-paragraph">Upcoming class</div>
      <div class="batch-card__meta-paragraph">
        {{ batchData.upcoming_class.date }},
        <span class="batch-card__meta-text-highlight">{{
          batchData.upcoming_class.time
        }}</span>
      </div>
    </div>
    <div class="batch-card__weeks">
      <div class="badge badge--round batch-card__week-active">Mo</div>
      <div class="badge badge--round batch-card__week-active">Tu</div>
      <div class="badge badge--round">We</div>
      <div class="badge badge--round">Th</div>
      <div class="badge badge--round batch-card__week-active">Fr</div>
      <div class="badge badge--round">Sa</div>
      <div class="badge badge--round">Su</div>
    </div>
    <div class="batch-card__notification">
      {{ batchData.notification_count }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    batchData: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>
