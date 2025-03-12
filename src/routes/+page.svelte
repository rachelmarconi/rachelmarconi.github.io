<script>
  import Nav from "$lib/Nav.svelte";
  import WorkGrid from "$lib/WorkGrid.svelte";
  console.log("👋 Welcome to Rachel's website!");
</script>

<main>
  <Nav current_page="index" />

  <div id="page-body">
    <div class="hello">
      <div id="body-bio">
        <h1>Hello!</h1>
        <p>
          I'm an eager programmer who loves chewing on complex problems, and I'm also deeply
          interested in human stories. I dance along a spectrum from journalism to programming,
          sometimes as a full-time stringer and sometimes as purely a software developer. I've had
          the most fun in the middle: I've crafted deep-dive data stories, relying on R skills to
          bolster my conclusions, and I've built web components for huge news networks, taking
          requests from editors.
        </p>

        <p>
          I love local news and empowering residents to take action and stay informed in their local
          communities. I also love to hike and am always looking for a new niche cafe!
        </p>
        <h2>It's great to meet you!</h2>
      </div>

      <div class="links">
        <h3 class="bumped">Quick look at my work</h3>
        <div id="body-best-links">
          <a
            class="work-sample-box"
            href="https://www.urban.org/data-tools/does-snap-cover-cost-meal-your-county-2022"
            target="_blank">Does SNAP Cover the Cost of a Meal in Your County?</a
          >
          <a
            class="work-sample-box"
            href="https://www.urban.org/data-tools/mapping-neighborhoods-highest-risk-housing-instability-and-homelessness"
            target="_blank"
            >Mapping Neighborhoods with the Highest Risk of Housing Instability and Homelessness</a
          >
          <a
            class="work-sample-box"
            href="https://www.usatoday.com/in-depth/news/investigations/2022/11/16/crumbling-dams-rising-rain-flood-weather-simulation-oklahoma-city/10662580002/"
            target="_blank"
            >What happens if a dam fails? An inside look at one city’s nightmare scenario</a
          >
        </div>
      </div>
    </div>
    <WorkGrid />
  </div>
</main>

<style>
  .hello {
    display: flex;
    height: 60vh;
    margin: 250px 0;
    gap: 60px;
    @media screen and (max-width: 800px) {
      flex-direction: column;
      gap: 0px;
    }
  }
  #body-bio {
    flex: 1;
  }
  .bumped {
    margin-left: 20px;
    @media screen and (max-width: 800px) {
      margin-left: 0px;
    }
  }
  .links {
    flex: 1;
    margin-top: 60px;
  }

  #body-best-links {
    display: flex;
    flex-direction: column;
    gap: 20px;
    /* @media screen and (max-width: 800px) {
      gap: 0px;
    } */
  }

  .work-sample-box {
    padding: 10px 20px;
    flex: 1;
    outline: 0px solid var(--color-pumpkin);
  }

  .work-sample-box:hover,
  .work-sample-box:focus-visible {
    outline: 3px solid var(--color-pumpkin);
    transition: ease 250ms;
  }

  @media only screen and (max-width: 760px) {
    #page-body {
      flex-direction: column;
    }
    #body-bio {
      border-width: 1px 0px;
      padding: 20px 0px;
    }
    #body-best-links {
      padding-top: 20px;
      padding-left: 0px;
    }
  }
</style>
