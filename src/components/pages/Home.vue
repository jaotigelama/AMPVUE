<template>

  <div @click="alerta()">Home</div>
  <div v-for="name in list" >{{name}}
    <span v-if="name=='joao'">Bom nome</span>
  </div>
  <ul>
    <li>
      <a href="/amp-valid"> AMP Valid </a>
    </li>
    <li>
      <a href="/not-amp-valid"> AMP Invalid </a>
    </li>
    <li>
      <a href="/amp-list"> AMP List </a>
    </li>
  </ul>
</template>

<script>
export default {
  setup(){
    const alerta= () => {
      alert("Funciona");
    }
    const list = ["joao", "maria"];
    return {list, alerta};
  }
}
</script>

<style>

</style>