/**
 * Created by weng on 2018/2/10.
 */

var express = require('express');
var app = express();

var server = require('http').createServer(app);
var path = require("path");


var WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({ port: 8181 });

    var arr=[];
    //用于存放用户数组。



    //建立socket连接后的回调函数、
    wss.on('connection', function (ws) {
        console.log('client connected');

        // ws.send(JSON.stringify({type: 1}))
        if(arr.length==1){
            arr[1]=ws;
        }else{
            arr[0]=ws;
        }


        var index = arr.indexOf(ws);

        //接收到客户端的数据
        ws.on('message', function (message) {
            var msg = JSON.parse(message);
            console.log('received (' + index + '): ', msg);
            var other=1-index;
            if(arr[other]){
                arr[other].send(message,function (error) {
                    if (error) {
                        console.log('Send message error (' + other + '): ', error);
                    }
                })

            }else{
                arr[index].send(JSON.stringify({type: 2}),function (error) {
                    if (error) {
                        console.log('Send message error (' + other + '): ', error);
                    }
                })
            }




        });



        ws.on('close', function(close) {
            try{

            }catch(e){
                console.log('刷新页面了');
                arr=[];
            }
        });

        ws.on('error', function(error) {
            try{

            }catch(e){
                console.log(error);
                arr=[];
            }
        });
        //
        // ws.on('disconnect',function (e) {
        //     try{
        //
        //     }catch(e){
        //         console.log(e);
        //     }
        // })
    });