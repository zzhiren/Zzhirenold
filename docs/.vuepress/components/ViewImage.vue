<script>
export default {
  props: {
    imgUrl:String
  }
}
</script>
<template>
  <div class="view-image">
    <img :src="imgUrl" alt="查看大图">
  </div>
</template>
<style lang="stylus" scoped>
.view-image
  box-sizing border-box
  width 100%
  border 8px solid rgba(0,0,0,.1)
  cursor pointer
  .img
    width 100%!important
    height 100%!important
  .preview
    position sticky
    width 100%
    height 700px
    background red
    z-index 99999
    top 0
    left 0
    right 0
    bottom 0
</style>
