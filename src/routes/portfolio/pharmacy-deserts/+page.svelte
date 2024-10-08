<script>
  import { base } from "$app/paths";

</script>

<main>

  <div id="page-body">
    <div id="desert-title">Pharmacy Deserts in Prince George's County, Maryland</div>
    <div id="desert-sub-title">Published Dec. 15, 2021, by Rachel Logan</div>
    
    <div class="desert-head">1  Introduction</div>
    <div class="desert-text">
      For this project, a rating system was crafted to analyze how accessible pharmacies 
      are to the residents of each census tract in Prince George’s County in Maryland. 
    </div>
    
    <div class="desert-head">1.1  Motivation</div>
    <div class="desert-text">
      On Oct. 1, 2021, a law came into effect <a href="{base}/portfolio/pharmacy-deserts#references" style="font-weight:bold;">[1]</a> in the state removing the size and type 
      ban for what over-the-county medication can be sold in vending machines – a ban that 
      has been in place since at least the 1950’s. Despite strong proponents for the law among 
      those in the Legislature, noting equity as a strong reason to allow vending machines 
      for OTC pharmaceuticals, the author could find no agency, whether local or state, defining 
      a plan to actually place any new vending machines. The hope is that this research will lay 
      the foundation for pinpointing the most effective locations for pharmacy vending machines 
      where the most load will be lifted.
    </div>
    
    <div class="desert-map">
      <iframe title="Pharmacies per census tract, Prince George's County" aria-label="Map" id="datawrapper-chart-tyUQU" src="https://datawrapper.dwcdn.net/tyUQU/2/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="757"></iframe>
      <script type="text/javascript">
        !function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
      </script>
    </div>
    
    <div class="desert-head">1.2  Background</div>
    <div class="desert-text">
      Food deserts have come up more in recent years, including research by both the United States 
      Department of Agriculture and countywide agencies, but the research on pharmacy or 
      healthcare deserts is much less built up. Two pharmacy vending machines exist at malls 
      in the state, but those had not expanded to include more OTC medications or sell them 
      in other than travel sizes by the time the author’s research was conducted. 
    </div>
    
    <div class="desert-head">1.3  Summary of Project</div>
    <div class="desert-text">
      Using pharmacy location data from an open-source website and census tract geometry from 
      R’s tidycensus package, average distances were found from census tract centroids to 
      the closest three pharmacies. This distance served as a base point for determining walking 
      and driving distances for the average resident in that census tract. No census tract in 
      the county, surprisingly, surpassed my flagging threshold of a 15-minute drive on average 
      to the closest three pharmacies, but many more were flagged for walking distance. As 
      expected, many of the flagged tracts were in the outskirts of Washington, D.C., but several 
      more were located in more spread-out areas of the county, far from the city. When 
      combined with several other demographic points, including number of households without 
      vehicles and the total population of a census tract, I identified 19 tracts of serious 
      inaccessibility and 73 tracts with moderate inaccessibility. 
    </div>
    
    <div class="desert-head">1.4  Specific Contributions</div>
    <div class="desert-text">
      The end product of this project is two-fold. A five-point accessibility rating system was 
      developed and can be applied to counties across the nation to find areas still in need of 
      accessibility efforts. Secondly, a map was produced reflecting the most in-need areas in 
      the county, which can be forwarded to community groups and state delegates as a stepping 
      stone for change. 
    </div>
    
    <div class="desert-head">2  Literature Review</div>
    <div class="desert-text">
      A 2016 Capital News Service collaboration project <a href="{base}/portfolio/pharmacy-deserts#references" style="font-weight:bold;">[3]</a> surveyed and reported on pharmacy 
      deserts in Baltimore, reviewing testimony from residents and highlighting just how bad the 
      problem is. This project takes it one step further by roping in pharmacy vending machines 
      as a solution.
      <br><br>
      A September 2021 report by GoodRx <a href="{base}/portfolio/pharmacy-deserts#references" style="font-weight:bold;">[2]</a> surveyed healthcare deserts nationwide last year as 
      the COVID-19 pandemic highlighted health disparities. While that report analyzed every county 
      in the country for hospital, emergency room and pharmacy deserts, among others, it erased 
      changes within counties. It also considered only driving time and not walking time, and used 
      25 mph as a standard for even congested regions like Baltimore – and erased a prevalent issue. 
      This project weighs walking time with household car ownership for a more accurate representation 
      of pharmacy inaccessibility.
    </div>
    
    <div class="desert-map">
      <iframe title="Percent population without vehicle, Prince George's County" aria-label="Map" id="datawrapper-chart-sBuEq" src="https://datawrapper.dwcdn.net/sBuEq/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="757"></iframe>
      <script type="text/javascript">
        !function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
      </script>
    </div>
    
    <div class="desert-head">3  Methodology</div>
    <div class="desert-text">
      This project combined both Excel manipulation and R coding to come up with distances.
    </div>
    
    <div class="desert-head">3.1  Data Description</div>
    <div class="desert-text">
      Pharmacy data had to be collected externally, while census geometry and 
      demographic data were available with API access.
    </div>
    
    <div class="desert-head">3.1.1  Collection and Curation</div>
    <div class="desert-text">
      Two pharmacy location datasets were tested. 
      <br><br>
      A County Office dataset collected all pharmacies in and around Prince George’s 
      County. A web scraper was written in Selenium to scrape pharmacy names and locations 
      across several pages of the online dataset. County Office states it is unaffiliated with 
      any government agency but consolidates information across several agencies in each locality.
    </div>
      
    <div class="desert-map">
      <iframe title="Total population, Prince George's County" aria-label="Map" id="datawrapper-chart-fJ0KN" src="https://datawrapper.dwcdn.net/fJ0KN/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="757"></iframe>
      <script type="text/javascript">
        !function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
      </script>
    </div>
    
    <div class="desert-text">
      The County Office data, however, was out of date and selective as to which pharmacies 
      were included. Addresses needed updates, or locations had been closed entirely. New 
      pharmacies that have popped up in the last few years were missing.
      <br><br>
      Another dataset was held by Statesman Journal, which is under the USA Today umbrella. 
      That source lists prescription pill order totals sent to each location in a county as 
      part of a Washington Post project on Automation of Reports ad Consolidated Orders System 
      (ARCOS) data researching the local and regional effects of the opioid crisis. 
      <br><br>
      The pharmacies listed in this dataset are only those receiving hydrocodone and oxycontin and 
      is from 2012 at its most recent, and although it was much more inclusive and accurate than 
      the County Office data, it was still not recent enough for this project.
      <br><br>
      Finally, the project moved to using SafeGraph data downloaded with a free academic account. 
      The main issue with this dataset is that it included all pharmacies in the country and had 
      to be refined in R to only not only include only those in Maryland, but those in just Prince 
      George’s County, both in towns and in census areas. This data, however, is accurate to 2021, 
      so it was worth dealing with the massive dataset.
      <br><br>
      Census data was also downloaded into R using the tidycensus API and 2010 boundaries for census 
      tracts, since that is the most recent year geometric data is available. Demographic data 
      is from Annual Census Survey 2018 data, still mapped to 2010 geometry. The project requires 
      total population, white population and percent population without vehicles data. 

    </div>
    
    <div class="desert-map">
      <iframe title="Percent population non-white, Prince George's County" aria-label="Map" id="datawrapper-chart-8InCN" src="https://datawrapper.dwcdn.net/8InCN/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="757"></iframe>
      <script type="text/javascript">
        !function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
      </script>
    </div>
    
    <div class="desert-head">3.1.2  Cleaning</div>
    <div class="desert-text">
      Pharmacy addresses had to be matched using the U.S. Census Bureau’s online geocoding tool 
      to find latitude and longitude data for each pharmacy. There was about a 70% success 
      rate matching addresses to coordinates.
      <br><br>
      Census tracts were run through the PostGIS spatial transform function st_centroid to find 
      center points, which were then unlisted to latitude and longitude columns.
      <br><br>
      White population per census tract was removed from total population to find the percent 
      of non-white residents in that tract.
      <br><br>
      To find distances from each pharmacy to each census tract centroid, the dataset was 
      transferred to Excel. The Haversine formula was applied – a distance formula for between 
      two geometric coordinates that accounts for the curvature of the earth. This produces a grid 
      of distances. The dataset was read back into R to find the top 3 closest distances for every 
      census tract, pharmacy independent, which were averaged together.
      <br><br>
      This distances dataset could then be converted into walking and driving speed. A detour factor 
      of 1.417 was applied, a factor used by the GoodRx report <a href="{base}/portfolio/pharmacy-deserts#references" style="font-weight:bold;">[2]</a> and confirmed as a reasonable 
      factor by United States standards to include corners and turns into routes. Walking speed was 
      estimated at 3 mph to account for elderly or disabled walkers in any seasonal condition. Driving 
      speed was set at 25 mph to account for mostly urban travel times, although this speed is less 
      likely the closer one gets to D.C. and also less likely as one drives down any state route 
      within the county.

    </div>
    
    <div class="desert-head">3.2  Solution Framework</div>
    <div class="desert-text">
      A five-point rating system was devised. 
      <br><br>
      The first point was driving distance. For households with vehicles available, 15 minutes 
      was chosen as a viable cut-off for reasonable time spent traveling to one of the nearest 
      three pharmacies.
      <br><br>
      The second point was walking distance. For households without access to a vehicle, 15 minutes 
      was also chosen as the threshold for reasonable walking time to one of the closest three pharmacies.
      <br><br>
      The third point was the sheer number of households in a census tract lacking access to a vehicle. 
      Sheer magnitude was chosen instead of percent population because a census tract with 10,000 
      residents may have only 5% of its population without vehicles, but that still equates to 500 
      households without vehicle access. The cut-off for a point in this area was 300 households.
      <br><br>
      The fourth point was total population, and a threshold of 4,000 people was chosen, the median 
      for census tract population in the county. The more individuals using a single pharmacy, the more 
      load there is on that pharmacy, and the more likely it is that there will be shortages or excess
      strain on pharmacists to complete orders. 
      <br><br>
      The fifth point was percent nonwhite population, and a threshold of 90% was chosen. Prince George’s
      County is a majority minority area, but some areas are more concentrated than others – and those areas
      should be a priority for officials to ameliorate healthcare inequities. 

    </div>
    
    <div class="desert-head">4  Experiment Result</div>
    <div class="desert-text">
      When the five-point rating system for pharmacy accessibility was applied over each census tract, 
      some individual results were surprising, although the overall results showed that there are problem 
      areas that can be alleviated. 
    </div>
    
    <div class="desert-map">
      <iframe title="Rating Prince George's County census tract pharmacy deserts" aria-label="Map" id="datawrapper-chart-zdRWG" src="https://datawrapper.dwcdn.net/zdRWG/3/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="931"></iframe>
      <script type="text/javascript">
        !function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
      </script>
    </div>
    
    <div class="desert-head">4.1  Experiment Setup</div>
    <div class="desert-text">
      Census tract GEOIDs were set beside the tract’s data lineup for each point of the rating system in Excel. 
      Then conditional formatting was applied to find cells with values over threshold values and 
      colored cells were counted manually. The resulting scores were mapped onto a Datawrapper map of 
      2010 census tracts.
    </div>
    
    <div class="desert-head">4.2  Results</div>
    <div class="desert-text">
      Driving time, surprisingly, didn’t catch a single point across the county. The longest drive 
      time was in the Aquasco area in the south east of the county, a large area that has over 1,500 
      residents and 97% of households having vehicle access. The average drive time in Aquasco to the 
      average three closest pharmacies was 14.7 minutes, just under the threshold. Many census tracts 
      came up with drives of 3 to 7 minute, on average. Regardless, the point stayed included in the 
      rating system in case it is applied in more rural areas.
      <br><br>
      Walk time, on the other hand, ranged from just 2 minutes in one tract to 16 or 17 minutes just 
      outside D.C. In some cases, it stretched to half an hour or longer. 

    </div>
    
    <div class="desert-head">4.3  Findings</div>
    <div class="desert-text">
      Nineteen census tracts out of 218 scored 4 out of 5 points, the worst possible in the county 
      for pharmacy accessibility. A total of 73 scored 3 or 4, a third of all census tracts, indicating 
      that many areas would benefit from increased pharmacy access.
      <br><br>
      Many of these areas were just outside of D.C, but many of those which scored 3 of 5 points 
      were in the central county, including Largo and areas of Upper Marlboro. 
      <br><br>
      Only 18 census tracts scored a perfect 0, in smatterings and tiny areas in Laurel, College 
      Park and near Camp Springs.

    </div>
    
    <div class="desert-head">5  Limitations</div>
    <div class="desert-text">
      Several points held this rating system back. For one, it disregards the existence of bus 
      and metro systems, which are used much more frequently in areas where households have less 
      accessibility to vehicles. The issue is that bus and metro lines are difficult to map to 
      coordinates, and it would be complex to condense distances between bus stops to calculate 
      new pharmacy accessibility. Time between bus stops would still have to be considered.
      <br><br>
      It would help this project if 2020 geometries could be used for new census tracts, with new 
      centroids. The shapes are different to account for a changing population. 
      <br><br>
      The project does not consider a map that can display both rating data and location landmarks 
      or outlines, making it difficult for non-county natives to understand what areas are pinpointed.

    </div>
    
    <div class="desert-head">6  Conclusion and Future Work</div>
    <div class="desert-text">
      Using this information on pharmacy deserts in the county, several paths can be taken 
      to invite change. The first is to contact community centers in the hardest-hit census 
      tracts and explain the good a pharmacy vending machine would do to bring OTC products 
      to their neighbors. The next would be to contact legislative representatives to request 
      grant money for initial costs of such a machine. The last would be to include local 
      journalists and tell the stories of those in these neighborhoods and report on how they 
      operate to get around pharmacy deserts.
    </div>
    
    <div class="desert-head" id="references">References</div>
    <div class="desert-text">
      [1] Logan, Rachel. (2021). More non-prescription meds are coming to vending machines. Capital News Service. <a style="font-weight:bold; color:#3A6905;" href="https://cnsmaryland.org/2021/10/19/more-non-prescription-meds-are-coming-to-vending-machines/" target="_blank">Link to work</a>
      <br><br>
      [2] Nguyen, A. (2021). Mapping Healthcare Deserts: 80% of the Country Lacks Adequate Access to Healthcare. GoodRx. <a style="font-weight:bold; color:#3A6905;" href="https://assets.ctfassets.net/4f3rgqwzdznj/6iU4VnrKD1eIDthc7i1hcl/2d42cfeb3e24e897f281eebfc7708eab/Healthcare_Deserts_Sept_2021.pdf" target="_blank">Download work</a>
      <br><br>
      [3] Snow, Jeremy, and Shefali Luthra. (2016). In West Baltimore, pharmacy deserts leave health care gaps. PBS. <a style="font-weight:bold; color:#3A6905;" href="https://www.pbs.org/newshour/health/in-west-baltimore-pharmacy-deserts-leave-health-care-gaps" target="_blank">Link to work</a>

    </div>
  </div>

  

</main>

<style>

</style>
