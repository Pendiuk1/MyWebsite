<script setup>
import { openedBookIcon } from "@/global";
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="portfolio">
    <RouterLink to="/" class="link-home">
      <awesomeIcon :icon="openedBookIcon"></awesomeIcon>
      <p>HOME</p>
    </RouterLink>
  </div>
</template>

<style>
.portfolio {
  background: #111;
}

.link-home {
  position: fixed;
  top: 10px;
  text-align: center;
  right: auto;
  left: auto;
  background: #000;
  box-shadow: 0px -3px 3px rgba(253, 237, 191, 0.651);
  padding: 5px;

  font-size: 0.9rem;
  font-weight: 100;
  color: white;
  text-decoration: none;
  letter-spacing: 2px;
}

.fa-book-open {
  font-size: 1.1rem;
}

@media only screen and (any-hover) {
  .link-home:hover {
    animation: up 3s ease 2;
  }

  @keyframes up {
    0% {
      transform: translate(0, 0);
    }
    12% {
      transform: translate(0, -10px);
    }
    24% {
      transform: translate(0, 0);
    }
    36% {
      transform: translate(0, -10px);
    }
    48% {
      transform: translate(0, 0);
    }
  }
}
</style>
