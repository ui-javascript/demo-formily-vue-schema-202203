import { createApp } from 'vue'
import DynamicForm from 'vue-dynamic-form-component'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const App = {
  template: `
<div>

<dynamic-form
  v-model="data"
  :descriptors="descriptors"
  >
</dynamic-form>

</div>
  `,
  data () {
    return {
      descriptors: {
        date: { type: 'date', label: 'date\'s label', required: false },
        number: { type: 'number', label: 'number\'s label', required: true, props: { placeholder: 'please input the number' } },
        string: { type: 'string', label: 'string\'s label', required: true, pattern: /^test$/g },
        url: { type: 'url', label: 'url\'s label', required: true, props: { placeholder: 'please input the url' } },
        email: { type: 'email', label: 'email\'s label', required: false },
        enum: {
          type: 'enum',
          label: 'enum\'s label',
          enum: ['value-1', 'value-2'],
          options: [
            { label: 'option-1', value: 'value-1', disabled: true },
            { label: 'option-2', value: 'value-2' }
          ]
        }
      },
      data: {}
    }
  },
  methods: {

  },
}



createApp(App)
  .use(ElementPlus)
  .use(DynamicForm)
  .mount('#app')

