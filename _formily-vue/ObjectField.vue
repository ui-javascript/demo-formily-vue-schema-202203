<template>
  <FormProvider :form="form">
    <ObjectField name="object">
      <template #default="{ field }">
        <div
          v-for="key in Object.keys(field.value || {})"
          :key="key"
          :style="{ marginBottom: '10px' }"
        >
          <Space>
            <Field :name="key" :component="[Input, { placeholder: key }]" />
            <Button @click="field.removeProperty(key)"> Remove </Button>
          </Space>
        </div>
        <Space>
          <Field
            name="propertyName"
            basePath=""
            required
            :component="[Input, { placeholder: 'Property Name' }]"
          />
          <Button @click="addPropertyToField(field)"> Add </Button>
        </Space>
      </template>
    </ObjectField>
  </FormProvider>
</template>

<script setup>
import { Input, Space, Button } from "ant-design-vue";
import { createForm } from "@formily/core";
import { FormProvider, ObjectField, Field } from "@formily/vue";

const form = createForm();

const addPropertyToField = (field) => {
  const name = form.values.propertyName;
  if (name && !form.existValuesIn(`object.${name}`)) {
    field.addProperty(name, "");
    form.deleteValuesIn("propertyName");
  }
}


</script>