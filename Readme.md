
 To Install type script

 npm install -g typescript@<version number>

 To Compile TypeScript

 tsc <filepath_name>

 To watch and compile further changes

 tsc -w <filepath_name>


 To  install and  use lite-server 

  npm install -g lite-server

 To run the app just type  lite-server in command prompt 

debugging TypeScript

Debuggin in VisualStudio can be enabled with source map files in web essentials

Tools -> options -> WebEssentials -> TypeScript and set GenerateSourceMap option to true


 Visual Studio 2013/17 on my machine already had old version of typescript and it is causing
the compiler from Visual Studio code terminal to pick old version of typescript,to fix it follow below.

If you only need the last version of TypeScript, on both Visual Studios and Visual Studio Code, then you can

delete all previous installations which are located in: 
C:\Program Files (x86)\Microsoft SDKs\TypeScript.
reinstall the latest TypeScript version../app.ts