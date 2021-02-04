<template>
  <ul v-if="value.length">
    <li
      v-for="(file, index) in value"
      :key="index"
      class="d-flex items-center mb-12 last-mb-0"
    >
      <ui-icon :name="getIcon(file)" class="text-primary mr-12" />

      <div class="col-auto text-ellipsis pr-12">
        {{ file.name }}
      </div>

      <ui-button color="error" static="xs" rounded @click="remove(index)">
        <ui-icon name="close" size="xs" />
      </ui-button>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    value: {
      type: Array,
      required: true,
    },
  },
  methods: {
    getIcon({ name }) {
      const ext = name.split('.').pop()
      const icons = {
        png: 'file-image',
        zip: 'file-zip',
      }

      return icons[ext] || 'file'
    },
    remove(index) {
      const files = this.value.filter((_, i) => i !== index)

      this.$emit('input', files)
    },
  },
}
</script>
