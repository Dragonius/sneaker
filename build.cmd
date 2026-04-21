@echo off
set GOROOT=D:\Ohjelmointi\go
set GOPATH=D:\Ohjelmointi\gopath
set GOVERSIONINFO=D:\Ohjelmointi\gopath\bin\windows_386
set 2PATH=%PATH%
set PATH=%PATH%;%GOROOT%\bin;%GOVERSIONINFO%;D:\Ohjelmointi\node-v20;D:\Ohjelmointi\node-v20\node_modules\corepack\shims
set GOARCH=386

echo Cleaning up...
del sneaker.exe 2>NUL
del cmd\sneaker-server\resource.syso 2>NUL
del /F dist\*.ico 2>NUL
del /F dist\*.mp3 2>NUL
del /F dist\*.LICENSE.txt 2>NUL
del /F dist\*.js 2>NUL
del /F dist\*.html 2>NUL
del /F dist\*.css 2>NUL
go install github.com/josephspurrier/goversioninfo/cmd/goversioninfo@v1.4.0
call yarn
call yarn build
echo Building sneaker.exe ...
cd cmd\sneaker-server
go generate
go build -o ..\..\sneaker.exe
cd ..\..
echo Done.
set PATH=%2PATH%
