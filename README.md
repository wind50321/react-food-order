# A food order app made with React and Redux.

## 摘要

- 能讓使用者透過網頁點餐的應用程式。
- 上線網站 [連結](https://food-order-166fc.web.app/)

## 執行流程

1. 從後端伺服器讀取餐點資料，顯示在網頁上。
2. 使用者挑選喜歡的餐點，設定份數，加入購物車。
3. 使用者可打開購物車界面，查看目前的點餐項目和總金額。
4. 購物車界面中，可以調整各餐點份數(上限為 5 份)，金額將自動更新。
5. 使用者確認點餐項目後，填寫個人資料表單，送出訂單。
6. 應用程式檢查資料填寫正確後，將訂單資料送到後端伺服器。

## 使用技術

- 使用 React 設計網頁界面。
- 使用 Redux 管理購物車內容，和使用者界面(購物車開關狀態)。
- 後端資料庫使用 Google Firebase Realtime Database。
- 後端資料庫餐點內容結構 [連結](https://raw.githubusercontent.com/wind50321/react-food-order/main/demo/db-meals.png)
- 後端資料庫客戶訂單結構 [連結](https://raw.githubusercontent.com/wind50321/react-food-order/main/demo/db-orders.png)

## 響應式設計

針對行動裝置調整畫面。

- 點餐畫面 [連結](https://raw.githubusercontent.com/wind50321/react-food-order/main/demo/rwd-main.png)
- 購物車畫面 1 [連結](https://raw.githubusercontent.com/wind50321/react-food-order/main/demo/rwd-cart-1.png)
- 購物車畫面 2 [連結](https://raw.githubusercontent.com/wind50321/react-food-order/main/demo/rwd-cart-2.png)

## 關於作者

- 陳昱帆 (Jason Chen)
- 聯絡我: wind50321@gmail.com
