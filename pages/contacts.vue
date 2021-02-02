<template>
  <div class="wrapper">
    <div class="content">
      <div class="content__ins">
        <h2>{{ $t("contacts.title") }}</h2>
        <div class="grid">
          <div class="grid__col">
            <p>{{ $t("contacts.p1") }}</p>
            <p>
              {{ $t("contacts.p2") }}&nbsp;
              <a
                href="mailto:sales@advitam.com"
                target="_blank"
                rel="noopener noreferrer"
                title="sales@advitamwear.com"
              >
                sales@advitamwear.com
              </a>
            </p>
          </div>
          <div v-if="status" class="grid__col">
            <div class="grid__row input-grey">
              <input
                v-model="name"
                class="input-grey"
                type="text"
                name="name"
                :placeholder="$t('contacts.form-name')"
              >
              <input
                v-model="email"
                class="input-grey"
                type="email"
                name="email"
                :placeholder="$t('contacts.form-email')"
              >
            </div>
            <div class="grid__row input-grey">
              <input
                v-model="phone"
                class="input-grey"
                type="phone"
                :placeholder="$t('contacts.form-phone')"
                pattern="[0-9\-]*"
              >
            </div>
            <p class="help-block" />
            <div class="grid__row input-grey">
              <textarea
                v-model="message"
                class="input-grey"
                rows="6"
                name="message"
                :placeholder="$t('contacts.form-message')"
              />
            </div>
            <div class="grid__row">
              <input :value="$t('contacts.form-submit')" class="red-btn" type="submit" @click="sendMail">
            </div>
          </div>
          <div v-else>
            Письмо отправленно
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      email: '',
      phone: '',
      message: '',
      status: true
    }
  },
  methods: {
    sendMail () {
    }
  }
}
</script>
