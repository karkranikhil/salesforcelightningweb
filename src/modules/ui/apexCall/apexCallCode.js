export const apexCallCode = {
    controller: `public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList() {
        return [SELECT Id, Name, AccountNumber, Phone FROM Account LIMIT 10];
    }
}`,
    lwcHTML1: `</template>
    <template if:true={accounts.data}>
        <div class="card">
            <h3 class="header">Account details List</h3>
            <template for:each={accounts.data} for:item="acc">
                    <p key={acc.Id} class="title">{acc.Name}</p>
                </template>
            <h3 class="footer">Wire a property Demo</h3>
        </div>
    </template>
</template>`,
    lwcJS1: `
import { LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList';
export default class WirePropertyDemo extends LightningElement {
    @wire(getAccountList) accounts;
}`,
    lwcCSS: `.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 500px;
    margin: auto;
    text-align: center;
    font-family: arial;
    background: #fff;
  }
  
  .title {
    color: grey;
    font-size: 18px;
  }
  
  h3.header{
      background-color: #000;
      color: #fff;
      padding: 10px;
  }
  h3.footer{
      background-color:#bd34349c;
      color: #fff;
      padding: 10px;
  
  }`,
    lwcXML: `<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata" fqn="WirePropertyDemo">
     <apiVersion>45.0</apiVersion>
    <isExposed>true</isExposed>
    <targets>
        <target>lightning__AppPage</target>
        <target>lightning__RecordPage</target>
        <target>lightning__HomePage</target>
    </targets>
</LightningComponentBundle>`,
    controller2: `public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList() {
        return [SELECT Id, Name, AccountNumber, Phone FROM Account LIMIT 10];
    }
}`,
    lwcHTML2: `</template>
<template if:true={accounts.data}>
<div class="card">
        <h3 class="header">Account details List</h3>
        <template for:each={accounts.data} for:item="acc">
                <div key={acc.Id} class="title">
                    <div>{acc.Name}</div>
                    <div>{acc.AccountNumber}</div>
                    <div>{acc.Phone}</div>
                </div>
            </template>
        <h3 class="footer">Wire to a Function Demo</h3>
    </div>
</template>
</template>`,
    lwcJS2: `
import { LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList';
export default class WireFunctionDemo extends LightningElement {
        @wire(getAccountList)
        wiredAccounts({ error, data }) {
            if (data) {
                this.accounts = data;
            } else if (error) {
                console.log(error);
            }
        }
    }`,
    lwcCSS2: `
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 500px;
  margin: auto;
  text-align: center;
  font-family: arial;
  background: #fff;
}

.title {
  color: grey;
  font-size: 18px;
  display: flex;
  justify-content: space-between;

}

h3.header{
    background-color: #2196F3;;
    color: #fff;
    padding: 10px;
}
h3.footer{
	background-color:#4CAF50;
    color: #fff;
    padding: 10px;

}`,
    lwcXML2: `<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata" fqn="WireFunctionDemo">
     <apiVersion>45.0</apiVersion>
    <isExposed>true</isExposed>
    <targets>
        <target>lightning__AppPage</target>
        <target>lightning__RecordPage</target>
        <target>lightning__HomePage</target>
    </targets>
</LightningComponentBundle>`,

    controller3: `public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList() {
        return [SELECT Id, Name, AccountNumber, Phone FROM Account LIMIT 10];
    }
}`,
    lwcHTML3: `<template>
<div class="container">
<button onclick={handleLoad} class="btn info">Load Accounts details</button>


        <table>
            <template if:true={accountDetailsLoad}>
            <tr class="header">
                <th style="width:30%">Name</th>
                <th>Id</th>
                <th>AccountNumber</th>
                <th>Phone Number</th>
            </tr>   
        </template>
        <template for:each={accounts} for:item='acc'>
                 <tr key={acc.Id}>
                    <td>{acc.Name}</td>
                    <td>{acc.Id}</td>
                    <td>{acc.AccountNumber}</td>
                    <td>{acc.Phone}</td>
                </tr>
        </template>
    </table>
</div> 
</template>
`,
    lwcJS3: `import { LightningElement, track } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList';

export default class ApexImperativeDemo extends LightningElement {
    @track accounts;
    @track accountDetailsLoad = false;
    handleLoad() {
        getAccountList()
            .then(result => {
                this.accounts = result;
                this.accountDetailsLoad = true
            })
            .catch(error => {
                console.error(error)
            });
    }

}`,
    lwcCSS3: `  .container{
    background:#dedede;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    border: 1px solid #ddd;
  }
  .header{
    background: #4CAF50;
    color: #fff;
  }
  th, td {
    text-align: center;
    padding: 16px;
  }
  
  th:first-child, td:first-child {
    text-align: left;
  }
  
  tr:nth-child(even) {
    background-color: #f2f2f2
  }
  .btn {
    border: none; /* Remove borders */
    color: white; /* Add a text color */
    padding: 14px 28px; /* Add some padding */
    cursor: pointer; /* Add a pointer cursor on mouse-over */
    margin: auto;
    display: flex;
  }
  .info {background-color: #2196F3;} /* Blue */
.info:hover {background: #0b7dda;}`,
    lwcXML3: `<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata" fqn="ApexImperativeDemo">
     <apiVersion>45.0</apiVersion>
    <isExposed>true</isExposed>
    <targets>
        <target>lightning__AppPage</target>
        <target>lightning__RecordPage</target>
        <target>lightning__HomePage</target>
    </targets>
</LightningComponentBundle>`
};
