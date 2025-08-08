function UserProfile() {
  return (
    <div className="bg-gray-100 sm:p-4 md:p-8 max-w-xs md:max-w-sm mx-auto my-20 rounded-lg shadow-lg text-center">
      {/* sm:p-4 and md:p-8 added as required */}
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="w-24 h-24 md:w-36 md:h-36 rounded-full mx-auto"
      />
      <h1 className="text-lg md:text-xl text-blue-800 my-4">
        Banji Atoyebi
      </h1>
      <p className="text-sm md:text-base text-gray-600">
        Developer at OTC Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;
