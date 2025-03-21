<script>
  import { base } from "$app/paths";
  import GoIcon from "./GoIcon.svelte";
</script>

<div id="top">
  <div id="banner">
    <a id="banner-name" href="{base}/"><h2>Rachel Marconi</h2></a>
  </div>
  <div id="menu-bar">
    <a class="menu-item" href="{base}/" id="menu-first">Home</a>
    <a class="menu-item" href="#portfolio">Portfolio</a>
    <a
      class="menu-item"
      href="https://www.linkedin.com/in/rachel-marconi-a72258118/"
      target="_blank">LinkedIn <GoIcon /></a
    >
    <a class="menu-item" href="https://github.com/rachelmarconi" target="_blank"
      >GitHub <GoIcon /></a
    >

    <a class="menu-item" href="https://twitter.com/arobotwriting" target="_blank"
      >Twitter <GoIcon /></a
    >
  </div>
</div>

<style>
  #top {
    width: 100%;
    position: sticky;
    z-index: 3;
    top: 0;
  }

  #banner {
    background-color: var(--color-ketchup);
    height: 50px;
    padding-top: 8px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  #banner-name,
  #banner-name > h2 {
    font-size: 36px;
    line-height: 1em;
    margin: 0;
    color: white;
    outline: 0px solid var(--color-pumpkin);
    border: none;
    &:focus-visible {
      outline: 3px solid var(--color-pumpkin);
    }
  }

  #menu-bar {
    width: 100%;
    background-color: var(--color-ketchup);
    height: 35px;
    display: flex;
    flex-direction: row;
    gap: 5%;
    justify-content: center;
    align-items: center;
  }

  .menu-item {
    border-bottom: solid 1px var(--color-pumpkin);
    padding: 7px 15px;
    transition: 300ms ease-in-out;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 7px;
    height: 24px;
    color: white;
    outline: 0px solid var(--color-pumpkin);
    &:hover,
    &:focus-visible {
      background-color: var(--color-coral);
      outline: 3px solid var(--color-pumpkin);
      color: black !important;
      /* border-bottom: solid 2px white !important; green */
    }
  }

  #menu-first {
    margin-left: 5px;
  }

  @media screen and (max-width: 620px) {
    #menu-bar {
      height: fit-content;
      flex-wrap: wrap;
    }
  }
</style>
