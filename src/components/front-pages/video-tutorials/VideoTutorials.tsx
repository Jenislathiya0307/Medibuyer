const VideoTutorials = () => {
  return (
    <>
      <h2>Video Tutorials</h2>
      <div className="grid grid-cols-12 gap-6">
        <div className="flex flex-col rounded-2xl overflow-hidden shadow-md bg-white dark:bg-dark border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 h-full">
            <div className="h-64 overflow-hidden">
                <img src={''} alt={''} className="object-top w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-dark dark:text-white mb-4"></h3>
                <ul className="list-disc pl-5 text-darklink text-[15px] leading-relaxed space-y-2">
                
                </ul>
            </div>
        </div>
      </div>
    </>
  );
};

export default VideoTutorials;
