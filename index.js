/**
 * Outerclick-Mixin
 */

var outerclickMixin = {
    data: function () {
        return {
            outerclick_references: [],
            outerclick_callback: null
        }
    },
    created: function () {
        document.addEventListener('click', this.check_outerclick);
    },
    beforeDestroy() {
        document.removeEventListener('click', this.check_outerclick);
    },
    methods: {
        register_outerclick: function(references, callback){
            this.outerclick_references = references;
            this.outerclick_callback = callback;
        },
        check_outerclick: function(e) {
            if ( e.target instanceof HTMLElement ) {
                let inside_click = false;
                for (let item of this.outerclick_references) {
                    let ref = this.$refs[item];
                    let typeof_ref = typeof ref;
                    let refs = typeof_ref == 'array' || typeof_ref == 'object' ? ref : [ref];
                    for (let i in refs) {
                        //console.log(typeof refs[i]);
                        if ( refs[i].contains(e.target) ) { // => not outside click
                            inside_click = true;
                        }
                    }
                }
                if ( !inside_click ) {
                    if ( typeof this.outerclick_callback == 'function' ) this.outerclick_callback(e);
                    this.outerclick_references = [];
                    this.outerclick_callback = null;
                } 
            }
        }
    }
}

export default outerclickMixin;