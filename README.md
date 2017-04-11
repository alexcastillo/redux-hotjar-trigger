# Redux Hotjar Trigger

Redux middleware for [Hotjar JavaScript Triggers](https://docs.hotjar.com/docs/using-javascript-triggers).

### Setting up

#### 1. Add dependencies
``` bash
npm install redux-hotjar-trigger --save
```

#### 2. Import dependency
``` js
import hotjarMiddleware from 'redux-hotjar-trigger';
```

#### 3. Configure & add middleware
``` js
const pollTriggerMiddleware = hotjarMiddleware({
    hjid: '******',
    hjsv: '*'
});

export const store = createStore(
    rootReducer,
    applyMiddleware(
        pollTriggerMiddleware
    )
);

export default store;
```

#### 4. Add triggers via Redux actions
``` js
export const onSubmit = data => ({
    type: 'FORM_SUBMITTED',
    data,
    meta: {
        hotjar: {
            trigger: 'CUSTOMER_EXPERIENCE_POLL'
        }
    }
});
```

## The MIT License (MIT)

Copyright (c) 2017 Alex Castillo.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.