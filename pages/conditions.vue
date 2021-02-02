<template>
  <div class="wrapper">
    <div class="content">
      <div class="content__ins">
        <h2>
          {{ $t('conditions.title1') }}
        </h2>
        <div class="text-block">
          <p>
            {{ $t('conditions.text1') }}
          </p>
          <p>
            {{ $t('conditions.text2') }}
          </p>
          <p>
            {{ $t('conditions.text3') }}
          </p>
          <p>
            {{ $t('conditions.text4') }}
          </p>
        </div>
        <h2>
          {{ $t('conditions.title2') }}
        </h2>
        <div class="text-block">
          <h3>
            {{ $t('conditions.sub1') }}
          </h3>
          <p>
            {{ $t('conditions.text1-1') }}
          </p>
          <p>
            {{ $t('conditions.text1-2') }}
          </p>
          <ul>
            <li v-for="(text, index) in $t(`conditions.li1`)" :key="index">
              {{ text }}
            </li>
          </ul>
          <h3>
            {{ $t('conditions.sub2') }}
          </h3>
          <p>
            {{ $t('conditions.text2-1') }}
          </p>
          <h3>
            1. {{ $t('conditions.sub3') }}
          </h3>
          <p>
            {{ $t('conditions.text3-1') }}
          </p>
          <h3>
            {{ $t('conditions.sub4') }}
          </h3>
          <p>
            {{ $t('conditions.text4-1') }}
          </p>
          <p>
            {{ $t('conditions.text4-2') }}
          </p>
          <p>
            {{ $t('conditions.text4-3') }}
          </p>
          <h3>
            {{ $t('conditions.sub5') }}
          </h3>
          <p>
            {{ $t('conditions.text5-1') }}
          </p>
          <ul>
            <li v-for="(text, index) in $t(`conditions.li5`)" :key="index">
              {{ text }}
            </li>
          </ul>
          <p>{{ $t('conditions.text5-2') }}</p>
          <p>{{ $t('conditions.text5-3') }}</p>
          <p>{{ $t('conditions.text5-4') }}</p>
          <p>{{ $t('conditions.text5-5') }}</p>
          <p>{{ $t('conditions.text5-6') }}</p>
          <p>{{ $t('conditions.text5-7') }}</p>
          <p>{{ $t('conditions.text5-8') }}</p>
          <p>{{ $t('conditions.text5-9') }}</p>
          <p>{{ $t('conditions.text5-10') }}</p>
          <p>{{ $t('conditions.text5-11') }}</p>
          <h3>{{ $t('conditions.sub6') }}</h3>
          <p>{{ $t('conditions.text6-1') }}</p>
          <p>{{ $t('conditions.text6-2') }}</p>
          <h3>{{ $t('conditions.sub7') }}</h3>
          <p>{{ $t('conditions.text7-1') }}</p>
          <p>{{ $t('conditions.text7-2') }}</p>
          <p>{{ $t('conditions.text7-3') }}</p>
          <p>{{ $t('conditions.text7-4') }}</p>
          <p>{{ $t('conditions.text7-5') }}</p>
          <h3>{{ $t('conditions.sub8') }}</h3>
          <p>{{ $t('conditions.text8-1') }}</p>
          <p>{{ $t('conditions.text8-2') }}</p>
          <p>{{ $t('conditions.text8-3') }}</p>
          <p>{{ $t('conditions.text8-4') }}</p>
          <p>{{ $t('conditions.text8-5') }}</p>
          <ul>
            <li v-for="(text, index) in $t(`conditions.li8`)" :key="index">
              {{ text }}
            </li>
          </ul>
          <h3>
            {{ $t('conditions.sub9') }}
          </h3>
          <p>
            {{ $t('conditions.text9-1') }}
          </p>
          <p>
            {{ $t('conditions.text9-2') }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>
