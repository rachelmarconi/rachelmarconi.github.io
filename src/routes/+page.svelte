<script>
  import Nav from "$lib/Nav.svelte";
  console.log("👋 Welcome to Rachel's website!");
</script>

<main>

  <Nav current_page="index"/>

  <div id="hero">
    <div id="hero-image">
      <img src ="images/headshot.jpg" width="100%" alt="headshot">
    </div>
    
    <div id="hero-text">
      <p><span id="hero-text_big">Rachel Marconi:</span><br>
      <span id="hero-text_small">a journalist developer</span></p>
    </div>
  </div>
  
  <div id="page-body" class="page-flex">
    <div id="body-bio">
      <h3>Hello!</h3>
      <p>I'm an eager programmer who loves chewing on complex problems, 
      but I'm also deeply interested in human stories. I dance along a spectrum from journalism to
      programming, sometimes as a full-time stringer and sometimes as purely a software developer.
      I've had the most fun in the middle: I've crafted deep-dive data stories, relying on R skills to bolster 
      my conclusions, and I've built web components for huge news networks, taking requests from editors. </p>

      <p>I love local news and empowering residents to take action and stay informed in their local
      communities. I also love to hike and am always looking for a new niche cafe!</p>
    </div>

    <div id="body-best-links">
      <h3>Top work samples:</h3>
      <a class="work-sample-box" href="https://www.urban.org/data-tools/does-snap-cover-cost-meal-your-county-2022" target="_blank">Does SNAP Cover the Cost of a Meal in Your County?</a>
      <a class="work-sample-box" href="https://www.urban.org/data-tools/mapping-neighborhoods-highest-risk-housing-instability-and-homelessness" target="_blank">Mapping Neighborhoods with the Highest Risk of Housing Instability and Homelessness</a>
      <a class="work-sample-box" href="https://www.usatoday.com/in-depth/news/investigations/2022/11/16/crumbling-dams-rising-rain-flood-weather-simulation-oklahoma-city/10662580002/" target="_blank">What happens if a dam fails? An inside look at one city’s nightmare scenario</a>
    </div>
  </div>
  
</main>

<style>

#hero{
	height: 100vh;
	display: grid;
	grid-template-columns: .5fr 1fr 2fr .5fr;
	grid-template-rows: repeat(3, 1fr);
	gap: 20px;
	background-color: #1b3a05;
}

#hero-image{
	grid-row: 2;
	grid-column: 2;
	width: 100%;
	margin: auto 0;
	padding-right: 20px;
	place-self: center;
	text-align: center;
}

#hero-image img{
	min-width: 100px;
	max-width: 400px;
	border: 5px white solid;
	border-radius: 50%;
	
}

#hero-text{
	color: white;
	grid-row: 2;
	grid-column: 3;
	align-self: center;
	margin-left: 20px;
}

#hero-text_big{
	font-size: 4em;
}

#hero-text_small{
	font-size: 3em;
}

#body-image img{
	border-radius: 50%;
	max-width: 300px;
}

#body-bio{
	flex: 1;
	width: 100%;
	margin: auto 0;
	padding: 0px 20px;
	border-style: solid;
	border-width: 0px 1px;
	border-color: #3A6905; /*green*/
	max-width: 350px;
}


#body-best-links{
	flex: 1;
	width: 100%;
	margin: auto 0;
	padding-left: 20px;
	max-width: 350px;
}

.work-sample-box{
	display: inline-block;
	outline: 1px black solid;
	padding: 10px;
	width: 100%;
	margin: 5px 0px;
	text-align: center;
}

.work-sample-box:hover, .work-sample-box:focus{
	background-color: #6dbf83; /*green*/
	transition: ease 300ms;
}
</style>
