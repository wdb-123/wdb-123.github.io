---
sidebar_position: 4
---

# SOEM (Windows)
---
## Prerequisites
- **1.Windows Operating System:** A 64-bit version of Windows 7, 8, 10, or later.
- **2.Visual Studio:** Microsoft Visual Studio 2017 or newer (Community, Professional, or Enterprise editions).
- **3.WinPcap or Npcap:** A packet capture library that allows applications to capture and transmit network packets bypassing the protocol stack.
---

## Step-by-Step Guide

### 1. Install Required Software

#### a. Install Visual Studio
- Download and install Visual Studio Community Edition if you don't have it installed.
- During installation, ensure that you include the Desktop development with C++ workload.
#### b. Install WinPcap or Npcap
- WinPcap has been deprecated and is no longer maintained. It's recommended to use Npcap.
- Download Npcap from the [official website](https://npcap.com/) and install it.
- During installation, ensure the following options are selected:
  - Install Npcap in WinPcap API-compatible Mode
  - Support raw 802.11 traffic (and monitor mode) for WiFi adapters (if required)

### 2. Download SOEM Source Code
Clone the SOEM repository from GitHub:

``` bash
git clone https://github.com/OpenEtherCATsociety/SOEM.git
```
Alternatively, download the ZIP archive from the [SOEM GitHub page](https://github.com/OpenEtherCATsociety/SOEM) and extract it.
And unzip this archive in your computer.

### 3. Start a Visual Studio command prompt
Start a Visual Studio command prompt then:

``` bash
mkdir build
cd build
cmake .. -G "NMake Makefiles"
nmake
```

