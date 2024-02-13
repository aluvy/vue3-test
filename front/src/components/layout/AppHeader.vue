<template>
  <header>
    <router-link to="/main">main</router-link>
    <router-link to="/test">test</router-link>

    {{ $store.getters.getCount }}
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
}
</script>