import React from 'react';

const Footer = () => {
  return (
    <div className="fixed bottom-0 flex justify-evenly w-full m-auto p-8 bg-white">
        <span className="text-lg">Made with ❤️ by <a href="https://squint.dev" target="_blank">SquintDev</a></span>
        <span className="text-lg"><a href="https://github.com/squintdev/flowstate" target="_blank">GitHub</a></span>
    </div>
  );
};

export default Footer;
