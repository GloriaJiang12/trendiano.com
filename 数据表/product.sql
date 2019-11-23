-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2019-11-23 04:54:26
-- 服务器版本： 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `1910class`
--

-- --------------------------------------------------------

--
-- 表的结构 `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `src` text NOT NULL,
  `title` text NOT NULL,
  `carPic` text NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `sum` int(20) NOT NULL,
  `color` varchar(50) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `product`
--

INSERT INTO `product` (`id`, `src`, `title`, `carPic`, `price`, `sum`, `color`) VALUES
(1, 'list1.jpg', '休闲半高领长袖T恤男', '{"p1":"1b1.jpg","p2":"1b2.jpg","p3":"1b3.jpg","p4":"1b4.jpg","p5":"1b5.jpg","p6":"1b6.jpg","p7":"1b7.jpg"}', '499', 25, '黑色'),
(2, 'list2.jpg', '字母刺绣长袖T恤男', '{"p1":"2b1.jpg","p2":"2b2.jpg","p3":"2b3.jpg","p4":"2b4.jpg","p5":"2b5.jpg","p6":"2b6.jpg","p7":"2b7.jpg"}', '399', 10, '黄色'),
(3, 'list3.jpg', '休闲半高领长袖T恤男', '{"p1":"3b1.jpg","p2":"3b2.jpg","p3":"3b3.jpg","p4":"3b4.jpg","p5":"3b5.jpg","p6":"3b6.jpg","p7":"3b7.jpg"}', '499', 12, '白色'),
(4, 'list4.jpg', '字母刺绣长袖T恤男', '{"p1":"4b1.jpg","p2":"4b2.jpg","p3":"4b3.jpg","p4":"4b4.jpg","p5":"4b5.jpg","p6":"4b6.jpg","p7":"4b7.jpg"}', '388', 500, '米色'),
(7, 'list7.jpg', '棉质圆领印花长袖T恤男', '{"p1":"7b1.jpg","p2":"7b2.jpg","p3":"7b3.jpg","p4":"7b4.jpg","p5":"7b5.jpg","p6":"7b6.jpg","p7":"7b7.jpg"}', '531', 2000, '紫色'),
(6, 'list6.jpg', '棉质圆领印花长袖T恤男', '{"p1":"6b1.jpg","p2":"6b2.jpg","p3":"6b3.jpg","p4":"6b4.jpg","p5":"6b5.jpg","p6":"6b6.jpg","p7":"6b7.jpg"}', '326', 450, '橙色'),
(5, 'list5.jpg', '字母刺绣长袖T恤男', '{"p1":"5b1.jpg","p2":"5b2.jpg","p3":"5b3.jpg","p4":"5b4.jpg","p5":"5b5.jpg","p6":"5b6.jpg","p7":"5b7.jpg"}', '466', 660, '黑色'),
(8, 'list8.jpg', '字母链子休闲短袖男', '{"p1":"8b1.jpg","p2":"8b2.jpg","p3":"8b3.jpg","p4":"8b4.jpg","p5":"8b5.jpg","p6":"8b6.jpg","p7":"8b7.jpg"}', '389', 300, '白色'),
(13, 'list13.jpg', '格子拼接纯棉T恤男', '{"p1":"13b1.jpg","p2":"13b2.jpg","p3":"13b3.jpg","p4":"13b4.jpg","p5":"13b5.jpg","p6":"13b6.jpg","p7":"13b7.jpg"}', '444', 2300, '黑色'),
(9, 'list9.jpg', '棉质中长款式T恤男', '{"p1":"9b1.jpg","p2":"9b2.jpg","p3":"9b3.jpg","p4":"9b4.jpg","p5":"9b5.jpg","p6":"9b6.jpg","p7":"9b7.jpg"}', '689', 1200, '土黄色'),
(10, 'list10.jpg', '印花宽松纯棉短袖T恤男', '{"p1":"10b1.jpg","p2":"10b2.jpg","p3":"10b3.jpg","p4":"10b4.jpg","p5":"10b5.jpg","p6":"10b6.jpg","p7":"10b7.jpg"}', '480', 1000, '白色'),
(11, 'list11.jpg', '印花宽松纯棉短袖T恤男', '{"p1":"11b1.jpg","p2":"11b2.jpg","p3":"11b3.jpg","p4":"11b4.jpg","p5":"11b5.jpg","p6":"11b6.jpg","p7":"11b7.jpg"}', '450', 1100, '黑色'),
(12, 'list12.jpg', '字母链子休闲短袖男', '{"p1":"12b1.jpg","p2":"12b2.jpg","p3":"12b3.jpg","p4":"12b4.jpg","p5":"12b5.jpg","p6":"12b6.jpg","p7":"12b7.jpg"}', '355', 1200, '淡紫色'),
(14, 'list14.jpg', '假两件纯棉长袖T恤男', '{"p1":"14b1.jpg","p2":"14b2.jpg","p3":"14b3.jpg","p4":"14b4.jpg","p5":"14b5.jpg","p6":"14b6.jpg","p7":"14b7.jpg"}', '588', 1400, '黑色'),
(15, 'list15.jpg', '棉质中长款式T恤男', '{"p1":"15b1.jpg","p2":"15b2.jpg","p3":"15b3.jpg","p4":"15b4.jpg","p5":"15b5.jpg","p6":"15b6.jpg","p7":"15b7.jpg"}', '666', 1500, '白色'),
(16, 'list.jpg', '假装商品标题', '{}', '888', 16, NULL),
(17, 'list.jpg', '假装商品标题', '{}', '888', 17, NULL),
(18, 'list.jpg', '假装商品标题', '{}', '888', 18, NULL),
(19, 'list.jpg', '假装商品标题', '{}', '888', 19, NULL),
(20, 'list.jpg', '假装商品标题', '{}', '888', 20, NULL),
(21, 'list.jpg', '假装商品标题', '{}', '888', 21, NULL),
(22, 'list.jpg', '假装商品标题', '{}', '888', 22, NULL),
(23, 'list.jpg', '假装商品标题', '{}', '888', 23, NULL),
(24, 'list.jpg', '假装商品标题', '{}', '888', 24, NULL),
(25, 'list.jpg', '假装商品标题', '{}', '888', 25, NULL),
(26, 'list.jpg', '假装商品标题', '{}', '888', 26, NULL),
(27, 'list.jpg', '假装商品标题', '{}', '888', 27, NULL),
(28, 'list.jpg', '假装商品标题', '{}', '888', 28, NULL),
(29, 'list.jpg', '假装商品标题', '{}', '888', 29, NULL),
(30, 'list.jpg', '假装商品标题', '{}', '888', 30, NULL),
(31, 'list.jpg', '假装商品标题', '{}', '888', 31, NULL),
(32, 'list.jpg', '假装商品标题', '{}', '888', 32, NULL),
(33, 'list.jpg', '假装商品标题', '{}', '888', 33, NULL),
(34, 'list.jpg', '假装商品标题', '{}', '888', 34, NULL),
(35, 'list.jpg', '假装商品标题', '{}', '888', 35, NULL),
(36, 'list.jpg', '假装商品标题', '{}', '888', 36, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
