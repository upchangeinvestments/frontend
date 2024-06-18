import ImageGallery from "react-image-gallery";
import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css";


function PhotosSection({ data }) {
    const images = data.Images.map(item => ({
        original: item,
        thumbnail: item
    }));

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