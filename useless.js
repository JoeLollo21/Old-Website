function uselessWebButton(button, popup) {
	var buttonElement = button
	var popupElement = popup
	var initialClick = false
	var randomRange = 7

	var sitesList = [
    "http://endless.horse/",
    "https://longdogechallenge.com/",
		"https://thatsthefinger.com/",
    "http://www.republiquedesmangues.fr/",
    "https://www.ihasabucket.com/",
    "https://binarypiano.com/",
    "http://eelslap.com/",
		"http://corndog.io/",
    "https://crouton.net/",
    "https://smashthewalls.com/",
		"http://doughnutkitten.com/",
    "http://www.staggeringbeauty.com/",
    "http://drawing.garden/",
    "https://theuselessweb.site/ducksarethebest.com/",
    "https://cursoreffects.com/",
    "http://www.koalastothemax.com/"
		"http://burymewithmymoney.com/",
		"http://www.partridgegetslucky.com/",
		"http://www.ismycomputeron.com/",
    "http://r33b.net/",
		"http://www.amialright.com/",
		"http://wowenwilsonquiz.com",
		"https://thepigeon.org/",
    "https://neal.fun/spend/",
    "https://neal.fun/who-was-alive/",
    "https://www.foxconn.com/en-us/",
    "https://www.tpusa.com/",
		"http://www.patience-is-a-virtue.org/",
		"http://pixelsfighting.com/",
		"http://isitwhite.com/",
		"http://corgiorgy.com/",
		"https://www.bouncingdvdlogo.com/",
    "https://www.jesusishitler.net/",
		"https://remoji.com/",
		"https://findtheinvisiblecow.com/",
    "https://www.cameronsworld.net/",
    "https://www.lingscars.com/",
    "https://www.art.yale.edu/",
    "http://www.syti.net/",
    "http://dicecollector.com/",
    "https://www.rrrgggbbb.com/",
    "https://www.omfgdogs.com/",
    "https://www.nyan.cat/",
    "https://jcw87.github.io/c2-sans-fight/",
    "http://www.themostamazingwebsiteontheinternet.com/",
    "https://www.yyyyyyy.info/",
    "https://www.arngren.net/"
	]

	var sites = null

	// Prepares and binds the button
	var init = function () {
		button.onclick = onButtonClick

		// Initial set sites
		sites = sitesList.slice()

		if (localStorage["currentSiteList"]) {
			// They have storage, filter out any not in the base list, that could be spam now
			var currentSites = JSON.parse(localStorage["currentSiteList"])
			var filteredSites = currentSites.filter(
				(site) => sitesList.indexOf(site) !== -1
			)
			if (filteredSites.length > 0) {
				sites = filteredSites
			}
		}
	}

	// Selects and removes the next website from the list
	var selectWebsite = function () {
		var site, range, index

		range = randomRange > sites.length ? sites.length : randomRange
		index = Math.floor(Math.random() * range)

		site = sites[index]
		sites.splice(index, 1)

		return site
	}

	var openSite = function (url) {
		window.open(url)
	}

	var onButtonClick = function () {
		if (window.gtag) {
			gtag("event", "click", { event_category: "button" })
		}

		if (initialClick === false) {
			// Change text from "TO A"
			document.getElementById("joint").innerHTML = "TO ANOTHER"
			initialClick = true
		}

		var url = selectWebsite()
		openSite(url)

		// User has visited ALL the sites... refresh the list.
		if (sites.length == 0) {
			sites = sitesList.slice()
		}

		localStorage["currentSiteList"] = JSON.stringify(sites)
	}

	init()
}

var uselessWebButton = new uselessWebButton(document.getElementById("button"))
;
