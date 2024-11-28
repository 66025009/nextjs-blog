import { CodeIcon, DesktopComputerIcon, DatabaseIcon } from '@heroicons/react/solid';

const Skills = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center mt-14">
      <div className="flex justify-center space-x-6 w-full">
        <div className="bg-gradient-to-r from-[#ffffff15] to-[#ffffff35] text-white p-6 rounded-md shadow-lg w-1/4 h-full relative overflow-visible transition-all duration-300">
          <div className="flex items-center mb-4">
            <CodeIcon className="h-6 w-6 text-white mr-3" />
            <h3 className="text-2xl font-bold text-white">Programming</h3>
          </div>

          <div className="mt-3 space-y-2">
            <div className="bg-gradient-to-r from-[#ffffff15] to-[#ffffff35] p-3 rounded-md transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
              <h4 className="text-lg text-white">JavaScript</h4>
            </div>
            <div className="bg-gradient-to-r from-[#ffffff15] to-[#ffffff35] p-3 rounded-md transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
              <h4 className="text-lg text-white">Python</h4>
            </div>
            <div className="bg-gradient-to-r from-[#ffffff15] to-[#ffffff35] p-3 rounded-md transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
              <h4 className="text-lg text-white">TypeScript</h4>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#ffffff15] to-[#ffffff35] text-white p-6 rounded-md shadow-lg w-1/4 h-full relative overflow-visible transition-all duration-300">
          <div className="flex items-center mb-4">
            <DesktopComputerIcon className="h-6 w-6 text-white mr-3" />
            <h3 className="text-2xl font-bold text-white">Frontend</h3>
          </div>

          <div className="mt-3 space-y-2">
            <div className="bg-gradient-to-r from-[#ffffff15] to-[#ffffff35] p-3 rounded-md transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
              <h4 className="text-lg text-white">React</h4>
            </div>
            <div className="bg-gradient-to-r from-[#ffffff15] to-[#ffffff35] p-3 rounded-md transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
              <h4 className="text-lg text-white">Vue.js</h4>
            </div>
            <div className="bg-gradient-to-r from-[#ffffff15] to-[#ffffff35] p-3 rounded-md transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
              <h4 className="text-lg text-white">Tailwind CSS</h4>
            </div>
          </div>
        </div>

        {/* Backend Section */}
        <div className="bg-gradient-to-r from-[#ffffff15] to-[#ffffff35] text-white p-6 rounded-md shadow-lg w-1/4 h-full relative overflow-visible transition-all duration-300">
          <div className="flex items-center mb-4">
            <DatabaseIcon className="h-6 w-6 text-white mr-3" />
            <h3 className="text-2xl font-bold text-white">Backend</h3>
          </div>

          {/* ช่องย่อยใน Backend */}
          <div className="mt-3 space-y-2">
            <div className="bg-gradient-to-r from-[#ffffff15] to-[#ffffff35] p-3 rounded-md transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
              <h4 className="text-lg text-white">php</h4>
            </div>
            <div className="bg-gradient-to-r from-[#ffffff15] to-[#ffffff35] p-3 rounded-md transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
              <h4 className="text-lg text-white">NestJS</h4>
            </div>
            <div className="bg-gradient-to-r from-[#ffffff15] to-[#ffffff35] p-3 rounded-md transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
              <h4 className="text-lg text-white">MySQL</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
