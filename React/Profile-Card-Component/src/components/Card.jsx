import Profile from "./Profile";

export default function Card() {
    return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-100 h-80 mx-auto">
      <div className="bg-cyan-400 h-30"></div>
      
      <div className="bg-white px-6 pb-6">
        <Profile />
      </div>
    </div>
  );

}