(function() {
    // elements.envato.com audio grabber
    try {
        const hydrationData = JSON.parse(atob(window.INITIAL_HYDRATION_DATA));
        const m4aLink = hydrationData.page.data.data.item.sfxAudioSourceUrl.m4a;
        if (m4aLink) {
            console.log("Found .m4a link in page data:");
            console.log(m4aLink);
            return;
        }
    } catch (e) {
        // Fallback to DOM search if data object fails
    }

    // Fallback: Search the HTML for the audio source element
    const sourceElement = document.querySelector('source[src*=".m4a"]');
    if (sourceElement) {
        console.log("Found .m4a link in HTML:");
        console.log(sourceElement.src);
    } else {
        console.log("Could not find a .m4a link on this page.");
    }
})();