<template>
  <div
    class="maz-base-component maz-loader maz-flex maz-flex-center"
    :class="{
      'maz-is-dark': dark
    }"
  >
    <div class="maz-loader__anim">
      <div /><div /><div /><div /><div /><div /><div /><div />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MazLoader',
  props: {
    dark: { type: Boolean, default: false }
  }
}
</script>
