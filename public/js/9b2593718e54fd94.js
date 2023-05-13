"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[966],{6998:(t,n,i)=>{i.r(n),i.d(n,{default:()=>c});var a=i(9174);var e={"App\\Notifications\\FieldObservationApproved":{link:function(t){return route("contributor.field-observations.show",t.data.field_observation_id)},message:function(t){var n=t.data.taxon_name,i=t.data.curator_name||trans("roles.curator");return n?trans("notifications.field_observations.approved_with_taxon",{curatorName:i,taxonName:n}):trans("notifications.field_observations.approved",{curatorName:i})}},"App\\Notifications\\FieldObservationEdited":{link:function(t){return route("contributor.field-observations.show",t.data.field_observation_id)},message:function(t){var n=t.data.taxon_name,i=t.data.causer_name||trans("roles.curator");return n?trans("notifications.field_observations.edited_with_taxon",{causerName:i,taxonName:n}):trans("notifications.field_observations.edited",{causerName:i})}},"App\\Notifications\\FieldObservationForApproval":{link:function(t){return route("curator.pending-observations.show",t.data.field_observation_id)},message:function(t){return trans("notifications.field_observations.for_approval",{contributorName:t.data.contributor_name||trans("roles.contributor")})}},"App\\Notifications\\FieldObservationMovedToPending":{link:function(t){return route("contributor.field-observations.show",t.data.field_observation_id)},message:function(t){var n=t.data.taxon_name,i=t.data.curator_name||trans("roles.curator");return n?trans("notifications.field_observations.moved_to_pending_with_taxon",{curatorName:i,taxonName:n}):trans("notifications.field_observations.moved_to_pending",{curatorName:i})}},"App\\Notifications\\FieldObservationMarkedUnidentifiable":{link:function(t){return route("contributor.field-observations.show",t.data.field_observation_id)},message:function(t){var n=t.data.taxon_name,i=t.data.curator_name||trans("roles.curator");return n?trans("notifications.field_observations.marked_as_unidentifiable_with_taxon",{curatorName:i,taxonName:n}):trans("notifications.field_observations.marked_as_unidentifiable",{curatorName:i})}}};const o={name:"nzNotification",props:{notification:{type:Object,required:!0}},computed:{type:function(){return e[this.notification.type]},isNotRead:function(){return!this.notification.readAt},data:function(){return this.notification.data},createdAt:function(){return(0,a.Z)(this.notification.created_at).format("D.M.YYYY HH:mm")},message:function(){return this.type.message(this.notification)},link:function(){return this.type.link(this.notification)}},methods:{markAsRead:function(){this.isNotRead&&this.$emit("mark-read",this.notification.id)},visitLinkAndMarkAsRead:function(){var t=this;this.isNotRead?this.$emit("mark-read",this.notification.id,(function(){t.visitLink()})):this.visitLink()},visitLink:function(){this.link&&(window.location.href=this.link)}}};var s=i(1900);const r={name:"nzSidebar",components:{nzNotification:(0,s.Z)(o,(function(){var t=this,n=t._self._c;return t.type?n("div",{class:{"has-background-light":t.isNotRead}},[n("div",{staticClass:"flex-1",class:{"is-clickable":t.link},on:{click:t.visitLinkAndMarkAsRead}},[n("div",{domProps:{innerHTML:t._s(t.message)}}),t._v(" "),n("span",{staticClass:"has-text-grey is-size-7"},[t._v(t._s(t.createdAt))])]),t._v(" "),t.isNotRead?n("a",{attrs:{href:"#",title:t.trans("notifications.mark_as_read")},on:{click:function(n){return n.preventDefault(),t.markAsRead.apply(null,arguments)}}},[n("b-icon",{attrs:{icon:"remove",size:"is-small"}})],1):t._e()]):t._e()}),[],!1,null,null,null).exports},props:{active:Boolean,hasUnreadNotifications:Boolean},data:function(){return{activeTab:"notifications",notifications:[],currentPage:1,hasMoreToLoad:this.hasUnreadNotifications,loading:!1}},created:function(){"undefined"!=typeof window&&document.addEventListener("keyup",this.keyPress),this.hasUnreadNotifications&&this.load()},beforeDestroy:function(){"undefined"!=typeof window&&document.removeEventListener("keyup",this.keyPress)},methods:{hide:function(){this.$emit("close")},keyPress:function(t){27===t.keyCode&&this.hide()},load:function(){var t=this;if(!this.loading){this.loading=!0;var n=this.currentPage;axios.get(route("api.my.unread-notifications.index",{page:n})).then((function(n){t.notifications=t.notifications.concat(n.data.data),t.hasMoreToLoad=t.page<n.data.meta.last_page})).finally((function(){t.loading=!1}))}},loadMore:function(){!this.loading&&this.hasMoreToLoad&&(this.currentPage++,this.load())},markNotificationAsRead:function(t,n){var i=this;axios.post(route("api.my.read-notifications-batch.store"),{notifications_ids:[t]}).then((function(a){i.notifications=i.notifications.filter((function(n){return n.id!==t})),i.$emit("update:has-unread-notifications",a.data.meta.has_unread),n&&n()}))},markAllNotificationsAsRead:function(){var t=this;this.hasUnreadNotifications&&axios.post(route("api.my.read-notifications-batch.store"),{all:!0}).then((function(){t.notifications=[],t.$emit("update:has-unread-notifications",!1)}))}}};const c={name:"nzDashboardNavbar",components:{NzSidebar:(0,s.Z)(r,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"sidebar",class:{"is-active":t.active}},[n("div",{staticClass:"sidebar-header"},[n("h3",{staticClass:"title is-size-5"},[t._v(t._s(t.trans("notifications.title")))])]),t._v(" "),n("div",{staticClass:"sidebar-body"},[t.hasUnreadNotifications?[t.notifications.length?n("transition-group",{attrs:{name:"notification-list"}},t._l(t.notifications,(function(i){return n("nz-notification",{key:"notification-".concat(i.id),staticClass:"sidebar-block",attrs:{notification:i},on:{"mark-read":t.markNotificationAsRead}})})),1):t._e(),t._v(" "),n("div",{staticClass:"sidebar-block justify-center py-8"},[n("button",{staticClass:"button is-primary",class:{"is-loading":t.loading},attrs:{type:"button",disabled:!t.hasMoreToLoad},on:{click:t.loadMore}},[t._v("\n          "+t._s(t.trans("notifications.load_more"))+"\n        ")])])]:n("div",{staticClass:"sidebar-block justify-center py-8"},[t._v("\n      "+t._s(t.trans("notifications.no_new_notifications"))+"\n    ")])],2),t._v(" "),n("footer",{staticClass:"sidebar-footer"},[n("button",{staticClass:"button",attrs:{type:"button"},on:{click:t.hide}},[t._v(t._s(t.trans("buttons.close")))]),t._v(" "),t.notifications.length?n("button",{staticClass:"button is-text",attrs:{type:"button"},on:{click:t.markAllNotificationsAsRead}},[t._v("\n      "+t._s(t.trans("notifications.mark_all_as_read"))+"\n    ")]):t._e()])])}),[],!1,null,null,null).exports},props:{hasUnread:Boolean},data:function(){return{active:!1,showSidebar:!1,hasUnreadNotifications:this.hasUnread}},methods:{toggle:function(){this.active=!this.active},toggleSidebar:function(){this.showSidebar=!this.showSidebar}}}},7776:(t,n,i)=>{i.r(n),i.d(n,{default:()=>e});const a={name:"nzAnnouncement",props:{announcement:Object},data:function(){return{newAnnouncement:this.announcement}},computed:{link:function(){return route("announcements.show",{announcement:this.newAnnouncement.id})}},methods:{sendRequestToMarkAsRead:function(){return axios.post("/api/read-announcements",{announcement_id:this.newAnnouncement.id})},markAsRead:function(){var t=this;this.sendRequestToMarkAsRead().then((function(){t.newAnnouncement=null}))}}};const e=(0,i(1900).Z)(a,(function(){var t=this,n=t._self._c;return t.newAnnouncement?n("article",{staticClass:"message is-info shadow"},[n("div",{staticClass:"message-body flex justify-between"},[n("div",{},[t._v("\n      "+t._s(t.newAnnouncement.title)+"\n    ")]),t._v(" "),n("div",{staticClass:"message-actions"},[n("a",{attrs:{href:t.link}},[t._v("Read more")]),t._v(" "),n("b-icon",{staticClass:"is-clickable",attrs:{icon:"check",title:"Mark as read"},nativeOn:{click:function(n){return t.markAsRead.apply(null,arguments)}}})],1)])]):t._e()}),[],!1,null,null,null).exports},4431:(t,n,i)=>{i.r(n),i.d(n,{default:()=>r});const a={name:"nzDeleteAccounModal",props:{action:String,csrfToken:String}};var e=i(1900);const o=(0,e.Z)(a,(function(){var t=this,n=t._self._c;return n("form",{staticClass:"modal-card",attrs:{action:t.action,method:"POST"}},[n("header",{staticClass:"modal-card-head"},[n("h3",{staticClass:"modal-card-title"},[t._v(t._s(t.trans("navigation.preferences.delete_account")))])]),t._v(" "),n("input",{attrs:{type:"hidden",name:"_token"},domProps:{value:t.csrfToken}}),t._v(" "),n("input",{attrs:{type:"hidden",name:"_method",value:"DELETE"}}),t._v(" "),n("section",{staticClass:"modal-card-body"},[n("p",[t._v(t._s(t.trans("This action is irreversible, once an account is deleted it cannot be restored.")))]),t._v(" "),n("p",[t._v(t._s(t.trans("Are you sure you want to delete your account?")))]),t._v(" "),n("b-field",{staticClass:"mt-8"},[n("b-checkbox",{attrs:{name:"delete_observations"}},[t._v(t._s(t.trans("labels.preferences.account.delete_observations")))])],1)],1),t._v(" "),n("footer",{staticClass:"modal-card-foot"},[n("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(n){return t.$parent.close()}}},[t._v(t._s(t.trans("buttons.cancel")))]),t._v(" "),n("button",{staticClass:"button is-danger",attrs:{type:"submit"}},[t._v(t._s(t.trans("labels.preferences.account.delete_account")))])])])}),[],!1,null,null,null).exports,s={name:"nzDeleteAccountButton",props:{action:String,csrfToken:String},methods:{openModal:function(){this.$buefy.modal.open({parent:this,component:o,hasModalCard:!0,props:{action:this.action,csrfToken:this.csrfToken}})}}};const r=(0,e.Z)(s,(function(){var t=this;return(0,t._self._c)("button",{staticClass:"button is-danger",attrs:{type:"button"},on:{click:t.openModal}},[t._v("\n  "+t._s(t.trans("labels.preferences.account.delete_account"))+"\n")])}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=9b2593718e54fd94.js.map