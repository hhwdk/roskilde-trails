'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">roskilde-trails documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-4b1377e6244533a2659f511595c434bf"' : 'data-target="#xs-components-links-module-AppModule-4b1377e6244533a2659f511595c434bf"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-4b1377e6244533a2659f511595c434bf"' :
                                            'id="xs-components-links-module-AppModule-4b1377e6244533a2659f511595c434bf"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BadgesPageModule.html" data-type="entity-link" >BadgesPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BadgesPageModule-15083ccc043dcbc079622a1b37f04a40"' : 'data-target="#xs-components-links-module-BadgesPageModule-15083ccc043dcbc079622a1b37f04a40"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BadgesPageModule-15083ccc043dcbc079622a1b37f04a40"' :
                                            'id="xs-components-links-module-BadgesPageModule-15083ccc043dcbc079622a1b37f04a40"' }>
                                            <li class="link">
                                                <a href="components/BadgesPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BadgesPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BadgesPageRoutingModule.html" data-type="entity-link" >BadgesPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ExplorePageModule.html" data-type="entity-link" >ExplorePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ExplorePageModule-cddf260bfdc20a9f414e2b53d24c21dd"' : 'data-target="#xs-components-links-module-ExplorePageModule-cddf260bfdc20a9f414e2b53d24c21dd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ExplorePageModule-cddf260bfdc20a9f414e2b53d24c21dd"' :
                                            'id="xs-components-links-module-ExplorePageModule-cddf260bfdc20a9f414e2b53d24c21dd"' }>
                                            <li class="link">
                                                <a href="components/ExplorePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExplorePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ExplorePageRoutingModule.html" data-type="entity-link" >ExplorePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/GalleryPageModule.html" data-type="entity-link" >GalleryPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-GalleryPageModule-30cf425584f927f52ade34f29edd7a73"' : 'data-target="#xs-components-links-module-GalleryPageModule-30cf425584f927f52ade34f29edd7a73"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-GalleryPageModule-30cf425584f927f52ade34f29edd7a73"' :
                                            'id="xs-components-links-module-GalleryPageModule-30cf425584f927f52ade34f29edd7a73"' }>
                                            <li class="link">
                                                <a href="components/GalleryPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GalleryPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/GalleryPageRoutingModule.html" data-type="entity-link" >GalleryPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomeComponentPageModule.html" data-type="entity-link" >HomeComponentPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeComponentPageModule-dfd1210ad9c94df661e762adb0b64fa5"' : 'data-target="#xs-components-links-module-HomeComponentPageModule-dfd1210ad9c94df661e762adb0b64fa5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeComponentPageModule-dfd1210ad9c94df661e762adb0b64fa5"' :
                                            'id="xs-components-links-module-HomeComponentPageModule-dfd1210ad9c94df661e762adb0b64fa5"' }>
                                            <li class="link">
                                                <a href="components/HomeComponentPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponentPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeComponentPageRoutingModule.html" data-type="entity-link" >HomeComponentPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageModule.html" data-type="entity-link" >HomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomePageModule-5d521c8f9c231def9683955e0b56b067"' : 'data-target="#xs-components-links-module-HomePageModule-5d521c8f9c231def9683955e0b56b067"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomePageModule-5d521c8f9c231def9683955e0b56b067"' :
                                            'id="xs-components-links-module-HomePageModule-5d521c8f9c231def9683955e0b56b067"' }>
                                            <li class="link">
                                                <a href="components/HomePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageRoutingModule.html" data-type="entity-link" >HomePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/IndexPageModule.html" data-type="entity-link" >IndexPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-IndexPageModule-c5e496b799c3eb2bcc5be59ad6aac1e7"' : 'data-target="#xs-components-links-module-IndexPageModule-c5e496b799c3eb2bcc5be59ad6aac1e7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-IndexPageModule-c5e496b799c3eb2bcc5be59ad6aac1e7"' :
                                            'id="xs-components-links-module-IndexPageModule-c5e496b799c3eb2bcc5be59ad6aac1e7"' }>
                                            <li class="link">
                                                <a href="components/IndexPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IndexPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/IndexPageRoutingModule.html" data-type="entity-link" >IndexPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LakePageModule.html" data-type="entity-link" >LakePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LakePageModule-951c56931004b7bf310110bd22cd8a1b"' : 'data-target="#xs-components-links-module-LakePageModule-951c56931004b7bf310110bd22cd8a1b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LakePageModule-951c56931004b7bf310110bd22cd8a1b"' :
                                            'id="xs-components-links-module-LakePageModule-951c56931004b7bf310110bd22cd8a1b"' }>
                                            <li class="link">
                                                <a href="components/LakePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LakePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LakePageRoutingModule.html" data-type="entity-link" >LakePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LoginPageModule.html" data-type="entity-link" >LoginPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginPageModule-3c45fc122de8fe48626e88c6b2f5bf35"' : 'data-target="#xs-components-links-module-LoginPageModule-3c45fc122de8fe48626e88c6b2f5bf35"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginPageModule-3c45fc122de8fe48626e88c6b2f5bf35"' :
                                            'id="xs-components-links-module-LoginPageModule-3c45fc122de8fe48626e88c6b2f5bf35"' }>
                                            <li class="link">
                                                <a href="components/LoginPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginPageRoutingModule.html" data-type="entity-link" >LoginPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/NaturePageModule.html" data-type="entity-link" >NaturePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NaturePageModule-75fd38e317bd6d977990de72b89aca69"' : 'data-target="#xs-components-links-module-NaturePageModule-75fd38e317bd6d977990de72b89aca69"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NaturePageModule-75fd38e317bd6d977990de72b89aca69"' :
                                            'id="xs-components-links-module-NaturePageModule-75fd38e317bd6d977990de72b89aca69"' }>
                                            <li class="link">
                                                <a href="components/NaturePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NaturePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/NaturePageRoutingModule.html" data-type="entity-link" >NaturePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProfilePageModule.html" data-type="entity-link" >ProfilePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProfilePageModule-eb052985e91e533393b85fd928df9659"' : 'data-target="#xs-components-links-module-ProfilePageModule-eb052985e91e533393b85fd928df9659"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProfilePageModule-eb052985e91e533393b85fd928df9659"' :
                                            'id="xs-components-links-module-ProfilePageModule-eb052985e91e533393b85fd928df9659"' }>
                                            <li class="link">
                                                <a href="components/ProfilePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfilePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProfilePageRoutingModule.html" data-type="entity-link" >ProfilePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TopRatedPageModule.html" data-type="entity-link" >TopRatedPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TopRatedPageModule-597db81652e9167680330e651c9e64b7"' : 'data-target="#xs-components-links-module-TopRatedPageModule-597db81652e9167680330e651c9e64b7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TopRatedPageModule-597db81652e9167680330e651c9e64b7"' :
                                            'id="xs-components-links-module-TopRatedPageModule-597db81652e9167680330e651c9e64b7"' }>
                                            <li class="link">
                                                <a href="components/TopRatedPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TopRatedPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TopRatedPageRoutingModule.html" data-type="entity-link" >TopRatedPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TrailDetailsPageModule.html" data-type="entity-link" >TrailDetailsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TrailDetailsPageModule-bc88b29fd79b5a7d539fe78c3a34912d"' : 'data-target="#xs-components-links-module-TrailDetailsPageModule-bc88b29fd79b5a7d539fe78c3a34912d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TrailDetailsPageModule-bc88b29fd79b5a7d539fe78c3a34912d"' :
                                            'id="xs-components-links-module-TrailDetailsPageModule-bc88b29fd79b5a7d539fe78c3a34912d"' }>
                                            <li class="link">
                                                <a href="components/TrailDetailsPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TrailDetailsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TrailDetailsPageRoutingModule.html" data-type="entity-link" >TrailDetailsPageRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link" >AppPage</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/PhotoService.html" data-type="entity-link" >PhotoService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/UserPhoto.html" data-type="entity-link" >UserPhoto</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});