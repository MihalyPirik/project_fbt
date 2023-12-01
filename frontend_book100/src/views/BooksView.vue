<template>
  <div class="container">
    <h1 class="display-5 text-center">Könyvek</h1>
    <div class="row">
      <div class="col-12 col-md-3 mb-2" v-for="book in books">
        <BookCard :book="book" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import bookService from "../services/bookservice";
import BookCard from "../components/BookCard.vue";

const books = ref();

bookService.getAllBook().then((res) => {
  books.value = res;
});
</script>

<style lang="scss" scoped></style>
