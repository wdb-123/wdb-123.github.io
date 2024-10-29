"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6301],{3871:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=o(4848),r=o(8453);const s={sidebar_position:8},t="CANopen protocol (Linux)",a={id:"eRob driver/CANopen-Linux",title:"CANopen protocol (Linux)",description:"Comprehensive Guide to Using CANopen in ROS2",source:"@site/docs/eRob driver/CANopen-Linux.md",sourceDirName:"eRob driver",slug:"/eRob driver/CANopen-Linux",permalink:"/docs/eRob driver/CANopen-Linux",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/eRob driver/CANopen-Linux.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"CAN driver (Linux)",permalink:"/docs/eRob driver/CAN-Linux"},next:{title:"eRob developer",permalink:"/docs/category/erob-developer"}},c={},d=[{value:"1. Understanding the Basics of CANopen and ROS2",id:"1-understanding-the-basics-of-canopen-and-ros2",level:2},{value:"2. Environment Setup",id:"2-environment-setup",level:2},{value:"2.2 Installing CANopen-Related Packages",id:"22-installing-canopen-related-packages",level:3},{value:"4. Configuring the CAN Interface",id:"4-configuring-the-can-interface",level:2},{value:"4.2 Setting Up the CAN Interface",id:"42-setting-up-the-can-interface",level:3},{value:"5. Configuring ros2_canopen",id:"5-configuring-ros2_canopen",level:2},{value:"5.1 Creating a Configuration File",id:"51-creating-a-configuration-file",level:3},{value:"5.2 Configuring the Object Dictionary",id:"52-configuring-the-object-dictionary",level:3},{value:"6. Launching the CANopen Node",id:"6-launching-the-canopen-node",level:2},{value:"7. Communicating with CANopen Devices Using ROS2 Nodes",id:"7-communicating-with-canopen-devices-using-ros2-nodes",level:2},{value:"7.1 Example: Controlling a Motor",id:"71-example-controlling-a-motor",level:3},{value:"8. Troubleshooting",id:"8-troubleshooting",level:2},{value:"9. References",id:"9-references",level:2}];function l(e){const n={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"canopen-protocol-linux",children:"CANopen protocol (Linux)"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Comprehensive Guide to Using CANopen in ROS2"}),"\nThe following is a detailed step-by-step guide on using CANopen to drive eRob in ROS2, including CAN hardware recommendations."]}),"\n",(0,i.jsx)(n.h2,{id:"1-understanding-the-basics-of-canopen-and-ros2",children:"1. Understanding the Basics of CANopen and ROS2"}),"\n",(0,i.jsx)(n.p,{children:"CANopen: A high-level communication protocol based on CAN (Controller Area Network), widely used in industrial automation, robotic control, and other fields. It defines communication standards between devices, including node management, data transfer, synchronization, and more.\nROS2: The second version of the Robot Operating System, providing a modular, distributed framework for robot software development. It supports various communication protocols and middleware."}),"\n",(0,i.jsx)(n.h2,{id:"2-environment-setup",children:"2. Environment Setup"}),"\n",(0,i.jsx)(n.p,{children:"2.1 Installing ROS2\nEnsure that ROS2 is installed. Below is an example using ROS2 Humble:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# Source ROS2 environment\nsource /opt/ros/humble/setup.bash\n\n# Create a workspace\nmkdir -p ~/ros2_ws/src\ncd ~/ros2_ws\ncolcon build\nsource install/setup.bash\n"})}),"\n",(0,i.jsx)(n.h3,{id:"22-installing-canopen-related-packages",children:"2.2 Installing CANopen-Related Packages"}),"\n",(0,i.jsx)(n.p,{children:"Use the ros2_canopen package, which is the primary package for CANopen communication support in ROS2."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# Clone the ros2_canopen repository\ncd ~/ros2_ws/src\ngit clone https://github.com/ros2-canopen/ros2_canopen.git\n\n# Install dependencies\ncd ~/ros2_ws\nrosdep install --from-paths src --ignore-src -r -y\n\n# Build the workspace\ncolcon build\nsource install/setup.bash\n"})}),"\n",(0,i.jsx)(n.p,{children:"##3. Hardware Preparation"}),"\n",(0,i.jsx)(n.p,{children:"Compatibility: Ensure the hardware supports SocketCAN, as ros2_canopen relies on SocketCAN for communication.\nDriver Support: Check if the selected hardware has good Linux driver support, especially for SocketCAN.\nPerformance Requirements: Choose appropriate baud rates and the number of channels based on application scenarios, such as high-frequency communication or multi-node networks.\nPhysical Interface: Confirm the type of physical interface (e.g., USB, PCIe, SPI) and ensure compatibility with your system.\nStability and Reliability: For industrial applications, select proven industrial-grade hardware to ensure long-term stable operation.\nBudget: Choose cost-effective hardware based on the project budget. Beginners can opt for lower-priced and easily accessible options like USBtin or CANtact."}),"\n",(0,i.jsx)(n.h2,{id:"4-configuring-the-can-interface",children:"4. Configuring the CAN Interface"}),"\n",(0,i.jsx)(n.p,{children:"###4.1 Installing Necessary Drivers\nDepending on the CAN interface hardware used, install the corresponding drivers. For example, using SocketCAN:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install can-utils\n"})}),"\n",(0,i.jsx)(n.h3,{id:"42-setting-up-the-can-interface",children:"4.2 Setting Up the CAN Interface"}),"\n",(0,i.jsx)(n.p,{children:"Assuming the use of the can0 interface, set the baud rate (e.g., 500kbps):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo ip link set can0 type can bitrate 500000\nsudo ip link set can0 up\n"})}),"\n",(0,i.jsx)(n.p,{children:"Check the interface status:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"ifconfig can0\n"})}),"\n",(0,i.jsx)(n.h2,{id:"5-configuring-ros2_canopen",children:"5. Configuring ros2_canopen"}),"\n",(0,i.jsx)(n.h3,{id:"51-creating-a-configuration-file",children:"5.1 Creating a Configuration File"}),"\n",(0,i.jsx)(n.p,{children:"Create a configuration file in the ROS2 workspace to define CANopen network parameters and node configurations."}),"\n",(0,i.jsx)(n.p,{children:"For example, create config/canopen_config.yaml:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'canopen:\n  interface: can0\n  node_id: 1\n  bitrate: 500000\n  devices:\n    - node_id: 2\n      description: "Motor Controller"\n      # Additional device-specific configurations\n    - node_id: 3\n      description: "Sensor"\n      # Additional device-specific configurations\n'})}),"\n",(0,i.jsx)(n.h3,{id:"52-configuring-the-object-dictionary",children:"5.2 Configuring the Object Dictionary"}),"\n",(0,i.jsx)(n.p,{children:"CANopen devices define communication objects through an Object Dictionary. Ensure that each device's Object Dictionary file (usually .eds or .xdc files) is correctly configured and referenced in the ros2_canopen configuration."}),"\n",(0,i.jsx)(n.h2,{id:"6-launching-the-canopen-node",children:"6. Launching the CANopen Node"}),"\n",(0,i.jsx)(n.p,{children:"Use the launch file provided by ros2_canopen to start the CANopen master node:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"ros2 launch ros2_canopen canopen_launch.py config:=<path_to_config_file>\n"})}),"\n",(0,i.jsx)(n.p,{children:"For example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"ros2 launch ros2_canopen canopen_launch.py config:=~/ros2_ws/src/your_package/config/canopen_config.yaml\n"})}),"\n",(0,i.jsx)(n.h2,{id:"7-communicating-with-canopen-devices-using-ros2-nodes",children:"7. Communicating with CANopen Devices Using ROS2 Nodes"}),"\n",(0,i.jsx)(n.p,{children:"The ros2_canopen package provides various interfaces to interact with CANopen devices, including:"}),"\n",(0,i.jsx)(n.p,{children:"Services: Such as node management, synchronization, etc.\nTopics: For real-time data transmission, such as sensor data, motor status, etc.\nActions: For operations requiring feedback and results, such as position control."}),"\n",(0,i.jsx)(n.h3,{id:"71-example-controlling-a-motor",children:"7.1 Example: Controlling a Motor"}),"\n",(0,i.jsx)(n.p,{children:"Assuming a motor controller is a CANopen slave device with node ID 2. You can use the interfaces provided by ros2_canopen to publish target positions:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'# Publish target position to the motor controller\nros2 topic pub /motor_controller/target_position std_msgs/Float32 "data: 1.0"\n'})}),"\n",(0,i.jsx)(n.p,{children:"###7.2 Example: Reading Sensor Data\nAssuming a sensor is a CANopen slave device with node ID 3. You can subscribe to the sensor data topic:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"ros2 topic echo /sensor/data\n"})}),"\n",(0,i.jsx)(n.h2,{id:"8-troubleshooting",children:"8. Troubleshooting"}),"\n",(0,i.jsx)(n.p,{children:"CAN Interface Not Started: Ensure that the CAN interface is correctly configured and in the UP state."}),"\n",(0,i.jsx)(n.p,{children:"Node ID Conflicts: Ensure that each device on the network has a unique node ID."}),"\n",(0,i.jsx)(n.p,{children:"Incorrect Object Dictionary Configuration: Verify that each device's Object Dictionary file is correct and matches the ros2_canopen configuration."}),"\n",(0,i.jsx)(n.p,{children:"Communication Issues: Use the candump tool to check the data flow on the CAN bus:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"candump can0\n"})}),"\n",(0,i.jsx)(n.h2,{id:"9-references",children:"9. References"}),"\n",(0,i.jsxs)(n.p,{children:["ros2_canopen GitHub Repository",(0,i.jsx)(n.br,{}),"\n","SocketCAN Official Documentation",(0,i.jsx)(n.br,{}),"\n","CANopen Protocol Specification",(0,i.jsx)(n.br,{}),"\n","Hardware Vendor Websites:",(0,i.jsx)(n.br,{}),"\n","Peak Systems",(0,i.jsx)(n.br,{}),"\n","Kvaser",(0,i.jsx)(n.br,{}),"\n","IXXAT",(0,i.jsx)(n.br,{}),"\n","BeagleBone",(0,i.jsx)(n.br,{}),"\n","Raspberry Pi",(0,i.jsx)(n.br,{}),"\n","Community Forums and Support:",(0,i.jsx)(n.br,{}),"\n","ROS Discourse",(0,i.jsx)(n.br,{}),"\n","CANopen Community",(0,i.jsx)(n.br,{}),"\n","Summary"]}),"\n",(0,i.jsx)(n.p,{children:"By following the steps outlined above, you can successfully integrate and use CANopen in ROS2 to communicate with various industrial devices. Selecting the appropriate CAN interface hardware is crucial for system stability and performance. Common choices include SocketCAN-compatible devices from brands like Peak Systems, Kvaser, IXXAT, as well as various embedded development boards and industrial-grade interfaces. Depending on your specific application scenario, you may need to further adjust configuration files and develop custom ROS2 nodes to meet specific requirements."}),"\n",(0,i.jsx)(n.p,{children:"If you encounter any issues during integration, it is recommended to refer to the relevant documentation, community forums, or seek developer support."})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>t,x:()=>a});var i=o(6540);const r={},s=i.createContext(r);function t(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);