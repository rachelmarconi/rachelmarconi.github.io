<script>
  let {
    work_item_title,
    work_item_date,
    work_item_link,
    work_item_description,
    work_item_image = ""
  } = $props();
</script>

{#if work_item_image}
  <div>
    <a
      class="item {work_item_image ? 'imaged' : ''}"
      style={work_item_image ? "--image-url: url(images/" + work_item_image + ")" : ""}
      href={work_item_link}
    >
    </a>
    <h3>{work_item_title}</h3>
    <p class="date">{work_item_date}</p>
    <p>{work_item_description}</p>
  </div>
{:else}
  <div>
    <a class="item tinted" href={work_item_link}>
      <h3>{work_item_title}</h3>
      <p class="date">{work_item_date}</p>
      <p>{work_item_description}</p>
    </a>
  </div>
{/if}

<style>
  .item {
    border-radius: 15px;
    height: 280px;
    width: 100%;
    cursor: pointer;
    display: inline-block;
    background-color: var(--color-coral);
    outline: 1px solid var(--color-pumpkin);
    border: none;
    &.tinted {
      background-color: transparent;
      display: block;
      height: fit-content !important;
      padding: 20px 0px;
      & > h3,
      & > p {
        padding: 0px 20px;
      }
    }

    &.imaged {
      background-image: var(--image-url);
      background-size: cover;
      background-color: rgba(0, 0, 0, 0.25);
    }
    &:hover,
    &:focus-visible {
      transition: 250ms;
      outline: 3px solid var(--color-pumpkin);
    }
  }
  .date {
    color: black;
    margin: 5px 0 0 0;
    font-size: 14px;
  }
</style>
