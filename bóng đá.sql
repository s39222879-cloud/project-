create table matches (
  id int primary key auto_increment,
  home_team varchar(100) not null,
  away_team varchar(100) not null,
  home_score int default 0,
  away_score int default 0,
  match_time datetime,
  status varchar(20),
  result varchar(20)
);

/* ==== INSERT ===== */

insert into matches (
  home_team,
  away_team,
  match_time,
  status
)
values (
  'Netherlands',
  'Japan',
  '2026-06-15 03:00:00',
  'scheduled'
);

/* lấy toàn bộ trận đấu */

select * from matches;

/* cập nhật tỷ số sau trận đấu */

update matches
set home_score = 2,
    away_score = 2,
    status = 'finished',
    result = 'draw'
where id = 1;

/* xóa dữ liệu sai */

delete from matches
where id = 1;

/* lọc một trận đấu của đội*/

select *
from matches
where home_team = 'Netherlands'
   or away_team = 'Netherlands';
   
/* sắp xếp theo thời gian */

select * 
from matches
order by match_time desc;

/* giới hạn số trận hiển thị */

select *
from matches 
order by match_time desc
limit 5;

/* lấy dữ liệu ko trùng lặp */

select distinct home_team
from matches;

/* Đếm số bản ghi */

select count(*)
from matches;

/* tìm kiếm gần đúng */

select *
from matches
where home_team like '%Netherlands%';

/* in */

select *
from matches
where home_team in (
  'Sweden',
  'Japan',
  'Netherlands',
  'Tunisia'
);

/* between*/

select *
from matches
where match_time between
'2026-06-11'
AND
'2026-07-20';

/* And/or */

select *
from matches
where home_score = 2
AND away_score = 2;

/* is null */

select *
from matches
where result is null;

/* ALTER TABLE */

alter table matches
add stadium varchar(100);

/* xoá bảng*/

drop table matches;




/* xóa toàn bộ dữ liệu trong bảng vẫn giữ nguyên cấu trúc*/

truncate table matches;

/* số nguyên */

home_score INT 

/* số nguyên rất lớn */

id bigint not null auto_increment primary key

/* chuỗi có độ dài giới hạn */

home_team varchar(100)

/* Đoạn văn bản dài */

news_content text

/* chỉ lưu ngày */

match_date date

/* chỉ lưu ngày và giờ */

match_time DATETIME

/* tự động lưu thời gian tạo hoặc  cập nhật */

created_at timestamp default current_timestamp

/* Đúng & sai */

is_live BOOLEAN

/* giá trị mặc định */

home_score int default 0

/* tự tăng ID */

id int auto_increment primary key

/* tránh lỗi khi xóa */

drop table if exists matches;

/* tránh lỗi khi tạo */

create table if not exists matches (
  id int primary key auto_increment
);

/* thêm dữ liệu mới */

insert into matches (
  home_team,
  away_team,
  match_time,
  status
)
values (
  'Japan',
  'Netherlands',
  '2026-06-15 03:00:00',
  'scheduled'
);

/* thêm nhiều trận cùng lúc */

insert into matches (
  home_team,
  away_team,
  match_time,
  status
)
values
(
  'Japan',
  'Netherlands',
  '2026-06-15 03:00:00',
  'scheduled'
),
(
  'Sweden',
  'Tunisia',
  '2026-06-15 09:00:00',
  'scheduled'
);

/* lấy dữ liệu */

select *
from matches;

select
home_team,
away_team
from matches;

/* cập nhật dữ liệu*/

update matches
set home_score = 5,
    away_score = 1,
    status = 'finished',
    result = 'home_win'
where id = 1;

/* cập nhật trạng thái */

update matches
set status = 'live'
where id = 1;

/* xóa dữ liệu */

delete from matches
where id = 1;

/* xóa các trận bị hủy */

delete from matches
where status = 'cancelled';

/* lấy trận của ĐT Hà Lan */

select *
from matches
where home_team = 'Netherlands'
 or away_team = 'Netherlands';
 
/* cập nhật trận của Hà Lan */

update matches
set status = 'live'
where id = 1;

/* xóa trận của Hà Lan */

delete from matches
where id = 1;

/* Lọc dữ liệu theo điều kiện */

select *
from matches
where home_team = 'Netherlands';

/* Nhiều điều kiện cùng đúng */

select *
from matches
where home_team = 'Netherlands'
and home_score = 2;

/* chỉ cần một điều kiện đúng */

select *
from matches
where home_team = 'Netherlands'
or home_team = 'sweden';

/* in */

select *
from matches
where home_team in (
  'Japan',
  'Netherlands',
  'Tunisia',
  'sweden'
);

/* lọc theo khoảng */

select *
from matches
where match_time between
'2026-06-11'
and
'2026-07-20';

/* tìm kiếm gần đúng */

select *
from matches
where away_team like '%land';

/* kiểm tra dữ liệu chưa có giá trị */

select *
from matches
where result is not null;

/* Dùng để sắp xếp dữ liệu */

select *
from matches
order by match_time;

/* sắp xếp tăng dần */

select *
from matches
order by home_score asc;

/* sắp xếp giảm dần */

select *
from matches
order by home_score desc;

/* order by nhiều cột */

select *
from matches
order by status asc,
         match_time desc;
         
/* giới hạn số bản ghi trả về */

select *
from matches
order by match_time desc
limit 5;

/* dùng tách trang */

select *
from matches
limit 5;

/* lấy 5 trận tiếp theo */

select *
from matches
limit 5 offset 5;

/* Trang chủ */

select *
from matches
order by match_time desc
limit 10;

/* Hiển thị 10 trận gần nhất */

select *
from matches
where result is not null
order by match_time desc
limit 5;

/* Lịch thi đấu sắp tới */

select *
from matches
where status = 'scheduled'
order by match_time asc
limit 5;

/* Đếm tổng số trận đấu */

select count(*)
from matches;

/* Đếm số trận đã kết thúc */

select count(*)
from matches
where result is not null;

/* Tổng số bàn thắng ở đội nhà */

select sum(home_score)
from matches;

/* tổng số bàn thắng ở mùa giải */

select sum(home_score + away_score)
from matches;

/* số bàn trung bình mỗi trận */

select avg(home_score + away_score)
from matches;

/* Đội chủ nhà ghi nhiều bàn nhất*/

select max(home_score)
from matches;

/* Trận nhiều bàn nhất */

select max(home_score + away_score)
from matches;

select min(home_score + away_score)
from matches;

-- PRIMARY KEY
-- UNIQUE
-- NOT NULL
-- DEFAULT
-- CHECK

create table matches (
  id int primary key auto_increment,
  
home_team varchar(100) not null,

away_team varchar(100) not null,

home_score int default 0 check(home_score >= 0),

away_team int default 0 check(away_team >= 0),

status varchar(20)
  default 'scheduled'
  check (
    status in (
      'scheduled',
      'live',
      'finished'
    )
  ),
  
  match_code varchar(20)
  unique,

  match_time datetime not null
);

create table matches (
  id int auto_increment primary key,
  home_team varchar(100) not null,
  away_team varchar(100) not null
);

insert into matches (
  home_team,
  away_team
)

values
('Japan', 'Netherlands'),
('Sweden', 'Tunisia'),
('Tunisia', 'Japan'),
('Sweden', 'Netherlands'),
('Sweden', 'Japan');

/* lấy các đội không trùng */

select distinct home_team
from matches;








