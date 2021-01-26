<template>
  <div>
    <div>index page</div>
    <ui-expansion>
      <template #trigger>
        <div>click me</div>
      </template>
      <template #content>
        <div>content</div>
      </template>
    </ui-expansion>
  </div>
</template>

<script>
export default {
  layout: 'public',
}
</script>
