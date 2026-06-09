
import React from "react";
import {
    YMap,
    YMapComponentsProvider,
    YMapDefaultSchemeLayer,
    YMapDefaultFeaturesLayer,
    YMapListener,
    YMapFeature,
    YMapCollection,
    YMapControls,
    YMapGeolocationControl,
    YMapZoomControl,
    YMapHint,
    YMapDefaultMarker,
    YMapContainer,
    YMapControlButton,
    YMapHintContext,
    YMapMarker,
    YMapClusterer,
} from "ymap3-components";

function YandexMap() {
    console.log('maps')

    const location = { center: [37.95, 55.65], zoom: 10 };
    return (

        <YMapComponentsProvider apiKey={`af0cf3f9-3af4-4841-935b-2f8852865a8d`} lang="en_EN">
            <YMap
                key="map"
                location={location}
                mode="vector"
                theme="dark"
            >
                <YMapDefaultSchemeLayer />
                <YMapDefaultFeaturesLayer />
                {/* <YMapListener onUpdate={onUpdate} /> */}
                <YMapDefaultMarker coordinates={location.center} />
                {/* <YMapControls position="bottom">
                    <YMapZoomControl />
                </YMapControls>
                <YMapControls position="bottom left">
                    <YMapGeolocationControl />
                </YMapControls>
                <YMapHint hint={getHint}>
                    <MyHint />
                </YMapHint>
                <YMapCollection>
                    {features.map((feature) => (
                        <YMapFeature key={feature.id} {...feature} />
                    ))}
                </YMapCollection>
                <YMapControls position="top">
                    <YMapControlButton>
                        <div onClick={zoomIn} className="map-custom-button">
                            Custom zoom in
                        </div>
                    </YMapControlButton>
                    <YMapControlButton>
                        <div onClick={zoomOut} className="map-custom-button">
                            Custom zoom out
                        </div>
                    </YMapControlButton>
                </YMapControls>
                <YMapControls position="top left">
                    <YMapContainer>
                        <MapLocation location={location} />
                    </YMapContainer>
                </YMapControls> */}
            </YMap>
        </YMapComponentsProvider>
    );
}

export default YandexMap;