(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{15:function(e,c,t){},16:function(e,c,t){"use strict";t.r(c);var r=t(1),i=t.n(r),a=t(8),n=t.n(a),s=t(9),o=t(2),d=t(3),l=t.p+"static/media/landing-02.832560b3.png",j=t(0);function b(){return Object(j.jsxs)("div",{className:"landing_wrapper",children:[Object(j.jsx)("div",{className:"landing_heading_text",children:Object(j.jsxs)("h3",{children:["SUPER ",Object(j.jsx)("span",{children:"BOWL"})]})}),Object(j.jsx)("div",{className:"landing_heading_img",children:Object(j.jsx)("img",{src:l,alt:"hand with bowl"})}),Object(j.jsx)("div",{className:"landing_button",children:Object(j.jsx)("a",{href:"#start",children:Object(j.jsx)("button",{href:"start",children:"Order Here "})})})]})}var u=t(6);function m(){return Object(j.jsxs)("nav",{children:[Object(j.jsx)("div",{className:"menu",children:Object(j.jsx)(u.b,{})}),Object(j.jsx)("div",{className:"logo",children:Object(j.jsx)("p",{children:"S / P"})}),Object(j.jsx)("div",{className:"links",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:"Home"}),Object(j.jsx)("li",{children:"Products"}),Object(j.jsx)("li",{children:"Gallery"}),Object(j.jsx)("li",{className:"contact",children:"Contact us"})]})}),Object(j.jsx)("div",{className:"basket_show"})]})}function p(e){var c=e.product,t=e.onAdd;return Object(j.jsxs)("div",{className:"card",onClick:function(){return t(c)},children:[Object(j.jsx)("div",{className:"card_img",children:Object(j.jsx)("img",{src:c.image,alt:c.name})}),Object(j.jsxs)("div",{className:"card_details",children:[Object(j.jsxs)("div",{className:"card_description",children:[Object(j.jsx)("h2",{children:c.name}),Object(j.jsx)("p",{children:c.description}),Object(j.jsxs)("p",{children:[c.currency,c.price]})]}),Object(j.jsx)("div",{className:"overlay",children:Object(j.jsx)("div",{className:"text",children:Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{children:["Calories: ",c.calorie,"g"]}),Object(j.jsxs)("li",{children:["Carbs: ",c.carbs,"g"]}),Object(j.jsxs)("li",{children:["Fat: ",c.fat,"g"]}),Object(j.jsxs)("li",{children:["Protein: ",c.protein,"g"]})]})})})]}),Object(j.jsx)("div",{className:"card_button",children:Object(j.jsx)("button",{children:"Add To Cart"})})]})}function h(e){var c=e.products,t=e.onAdd,i=Object(r.useState)(c),a=Object(d.a)(i,2),n=a[0],s=a[1];return window.onscroll=function(){window.scrollY+window.innerHeight>=document.documentElement.scrollHeight&&s(n.concat(n))},Object(j.jsxs)("main",{id:"start",children:[Object(j.jsxs)("div",{className:"product_filter",children:[Object(j.jsx)("div",{className:"filter_label",children:Object(j.jsx)("h3",{children:" Filter by: "})}),Object(j.jsx)("div",{className:"filter_buttons",children:["All","Low Calorie","Low Carb","Low Fat"].map((function(e){return Object(j.jsx)("button",{type:"button",onClick:function(){var t=c.filter((function(c){return"All"===e?c:c.category===e}));s(t),console.log(t)},className:"btn",children:e})}))})]}),Object(j.jsx)("div",{className:"product_show",children:n.map((function(e,c){return Object(j.jsx)(p,{product:e,onAdd:t},c)}))})]})}function g(e){var c=Object(r.useState)(!1),t=Object(d.a)(c,2),i=t[0],a=t[1],n=e.countCartItems,s=e.cartItems,o=e.onAdd,l=e.onRemove,b=s.reduce((function(e,c){return e+c.qty*c.price}),0);return Object(j.jsxs)("div",{className:"cart_wrapper",children:[Object(j.jsxs)("div",{className:"basket",children:[Object(j.jsx)(u.a,{size:18,onClick:function(){return a(!i)}}),n?Object(j.jsx)("button",{className:"badge",children:n}):""]}),i&&Object(j.jsxs)("div",{className:"cart_show",children:[Object(j.jsx)("h2",{children:"Order Summary"}),Object(j.jsxs)("div",{children:[0===s.length&&Object(j.jsx)("div",{children:"Cart is empty"}),s.map((function(e){return Object(j.jsxs)("div",{className:"cart_products",children:[Object(j.jsx)("div",{children:e.name}),Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{onClick:function(){return l(e)},className:"remove",children:"-"})," ",Object(j.jsx)("button",{onClick:function(){return o(e)},className:"add",children:"+"})]}),Object(j.jsxs)("div",{children:[e.qty," x \u20ac",e.price.toFixed(2),Object(j.jsx)("hr",{})]})]},e.id)})),0!==s.length&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:Object(j.jsx)("strong",{children:"Total Price"})}),Object(j.jsx)("div",{children:Object(j.jsxs)("strong",{children:["\u20ac",b.toFixed(2)]})})]}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{onClick:function(){return alert("Implement Checkout!")},children:"Checkout"})})]})]})]})]})}var O=[{id:1,name:"Instant Pot-Sushi Rice",description:"Carb Fuel on the Go!",price:12,currency:"\u20ac",image:"./img/01.png",calorie:377,carbs:520,fat:68,protein:22,category:"Low Calorie"},{id:2,name:"The Perfect Nourishing Bowl",description:"A perfect start for the day",price:15,currency:"\u20ac",image:"./img/02.png",calorie:357,carbs:76,fat:13,protein:39,category:"Low Carb"},{id:3,name:"Farro & Pepita Lime Sauce",description:"A great mix of sweet and citrus.",price:18,currency:"\u20ac",image:"./img/03.png",calorie:380,carbs:78,fat:42,protein:9,category:"Low Fat"},{id:4,name:"Easy Caesar Salad",description:"Classic with a twist.",price:16,currency:"\u20ac",image:"./img/04.png",calorie:375,carbs:88,fat:19,protein:23,category:"Low Fat"},{id:5,name:"Salad and Greens",description:"Just the right push to a fitter you.",price:15,currency:"\u20ac",image:"./img/05.png",calorie:276,carbs:79,fat:22,protein:25,category:"Low Calorie"},{id:6,name:"Vegan Buddha Bowl",description:"Perfect even for non vegans!",price:16,currency:"\u20ac",image:"./img/06.png",calorieCount:489,carbs:18,fat:31,protein:31,category:"Low Carb"},{id:7,name:"Instant Pot-Sushi Rice",description:"Carb Fuel on the Go!",price:12,currency:"\u20ac",image:"./img/01.png",calorie:377,carbs:520,fat:68,protein:22,category:"Low Calorie"},{id:8,name:"The Perfect Nourishing Bowl",description:"A perfect start for the day",price:15,currency:"\u20ac",image:"./img/02.png",calorie:357,carbs:76,fat:13,protein:39,category:"Low Carb"},{id:9,name:"Farro & Pepita Lime Sauce",description:"A great mix of sweet and citrus.",price:18,currency:"\u20ac",image:"./img/03.png",calorie:380,carbs:78,fat:42,protein:9,category:"Low Fat"},{id:10,name:"Easy Caesar Salad",description:"Classic with a twist.",price:16,currency:"\u20ac",image:"./img/04.png",calorie:375,carbs:88,fat:19,protein:23,category:"Low Fat"},{id:11,name:"Salad and Greens",description:"Just the right push to a fitter you.",price:15,currency:"\u20ac",image:"./img/05.png",calorie:276,carbs:79,fat:22,protein:25,category:"Low Calorie"},{id:12,name:"Vegan Buddha Bowl",description:"Perfect even for non vegans!",price:16,currency:"\u20ac",image:"./img/06.png",calorieCount:489,carbs:18,fat:31,protein:31,category:"Low Carb"},{id:13,name:"Instant Pot-Sushi Rice",description:"Carb Fuel on the Go!",price:12,currency:"\u20ac",image:"./img/01.png",calorie:377,carbs:520,fat:68,protein:22,category:"Low Calorie"},{id:14,name:"The Perfect Nourishing Bowl",description:"A perfect start for the day",price:15,currency:"\u20ac",image:"./img/02.png",calorie:357,carbs:76,fat:13,protein:39,category:"Low Carb"},{id:15,name:"Farro & Pepita Lime Sauce",description:"A great mix of sweet and citrus.",price:18,currency:"\u20ac",image:"./img/03.png",calorie:380,carbs:78,fat:42,protein:9,category:"Low Fat"},{id:16,name:"Easy Caesar Salad",description:"Classic with a twist.",price:16,currency:"\u20ac",image:"./img/04.png",calorie:375,carbs:88,fat:19,protein:23,category:"Low Fat"},{id:17,name:"Salad and Greens",description:"Just the right push to a fitter you.",price:15,currency:"\u20ac",image:"./img/05.png",calorie:276,carbs:79,fat:22,protein:25,category:"Low Calorie"},{id:18,name:"Vegan Buddha Bowl",description:"Perfect even for non vegans!",price:16,currency:"\u20ac",image:"./img/06.png",calorieCount:489,carbs:18,fat:31,protein:31,category:"Low Carb"}];t(15);var x=function(){var e=Object(r.useState)([]),c=Object(d.a)(e,2),t=c[0],i=c[1],a=function(e){var c=t.find((function(c){return c.id===e.id}));i(c?t.map((function(t){return t.id===e.id?Object(o.a)(Object(o.a)({},c),{},{qty:c.qty+1}):t})):[].concat(Object(s.a)(t),[Object(o.a)(Object(o.a)({},e),{},{qty:1})]))};return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("div",{className:"front",children:[Object(j.jsx)(m,{}),Object(j.jsx)(g,{cartItems:t,onAdd:a,onRemove:function(e){var c=t.find((function(c){return c.id===e.id}));1===c.qty?i(t.filter((function(c){return c.id!==e.id}))):i(t.map((function(t){return t.id===e.id?Object(o.a)(Object(o.a)({},c),{},{qty:c.qty-1}):t})))},countCartItems:t.length}),Object(j.jsx)(b,{}),Object(j.jsx)(h,{products:O,onAdd:a})]}),Object(j.jsx)("div",{className:"circle"})]})};n.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.06c8a039.chunk.js.map