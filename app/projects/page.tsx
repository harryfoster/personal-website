export default function Projects() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">My Projects</h1>
      <ul className="bg-white rounded-lg shadow-md p-6 space-y-4">
        <li className="text-lg font-semibold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer">Project 1</li>
        <li className="text-lg font-semibold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer">Project 2</li>
        <li className="text-lg font-semibold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer">Project 3</li>
      </ul>
    </div>
  );
}