<script>
    import { base } from "$app/paths";
    export let current_page = "index";

</script>

<div id="top">
    <div id="banner">
        <a id="banner-image" href="{base}/"><img src="{base}/images/headshot.jpg" width="100%" alt="headshot"></a>
        <a id="banner-name" href="{base}/">Rachel Marconi</a>
    </div>
    <div id="menu-bar">
        <a class="menu-item {current_page == 'index' ? 'current' : ''}" href="{base}/" id="menu-first">Home</a>
        <a class="menu-item {current_page == 'portfolio' ? 'current' : ''}" href="{base}/portfolio">Portfolio</a>
        <a class="menu-item {current_page == 'bio' ? 'current' : ''}" href="{base}/bio">Bio</a>
        <a class="menu-item" href="https://twitter.com/arobotwriting" target="_blank">Twitter</a>
        <a class="menu-item" href="https://github.com/rachelmarconi" target="_blank">GitHub</a>
        <a class="menu-item" href="https://www.linkedin.com/in/rachel-logan-a72258118/" target="_blank">LinkedIn</a>
    </div>
</div>

<style>

#top{
	width: 100%;
}

#banner{
	background-color: #1b3a05; /*green*/
	height: 50px;
    padding-top: 8px;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
}

#banner-name{
	font-size: 1.5em;
}

#banner-name {
	color: white;
}

#banner-image{
	width: 40px;
	margin-right: 10px;
}

#banner-image img{
	width: 100%;
	border-radius: 50%;
}

#menu-bar{
	width: 100%;
	background-color: #1b3a05; /*green*/
	height: 35px;
	display: flex;
	flex-direction: row;
	gap: 5%;
	justify-content: center;
	align-items: center;
}

.menu-item{
	border-bottom: solid 1px white; /*green*/
	padding: 7px 15px;
    transition: 300ms ease-in-out;
    cursor: pointer;
}

.menu-item{
	color: white;
}

.menu-item:focus, .menu-item:hover {
    background-color: #6dbf83;
    color: black !important;
	/* border-bottom: solid 2px white !important; green */
}

.menu-item.current {
    background-color: #6dbf83;
    color: black !important;
}

#menu-first{
	margin-left: 5px;
}

    
</style>