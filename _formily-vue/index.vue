<template>
  <FormProvider :form="form">
    <Field name="input" :component="[Input, { placeholder: '请输入' }]" />
  </FormProvider>
</template>

<script>
import { Input } from 'ant-design-vue'
import { createForm } from '@formily/core'
import { FormProvider, Field } from '@formily/vue'

export default {
  components: { 
    FormProvider, 
    Field,
    // Input,
  },
  data() {
    return {
      Input,
      form: createForm(),
    }
  },
}
</script>

