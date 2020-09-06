# what is this ?
An easy environment based console logging tool.

# Installation
`npm i dim-logs`

# How to Use

## set-up env
#### Default logging 
if environment variable __NODE_ENV__ is one of _['PROD', 'prod', 'PRODUCTION', 'production']_ logging will be disabled.

### Set custom log mode
You can override this by setting  `LOG_MODE = TRUE / FALSE`

## Logging

#### normal Logging

```
... 
import { consoleLog } from 'dim-logs'; // import
...
.
...
consoleLog('MY-LOGS'); // logging
...
```

#### styled Logging 😎

``` 
import { dimLog } from 'dim-logs';
.
.
.
dimLog('dim-log is easy', {
  color: 'green',
  background: 'skyblue',
  fontWeight: 'bold',
  fontSize: 50,
});

or //

dimLog('dim-log is easy', 'color: green; font-weight: bold;');
...
```

#### other console Logging methods

```

import { 
  consoleLog,
  consoleError,
  consoleDebug,
  consoleAssert,
  consoleDir,
  consoleDirxml,
  dimLog, 
} from 'dim-logs';

...
...
consoleLog('MY-LOGS');
consoleError('MY-ERROR');
consoleDebug('MY-DEBUG');
consoleAssert(false, 'MY-ASSERT');
consoleDir({ name: 'Navin', address: { city: 'MUMBAI', state: 'maharashtra' } });
consoleDirxml(document);
...
...

```