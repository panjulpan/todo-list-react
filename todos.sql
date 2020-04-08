-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 09, 2020 at 12:55 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `todos`
--

-- --------------------------------------------------------

--
-- Table structure for table `activity`
--

CREATE TABLE `activity` (
  `id` int(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `user_id` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `activity`
--

INSERT INTO `activity` (`id`, `title`, `user_id`) VALUES
(1, 'Belajar HTML', 6),
(2, 'Belajar React', 6),
(3, 'Belajar Node', 0);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `full_name` varchar(100) NOT NULL,
  `no_tlp` bigint(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role_user` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `full_name`, `no_tlp`, `email`, `password`, `role_user`) VALUES
(1, 'Deassy', 9876543, 'desi@gmail.com', '$2b$10$OaVQ9Xkkj3UW4UqKofQSJ.QlzNi5.wmxhDVWwZuh23EEVRCaJsuoC', 'user'),
(2, 'Dea', 9876543, 'dea@gmail.com', '$2b$10$MW7WF7U2xFtxreL4ONTRQOZwN9tF.r3.u/2bhWKciL9wVGTPPEvpS', 'user'),
(3, 'hmmm', 81212353112, 'k@gmail.com', '$2b$10$5IJhXtm/JftMp.LitUOtUO0cstoScioMQZAbadmLsM8S4oq2h7MLa', 'user'),
(4, 'wkwkwk', 8975467672, 'w@gmail.com', '$2b$10$6cdLGunHztk1gktW1555MeMyCaX2bluxDK92wXF1F2FUVFZrueMA.', 'user'),
(5, 'fadli', 124952841, 'fadli@gmail.com', '$2b$10$mjMz5mfMA424RpIh5U4mF.ztNFaQz2D0o3JwzVHzNDPetQZfODXfa', 'user'),
(6, 'hadi', 678823591, 'hadi@gmail.com', '$2b$10$/cGjqOk1Dy3r6RSxG3NI.eO9Hg7dfiJxpnZg0gqa3wU5TXfgo.7Fe', 'user');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `activity`
--
ALTER TABLE `activity`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `activity`
--
ALTER TABLE `activity`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
