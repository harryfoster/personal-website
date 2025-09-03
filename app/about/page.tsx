export default function About() {
  return (
    <div>
        <ul className="bg-white rounded-lg shadow-md p-6 space-y-4">
            <li className="text-lg font-semibold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer">About Me</li>
            <li className="text-lg font-semibold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer">Games</li>
            <li className="text-lg font-semibold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer">Music</li>
            <li className="text-lg font-semibold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer">Where I live</li>
        </ul>
    </div>
  );
}