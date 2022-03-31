<template>
  <FormProvider :form="form">
    <SchemaField :schema="schema" /> 
  </FormProvider>
</template>

<script setup>
import { Input } from "ant-design-vue";
import { createForm } from "@formily/core";
import { FormProvider, createSchemaField } from "@formily/vue";

const { SchemaField } = createSchemaField({
  components: {
    Input,
  },
});

const form = createForm();

const schema = {
  type: "object",
  properties: {
    input: {
      type: "string",
      "x-component": "Input",
    },
  },
};
</script>