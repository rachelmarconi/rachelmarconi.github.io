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
        <h1>Hello! I'm Rachel, an interactives designer and developer.</h1>
        <p>
          I chew on complex problems. I make data human-legible and local-relatable. I love to learn
          new things and stretch the limits of what's doable.
        </p>
        <p>
          Most recently, I built interactive visuals for the Urban Institute, a nonprofit in the
          policy research space. I worked on large data explorers and dashboards on teams with
          writers and designers, mid-sized rapid response features on a tight budget and timetable,
          and small, one-off charts and tables in Datawrapper for a quick-learning blog team.
        </p>
        <p>
          I got my start as a city council reporter with a computer engineering degree in rural
          Pennsylvania, then got a master's in journalism with a focus in data and web development,
          simultaneously covering health, business, and local life in Maryland. I made interactive
          experiences at USATODAY out of grad school before two years working with Svelte 4 and 5 at
          Urban.
        </p>
        <p>
          I'm eager to dive into important work building ways for folk to understand the issues
          around them. I'm invested in humans. And the work is worth it.
        </p>

        <p></p>
        <h2>It's great to meet you!</h2>
      </div>

      <div class="links">
        <h3 class="bumped">Quick look at my work</h3>
        <div id="body-best-links">
          <a
            class="work-sample-box"
            href="https://www.urban.org/research/publication/what-financial-risk-nonprofits-losing-government-grants"
            target="_blank"
            >What Is the Financial Risk of Nonprofits Losing Government Grants?
          </a>
          <a
            class="work-sample-box"
            href="https://apps.urban.org/features/medical-debt-over-time/"
            target="_blank">The Changing Medical Debt Landscape in the United States</a
          >
          <a
            class="work-sample-box"
            href="https://housingmatters.urban.org/feature/school-housing-partnership-desegregate-communities"
            target="_blank"
            >How School Officials and Housing Developers Can Partner to Desegregate Communities</a
          >
        </div>
        <br />
        <h3 class="bumped">Want to work with me? Get in touch</h3>
        <p class="bumped">Email me at RachelMarconi256 at gmail dot com</p>
      </div>
    </div>
    <WorkGrid />
  </div>
</main>

<style>
  .hello {
    display: flex;
    margin: 50px 0;
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
