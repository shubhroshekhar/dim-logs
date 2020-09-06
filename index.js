/* eslint-disable no-console */

const runMode = process.env.NODE_ENV;
const logMode = process.env.LOG_MODE;
let logging = true;

const prodRunModes = ['PROD', 'prod', 'PRODUCTION', 'production'];
const noLoggingModes = ['FALSE', 'false', 'NO', 'no', '0'];
const loggingModes = ['TRUE', 'true', 'YES', 'yes', '1'];


if (prodRunModes.indexOf(runMode) >= 0) {
  logging = false;
}

if (logMode) {
  if (noLoggingModes.indexOf(logMode) >= 0){
    logging = false;
  } else if (loggingModes.indexOf(logMode) >= 0) {
    logging = true;
  }
}

const consoleLog = (...params) => {
  if (logging) {
    console.log(...params);
  }
};

const consoleError = (...params) => {
  if (logging) {
    console.error(...params);
  }
};

const consoleDebug = (...params) => {
  if (logging) {
    console.debug(...params);
  }
};

const consoleAssert = (...params) => {
  if (logging) {
    console.assert(...params);
  }
};

const consoleDir = (...params) => {
  if (logging) {
    console.dir(...params);
  }
};


const consoleDirxml = (...params) => {
  if (logging) {
    console.dirxml(...params);
  }
};

const dimLog = (logMessage, style) => {
  if (logging) {
    let formatting = '';
    if (typeof style === 'string') {
      formatting = style;
    } else if (typeof style === 'object') {
      if (style.color) {
        formatting = `color: ${style.color}; `;
      }
      if (style.fontWeight) {
        formatting += `font-weight: ${style.fontWeight}; `;
      }
      if (style.fontSize) {
        let formattedForntSize = style.fontSize;
        if (typeof formattedForntSize === 'number') {
          formattedForntSize = `${formattedForntSize}px`;
        }
        formatting += `font-size: ${formattedForntSize}; `;
      }
      if (style.background) {
        formatting += `background: ${style.background}; `;
      }
      if (style.fontStyle) {
        formatting += `font-style: ${style.fontStyle}; `;
      }
    }
    console.log(`%c ${logMessage}`, formatting);
  }
};


export {
  consoleLog,
  consoleError,
  consoleDebug,
  consoleAssert,
  consoleDir,
  consoleDirxml,
  dimLog,
};
