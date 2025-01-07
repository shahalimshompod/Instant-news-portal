import React from "react";

const VideoModal = ({ closeModal, isModalOpen, selectedVideo }) => {
    return (
        <div>
            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="rounded-lg w-full max-w-3xl p-6 relative">
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-white bg-red-500 rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600"
                        >
                            &times;
                        </button>

                        {/* Video Player */}
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe
                                width="100%"
                                height="405px"
                                src="https://www.youtube.com/embed/3dBIC2GKVjE?si=KBhtuRm_38AOu3FL"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VideoModal;
