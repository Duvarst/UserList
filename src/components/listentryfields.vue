<template>
  <div></div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("mainstore", { userinfo: "userinfodata" }),
  },
};
</script>
<style scoped></style>
