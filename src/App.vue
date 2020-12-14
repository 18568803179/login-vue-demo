<template>
    <div id="app">
        
        <router-view />

    </div>
</template>


<script>
import screenfull from "screenfull";
// screen(){
//   screenfull.toggle()
// }
export default {
    methods: {},
};

</script>
<style lang="scss">
*{
    margin: 0;
    padding: 0;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 0;
    padding: 0;
}
</style>
