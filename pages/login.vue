<script lang="ts" setup>
const user = ref({
  username: '',
  password: '',
});

const login = async () => {};
</script>

<template>
  <div>
    <div class="title">
      <h2 class="font-semibold text-xl">Login</h2>
    </div>
    <div class="flex flex-col">
      <label for="uname"><b>Username</b></label>
      <input
        v-model="user.username"
        type="text"
        class="m-2 bg-white border-none p-2"
        placeholder="Enter Username"
        name="uname"
        required
      />

      <label for="psw"><b>Password</b></label>
      <input
        v-model="user.password"
        type="password"
        class="m-2 bg-white border-none p-2"
        placeholder="Enter Password"
        name="psw"
        required
      />

      <button @click.prevent="login" class="btn">Login</button>
    </div>
  </div>
</template>
