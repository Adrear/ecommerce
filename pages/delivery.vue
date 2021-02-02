<template>
  <div class="wrapper">
    <div class="content">
      <div class="content__ins">
        <h2>{{ $t("delivery.title") }}</h2>
        <div class="text-block">
          <h3>{{ $t("delivery.sub1") }}</h3>
          <p>{{ $t("delivery.text1-1") }}</p>
          <ul>
            <p>{{ $t("delivery.ul1") }}</p>
            <li v-for="(text, index) in $t(`delivery.li`)" :key="index">
              {{ text }}
            </li>
          </ul>
          <p>{{ $t("delivery.text1-2") }}</p>
          <h3>{{ $t("delivery.sub2") }}</h3>
          <p>{{ $t("delivery.text2") }}</p>
          <h3>{{ $t("delivery.sub3") }}</h3>
          <p>{{ $t("delivery.text3") }}</p>
          <h3>{{ $t("delivery.sub4") }}</h3>
          <p>{{ $t("delivery.text4") }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>
