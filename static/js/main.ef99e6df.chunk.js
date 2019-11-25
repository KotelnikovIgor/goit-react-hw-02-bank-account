(this["webpackJsonpgoit-react-hw-02-bank-account"]=this["webpackJsonpgoit-react-hw-02-bank-account"]||[]).push([[0],{14:function(t,e,a){t.exports={transaction__history:"TransactionHistory_transaction__history__CjZ_f"}},18:function(t,e,a){t.exports=a(27)},27:function(t,e,a){"use strict";a.r(e);var n=a(1),c=a.n(n),r=a(2),o=a.n(r),s=a(9),l=a(15),u=a(10),i=a(11),_=a(16),m=a(12),p=a(17),d=a(13),h=a.n(d),b=a(7),E=a(4),f=a.n(E),w=function(t){var e=t.handleChange,a=t.handleWithdraw,n=t.handleDeposit,r=t.amount;return c.a.createElement("section",{className:f.a.controls},c.a.createElement("input",{className:f.a.input__controls,type:"number",name:"amount",onChange:e,placeholder:"Enter sumt",value:0===r?"":r}),c.a.createElement("button",{className:f.a.button__deposit,onClick:n,type:"button"},"Deposit"),c.a.createElement("button",{className:f.a.button__withdraw,onClick:a,type:"button"},"Withdraw"))},y=a(14),g=a.n(y),v=function(t){var e=t.transactions;return c.a.createElement("table",{className:g.a.transaction__history},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Transaction"),c.a.createElement("th",null,"Amount"),c.a.createElement("th",null,"Date"))),c.a.createElement("tbody",null,e.map((function(t){return c.a.createElement("tr",{key:t.id},c.a.createElement("td",null,t.type),c.a.createElement("td",null,t.amount,"$"),c.a.createElement("td",null,t.date))}))))},C=a(5),N=a.n(C),T=function(t){var e=t.balance,a=t.income,n=t.expenses;return c.a.createElement("section",{className:N.a.balance},c.a.createElement("span",{className:N.a.span__income},"\u2191",a,"$"),c.a.createElement("span",{className:N.a.span__expenses},"\u2193",n,"$"),c.a.createElement("span",{className:N.a.span__balance},"Balance: ",e))},D=function(t){function e(){var t,a;Object(u.a)(this,e);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(_.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(c)))).state={transactions:[],balance:0,amount:0},a.addToTransactions=function(t){var e=a.state.amount,n={id:h()(),type:t,amount:e,date:(new Date).toLocaleString()};a.setState((function(t){return{transactions:[].concat(Object(l.a)(t.transactions),[n])}}))},a.handleDeposit=function(){return 0!==a.state.amount?(a.setState((function(t){return{balance:Number(t.balance)+Number(t.amount)}})),a.addToTransactions("DEPOSIT")):b.b.success("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438!"),a.setState({amount:0})},a.handleWithdraw=function(){a.state.balance>=a.state.amount&&0!==a.state.balance?(a.setState((function(t){return{balance:t.balance-t.amount}})),a.addToTransactions("WITHDRAW")):b.b.error("\u041d\u0430 \u0441\u0447\u0435\u0442\u0443 \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438!")},a.handleChange=function(t){var e=t.target,n=e.name,c=e.value;a.setState(Object(s.a)({},n,+c))},a}return Object(p.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this.state,e=t.balance,a=t.transactions,n=t.amount,r=a.reduce((function(t,e){return"DEPOSIT"===e.type?t+e.amount:t}),0),o=a.reduce((function(t,e){return"WITHDRAW"===e.type?t+e.amount:t}),0);return c.a.createElement("div",null,c.a.createElement(w,{amount:n,handleWithdraw:this.handleWithdraw,handleDeposit:this.handleDeposit,handleChange:this.handleChange}),c.a.createElement(T,{balance:e,income:r,expenses:o}),c.a.createElement(v,{transactions:a}),c.a.createElement(b.a,null))}}]),e}(n.Component),x=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(D,null))};o.a.render(c.a.createElement(x,null),document.getElementById("root"))},4:function(t,e,a){t.exports={controls:"Controls_controls__1QxFz",input__controls:"Controls_input__controls__3LEpu",button__deposit:"Controls_button__deposit__1Nfmo",button__withdraw:"Controls_button__withdraw__1G6SK"}},5:function(t,e,a){t.exports={balance:"Balance_balance__WJE2s",span__income:"Balance_span__income__1r9tL",span__expenses:"Balance_span__expenses__pa_jQ",span__balance:"Balance_span__balance__17c9g"}}},[[18,1,2]]]);
//# sourceMappingURL=main.ef99e6df.chunk.js.map