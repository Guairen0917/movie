<template>
  <div id="main">
    <Header title="宅男的自我修养" />
    <div id="content">
      <Login /> 
    </div>
    <TabBar />
  </div>
</template>

<script>
import Header from '@/components/Header'
import TabBar from '@/components/TabBar'

import Login from '@/components/Login'

export default {
  name: 'Mine',
  components: {
    Header,
    TabBar,
    Login
  }
}
</script>

<style lang="scss">

</style>