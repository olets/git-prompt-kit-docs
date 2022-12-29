<script>
export default {
  props: {
    store: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <p v-if="this.store.customizations" style="color: red">
    Modified from default
  </p>
  <p v-if="!this.store.customizations">Not modified from default</p>

  <button style="margin-top: 20px" @click="this.store.$reset">Reset</button>

  <form style="display: grid; gap: 8px">
    <table>
      <thead>
        <tr>
          <th>Option</th>
          <th>Default</th>
          <th>Type</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value, key) in this.store.options" :key="key">
          <td>
            <label :for="`field-${key}`">
              <code>{{ key }}</code>
            </label>
          </td>

          <td>{{ value.default }}</td>
          <td>{{ value.type }}</td>

          <td>
            <input
              :max="value.type === 'boolean' ? 1 : null"
              min="0"
              :placeholder="value.default"
              style="text-align: right; width: 100%"
              :type="value.type.includes('integer') ? 'number' : 'text'"
              :value="value.custom"
              @input="
                (event) => (this.store.options[key].custom = event.target.value)
              "
            />
          </td>
        </tr>
      </tbody>
    </table>
  </form>

  {{ this.store.customizations }}
</template>
