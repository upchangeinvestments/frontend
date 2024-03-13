import ImageGallery from "react-image-gallery";
import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css";

const images = [
    {
        original: "https://www.indiabullsrealestate.com/wp-content/uploads/images/commercial-real-estate-projects.jpg",
        thumbnail: "https://www.indiabullsrealestate.com/wp-content/uploads/images/commercial-real-estate-projects.jpg",
    },
    {
        original: "https://www.indiabullsrealestate.com/wp-content/uploads/2016/12/indiabulls-neo-city-sez.jpg",
        thumbnail: "https://www.indiabullsrealestate.com/wp-content/uploads/2016/12/indiabulls-neo-city-sez.jpg",
    },
    {
        original: "https://www.indiabullsrealestate.com/wp-content/uploads/images/residential-real-estate-projects.jpg",
        thumbnail: "https://www.indiabullsrealestate.com/wp-content/uploads/images/residential-real-estate-projects.jpg",
    },
];

function PhotosSection() {
    return (
        <div className="bg-white/20 backdrop-blur-xl rounded-lg shadow-md shadow-black-400 p-6 flex items-center justify-start">
            <div className="hidden lg:block">
                <ImageGallery
                    className=""
                    items={images}
                    showThumbnails={true} // Hides default thumbnails
                    showPlayButton={true} // Hides play button
                    lazyLoad={true}
                    thumbnailPosition="right"
                    showBullets={true}
                />
            </div>
            <div className="lg:hidden">
                <ImageGallery
                    className=""
                    items={images}
                    showThumbnails={true} // Hides default thumbnails
                    showPlayButton={true} // Hides play button
                    lazyLoad={true}
                    thumbnailPosition="bottom"
                // showBullets={true}
                />
            </div>
        </div>
    )
}

export default PhotosSection