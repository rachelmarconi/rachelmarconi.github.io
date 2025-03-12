<script>
  import data from "$data/portfolio_data.aml";
  import PortfolioItem from "./PortfolioItem.svelte";

  $inspect(data.all_work);
</script>

<div class="container">
  {#each data.all_work as { work_location, work_time, work_role, work_description, work_items }}
    {#if work_items}
      <div class="section">
        <h2>{work_role} | {work_location} | {work_time}</h2>
        <p>{work_description}</p>
        <div class="grid">
          {#each work_items as { work_item_title, work_item_date, work_item_link, work_item_description, work_item_image }}
            <PortfolioItem
              {work_item_title}
              {work_item_date}
              {work_item_link}
              {work_item_description}
              {work_item_image}
            />
          {/each}
        </div>
      </div>
    {/if}
  {/each}
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 60px;
    row-gap: 60px;
    @media screen and (max-width: 1000px) {
      grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 750px) {
      grid-template-columns: 1fr;
    }
  }
  .section {
    margin-top: 150px;
  }
</style>
