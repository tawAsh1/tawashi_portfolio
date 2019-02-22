(function() {

'use strict';

/* -^------------------^-
 * Parallax
 * ---------------------- */
// 現在のスクロール量
var scrollValue = 0;
// ウィンドウサイズ
var windowSize = {
    width:      window.innerWidth,
    height:     window.innerHeight,
}
// 実装するセクションと画像の設定
var parallax = new Object();
parallax.hero = {
    section:    document.getElementById( 'hero-section-parallax' ),
    image:      document.getElementById( 'hero-section-parallax-image' ),
}

window.addEventListener( 'scroll', function() {
    // スクロールされた場合
    scrollValue = document.scrollingElement.scrollTop;

    if( parallax.hero.section !== null ) {
        // parallax.hero
        if( scrollValue > parallax.hero.section.clientHeight ) {
            // HeroSectionの高さよりスクロール量が大きい
            parallax.hero.section.style.transform
                = "translate3d( 0, -" + parallax.hero.section.clientHeight + "px, 0 )";
            parallax.hero.section.style.webkitTransform
                = "translate3d( 0, -" + parallax.hero.section.clientHeight + "px, 0 )";
            parallax.hero.image.style.transform
                = "translate3d( 0, 0, 0 )";
            parallax.hero.image.style.webkitTransform
                = "translate3d( 0, 0, 0 )";
        }
        else {
            // HeroSectionの高さよりスクロール量が小さい
            parallax.hero.section.style.transform
                = "translate3d( 0, -" + scrollValue + "px, 0 )";
            parallax.hero.section.style.webkitTransform
                = "translate3d( 0, -" + scrollValue + "px, 0 )";
            parallax.hero.image.style.transform
                = "translate3d( 0, " + scrollValue / 2 + "px, 0 )";
            parallax.hero.image.style.webkitTransform
                = "translate3d( 0, " + scrollValue / 2 + "px, 0 )";
        }
    }
});

})();