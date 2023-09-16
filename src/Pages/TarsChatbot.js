import React, { useEffect } from 'react';

const TarsChatbot = () => {
  useEffect(() => {
    // Insert the Tars chatbot integration code here
    (function () {
      var js,
        fs,
        d = document,
        id = 'tars-widget-script',
        b = 'https://tars-file-upload.s3.amazonaws.com/bulb/';

      if (!d.getElementById(id)) {
        js = d.createElement('script');
        js.id = id;
        js.type = 'text/javascript';
        js.src = b + 'js/widget.js';
        fs = d.getElementsByTagName('script')[0];
        fs.parentNode.insertBefore(js, fs);
      }
    })();

    window.tarsSettings = {
      convid: 'vU9xTx',
      href: 'https://chatbot.hellotars.com/conv/vU9xTx',
    };
  }, []);

  return <div id="tars-widget-container"></div>;
};

export default TarsChatbot;