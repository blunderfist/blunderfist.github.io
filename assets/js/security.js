// assets/js/security.js
(function() {
    const urlParams = new URLSearchParams(window.location.search);
    const isPreview = urlParams.has('preview'); 
    const ref = document.referrer.toLowerCase();
    
    // Allowed keywords in the referrer
    const allowed = ["linkedin.com", "lnkd.in", "android", "linkedin"];
    const isFromLinkedIn = allowed.some(keyword => ref.includes(keyword));

    // If NOT from LinkedIn AND NOT a direct visit AND NOT using preview key
    if (!isFromLinkedIn && ref !== '' && !isPreview) {
        window.location.href = "https://www.google.com";
    }
})();
