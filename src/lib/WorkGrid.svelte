<script>
  import data from "$data/portfolio_data.aml";
  import { slide } from "svelte/transition";
  import IconPlusMinus from "./IconPlusMinus.svelte";
  import PortfolioItem from "./PortfolioItem.svelte";

  let openSectionID = $state(0);
  let isSectionOpen = $state(new Array(data.all_work.length).fill(true));
  isSectionOpen[0] = false;
</script>

<div class="container">
  <h1 id="portfolio">Portfolio</h1>
  <p>
    I'm skilled with Svelte, LayerCake, ArchieML, MapBox, Protomaps, DataWrapper, and ETL in R. I've
    stood as a project manager, I've built analytics capturing in GA, and I've built my team's
    component library in StoryBook. I've worked closely with designers and I've dreamt up my own
    pitches. Here's a selection of my products.
  </p>
  <br />
  {#each data.all_work as { work_location, work_time, work_role, work_description, work_items }, sectionID}
    {#if sectionID != data.all_work.length && sectionID != 0}
      <div class="section-break"></div>
    {/if}
    {#if work_items}
      <div class="section">
        <div class="icon">
          <IconPlusMinus
            bind:plusModeActivated={isSectionOpen[sectionID]}
            color={"var(--color-ketchup)"}
            color_outline={"var(--color-pumpkin)"}
            size={25}
            onClick={() => {
              isSectionOpen[isSectionOpen.indexOf(false)] = true;
              if (openSectionID != sectionID) isSectionOpen[sectionID] = false;
              openSectionID == sectionID ? (openSectionID = -1) : (openSectionID = sectionID);
            }}
          />
        </div>

        <h2>
          {work_role}
          {work_role ? "|" : ""}
          {work_location}
        </h2>
        <h3>{work_time}</h3>

        <p>{work_description}</p>
        <br /><br />
        {#if openSectionID == sectionID}
          <div class="grid" transition:slide={{ duration: 400 }}>
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
        {/if}
      </div>
    {/if}
  {/each}
</div>

<style>
  .section {
    position: relative;
    margin-bottom: 20px;
  }
  .section-break {
    padding-top: 50px;
    border-top: 1px solid var(--color-forest-green);
  }
  .icon {
    position: absolute;
    left: -35px;
    top: 2px;
    height: 30px;
    width: 30px;
  }
  .grid {
    display: grid;
    padding: 3px;
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

  h1 {
    margin-top: 230px;
    padding-top: 110px;
    @media screen and (max-width: 510px) {
      padding-top: 140px;
    }
  }
</style>
