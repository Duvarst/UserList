<template>
  <div class="search">
    <label for="inp">Search user:</label>
    <input type="text" id="inp" v-model="search" @input="entry" />
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      search: "",
    };
  },
  methods: {
    entry() {
      this.$emit("inputevent", this.search);
    },
  },
};
</script>
<style scoped>
.search {
  display: flex;
  flex-direction: column;
  margin: 20px 0px;
}
input[type="text"] {
  width: 99%;
  padding: 2px 2px;
}
</style>
