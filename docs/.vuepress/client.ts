import { defineClientConfig } from '@vuepress/client'

import GitPromptKit from './components/GitPromptKit.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('GitPromptKit', GitPromptKit)
  },
})