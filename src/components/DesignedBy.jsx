import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const DesignedBy = () => {
  return (
    <div className="py-4 bg-gradient-to-r from-neutral-900 to-neutral-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-4">
          <p className="text-center font-light">
            <span className="text-gray-400 text-sm">Designed By </span>
            <a
              href="https://github.com/atharvadhumal"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block text-white text-sm font-medium
                        hover:text-blue-400 transition-colors duration-300
                        after:content-[''] after:absolute after:w-0 after:h-[1px]
                        after:bg-blue-400 after:left-0 after:bottom-[-2px]
                        after:transition-all after:duration-300
                        hover:after:w-full"
            >
              Atharva Dhumal
            </a>
          </p>
          <div className="flex gap-3">
            <a
              href="https://github.com/atharvadhumal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/atharvad24"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignedBy;