<script>
  let {
    work_item_title,
    work_item_date,
    work_item_link,
    work_item_description,
    work_item_image = ""
  } = $props();
</script>

<a aria-label="Click to view {work_item_title}" class="item" href={work_item_link} target="_blank">
  {#if work_item_image}
    <div
      class="image"
      style={work_item_image ? "--image-url: url(images/" + work_item_image + ")" : ""}
    ></div>
  {/if}

  <h3>{work_item_title}</h3>
  <p class="date">{work_item_date}</p>
  <p>{work_item_description}</p>
</a>

<style>
  .item {
    border-radius: 15px;
    width: 100%;
    cursor: pointer;
    outline: 1px solid var(--color-pumpkin);
    overflow: hidden;
    transition: 250ms;
    background-color: transparent;
    height: fit-content !important;
    &:hover,
    &:focus-visible {
      outline: 3px solid var(--color-pumpkin);
      transform: translateY(-12px);
      @media (prefers-reduced-motion) {
        transform: none;
      }
    }
  }
  h3,
  p {
    padding: 0px 20px;
  }
  .date {
    color: var(--color-forest-green);
    margin: 5px 0 0 0;
    font-size: 14px;
  }

  .image {
    background-image: var(--image-url);
    background-size: cover;
    background-color: transparent;
    height: 230px;
    @media screen and (max-width: 450px) {
      display: none;
    }
  }
</style>
