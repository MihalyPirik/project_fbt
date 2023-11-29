<template>
  <div class="container">
    <h1 class="display-5 text-center">Könyvek</h1>
    <div class="row">
      <div class="col-12 col-md-3" v-for="book in books">
        <div class="card">
          <img src="" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{book.Title}}</h5>
            <p class="card-text">
              Szerző: {{ book.Author }}
            </p>
            <p>
              Nyelv: {{ book.Language }}
            </p>
            <p>
              Ország: {{ book.Country }}
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import bookService from "../services/bookservice";

const books = ref();

bookService.getAllBook().then((res) => {
  books.value = res;
});
</script>

<style lang="scss" scoped></style>
