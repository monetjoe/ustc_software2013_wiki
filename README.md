# USTC-Software 2013 Wiki

The source code of remade [USTC-Software 2013](https://github.com/igemsoftware/USTC-Software2013) wiki

[![license](https://img.shields.io/github/license/monetjoe/ustc_software2013_wiki)](https://github.com/monetjoe/ustc_software2013_wiki/blob/master/LICENSE)
[![pages-build-deployment](https://github.com/monetjoe/ustc_software2013_wiki/actions/workflows/pages/pages-build-deployment/badge.svg?branch=main)](https://github.com/monetjoe/ustc_software2013_wiki/actions/workflows/pages/pages-build-deployment)
[![github](https://img.shields.io/badge/GitHub-USTC--Software2013-15191f.svg)](https://github.com/igemsoftware/USTC-Software2013)
[![igem](https://img.shields.io/badge/iGEM-2013-009966.svg)](https://github.com/igemsoftware/USTC-Software2013)
[![wiki](https://img.shields.io/badge/wiki-GitHub_Pages-34495e.svg)](https://github.com/igemsoftware/USTC-Software2013)

We are USTC-Software, a team from University of Science and Technology of China. We will be competing in iGEM 2013!

## Introduction
Our application aims to simulate gene networks. The application analyzes the stability and the change of gene networks after introduction of exogenous genes. Meanwhile, given the original network and specific purposes, the application traces the regulative process back and gives possible regulative patterns.

## About Our Software
### gNAP: Gene Network Analyse and Predict
This software contains four parts, dealing with separate functions in forward and backward modeling of GRN (Gene Regulatory Network) analyse.
1. Start
2. Monitor
3. Result
4. Display

#### Start
>**Start** is used to prepare for the later analysis and prediction. In this part, users could input their database downloaded on Internet and sequences of exogenous gene which is needed to analyse. Also, if not input sequence in **Start**, users could also use the "Predict" function in next part.

#### Monitor
>**Monitor** undertakes several functions of our software as the core methods of **gNAP**. First of them is **Analyse** function which figure out the network change when input an exogenous gene. In the same time a score presenting stablility of new GRN by statist stable time and value variation for lots of times. **Analyse** result could be saw intuitively in **Result** part next. Secondly, **Predict** function use target gene exprssion to figure out possible interaction whose result could also receive in **Result**.

#### Result
>**Result** is a output part which contains all results of operations used. It is easy to read each gene's information and changing consequence in this part. What's more, all gene information could be output in [SBOL](https://www.sbolstandard.org).

#### Display
>**Display** is the data visualization part of our software. To reach a more vivid output data, this part had been written in JAVA. There are three parts in **Display**: ShowRegulation, ShowChange and ShowNetwork.

### gFinder: Gene Finder
This software helps the biologists choosing a specific gene satisfying the regulation which they needs.

### gRNA: Gene Regulatory Network Analist
This is a small game about the analysis of gene regulatory network. Through analyzing the change of each gene's expression strength, you should figure out the interactions between them.

## Floder Structure
Executable:
```bash
/Executable/gNAP/Windows/
This floder contains the .exe file of "gNAP" on Windows.
```
```bash
/Executable/gNAP/Linux/
This floder contains the executable program file of "gNAP" on Linux.
```
```bash
/Executable/gNAP/Mac OS/
This floder contains the executable program file of "gNAP" on Mac OS.
```
```bash
/Executable/gFinder/
gFinder is a website software which do not need to executable program. Website:https://www.stlover.org/gFinder
```
```bash
/Executable/gRNA/
This floder contains the executable program file of "gFinder" which could be ran on all those platforms.
```

Source Code:
```bash
/Source Code/gNAP/
This floder contains the source code files of "gNAP". 
The command line source files were written in C++ language and its GUI were written in C++ language with Qt Creator.
```
```bash
/Source Code/gNAP/visualization/
This floder contains the source code files of "gNAP"'s visualization part. 
The command line source files were written in Java language.
```
```bash
/Source Code/gNAP/DAVID/
This part is still testing, so it is not included in our software. 
This floder contains the source code files of searching DAVID database.
```
```bash
/Source Code/gFinder/
This floder contains the source code files of "gFinder". 
The command line source files were written in C++ language and its GUI were embedded in a website.
```
```bash
/Source Code/gRNA/
This floder contains the source code files of "gRNA" which were written in Java language.
```

Source Data:
```bash
/Source Data/
This floder contains the source data files of "gRNA".
The example database can be downloaded from RegulonDB. 
The data which used in "gNAP" is flexible. All database in those form could be read in our software.
```

## How to Compile
To compile our source code, you should have:
* Qt   (we use version 5.1.0, which can be found [here](https://qt-project.org/downloads))
* Java (you can get install jre [here](https://www.java.com))
* ant  (the compile tool)
* jse  (include jdk and etc.)

### Compile gNAP
The GUI source files are written in C++ language with Qt Creator and the operation source files are also included in **gNAP.pro**. So the main functions could be compiled across platforms using Qt 5.1.0.
What's more, for better visualization, this part was written in Java language. So it should be compiled like this:
```txt
Linux:
open a terminal:
    cd gNAP-view
    sudo apt-get update
    sudo apt-get ant
and, compile source code:
    ant

Mac OS X:
open a terminal:
    cd gNAP-view
    sudo brew install ant (or get ant with source code)
and, compile source code:
    ant

Windows:
    INSTALL ant from https://ant.apache.org and DO configure JAVA_HOME
    cd path/to/gNAP-view
    ant
and than the jar file will in the folder dist
```

### Compile gFinder
This is a website software which do not need to compile. You could try our software from [here](./assets/doc/USTC-Software_2013_API_of_gNAP.pdf). All source code had been inlcuded in floder:
```bash
/Source Code/gFinder/
```

### Compile gRNA
All softwares which could compile Java are usable to compile this small game. All source code are included in floder: 
```bash
/Source Code/gRNA/
```

**For more information, please refer to our [wiki page](https://2013.igem.org/Team:USTC-Software).**

## Contacts
For any questions, feel free to contact:<br>
[@ustckun](https://github.com/ustckun)<br>
[@jinyangustc](https://github.com/jinyangustc)