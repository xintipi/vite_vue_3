<template>
  <div class="login">
    <div class="container-tight py-6">
      <form class="card" @submit="onSubmit">
        <div class="card-body">
          <div class="text-center login__logo">
            <img alt="logo" :src="logo" />
          </div>
          <!-- email -->
          <div class="form-group">
            <Field
              v-slot="{ field, handleChange, errors }"
              v-model="form.username"
              :name="t('login.email_label')"
              rules="required|email"
            >
              <div class="form-content">
                <div class="form-input">
                  <a-input
                    :value="field.value"
                    :placeholder="t('login.email_placeholder')"
                    :class="errors.length ? 'input_border' : ''"
                    @change="handleChange"
                  />
                  <!-- Error message -->
                  <ErrorMessage v-slot="{ message }" as="span" :name="t('login.email_label')" class="errors">
                    {{ message }}
                  </ErrorMessage>
                </div>
              </div>
            </Field>
          </div>
          <!-- password -->
          <div class="form-group">
            <Field
              v-slot="{ field, handleChange, errors }"
              v-model="form.password"
              :name="t('login.password_label')"
              rules="required"
            >
              <div class="form-content">
                <div class="form-input">
                  <a-input
                    :value="field.value"
                    :placeholder="t('login.password_placeholder')"
                    :class="errors.length ? 'input_border' : ''"
                    @change="handleChange"
                  />
                  <!-- Error message -->
                  <ErrorMessage v-slot="{ message }" as="span" :name="t('login.password_label')" class="errors">
                    {{ message }}
                  </ErrorMessage>
                </div>
              </div>
            </Field>
          </div>
          <!-- Action Section Submit -->
          <div class="form-footer text-center">
            <a-button
              key="submit"
              type="primary"
              html-type="submit"
              :loading="loading"
              class="h-35"
              style="width: 150px"
            >
              ログイン
            </a-button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useForm } from 'vee-validate'

import logo from '@/assets/images/newphoria_logo_blue.svg'

interface Params {
  username: string
  password: string
}

export default defineComponent({
  name: 'Index',

  setup() {
    const { t } = useI18n()
    const { handleSubmit } = useForm()

    const form = ref<Params>({ username: '', password: '' })
    const loading = ref<boolean>(false)

    const onSubmit = handleSubmit(() => {
      let data = { ...form.value }

      loading.value = true
      console.log(data)
    })

    return {
      form,
      loading,
      t,
      logo,
      onSubmit
    }
  }
})
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  align-items: center;
  background-color: #354052;
  min-height: 100vh;

  .container-tight {
    max-width: 524px;
  }

  .card {
    border-radius: 10px;

    &-body {
      padding: 40px;

      .form-input {
        max-width: 350px;
        margin: 0 auto 20px;

        input {
          border-radius: 8px;
          border: 1px solid #dddddd;
          font-size: 13px;
          padding: 13px 15px;
          height: 39px;
          margin: 0 auto;
        }
      }

      .form-footer {
        margin-top: 2rem;
      }
    }
  }

  &__logo {
    margin-bottom: 50px;

    img {
      min-width: 200px;
    }
  }
}
</style>
