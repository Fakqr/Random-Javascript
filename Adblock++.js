(function() {
    var adSelectors = [
        '[class*="advertisement"]',
        '[class*="ad-rectangle-bottom"]',
        '[class*="ad-rectangle-upper"]',
        '[id*="adRectangleBottom"]',
        '[id*="adRectangleUpper"]',
        '[class*="ads"]',
        '[class*="ad"]',
        '[class*="ytd-display-ad-renderer"]',
        '[class*="ads"]',
        '[class*="ad-container"]',
        '[class*="ad-wrapper"]',
        '[class*="ad-box"]',
        '[class*="ad-section"]',
        '[class*="video-ad"]',
        '[class*="native-ad"]',
        '[class*="footer-ad"]',
        '[class*="sidebar-ad"]',
        '[class*="notification-ad"]',
        '[class*="banner-ad"]',
        '[class*="content-ad"]',
        '[class*="widget-ad"]',
        '[class*="infeed-ad"]',
        '[class*="sticky-ad"]',
        '[class*="side-ad"]',
        '[class*="bottom-ad"]',
        '[class*="top-ad"]'
    ];

    adSelectors.forEach(function(selector) {
        var ads = document.querySelectorAll(selector);
        ads.forEach(function(ad) {
            ad.remove();
            console.log('Removed Ad:', ad);
        });
    });
    console.log('All relevant ads removed!');
})();
