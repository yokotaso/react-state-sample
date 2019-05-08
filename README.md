# react-state-sample

## プロジェクトの準備
```
npm i;
npm i -D;
```

## React/JSX/TypeScriptの復習
kintone-ui-componentのドキュメントを復習しましょう。
webpack.config.js,tsconfig.jsonはこちらで準備しておきました。

開発用のサーバーを起動します
```
npx webpack-dev-server
```

localhost:8080にアクセスしてsrcをクリック

### 課題1
1. id=appが設定されているdiv要素にdiv要素で"hello world!"を作ってみましょう
2. コンポーネントを作ってください
3. (2)で作成したコンポーネントをimport,exportを使って別ファイルにしてください
ヒント. コンポーネントのサンプル
```javascript
function SampleComponent(.....) {
    return (
        <div></div>
    )
}
...
<SampleComponent />
```

4. (3)のコンポーネントにクラス名とdivの子要素を指定できるようにしてください

### 課題2 kintone-ui-componentの復習
1. FieldGroupを表示してみましょう
2. RadioButton,Text,Buttonを配置してみましょう

## Reactの状態管理
Reactの状態管理にはunstatedをおすすめします。
Ref: https://github.com/jamiebuilds/unstated

選定理由は
1. 状態管理をシンプルに管理することができる 
2. TypeScriptでかける

### 課題4 ボタンがクリックされた回数をカウントしてみる

### 課題3 FieldGroupやDialogで遊んでみよう
1. FieldGroupの開閉の状態を管理してクリック時に開閉の状態を変更してみる
2. ボタンをクリックしたらダイアログを表示されるように実装してみる