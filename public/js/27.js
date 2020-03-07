(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"TO/g":function(t,e,n){"use strict";var a=n("vDqi"),o=n.n(a),i=n("sEfC"),l=n.n(i),s=n("mwIZ"),r=n.n(s);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var u={name:"nzPublicationAutocomplete",props:{label:{type:String,default:"Publication"},placeholder:{type:String,default:"Search for publication..."},publication:{type:Object,default:null},route:{type:String,default:"api.autocomplete.publications.index"},value:{type:String,default:""},error:Boolean,message:{type:String,default:null},except:{},autofocus:Boolean,disabled:Boolean},data:function(){return{data:[],selected:this.publication||null,loading:!1}},computed:{icon:function(){return this.selected?"check":"search"}},watch:{publication:function(t){this.selected=t}},methods:{fetchData:l()((function(){var t=this;if(this.value){this.data=[],this.loading=!0;var e={citation:this.value};this.except&&(e.except=this.except),o.a.get(route(this.route),{params:e}).then((function(e){e.data.data.forEach((function(e){return t.data.push(e)})),t.loading=!1}),(function(e){t.loading=!1}))}}),500),onSelect:function(t){this.selected=t,this.$emit("select",t)},onInput:function(t){var e=this.getValue(this.selected);e&&e!==t&&this.onSelect(null),this.$emit("input",t),this.fetchData()},focusOnInput:function(){this.$el.querySelector("input").focus()},getValue:function(t){if(t)return"object"===c(t)?r()(t,"citation"):t}}},d=n("KHd+"),p=Object(d.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-field",{staticClass:"nz-publication-autocomplete",attrs:{label:t.label,type:t.error?"is-danger":null,message:t.message}},[n("b-field",{attrs:{grouped:""}},[n("b-autocomplete",{attrs:{value:t.value,data:t.data,field:"citation",loading:t.loading,icon:t.icon,placeholder:t.placeholder,expanded:"",autofocus:t.autofocus,disabled:t.disabled},on:{input:t.onInput,select:t.onSelect},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticClass:"media"},[n("div",{staticClass:"media-content"},[t._v("\n            "+t._s(e.option.citation)+"\n          ")])])]}}])}),t._v(" "),t._t("default")],2)],1)}),[],!1,null,null,null);e.a=p.exports},WYMz:function(t,e,n){"use strict";var a=n("vDqi"),o=n.n(a),i=n("sEfC"),l=n.n(i),s=n("mwIZ"),r=n.n(s);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var u={name:"nzUserAutocomplete",props:{label:{type:String,default:"User"},placeholder:{type:String,default:"Search for user..."},user:{type:Object,default:null},route:{type:String,default:"api.autocomplete.users.index"},value:{type:String,default:""},error:Boolean,message:{type:String,default:null},except:{},autofocus:Boolean,disabled:Boolean},data:function(){return{data:[],selected:this.user||null,loading:!1}},computed:{icon:function(){return this.selected?"check":null}},watch:{user:function(t){this.selected=t}},methods:{fetchData:l()((function(){var t=this;if(this.value){this.data=[],this.loading=!0;var e={name:this.value};this.except&&(e.except=this.except),o.a.get(route(this.route),{params:e}).then((function(e){e.data.data.forEach((function(e){return t.data.push(e)})),t.loading=!1}),(function(e){t.loading=!1}))}}),500),onSelect:function(t){this.selected=t,this.$emit("select",t)},onInput:function(t){var e=this.getValue(this.selected);e&&e!==t&&this.onSelect(null),this.$emit("input",t),this.fetchData()},focusOnInput:function(){this.$el.querySelector("input").focus()},getValue:function(t){if(t)return"object"===c(t)?r()(t,"full_name"):t}}},d=n("KHd+"),p=Object(d.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-field",{staticClass:"nz-user-autocomplete",attrs:{label:t.label,type:t.error?"is-danger":null,message:t.message}},[n("b-field",{attrs:{grouped:""}},[n("b-autocomplete",{attrs:{value:t.value,data:t.data,field:"full_name",loading:t.loading,icon:t.icon,placeholder:t.placeholder,expanded:"",autofocus:t.autofocus,disabled:t.disabled},on:{input:t.onInput,select:t.onSelect},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticClass:"media"},[n("div",{staticClass:"media-content"},[t._v("\n            "+t._s(e.option.full_name)+" "),n("small",[t._v("<"+t._s(e.option.email)+">")])])])]}}])})],1)],1)}),[],!1,null,null,null);e.a=p.exports},sa4R:function(t,e,n){"use strict";n.r(e);var a=n("vDqi"),o=n.n(a),i=n("WjpJ"),l=n.n(i),s=n("JkKK"),r=n("3wZJ"),c=n("9KKN"),u=n("2qhe"),d=n("TO/g"),p=n("uuKk"),b=n("WYMz"),f=n("luGL"),h=n("DgLj");function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var y={name:"nzLiteratureObservationsTable",mixins:[r.a,c.a],components:{NzTable:f.a,NzExportModal:h.a,NzPublicationAutocomplete:d.a,NzTaxonAutocomplete:p.a,NzUserAutocomplete:b.a},props:{perPageOptions:{type:Array,default:function(){return[15,30,50,100]},validator:function(t){return t.length}},listRoute:String,viewRoute:String,editRoute:String,deleteRoute:String,empty:{type:String,default:"Nothing here."},showActivityLog:Boolean,exportUrl:String,exportColumns:{type:Array,default:function(){return[]}}},data:function(){return{data:[],total:0,loading:!1,sortField:"id",sortOrder:"desc",defaultSortOrder:"asc",page:1,perPage:this.perPageOptions[0],checkedRows:[],activityLog:[],showExportModal:!1,exporting:!1}},computed:{months:function(){return s.a.months()},days:function(){return l()(1,32)},hasActions:function(){return this.exportable},checkedIds:function(){return this.checkedRows.map((function(t){return t.id}))},exportable:function(){return!(!this.exportUrl||!this.exportColumns.length)},actionRunning:function(){return this.exporting}},created:function(){var t=this;this.restoreState(),this.loadAsyncData(),this.$on("filter",(function(){t.saveState(),t.loadAsyncData()}))},methods:{loadAsyncData:function(){var t=this;this.loading=!0;var e=this.filter,n=(e.selected_taxon,e.selected_publication,e.publication_citation,_(e,["selected_taxon","selected_publication","publication_citation"]));return o.a.get(route(this.listRoute).withQuery(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(Object(n),!0).forEach((function(e){m(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},n,{sort_by:"".concat(this.sortField,".").concat(this.sortOrder),page:this.page,per_page:this.perPage}))).then((function(e){var n=e.data;t.data=[],t.total=n.meta.total,n.data.forEach((function(e){return t.data.push(e)})),t.loading=!1}),(function(e){t.data=[],t.total=0,t.loading=!1}))},getPersistantKeys:function(){return["sortField","sortOrder","perPage","page","newFilter","filter","filterIsActive"]},onPageChange:function(t){this.page=t,this.saveState(),this.loadAsyncData()},onSort:function(t,e){this.sortField=t,this.sortOrder=e,this.saveState(),this.loadAsyncData()},onPerPageChange:function(t){t!==this.perPage&&(this.perPage=t,this.saveState(),this.loadAsyncData())},confirmRemove:function(t){var e=this;this.$buefy.dialog.confirm({message:this.trans("Are you sure you want to delete this record?"),confirmText:this.trans("buttons.delete"),cancelText:this.trans("buttons.cancel"),type:"is-danger",onConfirm:function(){e.remove(t)}})},remove:function(t){var e=this;return o.a.delete(route(this.deleteRoute,t.id)).then((function(t){e.$buefy.toast.open({message:e.trans("Record deleted"),type:"is-success"}),e.loadAsyncData()})).catch((function(t){console.error(t)}))},editLink:function(t){return route(this.editRoute,t.id)},viewLink:function(t){return this.viewRoute?route(this.viewRoute,t.id):null},openActivityLogModal:function(t){this.activityLog=t.activity},filterDefaults:function(){return{taxon:null,taxon_id:null,include_child_taxa:!1,selected_taxon:null,year:null,month:null,day:null,observer:null,project:null,selected_publication:null,publication_id:null,publication_citation:null,id:null}},openExportModal:function(){this.showExportModal=!0},onExportDone:function(t){this.showExportModal=!1,t.url?this.$buefy.modal.open({parent:this,component:u.a,canCancel:[],hasModalCard:!0,props:{url:t.url}}):this.$buefy.toast.open({duration:0,message:"Something's not good, also I'm on bottom",type:"is-danger"})},onTaxonSelect:function(t){this.newFilter.taxon_id=t?t.id:null,this.newFilter.selected_taxon=t},onPublicationSelect:function(t){this.newFilter.publication_id=t?t.id:null,this.newFilter.selected_publication=t}},filters:{truncate:function(t,e){return t.length>e?t.substr(0,e)+"...":t}}},g=n("KHd+"),x=Object(g.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"field-observations-table"},[n("div",{staticClass:"level"},[n("div",{staticClass:"level-left"},[n("div",{staticClass:"level-item"},[n("button",{staticClass:"button is-touch-full",attrs:{type:"button"},on:{click:function(e){t.showFilter=!t.showFilter}}},[n("b-icon",{class:[t.filterIsActive?"has-text-primary":"has-text-grey"],attrs:{icon:"filter",size:t.filterIsActive?null:"is-small"}}),t._v(" "),n("span",[t._v(t._s(t.trans("buttons.filters")))])],1)])]),t._v(" "),t.hasActions?n("div",{staticClass:"level-right"},[n("div",{staticClass:"level-item"},[n("b-dropdown",{attrs:{position:"is-bottom-left"}},[n("button",{staticClass:"button is-touch-full",class:{"is-loading":t.actionRunning},attrs:{slot:"trigger"},slot:"trigger"},[n("span",[t._v(t._s(t.trans("labels.actions")))]),t._v(" "),n("span",{staticClass:"icon has-text-grey"},[n("i",{staticClass:"fa fa-angle-down"})])]),t._v(" "),t.exportable?n("b-dropdown-item",{on:{click:t.openExportModal}},[n("b-icon",{staticClass:"has-text-grey",attrs:{icon:"download"}}),t._v(" "),n("span",[t._v(t._s(t.trans("buttons.export")))])],1):t._e()],1)],1)]):t._e()]),t._v(" "),n("b-collapse",{staticClass:"mt-4",attrs:{open:t.showFilter}},[n("form",{on:{submit:function(e){return e.preventDefault(),t.applyFilter(e)}}},[n("div",{staticClass:"columns is-multiline"},[n("div",{staticClass:"column is half"},[n("nz-taxon-autocomplete",{attrs:{taxon:t.newFilter.selected_taxon,label:t.trans("labels.literature_observations.taxon"),placeholder:t.trans("labels.literature_observations.search_for_taxon")},on:{select:t.onTaxonSelect},model:{value:t.newFilter.taxon,callback:function(e){t.$set(t.newFilter,"taxon",e)},expression:"newFilter.taxon"}}),t._v(" "),n("b-checkbox",{model:{value:t.newFilter.include_child_taxa,callback:function(e){t.$set(t.newFilter,"include_child_taxa",e)},expression:"newFilter.include_child_taxa"}},[t._v(t._s(t.trans("labels.literature_observations.include_lower_taxa")))])],1),t._v(" "),n("b-field",{staticClass:"column is-half",attrs:{label:t.trans("labels.literature_observations.date")}},[n("b-field",{attrs:{expanded:"",grouped:""}},[n("b-field",{attrs:{expanded:""}},[n("b-input",{attrs:{placeholder:t.trans("labels.literature_observations.year")},model:{value:t.newFilter.year,callback:function(e){t.$set(t.newFilter,"year",e)},expression:"newFilter.year"}})],1),t._v(" "),n("b-field",{attrs:{expanded:""}},[n("b-select",{attrs:{placeholder:t.trans("labels.literature_observations.month"),expanded:""},model:{value:t.newFilter.month,callback:function(e){t.$set(t.newFilter,"month",e)},expression:"newFilter.month"}},[n("option",{domProps:{value:null}}),t._v(" "),t._l(t.months,(function(e,a){return n("option",{key:a,domProps:{value:a+1,textContent:t._s(e)}})}))],2)],1),t._v(" "),n("b-field",{attrs:{expanded:""}},[n("b-select",{attrs:{placeholder:t.trans("labels.literature_observations.day"),expanded:""},model:{value:t.newFilter.day,callback:function(e){t.$set(t.newFilter,"day",e)},expression:"newFilter.day"}},[n("option",{domProps:{value:null}}),t._v(" "),t._l(t.days,(function(e){return n("option",{key:e,domProps:{value:e,textContent:t._s(e)}})}))],2)],1)],1)],1),t._v(" "),n("nz-user-autocomplete",{staticClass:"column is-half",attrs:{label:t.trans("labels.literature_observations.observer"),placeholder:""},model:{value:t.newFilter.observer,callback:function(e){t.$set(t.newFilter,"observer",e)},expression:"newFilter.observer"}}),t._v(" "),n("b-field",{staticClass:"column is-half",attrs:{label:t.trans("labels.literature_observations.project")}},[n("b-input",{attrs:{expanded:""},model:{value:t.newFilter.project,callback:function(e){t.$set(t.newFilter,"project",e)},expression:"newFilter.project"}})],1),t._v(" "),n("b-field",{staticClass:"column is-one-third",attrs:{label:t.trans("labels.id")}},[n("b-input",{attrs:{expanded:""},model:{value:t.newFilter.id,callback:function(e){t.$set(t.newFilter,"id",e)},expression:"newFilter.id"}})],1),t._v(" "),n("nz-publication-autocomplete",{staticClass:"column is-two-thirds",attrs:{publication:t.newFilter.selected_publication,label:t.trans("labels.literature_observations.publication"),placeholder:t.trans("labels.literature_observations.search_for_publication")},on:{select:t.onPublicationSelect},model:{value:t.newFilter.publication_citation,callback:function(e){t.$set(t.newFilter,"publication_citation",e)},expression:"newFilter.publication_citation"}})],1),t._v(" "),n("button",{staticClass:"button is-primary is-outlined",attrs:{type:"submit"}},[t._v(t._s(t.trans("buttons.apply")))]),t._v(" "),n("button",{staticClass:"button",attrs:{type:"button"},on:{click:t.clearFilter}},[t._v(t._s(t.trans("buttons.clear")))])])]),t._v(" "),n("hr"),t._v(" "),n("nz-table",{attrs:{data:t.data,loading:t.loading,paginated:"","backend-pagination":"",total:t.total,"per-page":t.perPage,"per-page-options":t.perPageOptions,"pagination-on-top":"","backend-sorting":"","default-sort-direction":t.defaultSortOrder,"default-sort":[t.sortField,t.sortOrder],detailed:"","mobile-cards":!0,checkable:t.hasActions,"checked-rows":t.checkedRows},on:{"page-change":t.onPageChange,"per-page-change":t.onPerPageChange,sort:t.onSort,"update:checkedRows":function(e){t.checkedRows=e},"update:checked-rows":function(e){t.checkedRows=e}},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("b-table-column",{attrs:{field:"id",label:t.trans("labels.id"),width:"40",numeric:"",sortable:""}},[t._v("\n        "+t._s(a.id)+"\n      ")]),t._v(" "),n("b-table-column",{attrs:{field:"taxon_name",label:t.trans("labels.literature_observations.taxon"),sortable:""}},[t._v("\n        "+t._s(a.taxon?a.taxon.name:"")+"\n      ")]),t._v(" "),n("b-table-column",{attrs:{field:"year",label:t.trans("labels.literature_observations.year"),numeric:"",sortable:""}},[t._v("\n        "+t._s(a.year)+"\n      ")]),t._v(" "),n("b-table-column",{attrs:{field:"month",label:t.trans("labels.literature_observations.month"),numeric:"",sortable:""}},[t._v("\n        "+t._s(a.month)+"\n      ")]),t._v(" "),n("b-table-column",{attrs:{field:"day",label:t.trans("labels.literature_observations.day"),numeric:"",sortable:""}},[t._v("\n        "+t._s(a.day)+"\n      ")]),t._v(" "),n("b-table-column",{attrs:{width:"150",numeric:""}},[t.showActivityLog&&a.activity?n("a",{attrs:{title:t.trans("Activity Log")},on:{click:function(e){return t.openActivityLogModal(a)}}},[n("b-icon",{attrs:{icon:"history"}})],1):t._e(),t._v(" "),t.viewRoute?n("a",{attrs:{href:t.viewLink(a),title:t.trans("buttons.view")}},[n("b-icon",{attrs:{icon:"eye"}})],1):t._e(),t._v(" "),n("a",{attrs:{href:t.editLink(a),title:t.trans("buttons.edit")}},[n("b-icon",{attrs:{icon:"edit"}})],1),t._v(" "),n("a",{attrs:{title:t.trans("buttons.delete")},on:{click:function(e){return t.confirmRemove(a)}}},[n("b-icon",{attrs:{icon:"trash"}})],1)])]}},{key:"detail",fn:function(e){var a=e.row;return[n("article",{staticClass:"media"},[n("div",{staticClass:"media-content"},[n("div",{staticClass:"content"},[n("strong",[t._v(t._s(a.location))]),t._v(" "),n("small",[t._v(t._s(a.latitude)+", "+t._s(a.longitude))]),n("br"),t._v(" "),n("small",[t._v(t._s(t.trans("labels.literature_observations.elevation"))+": "+t._s(a.elevation)+"m")]),n("br"),t._v(" "),a.accuracy?n("small",[t._v(t._s(t.trans("labels.literature_observations.accuracy"))+": "+t._s(a.accuracy)+"m")]):t._e()])])])]}}])},[t._v(" "),n("template",{slot:"empty"},[n("section",{staticClass:"section"},[n("div",{staticClass:"content has-text-grey has-text-centered"},[n("p",[t._v(t._s(t.empty))])])])])],2),t._v(" "),n("b-modal",{attrs:{active:t.activityLog.length>0,"has-modal-card":""},on:{close:function(e){t.activityLog=[]}}},[n("div",{staticClass:"modal-card"},[n("div",{staticClass:"modal-card-head"},[n("b-icon",{attrs:{icon:"history"}}),t._v(" "),n("p",{staticClass:"modal-card-title"},[t._v(t._s(t.trans("Activity Log")))])],1),t._v(" "),n("div",{staticClass:"modal-card-body"},[n("nz-literature-observation-activity-log",{attrs:{activities:t.activityLog}})],1)])]),t._v(" "),n("b-modal",{attrs:{active:t.showExportModal,"has-modal-card":"","can-cancel":[]},on:{close:function(e){t.showExportModal=!1}}},[n("nz-export-modal",{attrs:{checked:t.checkedIds,columns:t.exportColumns,url:t.exportUrl,types:["custom","darwin_core"]},on:{cancel:function(e){t.showExportModal=!1},done:t.onExportDone}})],1)],1)}),[],!1,null,null,null);e.default=x.exports}}]);
//# sourceMappingURL=27.js.map?id=ef259ccaf964adfe9aae