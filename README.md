# BitQ

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
