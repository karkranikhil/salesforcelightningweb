import { LightningElement } from 'lwc';
//import Prism from "prismjs";
export default class Setup extends LightningElement {
    // @track url = "https://gist.github.com/dancinllama/99ebc1c9afeb5d1243920552f0d7ed08.js"
    // @ track fileName ="javascript"
    // get test(){
    //     return `<!DOCTYPE html>
    //     <html lang="en">
    //     <head>
    //         <meta charset="utf-8" />
    //         <title>Dynamic Gist Embedding</title>
    //     </head>
    //     <body>
    //     <p>
    //         <label for="gistList">Gists</label>
    //         <select id="gistList">
    //             <option value="">Select a Gist</option>
    //             <option value="906758">Get a Twitter user's avatar using PHP</option>
    //             <option value="785770">How to PHP regex match an HTML document's title</option>
    //             <option value="785766">How to PHP regex match an HTML document's meta description</option>
    //         </select>
    //     </p>
    //     <div id="gistZone"></div>
    //     <script type="text/javascript">
    //         document.getElementById("gistList").onchange = function(e) {
    //             if (e.target.value) {
    //                 // Create an iframe, append it to this document where specified
    //                 var gistFrame = document.createElement("iframe");
    //                 gistFrame.setAttribute("width", "100%");
    //                 gistFrame.id = "gistFrame";
    //                 var zone = document.getElementById("gistZone");
    //                 zone.innerHTML = "";
    //                 zone.appendChild(gistFrame);
    //                 // Create the iframe's document
    //                 var gistFrameHTML = '<html><body onload="parent.adjustIframeSize(document.body.scrollHeight)"><scr' + 'ipt type="text/javascript" src="https://gist.github.com/' + e.target.value + '.js"></sc'+'ript></body></html>';
    //                 // Set iframe's document with a trigger for this document to adjust the height
    //                 var gistFrameDoc = gistFrame.document;
    //                 if (gistFrame.contentDocument) {
    //                     gistFrameDoc = gistFrame.contentDocument;
    //                 } else if (gistFrame.contentWindow) {
    //                     gistFrameDoc = gistFrame.contentWindow.document;
    //                 }
    //                 gistFrameDoc.open();
    //                 gistFrameDoc.writeln(gistFrameHTML);
    //                 gistFrameDoc.close();
    //                 console.log("iframe added");
    //             }
    //         }
    //         function adjustIframeSize(newHeight) {
    //             var i = document.getElementById("gistFrame");
    //             i.style.height = parseInt(newHeight) + "px";
    //             console.log("size adjusted", newHeight);
    //         }
    //     </script>
    //     </body>
    //     </html>`
    // }
}
