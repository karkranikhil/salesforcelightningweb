export const xlsxDemoCode = {
    xlsxDemoHTML: `<template>
  <div class="margin-bottom-2rem">
    <lightning-card title="XLSX multi worksheet" icon-name="custom:custom14">
      <div class="slds-m-around_medium">
        <button onclick={download} class="btn success">Download</button>
        <!--xlsxMain component calling-->
        <c-xlsx-main
          header-list={xlsHeader}
          filename={filename}
          worksheet-name-list={workSheetNameList}
          sheet-data={xlsData}
        ></c-xlsx-main>
      </div>
      <div class="container">
        <!--Account Table-->
        <div class="child-container">
          <h1>Account Table</h1>
          <table>
            <tr>
              <template for:each={accountHeader} for:item="header">
                <th key={header}>{header}</th>
              </template>
            </tr>
            <template for:each={accountData} for:item="item">
              <tr key={item.Id}>
                <th>{item.Id}</th>
                <th>{item.Name}</th>
                <th>{item.Phone}</th>
                <th>{item.NumberOfEmployees}</th>
              </tr>
            </template>
          </table>
        </div>
        <!--Contact Table-->
        <div class="child-container">
          <h1>Contact Table</h1>
          <table>
            <tr>
              <template for:each={contactHeader} for:item="header">
                <th key={header}>{header}</th>
              </template>
            </tr>
            <template for:each={contactData} for:item="item">
              <tr key={item.Id}>
                <th>{item.Name}</th>
                <th>{item.Phone}</th>
                <th>{item.Email}</th>
                <th>{item.Title}</th>
                <th>{item.Id}</th>
              </tr>
            </template>
          </table>
        </div>
      </div>
    </lightning-card>
  </div>
</template>
`,
    xlsxDemoJS: `import { LightningElement, track } from "lwc";
import getContactLists from "@salesforce/apex/ContactController.getContactLists";
import getAccountLists from "@salesforce/apex/AccountController.getAccountLists";
export default class XlsxDemo extends LightningElement {
  @track xlsHeader = []; // store all the headers of the the tables
  @track workSheetNameList = []; // store all the sheets name of the the tables
  @track xlsData = []; // store all tables data
  @track filename = "nikhil_demo.xlsx"; // Name of the file
  @track accountData = []; // used only for storing account table
  @track contactData = []; // used only for storing contact table
  
  connectedCallback() {
    //apex call for bringing the contact data  
    getContactLists()
      .then(result => {
        console.log(result);
        this.contactHeader = Object.keys(result[0]);
        this.contactData = [...this.contactData, ...result];
        this.xlsFormatter(result, "Contacts");
      })
      .catch(error => {
        console.error(error);
      });
    //apex call for bringing the account data  
    getAccountLists()
      .then(result => {
        console.log(result);
        this.accountHeader = Object.keys(result[0]);
        this.accountData = [...this.accountData, ...result];
        this.xlsFormatter(result, "Accounts");
      })
      .catch(error => {
        console.error(error);
      });
  }

  // formating the data to send as input to  xlsxMain component
  xlsFormatter(data, sheetName) {
    let Header = Object.keys(data[0]);
    this.xlsHeader.push(Header);
    this.workSheetNameList.push(sheetName);
    this.xlsData.push(data);
  }

   // calling the download function from xlsxMain.js 
  download() {
    this.template.querySelector("c-xlsx-main").download();
  }
}
`,
    xlsxDemoCSS: `table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
h2 span, h1{
    font-size: 24px;
    font-weight: 700;
}
.container{
  display: flex;
}
.child-container{
    flex: 1;
    padding: 20px;
}
.btn {
  border: none; /* Remove borders */
  color: white; /* Add a text color */
  padding: 14px 28px; /* Add some padding */
  cursor: pointer; /* Add a pointer cursor on mouse-over */
}

.success {background-color: #4CAF50;} /* Green */
.success:hover {background-color: #46a049;}`,
    xlsxMainHTML: `<template>
    
</template>`,
    xlsxMainJS: `import { LightningElement, api } from "lwc";
import { loadScript } from "lightning/platformResourceLoader";
import workbook from "@salesforce/resourceUrl/xlsx";
export default class XlsxMain extends LightningElement {
  @api headerList;
  @api filename;
  @api worksheetNameList;
  @api sheetData;
  librariesLoaded = false;
  renderedCallback() {
    console.log("renderedCallback xlsx");
    if (this.librariesLoaded) return;
    this.librariesLoaded = true;
    Promise.all([loadScript(this, workbook + "/xlsx/xlsx.full.min.js")])
      .then(() => {
        console.log("success");
      })
      .catch(error => {
        console.log("failure");
      });
  }
  @api download() {
    const XLSX = window.XLSX;
    let xlsData = this.sheetData;
    let xlsHeader = this.headerList;
    let ws_name = this.worksheetNameList;
    let createXLSLFormatObj = Array(xlsData.length).fill([]);
    //let xlsRowsKeys = [];
    /* form header list */
      xlsHeader.forEach((item, index) => createXLSLFormatObj[index] = [item])
    
    /* form data key list */
      xlsData.forEach((item, selectedRowIndex)=> {
          let xlsRowKey = Object.keys(item[0]);
          item.forEach((value, index) => {
              var innerRowData = [];
              xlsRowKey.forEach(item=>{
                  innerRowData.push(value[item]);
              })
              createXLSLFormatObj[selectedRowIndex].push(innerRowData);
          })

      });
    /* creating new Excel */
    var wb = XLSX.utils.book_new();

    /* creating new worksheet */
    var ws = Array(createXLSLFormatObj.length).fill([]);
    for (let i = 0; i < ws.length; i++) {
      /* converting data to excel format and puhing to worksheet */
      let data = XLSX.utils.aoa_to_sheet(createXLSLFormatObj[i]);
      ws[i] = [...ws[i], data];

      /* Add worksheet to Excel */
      XLSX.utils.book_append_sheet(wb, ws[i][0], ws_name[i]);
    }

    /* Write Excel and Download */
    XLSX.writeFile(wb, this.filename);
  }
}
`,
    xlsxMainMeta: `<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata" fqn="xlsxMain">
    <apiVersion>46.0</apiVersion>
    <isExposed>false</isExposed>
</LightningComponentBundle>
`,
    xlsxDemoMeta: `<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata" fqn="xlsxDemo">
    <apiVersion>46.0</apiVersion>
    <isExposed>true</isExposed>
    <targets>
        <target>lightning__AppPage</target>
        <target>lightning__RecordPage</target>
        <target>lightning__HomePage</target>
    </targets>
</LightningComponentBundle>
`
};
