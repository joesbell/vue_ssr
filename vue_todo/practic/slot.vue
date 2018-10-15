<template>
 <div class="page">
     <slot></slot>
     <div class="header">
         <slot name="header" ></slot>
     </div>
     <!-- <slot :slotn="slotnum"></slot> -->
 </div>
</template>

<script type="text/ecmascript-6">
export default {
 data() {
 return {
     slotnum:"456"
 }
 },
 components: {

 }
}
</script>

<style scoped lang="scss">
</style>

