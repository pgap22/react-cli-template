const Welcome = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">¡Welcome to React with Tailwind CSS!</h1>
        <p className="text-gray-700">
          Tailwind CSS is a low -level CSS utility tool that allows you to create
          Personalized designs easily.
        </p>
        <p className="text-gray-700 mt-2">
          This is a simple welcome component created with Tailwind CSS.
        </p>
      </div>
    </div>
  );
};

export default Welcome;