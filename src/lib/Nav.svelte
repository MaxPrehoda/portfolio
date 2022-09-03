<script lang="ts">
  import { fade, fly } from "svelte/transition";
  let x;
  function scrollIntoView({ target }) {
    const el = document.querySelector(target.getAttribute("href"));
    if (!el) return;
    el.scrollIntoView({
      behavior: "smooth",
    });
  }
</script>

<svelte:window bind:innerWidth={x} />

<div
  id="navbar"
  class="bg-white border-b-2 border-base-300 backdrop-blur-md h-14 md:h-16"
  style="top:0px"
  in:fly={{ duration: 600 }}
  out:fade
>
  <li class="items-center flex pt-3 pl-4">
    <a href="/" class="navbar-brand pl-2 pr-4">
      <img src="../mlogo.png" alt="logo" class="w-12 md:w-[58px]" />
    </a>
    <a href="#home" class="nav-a" on:click|preventDefault={scrollIntoView}>
      Home
    </a>
    <a
      href="#about-me-scroll"
      class="nav-a pl-4"
      on:click|preventDefault={scrollIntoView}
    >
      About Me
    </a>
    <a
      href="#projects"
      class="nav-a pl-4"
      on:click|preventDefault={scrollIntoView}
    >
      Projects
    </a>
  </li>
</div>
