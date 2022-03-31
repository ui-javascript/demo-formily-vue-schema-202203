<template>
  <FormProvider :form="form">
    <ArrayField name="array">
      <template #default="{ field }">
        <div
          v-for="(item, index) in field.value || []"
          :key="item.id"
          :style="{ marginBottom: '10px' }"
        >
          <Space>
            <Field :name="`${index}.value`" :component="[Input]" />
            <Button
              @click="
                () => {
                  field.remove(index);
                }
              "
            >
              Remove
            </Button>
            <Button
              @click="
                () => {
                  field.moveUp(index);
                }
              "
            >
              Move Up
            </Button>
            <Button
              @click="
                () => {
                  field.moveDown(index);
                }
              "
            >
              Move Down
            </Button>
          </Space>
        </div>
        <Button @click="() => field.push({ id: Date.now(), value: '' })">
          Add
        </Button>
      </template>
    </ArrayField>
  </FormProvider>
</template>

<script setup>
import { Input, Space, Button } from "ant-design-vue";
import { createForm } from "@formily/core";
import { FormProvider, ArrayField, Field } from "@formily/vue";

const form = createForm();
</script>