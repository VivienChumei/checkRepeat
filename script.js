 window.onload=function () {
        var ObjectFunc = {
            init:function(){
                var arrA=document.getElementById('txt').value.split('');//A总文字可能有重复
                var arrB=document.getElementById('txt2').value.split('');//B总文字可能有重复
                return ({'arrA':arrA,'arrB':arrB});
            },
            reArr: function (arr) { //数组去重复元素
                for (var i = 0, j; i < arr.length; i++) {
                    for (j = i + 1; j < arr.length; j++) {
                        if (arr[i] == arr[j]) {
                            arr.splice(j, 1);//删除重复字
                            //console.log("i="+i,"j="+j);
                            j--;
                            //console.log("arr="+arr)
                        }
                    }
                }
                return arr;
            },
            delDot: function (arr) {//去逗号
                var arrStr = arr.toString().replace(/,/g, '');//去逗号
                console.log(arrStr);
                console.log("arr=" + arr);
                return arrStr;

            },
            noRepeatBoth:function(arrA,arrB){//两数组去重
                for(var i=0;i<arrA.length;i++){
                    for(var j=0;j<arrB.length;j++){
                        if(arrA[i]==arrB[j]){
                            arrA.splice(i,1);//删除重复字
                            arrB.splice(j,1);//删除重复字
                            i--;
                            j--;
                            continue;
                        }
                    }
                }
                return ({'arrA':arrA,'arrB':arrB});
            },
            submit: function () {
                var initData=this.init();
                document.getElementById('resultBox').innerText = this.delDot(this.reArr(initData.arrA));//结果 去重复
            },
            addTxt: function () {//原有多余的部分增加 B区较A区多余文字
                var initData=this.init();
                var reArrA = this.reArr(initData.arrA);
                var reArrB = this.reArr(initData.arrB);
                var jsonData=this.noRepeatBoth(reArrA,reArrB);
                document.getElementById('resultBox').innerText = this.delDot(jsonData.arrB);//结果 去逗号
            },
            delExcess: function () {//原有多余的部分删除 A区较B区多余文字
                var initData=this.init();
                var reArrA = this.reArr(initData.arrA);
                var reArrB = this.reArr(initData.arrB);
                var jsonData=this.noRepeatBoth(reArrA,reArrB);
                document.getElementById('resultBox').innerText = this.delDot(jsonData.arrA);//结果 去逗号
            }
        }
        document.getElementById('btn1').onclick=function(){
            ObjectFunc.submit()
        }
        document.getElementById('btn2').onclick=function(){
            ObjectFunc.addTxt()
        }
        document.getElementById('btn3').onclick=function(){
            ObjectFunc.delExcess()
        }
    }
