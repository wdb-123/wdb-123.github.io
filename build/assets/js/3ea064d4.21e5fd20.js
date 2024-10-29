"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[834],{1617:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=r(4848),t=r(8453);const s={sidebar_position:3},a="Python (Windows)",o={id:"eRob driver/python-driver",title:"Python (Windows)",description:"---",source:"@site/docs/eRob driver/python-driver.md",sourceDirName:"eRob driver",slug:"/eRob driver/python-driver",permalink:"/docs/eRob driver/python-driver",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/eRob driver/python-driver.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"TwinCAT3",permalink:"/docs/eRob driver/TwinCAT3"},next:{title:"SOEM (Windows)",permalink:"/docs/eRob driver/SOEM EtherCAT"}},l={},c=[{value:"1. Install pyads",id:"1-install-pyads",level:2},{value:"2. Configure TwinCAT for ADS Communication",id:"2-configure-twincat-for-ads-communication",level:2},{value:"3. Basic Connection Example",id:"3-basic-connection-example",level:2},{value:"Explanation:",id:"explanation",level:3},{value:"4. Reading and Writing Different Data Types",id:"4-reading-and-writing-different-data-types",level:2},{value:"5. Reading and Writing Arrays",id:"5-reading-and-writing-arrays",level:2},{value:"6. Handling Structures",id:"6-handling-structures",level:2},{value:"8. Error Handling",id:"8-error-handling",level:2},{value:"9. Resources and Documentation",id:"9-resources-and-documentation",level:2},{value:"10. Tips and Best Practices",id:"10-tips-and-best-practices",level:2}];function d(e){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"python-windows",children:"Python (Windows)"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h1,{id:"using-python-to-connect-to-twincat",children:"Using Python to Connect to TwinCAT"}),"\n",(0,i.jsxs)(n.p,{children:["To use Python to connect to TwinCAT, you can utilize the ",(0,i.jsx)(n.strong,{children:"pyads"})," library, which allows communication with TwinCAT systems via the ADS (Automation Device Specification) protocol. This library enables you to read and write variables, call functions, and interact with the TwinCAT runtime directly from Python."]}),"\n",(0,i.jsxs)(n.p,{children:["Here's how you can set up and use pyads to connect to TwinCAT:",(0,i.jsx)(n.br,{}),"\n","We provided a simple ",(0,i.jsx)(n.a,{href:"https://git.zeroerr.cn/Don/python2TC",children:"demo"}),"."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"1-install-pyads",children:"1. Install pyads"}),"\n",(0,i.jsx)(n.p,{children:"You can install the pyads library using pip:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pip install pyads\n"})}),"\n",(0,i.jsx)(n.h2,{id:"2-configure-twincat-for-ads-communication",children:"2. Configure TwinCAT for ADS Communication"}),"\n",(0,i.jsx)(n.p,{children:"Before connecting, ensure that your TwinCAT system is configured to accept ADS communication:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Obtain the AMS Net ID and IP Address"})," of your TwinCAT device.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The AMS Net ID is typically in the format ",(0,i.jsx)(n.code,{children:"x.x.x.x.1.1"}),", where ",(0,i.jsx)(n.code,{children:"x.x.x.x"})," is the IP address."]}),"\n",(0,i.jsxs)(n.li,{children:["You can find it in the TwinCAT XAE shell under ",(0,i.jsx)(n.strong,{children:"System > AMS Router > AMS Net ID"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Set up Routes"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"On the TwinCAT system, add an ADS route for your development machine."}),"\n",(0,i.jsxs)(n.li,{children:["Use the ",(0,i.jsx)(n.strong,{children:"TwinCAT Remote Manager"})," or ",(0,i.jsx)(n.strong,{children:"TcAdmin"})," tool to add the route."]}),"\n",(0,i.jsx)(n.li,{children:"Ensure that the firewall settings allow ADS communication."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"3-basic-connection-example",children:"3. Basic Connection Example"}),"\n",(0,i.jsx)(n.p,{children:"Below is an example of how to connect to TwinCAT and read/write variables:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import pyads\n\n# Replace these with your actual AMS Net ID and IP address\nPLC_AMS_NET_ID = '5.80.192.240.1.1'\nPLC_IP_ADDRESS = '192.168.0.1'\n\n# Establish a connection to the TwinCAT device\nplc = pyads.Connection(PLC_AMS_NET_ID, pyads.PORT_TC3PLC1, PLC_IP_ADDRESS)\n\n# Open the connection\nplc.open()\n\n# Read a variable from the PLC\n# Assume there's a global variable named 'GVL.my_int_var' of type INT\nvalue = plc.read_by_name('GVL.my_int_var', pyads.PLCTYPE_INT)\nprint(f\"The value of 'GVL.my_int_var' is: {value}\")\n\n# Write a value to the PLC variable\nplc.write_by_name('GVL.my_int_var', 42, pyads.PLCTYPE_INT)\nprint(\"Updated 'GVL.my_int_var' to 42.\")\n\n# Close the connection when done\nplc.close()\n"})}),"\n",(0,i.jsx)(n.h3,{id:"explanation",children:"Explanation:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"pyads.Connection:"})," Creates a connection object with the specified AMS Net ID, port, and IP address.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"AMS Net ID:"})," Unique identifier for the TwinCAT device."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"pyads.PORT_TC3PLC1:"})," Default port for TwinCAT 3 PLC runtime 1."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"plc.open():"})," Opens the connection."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"read_by_name():"})," Reads the value of a PLC variable by its name."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"write_by_name():"})," Writes a value to a PLC variable."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"plc.close():"})," Closes the connection."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"4-reading-and-writing-different-data-types",children:"4. Reading and Writing Different Data Types"}),"\n",(0,i.jsx)(n.p,{children:"pyads supports various TwinCAT PLC data types:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"# Read a REAL variable\nreal_value = plc.read_by_name('GVL.my_real_var', pyads.PLCTYPE_REAL)\n\n# Read a BOOL variable\nbool_value = plc.read_by_name('GVL.my_bool_var', pyads.PLCTYPE_BOOL)\n\n# Write to a STRING variable\nplc.write_by_name('GVL.my_string_var', 'Hello TwinCAT!', pyads.PLCTYPE_STRING)\n\n"})}),"\n",(0,i.jsx)(n.h2,{id:"5-reading-and-writing-arrays",children:"5. Reading and Writing Arrays"}),"\n",(0,i.jsx)(n.p,{children:"To read or write arrays, specify the number of elements:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"# Read an array of INTs with 10 elements\narray_values = plc.read_by_name('GVL.my_int_array', pyads.PLCTYPE_ARR_INT(10))\n\n# Write to an array of INTs\nplc.write_by_name('GVL.my_int_array', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], pyads.PLCTYPE_ARR_INT(10))\n\n"})}),"\n",(0,i.jsx)(n.h2,{id:"6-handling-structures",children:"6. Handling Structures"}),"\n",(0,i.jsx)(n.p,{children:"For structures, you need to define a ctypes Structure that matches the PLC structure:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import ctypes\n\n# Define the structure in Python\nclass MyStruct(ctypes.Structure):\n    _fields_ = [\n        ('int_var', ctypes.c_int16),\n        ('real_var', ctypes.c_float),\n        ('bool_var', ctypes.c_uint8),\n    ]\n\n# Read the structure\nmy_struct = plc.read_by_name('GVL.my_struct_var', MyStruct)\nprint(f\"Structure values: {my_struct.int_var}, {my_struct.real_var}, {my_struct.bool_var}\")\n\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"7",children:["\n",(0,i.jsx)(n.li,{children:"Using Symbolic Handles\nFor repeated access to the same variable, you can use symbolic handles to improve performance:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"# Get a handle to the variable\nhandle = plc.get_handle('GVL.my_int_var')\n\n# Read the variable using the handle\nvalue = plc.read(handle, pyads.PLCTYPE_INT)\n\n# Write to the variable using the handle\nplc.write(handle, 100, pyads.PLCTYPE_INT)\n\n# Release the handle when done\nplc.release_handle(handle)\n\n"})}),"\n",(0,i.jsx)(n.h2,{id:"8-error-handling",children:"8. Error Handling"}),"\n",(0,i.jsx)(n.p,{children:"Always include error handling to manage exceptions:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'try:\n    plc.open()\n    # Perform read/write operations\nexcept pyads.ADSError as err:\n    print(f"An ADS error occurred: {err}")\nfinally:\n    plc.close()\n\n'})}),"\n",(0,i.jsx)(n.h2,{id:"9-resources-and-documentation",children:"9. Resources and Documentation"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"pyads Documentation:"})," pyads.readthedocs.io"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"GitHub Repository:"})," pyads on GitHub"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"TwinCAT Information System:"})," Beckhoff Info System"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"10-tips-and-best-practices",children:"10. Tips and Best Practices"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Ensure Network Connectivity:"})," Your Python environment and TwinCAT system must be network-accessible to each other."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Firewall Settings:"})," Configure firewalls to allow ADS communication on the required ports."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Variable Names:"})," Use fully qualified names for variables, including namespaces if necessary."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Data Types:"})," Match the PLC data types with the appropriate pyads PLCTYPE constants."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Test Connectivity:"})," Use TwinCAT's tools to verify that the route is correctly set up and the device is reachable."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>o});var i=r(6540);const t={},s=i.createContext(t);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);