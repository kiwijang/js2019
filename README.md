# js 2019/1002

1. adblock 擴充套件會阻擋 adplay.css 的載入@@
本來以為是 import 的問題，後來才發現是套件的關係:0

2.  {once: true}
- addEventListener 預設 capture: false 冒泡
https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

- once:true 會只執行一次 addEventListener 之後就 remove 掉
https://www.youtube.com/watch?v=F1anRyL37lE&list=PLu8EoSxDXHP6CGK4YVJhL_VWetA865GOH&index=25
https://developers.google.com/web/updates/2016/10/addeventlistener-once

- passive:true 預設 false
如果 true 這個 listener 的 preventDefault() 永遠不會作用

wheel, mousewheel, touchstart and touchmove 事件預設為 true
