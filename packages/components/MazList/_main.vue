<template>
  <div
    class="maz-base-component maz-list"
    :class="{
      'maz-list--bordered': bordered,
      'maz-elevation': !noShadow,
      'maz-no-shadow': noShadow,
      'maz-is-dark': dark,
      'no-scroll': noScroll
    }"
  >
    <transition-group
      :name="transition ? `maz-flip-list` : null"
      tag="div"
    >
      <!-- Place `<MazListItem>` -->
      <slot />
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'MazList',
  props: {
    // active the transition animation
    transition: { type: Boolean, default: false },
    // remove the shadow effect behind the list
    noShadow: { type: Boolean, default: false },
    // set dark mode
    dark: { type: Boolean, default: false },
    // remove overflow css property & scroll
    noScroll: { type: Boolean, default: false },
    // Add border to list
    bordered: { type: Boolean, default: false }
  }
}
</script>
