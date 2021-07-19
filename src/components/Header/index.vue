<template>
  <header id="header">
		<slot></slot> <h1>{{title}}</h1>
	</header>
</template>

<script>
export default {
  name: 'Header',
  // 父子通信 动态更改顶部标题
  props: {
    title: {
      type: String,
      default: '宅男趴电影',
    }
  }
}
</script>

<style lang="scss" scoped>
#header{width:100%; height:50px; color: #fff; background: linear-gradient(to top, #ef32d9, #89fffd); position: relative;}
#header h1{ font-size: 18px; text-align: center; line-height: 50px; font-weight: normal; }
#header i{ position: absolute; left: 5px; top: 50%; margin-top: -13px; font-size: 26px;}
</style>
