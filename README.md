# BitQ

[![npm version](https://img.shields.io/npm/v/bitq.svg?style=flat-square)](https://www.npmjs.org/package/bitq)

### A Bitbucket API client for Javascript.

Easy to use utility functions around Bitbucket APIs.

## Usage

```javascript
import {getRepositories} from "bitq";

const [repositories, error] = await getRepositories();

if(error){
  // Handle API error
}

// DOM.use(data)
```
