import React from 'react';

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full m-auto p-8 bg-white">
        <div className="flex justify-between w-full m-auto lg:w-1/2">
          <span className="text-lg">Made with ❤️ by <a href="https://squint.dev" target="_blank">SquintDev</a></span>
          <span className="text-lg"><a href="https://github.com/squintdev/flowstate" target="_blank">GitHub</a></span>
        </div>
    </div>
  );
};

export default Footer;
