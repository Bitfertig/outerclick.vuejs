# outerclick.vuejs

Outerclick vuejs-mixin by references.


## Demo

http://tools.bitfertig.de/outerclick.vuejs/


## Install

```bash
npm i @dipser/outerclick.vuejs
```


## Usage

In a .vue file:

```html
<template>
    <button @click="register_outerclick(['ref', 'ref2'], ()=>close())" ref="ref"></button>
    <div ref="ref2">Inner</div>
</template>

<script>
import outerclick from '@dipser/outerclick.vuejs';
export default {
    mixins: [
        outerclick
    ],
    methods: {
        close: function(){}
    }
}
</script>
```



## More
* [npm package](https://www.npmjs.com/package/@dipser/outerclick.vuejs)
* [twitter](https://twitter.com/dipser)