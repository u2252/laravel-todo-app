# Laravel Todo App

git clone 後に以下を実行

```bash
docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v $(pwd):/var/www/html \
    -w /var/www/html \
    laravelsail/php82-composer:latest \
    composer install --ignore-platform-reqs
```

env ファイル作成

```bash
cp .env.example .env
```

sail 起動

```bash
sail up -d
```

キー作成

```bash
sail php artisan key:generate
```

マイグレーションと Seeder 実行

```bash
sail php artisan migrate:fresh --seed
```

storage シンボリックリンク作成

```bash
sail php artisan storage:link
```

npm コマンドで JS パッケージをインストール

```bash
sail npm install
```

vite でコンパイル

```bash
# 開発サーバー
sail npm run dev

# プロダクション用ビルド
sail npm run build
```
