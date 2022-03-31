<template>
  <FormProvider :form="form">
    <Space>
      <VoidField name="layout">
        <Field name="input" :component="[Input]" />
      </VoidField>
      <FormConsumer>
        <template #default="{ form }">
          <Space>
            <Button
              @click="
                () => {
                  form
                    .query('layout')
                    .take()
                    .setState((state) => {
                      state.visible = !state.visible
                    })
                }
              "
            >
              {{ form.query('layout').get('visible') ? 'Hide' : 'Show' }}
            </Button>
            <div>{{ JSON.stringify(form.values, null, 2) }}</div>
          </Space>
        </template>
      </FormConsumer>
    </Space>
  </FormProvider>
</template>

<script setup>
import { Input, Space, Button } from 'ant-design-vue'
import { createForm } from '@formily/core'
import { FormProvider, Field, FormConsumer, VoidField } from '@formily/vue'

const form = createForm()
</script>