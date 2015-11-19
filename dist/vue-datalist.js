(function(Vue) {
    var root = typeof self == 'object' && self.self === self && self ||
            typeof global == 'object' && global.global === global && global ||
            this;

    if (typeof exports != 'undefined' && !exports.nodeType) {
        if (typeof module != 'undefined' && !module.nodeType && module.exports) {
            exports = module.exports = VDatalist;
        }
        exports.VDatalist = VDatalist;
    } else {
        root.VDatalist = VDatalist;
    }

    function VDatalist(args) {
        if (args) {
            this.create(args);
        }
    }

    VDatalist.prototype.create = function(args) {
        var _tpl = '<input type="text"v-model="textSelected"list="{{id}}"><datalist id="{{id}}"><option v-for="option in options">{{option}}</option></datalist>';
        var _id = Math.floor(Math.random()*(99999-10000)+10000);

        var DatalistComponent = Vue.extend({
            template: _tpl,
            props: ['valueSelected', 'options'],
            data: function() {
                return { id: _id };
            },
            computed: {
                textSelected: {
                    get: function() {
                        return this.options[this.valueSelected];
                    },
                    set: function(val) {
                        for (var i in this.options) {
                            if (this.options[i] == val) {
                                this.$set('valueSelected', i);
                                break;
                            }
                        }
                    }
                }
            }
        });

        Vue.component(args.component, DatalistComponent);
    };
})(Vue);