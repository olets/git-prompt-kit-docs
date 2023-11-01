function searchResultsAreLive() {
  const els = document.getElementsByClassName("DocSearch-Hits");

  for (const el of els) {
    el.ariaLive = "polite";
  }
}

searchResultsAreLive();
