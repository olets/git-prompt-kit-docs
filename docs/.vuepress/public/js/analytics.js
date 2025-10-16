function addTrackingToNav() {
  const links = [
    {
      els: Array.from(
        document.querySelectorAll('.navbar-items a[aria-label="Changelog"]'),
      ),
      trackedEventId: "HLMCWOYS",
    },
    {
      els: Array.from(
        document.querySelectorAll('.navbar-items a[aria-label="License"]'),
      ),
      trackedEventId: "KNIBFW7J",
    },
    {
      els: Array.from(
        document.querySelectorAll('.navbar-items a[aria-label="HZQZRPQP"]'),
      ),
      trackedEventId: "UDQTYUYT",
    },
  ];

  for (const link of links) {
    link.els.forEach((el) =>
      el.setAttribute("data-track-event-id", link.trackedEventId),
    );
  }
}

function trackLinks() {
  const links = document.getElementsByTagName("a");

  for (const link of links) {
    const trackedEventId = link.getAttribute("data-track-event-id");

    if (!trackedEventId) {
      continue;
    }

    link.addEventListener("click", () => {
      window?.fathom?.trackGoal(trackedEventId, 0);
      window?.umami?.track(trackedEventId.substring(0, 50));
    });
  }
}

function trackSearch() {
  const containerEls = document.getElementsByClassName("DocSearch-Container");
  const hitEls = document.getElementsByClassName("DocSearch-Hit");
  const openAttribute = "data-docsearch-container-open";

  function watchContainerEls() {
    /**
     * if was open and is open, do nothing
     * if was open and is closed, remove attribute
     * if was closed and is open, add attribute
     */

    const wasOpen = document.documentElement.hasAttribute(openAttribute);
    const isOpen = containerEls.length > 0;

    if (wasOpen) {
      if (!isOpen) {
        // closed
        document.documentElement.removeAttribute(openAttribute);
        window?.fathom?.trackGoal("CSSW2VC0", 0);
        window?.umami?.track("Close search dialog");
      }

      return;
    }

    if (!isOpen) {
      return;
    }

    // opened
    document.documentElement.setAttribute(openAttribute, "");
    window?.fathom?.trackGoal("PMIFXTJB", 0);
    window?.umami?.track("Open search dialog");
  }

  function watchHitEls() {
    for (const hitEl of hitEls) {
      // const text = hitEl.querySelector('.DocSearch-Hit-title').innerText || ''

      hitEl.querySelector("a").addEventListener("click", () => {
        document.documentElement.removeAttribute(openAttribute);

        window?.fathom?.trackGoal("VEDZHEVX", 0);
        window?.umami?.track("Click search dialog hit");
      });
    }
  }

  const observer = new MutationObserver(() => {
    watchContainerEls();
    watchHitEls();
  });

  observer.observe(document, { childList: true, subtree: true });
}

// "if not dev mode"
if (window?.fathom?.trackGoal) {
  addTrackingToNav();
  trackLinks();
  trackSearch();
}
