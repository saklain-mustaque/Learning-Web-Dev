import saklainImg from '../assets/saklain_image.jpeg'


export default function Profile(){
    return <>
         <div className="flex flex-col items-center">
      <img
        src={saklainImg}
        alt="Profile"
        className="w-20 h-22 rounded-full border-1 border-white -mt-12 mb-4"
      />
      
      <div className="text-xl font-bold text-gray-800 mb-6">
        Saklain Mustaque
      </div>
    </div>
      
        <hr class="border-t border-gray-300 mb-4" />
      <div className="flex justify-between w-full">
        <div className="flex flex-col items-center">
          <span className="text-lg font-bold text-gray-800">80K</span>
          <span className="text-sm text-gray-600">Followers</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-lg font-bold text-gray-800">106K</span>
          <span className="text-sm text-gray-600">Likes</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-lg font-bold text-gray-800">1.5K</span>
          <span className="text-sm text-gray-600">Photos</span>
        </div>
      </div>
    </>
}