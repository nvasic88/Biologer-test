(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"4CCu":function(t,e,i){"use strict";i.r(e),e.default={name:"nzNavbar",data:function(){return{active:!1}},methods:{toggle:function(){this.active=!this.active}}}},NqoF:function(t,e,i){"use strict";i.r(e);var n=i("vDqi"),a=i.n(n),r={name:"nzCaptcha",props:{url:String},data:function(){return{imageUrl:this.url,refreshing:!1}},methods:{refresh:function(){var t=this;this.refreshing||(this.refreshing=!0,a.a.get(this.imageUrl+"&refresh").then((function(e){var i=e.data;t.imageUrl=i.url,t.refreshing=!1})))}}},s=i("KHd+"),l=Object(s.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"is-flex is-flex-center"},[e("img",{staticClass:"image",staticStyle:{height:"60px"},attrs:{src:this.imageUrl,alt:"CAPTCHA Image"}}),this._v(" "),e("button",{staticClass:"button is-small ml-2",attrs:{type:"button"},on:{click:this.refresh}},[e("b-icon",{attrs:{icon:"refresh",size:"is-small"}})],1)])}),[],!1,null,null,null);e.default=l.exports},ao84:function(t,e,i){"use strict";i.r(e);var n=i("JkKK"),a=i("xweI"),r=i.n(a),s=i("FyPc"),l=i.n(s),o=i("gPaA"),c=i.n(o),u={egg:"white",larva:"green",pupa:"yellow",juvenile:"orange",adult:"red"},f=Object.keys(u),d={name:"nzOccurrenceChart",props:{elevationLabel:{type:String,default:"Elevation"},monthsLabel:{type:String,default:"Months"},availableStages:{type:Array,default:function(){return[]}},data:{type:Array,required:!0}},data:function(){return{visibleStages:f}},computed:{allStages:function(){var t=this;return f.filter((function(e){return t.availableStages.includes(e)}))},currentDateLineX:function(){return this.xForDate(Object(n.a)())-1},filteredData:function(){var t=this;return this.data.filter((function(e){return t.visibleStages.includes(e.stage)&&null!==e.elevation}))},sortedData:function(){this.stageOrder;return r()(this.filteredData,(function(t){return t.date}))},maxElevation:function(){var t=l()(this.data,(function(t){return t.elevation}));return t?t.elevation:1e3},minElevation:function(){var t=c()(this.data,(function(t){return t.elevation}));return t?t.elevation:0},topElevationValue:function(){return 1e3*parseInt(Math.ceil(this.maxElevation/1e3))},bottomElevationValue:function(){var t=this.topElevationValue/4;return this.minElevation>=0?0:parseInt(Math.floor(this.minElevation/t))*t},preparedPoints:function(){var t=this;return this.sortedData.map((function(e){return{x:t.xForDate(e.date),y:t.yForElevation(e.elevation),color:u[e.stage]}}))},yForZeroElevation:function(){return this.yForElevation(0)},negativeElevations:function(){var t=this.bottomElevationValue;if(0===t)return[];for(var e=this.topElevationValue/4,i=Math.abs(t/e),n=[],a=0;a<=i;a++){var r=(a+1)*-e;n.push({value:r,y:this.yForElevation(r)})}return n},positiveElevations:function(){for(var t=this.topElevationValue,e=[],i=0;i<4;i++){var n=parseInt(t*(i+1)/4);e.push({value:n,y:this.yForElevation(n)})}return e}},methods:{progressInYear:function(t){var e=Object(n.a)(t);return e.dayOfYear()/(e.isLeapYear()?366:365)},xForDate:function(t){return 730*this.progressInYear(Object(n.a)(t))+70},yForElevation:function(t){var e=this.topElevationValue,i=this.bottomElevationValue;return 529-499*t/(e-i)+499*i/(e-i)},optionColor:function(t){return{height:"1rem",width:"1rem",backgroundColor:u[t],borderRadius:"50%",display:"inline-block",border:"1px solid black"}}}},h=i("KHd+"),v=Object(h.a)(d,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{},[i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 800 600"}},[i("g",[i("rect",{attrs:{x:"70",y:"30",width:"62",height:"500",fill:"#ffffff"}}),t._v(" "),i("text",{attrs:{x:"101",y:"560","font-size":"25",fill:"#000000","text-anchor":"middle"}},[t._v("I")]),t._v(" "),i("rect",{attrs:{x:"132",y:"30",width:"56",height:"500",fill:"#eeeeee"}}),t._v(" "),i("text",{attrs:{x:"160",y:"560","font-size":"25",fill:"#000000","text-anchor":"middle"}},[t._v("II")]),t._v(" "),i("rect",{attrs:{x:"188",y:"30",width:"62",height:"500",fill:"#ffffff"}}),t._v(" "),i("text",{attrs:{x:"219",y:"560","font-size":"25",fill:"#000000","text-anchor":"middle"}},[t._v("III")]),t._v(" "),i("rect",{attrs:{x:"250",y:"30",width:"60",height:"500",fill:"#eeeeee"}}),t._v(" "),i("text",{attrs:{x:"280",y:"560","font-size":"25",fill:"#000000","text-anchor":"middle"}},[t._v("IV")]),t._v(" "),i("rect",{attrs:{x:"310",y:"30",width:"62",height:"500",fill:"#ffffff"}}),t._v(" "),i("text",{attrs:{x:"341",y:"560","font-size":"25",fill:"#000000","text-anchor":"middle"}},[t._v("V")]),t._v(" "),i("rect",{attrs:{x:"372",y:"30",width:"60",height:"500",fill:"#eeeeee"}}),t._v(" "),i("text",{attrs:{x:"402",y:"560","font-size":"25",fill:"#000000","text-anchor":"middle"}},[t._v("VI")]),t._v(" "),i("rect",{attrs:{x:"432",y:"30",width:"62",height:"500",fill:"#ffffff"}}),t._v(" "),i("text",{attrs:{x:"463",y:"560","font-size":"25",fill:"#000000","text-anchor":"middle"}},[t._v("VII")]),t._v(" "),i("rect",{attrs:{x:"494",y:"30",width:"62",height:"500",fill:"#eeeeee"}}),t._v(" "),i("text",{attrs:{x:"525",y:"560","font-size":"25",fill:"#000000","text-anchor":"middle"}},[t._v("VIII")]),t._v(" "),i("rect",{attrs:{x:"556",y:"30",width:"60",height:"500",fill:"#ffffff"}}),t._v(" "),i("text",{attrs:{x:"586",y:"560","font-size":"25",fill:"#000000","text-anchor":"middle"}},[t._v("IX")]),t._v(" "),i("rect",{attrs:{x:"616",y:"30",width:"62",height:"500",fill:"#eeeeee"}}),t._v(" "),i("text",{attrs:{x:"647",y:"560","font-size":"25",fill:"#000000","text-anchor":"middle"}},[t._v("X")]),t._v(" "),i("rect",{attrs:{x:"678",y:"30",width:"60",height:"500",fill:"#ffffff"}}),t._v(" "),i("text",{attrs:{x:"708",y:"560","font-size":"25",fill:"#000000","text-anchor":"middle"}},[t._v("XI")]),t._v(" "),i("rect",{attrs:{x:"738",y:"30",width:"62",height:"500",fill:"#eeeeee"}}),t._v(" "),i("text",{attrs:{x:"769",y:"560","font-size":"25",fill:"#000000","text-anchor":"middle"}},[t._v("XII")]),t._v(" "),i("line",{attrs:{x1:"70",y1:"10",x2:"70",y2:"530","stroke-width":"2",stroke:"#222222"}}),t._v(" "),i("path",{attrs:{d:"M70 7 L65 15 L75 15 Z"}}),t._v(" "),i("text",{attrs:{x:"80",y:"25","font-size":"20",fill:"#000000"}},[t._v(t._s(t.elevationLabel)+" (m)")]),t._v(" "),i("text",{attrs:{x:"400",y:"590","font-size":"20",fill:"#000000","dominant-baseline":"middle","text-anchor":"middle"}},[t._v(t._s(t.monthsLabel))]),t._v(" "),t._l(t.negativeElevations,(function(e,n){return[i("line",{attrs:{x1:"60",y1:e.y,x2:"800",y2:e.y,"stroke-width":"1",stroke:(n+1)%2?"#555555":"#222222"}}),t._v(" "),i("text",{attrs:{x:"55",y:e.y,"font-size":"20",fill:"#000000","dominant-baseline":"central","text-anchor":"end"}},[t._v(t._s(e.value))])]})),t._v(" "),i("line",{attrs:{x1:"60",y1:t.yForZeroElevation,x2:"800",y2:t.yForZeroElevation,"stroke-width":"2",stroke:"#222222"}}),t._v(" "),i("text",{attrs:{x:"55",y:t.yForZeroElevation,"font-size":"20",fill:"#000000","dominant-baseline":"central","text-anchor":"end"}},[t._v("0")]),t._v(" "),t._l(t.positiveElevations,(function(e,n){return[i("line",{attrs:{x1:"60",y1:e.y,x2:"800",y2:e.y,"stroke-width":"1",stroke:(n+1)%2?"#555555":"#222222"}}),t._v(" "),i("text",{attrs:{x:"55",y:e.y,"font-size":"20",fill:"#000000","dominant-baseline":"central","text-anchor":"end"}},[t._v(t._s(e.value))])]}))],2),t._v(" "),i("g",[t._l(t.preparedPoints,(function(t){return[i("circle",{attrs:{cx:t.x,cy:t.y,r:"7",fill:t.color,"stroke-width":"1",stroke:"black"}})]}))],2),t._v(" "),i("line",{attrs:{x1:t.currentDateLineX,y1:"30",x2:t.currentDateLineX,y2:"528","stroke-width":"1",stroke:"#00aa00"}})]),t._v(" "),i("div",{staticClass:"flex flex-col is-flex-center"},t._l(t.allStages,(function(e){return i("div",{staticClass:"control"},[i("label",{staticClass:"checkbox"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.visibleStages,expression:"visibleStages"}],attrs:{type:"checkbox",name:"stages"},domProps:{value:e,checked:Array.isArray(t.visibleStages)?t._i(t.visibleStages,e)>-1:t.visibleStages},on:{change:function(i){var n=t.visibleStages,a=i.target,r=!!a.checked;if(Array.isArray(n)){var s=e,l=t._i(n,s);a.checked?l<0&&(t.visibleStages=n.concat([s])):l>-1&&(t.visibleStages=n.slice(0,l).concat(n.slice(l+1)))}else t.visibleStages=r}}}),t._v(" "+t._s(t.trans("stages."+e))+" "),i("span",{style:t.optionColor(e)})])])})),0)])}),[],!1,null,null,null);e.default=v.exports},rJnN:function(t,e,i){"use strict";i.r(e);i("Nxl1");var n=i("1Uf0"),a={name:"nzSlider",components:{"tn-item":n.TnItem,"tn-slider":n.TnSlider},props:{items:{type:Array,default:function(){return[]}},withThumbnails:{type:Boolean,default:!0},thumbnailNumber:{type:Number,default:5}},data:function(){return{item:0}},computed:{moreThanOne:function(){return this.items.length>1}},methods:{goToPrevSlide:function(){this.item>0?this.item--:this.item=this.items.length-1},goToNextSlide:function(){this.item<this.items.length-1?this.item++:this.item=0},setCurrentSlide:function(t){this.item=t},isCurrent:function(t){return this.item===t}}},r=i("KHd+"),s=Object(r.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"slider"},[i("div",{staticClass:"slide-container"},[t._l(t.items,(function(e,n){return i("div",{directives:[{name:"show",rawName:"v-show",value:t.isCurrent(n),expression:"isCurrent(index)"}],staticClass:"slide"},[i("div",{staticClass:"slide-image-container"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.url,expression:"image.url"}]}),t._v(" "),e.caption?i("div",{staticClass:"slide-caption",domProps:{innerHTML:t._s(e.caption)}}):t._e()])])})),t._v(" "),t.moreThanOne?i("a",{staticClass:"prev flex is-flex-center",attrs:{title:t.trans("pagination.previous")},on:{click:t.goToPrevSlide}},[i("b-icon",{attrs:{icon:"chevron-left",size:"is-small","aria-hidden":"true"}})],1):t._e(),t._v(" "),t.moreThanOne?i("a",{staticClass:"next flex is-flex-center",attrs:{title:t.trans("pagination.next")},on:{click:t.goToNextSlide}},[i("b-icon",{attrs:{icon:"chevron-right",size:"is-small","aria-hidden":"true"}})],1):t._e()],2),t._v(" "),t.withThumbnails&&t.moreThanOne?i("tn-slider",{staticClass:"thumbnails",attrs:{index:t.item,count:t.thumbnailNumber}},t._l(t.items,(function(e,n){return i("tn-item",{key:n,class:{active:t.isCurrent(n)},on:{"on-item-click":function(e){return t.setCurrentSlide(n)}}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.url,expression:"image.url"}]}),t._v(" "),i("div",{staticClass:"inner-shadow"})])})),1):t.moreThanOne?i("div",{staticClass:"dots"},t._l(t.items,(function(e,n){return i("div",{staticClass:"dot",class:{active:t.isCurrent(n)},on:{click:function(e){return t.setCurrentSlide(n)}}})})),0):t._e()],1)}),[],!1,null,null,null);e.default=s.exports},sskN:function(t,e,i){"use strict";i.r(e);var n={name:"nzGroupTaxaSearch",components:{NzTaxonAutocomplete:i("uuKk").a},props:{group:{type:Number,required:!0}},data:function(){return{name:"",selected:null}},computed:{link:function(){return this.selected&&this.selected.first_species_id?route("groups.species.show",{group:this.group,species:this.selected.first_species_id}):null},url:function(){return route("api.groups.taxa.index",{group:this.group})}},methods:{onTaxonSelect:function(t){this.selected=t},visitLink:function(){this.link&&(window.location.href=this.link)}}},a=i("KHd+"),r=Object(a.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"modal-card group-taxa-search"},[i("header",{staticClass:"modal-card-head"},[i("p",{staticClass:"modal-card-title"},[t._v(t._s(t.trans("navigation.find_in_group")))])]),t._v(" "),i("section",{staticClass:"modal-card-body"},[i("nz-taxon-autocomplete",{attrs:{autofocus:"",url:t.url,label:t.trans("labels.field_observations.taxon"),placeholder:t.trans("labels.field_observations.search_for_taxon")},on:{select:t.onTaxonSelect,enter:t.visitLink},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),t._v(" "),i("footer",{staticClass:"modal-card-foot",staticStyle:{"justify-content":"flex-end"}},[i("a",{staticClass:"button is-primary",attrs:{href:t.link,disabled:!t.link}},[i("i",{staticClass:"fa fa-arrow-right"})])])])}),[],!1,null,null,null).exports,s={name:"nzGroupTaxaSearchButton",props:{group:{type:Number,required:!0}},methods:{showModal:function(){var t=this.$buefy.modal.open({parent:this,component:r,hasModalCard:!0,props:{group:this.group}});setTimeout((function(){t.$el.querySelector("input").focus()}),500)}}},l=Object(a.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"button has-text-hidden-tablet-only",attrs:{type:"button",title:this.trans("navigation.find_in_group")},on:{click:this.showModal}},[e("b-icon",{staticClass:"has-text-grey",attrs:{icon:"search",size:"is-small"}}),this._v(" "),e("span",{staticClass:"is-hidden-tablet-only"},[this._v("\n    "+this._s(this.trans("navigation.find_in_group"))+"\n  ")])],1)}),[],!1,null,null,null);e.default=l.exports},uuKk:function(t,e,i){"use strict";var n=i("vDqi"),a=i.n(n),r=i("sEfC"),s=i.n(r),l=i("mwIZ"),o=i.n(l);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var u={name:"nzTaxonAutocomplete",props:{label:{type:String,default:"Taxon"},placeholder:{type:String,default:"Search for taxon..."},taxon:{type:Object,default:null},url:{type:String,default:function(){return route("api.taxa.index")}},value:{type:String,default:""},error:Boolean,message:{type:String,default:null},except:{},autofocus:Boolean},data:function(){return{data:[],selected:this.taxon||null,loading:!1}},computed:{haveThumbnail:function(){return this.selected&&this.selected.thumbnail_url},icon:function(){return this.selected?"check":"search"}},watch:{taxon:function(t){this.selected=t}},methods:{fetchData:s()((function(){var t=this;if(this.value){this.data=[],this.loading=!0;var e={name:this.value,limit:20};this.except&&(e.except=this.except),a.a.get(this.url,{params:e}).then((function(e){e.data.data.forEach((function(e){return t.data.push(e)})),t.loading=!1}),(function(e){t.loading=!1}))}}),500),onSelect:function(t){this.selected=t,this.$emit("select",t)},onInput:function(t){var e=this.getValue(this.selected);e&&e!==t&&this.onSelect(null),this.$emit("input",t),this.fetchData()},focusOnInput:function(){this.$el.querySelector("input").focus()},getValue:function(t){if(t)return"object"===c(t)?o()(t,"name"):t},enterPressed:function(){this.$refs.autocomplete.isActive||this.$emit("enter")}}},f=i("KHd+"),d=Object(f.a)(u,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-field",{staticClass:"nz-taxon-autocomplete",attrs:{label:t.label,type:t.error?"is-danger":null,message:t.message}},[i("b-field",{attrs:{grouped:""}},[t.haveThumbnail?i("img",{attrs:{width:"32",src:this.selected.thumbnail_url}}):t._e(),t._v(" "),i("b-autocomplete",{ref:"autocomplete",attrs:{value:t.value,data:t.data,field:"name",loading:t.loading,icon:t.icon,placeholder:t.placeholder,expanded:"",autofocus:t.autofocus},on:{input:t.onInput,select:t.onSelect},nativeOn:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.enterPressed(e)}},scopedSlots:t._u([{key:"default",fn:function(e){return[i("div",{staticClass:"media"},[i("div",{staticClass:"media-left"},[e.option.thumbnail_url?i("img",{attrs:{width:"32",src:e.option.thumbnail_url}}):t._e()]),t._v(" "),i("div",{staticClass:"media-content"},[t._v("\n            "+t._s(e.option.name)+t._s(e.option.native_name?" ("+e.option.native_name+")":"")+"\n          ")])])]}}])})],1)],1)}),[],!1,null,null,null);e.a=d.exports}}]);
//# sourceMappingURL=public.js.map?id=4a83cc9b1ae671f40d83