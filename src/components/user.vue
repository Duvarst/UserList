<template>
  <div class="block_user">
    <img :src="avatar" />
    <div class="user_info">
      <div class="block_name">
        <span>Name: {{ first_name }} {{ last_name }}</span>
      </div>
      <div class="email">
        <span>Email: {{ email }}</span>
      </div>
      <button class="btn" @click="delUser">
        <span>Delete</span>
      </button>
      <button class="btn" @click="userDetail">
        <span>Detail</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    avatar: String,
    first_name: String,
    last_name: String,
    email: String,
  },
  methods: {
    delUser() {
      this.$emit("clikBtnDel");
    },
    userDetail() {
      this.$emit("clickBtnDetail");
    },
  },
};
</script>
<style scoped>
.block_user {
  display: flex;
  margin: 15px 0px;
  border: 1px solid #000;
}
.block_name {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.btn {
  background: grey;
  margin: 10px 10px;
  color: #fff;
  padding: 5px 15px;
  text-align: center;
  border-radius: 3px;
  cursor: pointer;
}
img {
  width: 30%;
}
.user_info {
  margin: 10px;
}
</style>
