1. Chạy docker để tạo MongoDB
-> docker compose -p mongodb up -d
2. Sử dụng MongoDB Compass để xem database
-> Tạo connection trên Compass theo URI này:
  mongodb://root:123456@localhost:27017/fullstack-nextjs-nestjs?authSource=admin
3. CRUD command tạo tự động resources (schema, controller, service,...):
-> nest g resources users --no-spec
  --no-spec: không tạo file spec viết test
-> Tạo xong thì import module vừa tạo vào app.module
