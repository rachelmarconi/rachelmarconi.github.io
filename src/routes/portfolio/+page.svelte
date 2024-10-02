<script>
  import Nav from "$lib/Nav.svelte";
</script>

<main>

  <Nav current_page="portfolio"/>
  
  <div id="page-body">

    <div class="work-head">The Urban Institute</div>
    <div class="work-container">
      <div class="work-time">January 2023</div>
      <div class="work-role">Senior Data Visualization Developer</div>
      <div class="work-description">
        I worked with Svelte and D3 to make interactive maps and charts explaining our policy center research to experts.
      </div>
      <div class="work-box">
        <a class="work-item" href="https://www.urban.org/data-tools/mapping-neighborhoods-highest-risk-housing-instability-and-homelessness">
          <div class="work-item-title">Debt in America: An Interactive Map</div>
          <div class="work-item-date">Published October 2023</div>
          <div class="work-extra">Updated a map tool project to include a new cut of young adult state debt data among other county-level debt data for all adults. </div>
        </a>
      
        <a class="work-item" href="https://www.urban.org/data-tools/does-snap-cover-cost-meal-your-county-2022" target="_blank">
          <div class="work-item-title">Does SNAP Cover the Cost of a Meal in Your County?</div>
          <div class="work-item-date">Published July 2023</div>
          <div class="work-extra">Built a map with D3 that shows the difference nationwide between SNAP prices and the average cost of a moderate meal in each county.</div>
        </a>
    
        <a class="work-item" href="https://www.urban.org/data-tools/mapping-neighborhoods-highest-risk-housing-instability-and-homelessness">
          <div class="work-item-title">Mapping Neighborhoods with the Highest Risk of Housing Instability and Homelessness</div>
          <div class="work-item-date">Published July 2023</div>
          <div class="work-extra">Built a map tool in MpaBox that highlights where in each state is most in need of housing aid.</div>
        </a>

        <a class="work-item" href="https://www.democratandchronicle.com/in-depth/news/2022/08/02/rochester-favorite-tree-stories-share-your-own/9944037002/" target="_blank">
          <div class="work-item-title">The Promise and Pitfalls of the Washington, DC, Region’s Strong Capital Flows</div>
          <div class="work-item-date">Published February 2023</div>
          <div class="work-extra">Put in an animated D3 tweak for a missing last data point in a line chart.</div>
        </a>
      </div>
    </div>

    <div class="work-head">USA TODAY Network's Storytelling Studio</div>
    <div class="work-container">
      <div class="work-time">June 2022 to December 2022</div>
      <div class="work-role">Software developer</div>
      <div class="work-description">
        I made scrolling narratives with maps and 3D models, crafted interactive maps with Mapbox
        and built components to enhance web presentations.
      </div>
      <div class="work-box">
        <a class="work-item" href="https://www.usatoday.com/in-depth/news/investigations/2022/11/16/crumbling-dams-rising-rain-flood-weather-simulation-oklahoma-city/10662580002/">
          <div class="work-item-title">What happens if a dam fails? An inside look at one city’s nightmare scenario</div>
          <div class="work-item-date">Published November 2022</div>
          <div class="work-extra">Made three scrolling narratives with Javascript, model-viewer and Mapbox.</div>
        </a>
      
        <a class="work-item" href="https://www.courier-journal.com/in-depth/news/investigations/2022/10/19/between-the-lines-kentucky-schools-throwing-money-controversial-reading-program/65405706007/" target="_blank">
          <div class="work-item-title">Kentucky keeps throwing money at a controversial reading program that may not even work</div>
          <div class="work-item-date">Published October 2022</div>
          <div class="work-extra">Analyzed and fact-checked data in R, made graphics in ggplot2, Flourish and Infogram.</div>
        </a>
    
        <a class="work-item" href="https://www.app.com/in-depth/entertainment/music/2022/09/20/bruce-springsteen-jersey-shore-sites-asbury-park-freehold/65380636007/" target="_blank">
          <div class="work-item-title">'My Hometown': Tour the Jersey Shore spots that Bruce Springsteen made famous</div>
          <div class="work-item-date">Published September 2022</div>
          <div class="work-extra">Built spreadsheet-powered navigation via interactive, scroll-activated Mapbox maps with colorful, responsive icons in JS.</div>
        </a>

        <a class="work-item" href="https://www.democratandchronicle.com/in-depth/news/2022/08/02/rochester-favorite-tree-stories-share-your-own/9944037002/" target="_blank">
          <div class="work-item-title">Read about Rochester’s most beloved trees and share your own story</div>
          <div class="work-item-date">Published August 2022</div>
          <div class="work-extra">Built chapter heading elements with Mapbox and scroll listeners that zoom into spreadsheet-powered target area when they enter the viewport.</div>
        </a>
      </div>
    </div>
  
    <div class="work-head">Personal Projects</div>
    <div class="work-container">
      <div class="work-description">
        I'm passionate about local news, individual stories and new technologies. Here are some projects I've completed
        just for fun, or to prove a point.
      </div>
      <div class="work-box">
        
        <a class="work-item" href="pharmacy-deserts.html">
          <div class="work-item-title">Prince George's County Pharmacy Deserts</div>
          <div class="work-item-date">Completed December 2021</div>
          <div class="work-extra">I categorized census tracts by their demographics and walking and driving distance to pharmacies.</div>
        </a>
        
        <a class="work-item" href="https://github.com/rachelll4/slack-bot" target="_blank">
          <div class="work-item-title">Sonic Bot</div>
          <div class="work-item-date">Crafted March 2022</div>
          <div class="work-extra">A very important Slack bot. Counts down to Sonic 2 release, using GitHub Actions.</div>
        </a>
      </div>
    </div>
  
    <div class="work-head">The Howard Center for Investigative Journalism</div>
    <div class="work-container">
      <div class="work-time">December 2020 to April 2022</div>
      <div class="work-role">Data Fellow</div>
      <div class="work-description">
        I worked on data, graphics and news applications for this highly collaborative newsroom. 
        The Howard Center is hosted through the University of Maryland. 
      </div>
      <div class="work-box">
        <a class="work-item" href="https://cnsmaryland.org/interactives/spring-2022/app/">
          <div class="work-item-title">Mega Millions: The Lottery on Your Block</div>
          <div class="work-item-date">Published July 2022</div>
          <div class="work-extra">Analyzed data, shared findings in draft webpages and crafted interactive maps with Leaflet and R.</div>
        </a>
      
        <a class="work-item" href="https://cnsmaryland.org/lynching/lynching_data/index.html" target="_blank">
          <div class="work-item-title">Printing Hate</div>
          <div class="work-item-date">Published December 2021</div>
          <div class="work-extra">Developed news application,<br>processed historical news clippings with Python, OCR, NLP</div>
        </a>
        
        <a class="work-item" href="https://cnsmaryland.org/category/essential-and-exposed/" target="_blank">
          <div class="work-item-title">Essential and Exposed</div>
          <div class="work-item-date">Published May 2021</div>
          <div class="work-extra">Organized and completed initial FOIAs<br>performed data analysis and data fact-check</div>
        </a>
      </div>
    </div>
    
    <div class="work-head">Capital News Service - Annapolis Bureau</div>
    <div class="work-container">
      <div class="work-time">September to December 2021</div>
      <div class="work-role">Health and Business Data Reporter</div>
      <div class="work-description">
        Capital News Service-Annapolis covers state news out of Maryland State House. 
        I live-tweeted Gov. Larry Hogan's pressers and the assembly's special sessions for daily stories,
        but I also worked out longer data stories with deeply human connections based on
        the odd press release or tip. This full-time, four-day-per-week wire service is run as a semester-long class
        through the University of Maryland.
      </div>
      <div class="work-box">
        <a class="work-item" href="https://cnsmaryland.org/2021/12/08/pandemic-financially-devastated-minority-led-nonprofits/ " target="_blank">
          <div class="work-item-title">Pandemic financially devestated minority-led nonprofits</div>
          <div class="work-item-date">Published Dec. 8, 2021</div>
          <div class="work-extra">Picked up by the AP</div>
        </a>
        
        <a class="work-item" href="https://cnsmaryland.org/2021/11/22/maryland-counties-vaccinate-youngest-schoolchildren/" target="_blank">
          <div class="work-item-title">Maryland counties vaccinate youngest schoolchildren</div>
          <div class="work-item-date">Published Nov. 19, 2021</div>
        </a>
        
        <a class="work-item" href="https://cnsmaryland.org/2021/11/03/new-virtual-reality-course-lowers-stress-at-recovery-centers/" target="_blank">
          <div class="work-item-title">New virtual reality course lowers stress at recovery centers</div>
          <div class="work-item-date">Published Nov. 3, 2021</div>
        </a>
        
        <a class="work-item" href="https://cnsmaryland.org/2021/10/29/annapolis-downtown-floods-as-high-water-expected-to-last-the-weekend/   " target="_blank">
          <div class="work-item-title">Annapolis downtown floods as high water expected to last the weekend</div>
          <div class="work-item-date">Published Oct. 29, 2021</div>
          <div class="work-extra">Highly collaborative, written as team of five.</div>
        </a>
        
        <a class="work-item" href="https://cnsmaryland.org/2021/10/27/new-immigrant-affairs-office-to-connect-resource-centers/ " target="_blank">
          <div class="work-item-title">New Immigrant Affairs office to connect resource centers</div>
          <div class="work-item-date">Published Oct. 27, 2021</div>
        </a>
        
        <a class="work-item" href="https://cnsmaryland.org/2021/10/19/more-non-prescription-meds-are-coming-to-vending-machines/ " target="_blank">
          <div class="work-item-title">More non-prescription meds are coming to vending machines</div>
          <div class="work-item-date">Published Oct. 19, 2021</div>
        </a>
        
        <a class="work-item" href="https://cnsmaryland.org/2021/09/30/cns-revenue-2021/ " target="_blank">
          <div class="work-item-title">State ends 2021 with surplus, but some Marylanders struggle</div>
          <div class="work-item-date">Published Sept. 30, 2021</div>
        </a>
        
        <a class="work-item" href="https://cnsmaryland.org/2021/09/23/robust-unique-vaccine-outreach-bears-fruit-for-state-grant/ " target="_blank">
          <div class="work-item-title">Robust, unique vaccine outreach bears fruit for state grant</div>
          <div class="work-item-date">Published Sept. 23, 2021</div>
        </a>
        
        <a class="work-item" href="https://cnsmaryland.org/2021/09/10/centuries-old-reprints-letter-on-display-in-annapolis/ " target="_blank">
          <div class="work-item-title">Centuries-old reprints on display in Annapolis</div>
          <div class="work-item-date">Published Sept. 10, 2021</div>
          <div class="work-extra">Picked up by the AP</div>
        </a>
      </div>
    </div>
    
    <div class="work-head">College Park Here & Now</div>
    <div class="work-container">
      <div class="work-time">June 2020 to September 2021</div>
      <div class="work-role">Staff Writer</div>
      <div class="work-description">
        I wrote human-focused stories, took photographs
        and delivered papers for this fledgling community newspaper.</div>
      <div class="work-box">
        <a class="work-item" href="https://streetcarsuburbs.news/paint-branch-proposal-may-upend-local-golf-experience/ " target="_blank">
          <div class="work-item-title">Paint Branch proposal may upend local golf experience </div>
          <div class="work-item-date">Published June 2021</div>
        </a>
        
        <a class="work-item" href="https://streetcarsuburbs.news/meet-college-parks-newest-congregation/ " target="_blank">
          <div class="work-item-title">Meet College Park’s newest congregation </div>
          <div class="work-item-date">Published May 2021</div>
        </a>
        
        <a class="work-item" href="https://streetcarsuburbs.news/vaccine-distribution-lags-even-as-distribution-sites-increase/ " target="_blank">
          <div class="work-item-title">Vaccine distribution lags, even as distribution sites increase</div>
          <div class="work-item-date">Published February 2021</div>
        </a>
        
        <a class="work-item" href="https://streetcarsuburbs.news/area-looks-to-streamline-vaccine-distribution/" target="_blank">
          <div class="work-item-title">Area looks to streamline vaccine distribution </div>
          <div class="work-item-date">Published April 2021</div>
        </a>
        
        <a class="work-item" href="https://streetcarsuburbs.news/despite-pandemic-good-neighbor-day-continues-to-serve/" target="_blank">
          <div class="work-item-title">Despite pandemic, Good Neighbor Day continues to serve</div>
          <div class="work-item-date">Published November 2020</div>
        </a>
        
        <a class="work-item" href="https://streetcarsuburbs.news/church-holds-petting-zoo-to-honor-jesus-birth/" target="_blank">
          <div class="work-item-title">Church holds petting zoo to honor Jesus’ birth </div>
          <div class="work-item-date">Published December 2020</div>
        </a>
        
        <a class="work-item" href="https://streetcarsuburbs.news/churches-find-ways-to-worship-and-serve-this-holiday-season/" target="_blank">
          <div class="work-item-title">Churches find ways to worship and serve this holiday season </div>
          <div class="work-item-date">Published December 2020</div>
        </a>
        
        <a class="work-item" href="https://streetcarsuburbs.news/city-signs-amicus-brief-supporting-daca/" target="_blank">
          <div class="work-item-title">City signs amicus brief supporting DACA </div>
          <div class="work-item-date">Published September 2020</div>
        </a>
      </div>
    </div>

    <div class="work-head">The Daily American / Our Town, Johnstown</div>
    <div class="work-container">
      <div class="work-time">May 2017 to October 2018</div>
      <div class="work-role">Stringer</div>
      <div class="work-description">
        I worked for both The Daily American (Somerset County, PA), and its offshoot paper Our Town, Johnstown (PA), 
        while I was in undergrad. I covered features and news on both daily and weekly deadlines. My stories ranged
        from covering city council financial audits of the worst-off metropolis in PA to covering summer fairs organized 
        by all the churches in a small town. See my complete authorship on the DA's webpage.
      </div>
      <div class="work-box">
        <a class="work-item" href="https://www.dailyamerican.com/search/?q=%22rachel%20logan%22&page=1 " target="_blank">
          <div class="work-item-title">All Daily American and Our Town coverage </div>
        </a>
      </div>
    </div>
    
    <div class="work-head">The Advocate</div>
    <div class="work-container">
      <div class="work-time">September 2015 to March 2019</div>
      <div class="work-role">Page editor, copy editor, staff writer</div>
      <div class="work-description">
        I worked for The Advocate, the student newspaper at Pitt-Johnstown, for all four years of my
        undergraduate program. I started as a copy editor, but quickly moved to Opinions Editor and qualified
        for staff writer. I served as News Editor and then Features Editor for a semester each, learning to cover
        student government meetings, police citations and construction articles. See my complete authorship on
        the Advocate's webpage.
      </div>
      <div class="work-box">
        <a class="work-item" href="https://upj-advocate.com/staff_name/rachel-logan/ " target="_blank">
          <div class="work-item-title">All Advocate coverage </div>
        </a>
      </div>
    </div>
    
  </div>
  

</main>

<style>

.work-container{
	padding-bottom: 140px;
  margin-left: 28px;
}

.work-head{
	font-size: 2em;
  background-color:#3A6905;
  padding: 8px 12px;
	margin-bottom: 10px;
  color:white;
  border-radius: 4px;
	border-bottom: solid 1px #3A6905; /*green*/
}

.work-time{
	display: inline-block;
	font-size: 1.25em;
}

.work-role{
	display: inline-block;
	padding-left: 15px;
	font-size: 1.25em;
}

.work-description{
	padding-top: 20px;
	font-size: 1em;
	padding-bottom: 20px;
}

.work-box{
	display: flex;
	flex-direction: row;
	justify-content: start;
	flex-wrap: wrap;
	gap: 20px;
}

.work-item{
	padding: 20px;
	max-width: 250px;
	outline: 1px solid black;
}

.work-item:hover, .work-item:focus {
	background-color: #1b3a05; /*green*/
	outline: 2px solid black;
	color: white;
	transition: ease .4s;
}

.work-item-title{
	font-size: 1.5em;
	text-align: center;
}

.work-item-date{
	text-align: center;
	font-size: 1em;
	padding: 10px 0px;
}

.work-extra{
	text-align: center;
	font-size: .75em;
}
</style>
